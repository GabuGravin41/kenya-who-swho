import {
  County,
  Constituency,
  Ward,
  PoliticalParty,
  Politician,
  PoliticianScorecard,
  BureaucracyNode,
  BudgetAllocation,
  PowerBroker,
  CrowdIntelligenceLog,
  CivicStatsSummary
} from '@kenya-elections/shared-types';

import {
  ALL_47_COUNTIES,
  SAMPLE_CONSTITUENCIES,
  SAMPLE_WARDS,
  POLITICAL_PARTIES,
  POLITICIANS,
  POLITICIAN_SCORECARDS,
  BUREAUCRACY_NODES,
  BUDGET_ALLOCATIONS,
  POWER_BROKERS,
  CROWD_INTELLIGENCE_LOGS
} from '@kenya-elections/database';

const API_BASE = '/api';

async function fetchWithFallback<T>(url: string, fallbackData: T): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`API call failed for ${url}, using offline cache/fallback store`, err);
    return fallbackData;
  }
}

export const api = {
  getStats: async (): Promise<CivicStatsSummary> => {
    const fallback: CivicStatsSummary = {
      totalCounties: ALL_47_COUNTIES.length,
      totalConstituencies: 290,
      totalWards: 1450,
      totalMonitoredPoliticians: POLITICIANS.length,
      totalIncumbents: POLITICIANS.filter((p: Politician) => p.isIncumbent).length,
      totalAspirants: POLITICIANS.filter((p: Politician) => !p.isIncumbent || !!p.vyingForPosition).length,
      silentPoliticiansCount: POLITICIAN_SCORECARDS.filter((s: PoliticianScorecard) => s.zeroActivityFlag).length,
      totalNgCdfAllocationsKes: SAMPLE_CONSTITUENCIES.reduce((sum: number, c: Constituency) => sum + (c.ngCdfAllocationKes || 0), 0),
      totalCrowdReportsVerified: CROWD_INTELLIGENCE_LOGS.filter((l: CrowdIntelligenceLog) => l.verifiedStatus.includes('Verified')).length,
    };
    return fetchWithFallback<CivicStatsSummary>(`${API_BASE}/stats`, fallback);
  },

  getCounties: async (): Promise<County[]> => {
    return fetchWithFallback<County[]>(`${API_BASE}/counties`, ALL_47_COUNTIES);
  },

  getConstituencies: async (countyId?: string): Promise<Constituency[]> => {
    const query = countyId ? `?countyId=${encodeURIComponent(countyId)}` : '';
    const fallback = countyId 
      ? SAMPLE_CONSTITUENCIES.filter((c: Constituency) => c.countyId === countyId)
      : SAMPLE_CONSTITUENCIES;
    return fetchWithFallback<Constituency[]>(`${API_BASE}/constituencies${query}`, fallback);
  },

  getWards: async (constituencyId?: string): Promise<Ward[]> => {
    const query = constituencyId ? `?constituencyId=${encodeURIComponent(constituencyId)}` : '';
    const fallback = constituencyId 
      ? SAMPLE_WARDS.filter((w: Ward) => w.constituencyId === constituencyId)
      : SAMPLE_WARDS;
    return fetchWithFallback<Ward[]>(`${API_BASE}/wards${query}`, fallback);
  },

  getParties: async (): Promise<PoliticalParty[]> => {
    return fetchWithFallback<PoliticalParty[]>(`${API_BASE}/parties`, POLITICAL_PARTIES);
  },

  getPoliticians: async (filters?: {
    countyId?: string;
    constituencyId?: string;
    partyId?: string;
    position?: string;
    isIncumbent?: boolean;
    search?: string;
    activityTier?: string;
  }): Promise<Array<Politician & { scorecard?: PoliticianScorecard; party?: PoliticalParty }>> => {
    const params = new URLSearchParams();
    if (filters?.countyId) params.append('countyId', filters.countyId);
    if (filters?.constituencyId) params.append('constituencyId', filters.constituencyId);
    if (filters?.partyId) params.append('partyId', filters.partyId);
    if (filters?.position) params.append('position', filters.position);
    if (filters?.isIncumbent !== undefined) params.append('isIncumbent', String(filters.isIncumbent));
    if (filters?.search) params.append('search', filters.search);
    if (filters?.activityTier) params.append('activityTier', filters.activityTier);

    const query = params.toString() ? `?${params.toString()}` : '';

    const fallback = POLITICIANS.map((p: Politician) => ({
      ...p,
      scorecard: POLITICIAN_SCORECARDS.find((s: PoliticianScorecard) => s.politicianId === p.id),
      party: POLITICAL_PARTIES.find((part: PoliticalParty) => part.id === p.partyId),
    }));

    return fetchWithFallback(`${API_BASE}/politicians${query}`, fallback);
  },

  getBureaucracy: async (branch?: string): Promise<BureaucracyNode[]> => {
    const query = branch ? `?branch=${encodeURIComponent(branch)}` : '';
    const fallback = branch 
      ? BUREAUCRACY_NODES.filter((b: BureaucracyNode) => b.branch.toLowerCase() === branch.toLowerCase())
      : BUREAUCRACY_NODES;
    return fetchWithFallback<BureaucracyNode[]>(`${API_BASE}/bureaucracy${query}`, fallback);
  },

  getPowerBrokers: async (): Promise<PowerBroker[]> => {
    return fetchWithFallback<PowerBroker[]>(`${API_BASE}/power-brokers`, POWER_BROKERS);
  },

  getBudgets: async (entityId?: string): Promise<BudgetAllocation[]> => {
    const query = entityId ? `?entityId=${encodeURIComponent(entityId)}` : '';
    const fallback = entityId 
      ? BUDGET_ALLOCATIONS.filter((b: BudgetAllocation) => b.entityId === entityId)
      : BUDGET_ALLOCATIONS;
    return fetchWithFallback<BudgetAllocation[]>(`${API_BASE}/budgets${query}`, fallback);
  },

  getCrowdLogs: async (): Promise<CrowdIntelligenceLog[]> => {
    return fetchWithFallback<CrowdIntelligenceLog[]>(`${API_BASE}/crowd-logs`, CROWD_INTELLIGENCE_LOGS);
  },

  addCrowdLog: async (log: Omit<CrowdIntelligenceLog, 'id' | 'createdAt' | 'upvotes' | 'downvotes' | 'verifiedStatus'>): Promise<CrowdIntelligenceLog> => {
    try {
      const res = await fetch(`${API_BASE}/crowd-logs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(log)
      });
      if (!res.ok) throw new Error('Failed to create report');
      return await res.json();
    } catch {
      const localLog: CrowdIntelligenceLog = {
        ...log,
        id: `local-${Date.now()}`,
        createdAt: new Date().toISOString(),
        upvotes: 1,
        downvotes: 0,
        verifiedStatus: 'Pending Verification'
      };
      return localLog;
    }
  },

  voteCrowdLog: async (id: string, type: 'up' | 'down') => {
    try {
      const res = await fetch(`${API_BASE}/crowd-logs/${id}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type })
      });
      return await res.json();
    } catch {
      return { success: true, localVoted: true };
    }
  }
};

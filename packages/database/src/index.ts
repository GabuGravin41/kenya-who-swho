import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema.js';
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
  CROWD_INTELLIGENCE_LOGS,
  ALL_47_COUNTY_LEADERSHIP,
  CountyLeadershipRecord,
  ALL_ELITE_HANGOUTS,
  ALL_DIVISION_BILLS,
  NOTABLE_ROLL_CALL_VOTES,
  ALL_BATTLEGROUND_RACES
} from './seedData.js';
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
  CivicStatsSummary,
  EliteHangoutVenue,
  DivisionBill,
  PoliticianRollCallRecord,
  ConstituencyRaceOverview
} from '@kenya-elections/shared-types';

export * from './schema.js';
export * from './seedData.js';

export function getDbConnection() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return null;
  }
  const sql = neon(databaseUrl);
  return drizzle(sql, { schema });
}

// In-Memory Intelligence Store (High Performance & Always Ready for Offline/Local/Dev)
class InMemoryStore {
  private counties: County[] = [...ALL_47_COUNTIES];
  private constituencies: Constituency[] = [...SAMPLE_CONSTITUENCIES];
  private wards: Ward[] = [...SAMPLE_WARDS];
  private parties: PoliticalParty[] = [...POLITICAL_PARTIES];
  private politicians: Politician[] = [...POLITICIANS];
  private scorecards: PoliticianScorecard[] = [...POLITICIAN_SCORECARDS];
  private bureaucracy: BureaucracyNode[] = [...BUREAUCRACY_NODES];
  private budgets: BudgetAllocation[] = [...BUDGET_ALLOCATIONS];
  private brokers: PowerBroker[] = [...POWER_BROKERS];
  private crowdLogs: CrowdIntelligenceLog[] = [...CROWD_INTELLIGENCE_LOGS];
  private countyLeadership: CountyLeadershipRecord[] = [...ALL_47_COUNTY_LEADERSHIP];
  private hangouts: EliteHangoutVenue[] = [...ALL_ELITE_HANGOUTS];
  private divisionBills: DivisionBill[] = [...ALL_DIVISION_BILLS];
  private rollCallVotes: PoliticianRollCallRecord[] = [...NOTABLE_ROLL_CALL_VOTES];
  private battlegroundRaces: ConstituencyRaceOverview[] = [...ALL_BATTLEGROUND_RACES];

  getDivisionBills() { return this.divisionBills; }
  getDivisionBillByCode(shortCode: string) {
    return this.divisionBills.find(b => b.shortCode.toLowerCase() === shortCode.toLowerCase() || b.id === shortCode);
  }

  getRollCallVotes(filters?: { billShortCode?: string; politicianId?: string; vote?: string }) {
    let list = this.rollCallVotes;
    if (!filters) return list;
    if (filters.billShortCode) list = list.filter(r => r.billShortCode.toLowerCase() === filters.billShortCode!.toLowerCase());
    if (filters.politicianId) list = list.filter(r => r.politicianId === filters.politicianId);
    if (filters.vote) list = list.filter(r => r.vote.toLowerCase() === filters.vote!.toLowerCase());
    return list;
  }

  getBattlegroundRaces(tier?: string) {
    if (tier && tier !== 'ALL') {
      return this.battlegroundRaces.filter(r => r.vulnerabilityTier.toLowerCase() === tier.toLowerCase());
    }
    return this.battlegroundRaces;
  }

  getBattlegroundRaceById(idOrConstituencyId: string) {
    return this.battlegroundRaces.find(r => r.id === idOrConstituencyId || r.constituencyId === idOrConstituencyId || r.constituencyName.toLowerCase() === idOrConstituencyId.toLowerCase());
  }

  getCounties() { return this.counties; }

  getCountyById(id: string) { return this.counties.find(c => c.id === id || c.name.toLowerCase() === id.toLowerCase()); }

  getCountyLeadership(countyId?: string) {
    if (countyId) {
      return this.countyLeadership.find(cl => cl.countyId === countyId || cl.countyName.toLowerCase() === countyId.toLowerCase());
    }
    return this.countyLeadership;
  }

  getConstituencies(countyId?: string) {
    if (countyId) {
      return this.constituencies.filter(c => c.countyId === countyId);
    }
    return this.constituencies;
  }
  getConstituencyById(id: string) { return this.constituencies.find(c => c.id === id || c.name.toLowerCase() === id.toLowerCase()); }

  getWards(constituencyId?: string) {
    if (constituencyId) {
      return this.wards.filter(w => w.constituencyId === constituencyId);
    }
    return this.wards;
  }

  getParties() { return this.parties; }
  getPartyById(id: string) { return this.parties.find(p => p.id === id || p.code.toLowerCase() === id.toLowerCase()); }

  getPoliticians(filters?: {
    countyId?: string;
    constituencyId?: string;
    partyId?: string;
    position?: string;
    isIncumbent?: boolean;
    vyingTarget?: string;
    search?: string;
  }) {
    let list = this.politicians;
    if (!filters) return list;

    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.aliases.some(a => a.toLowerCase().includes(q)) ||
        p.originStory.toLowerCase().includes(q)
      );
    }

    if (filters.countyId) {
      list = list.filter(p => p.representedCountyId === filters.countyId || p.originCountyId === filters.countyId || p.vyingCountyId === filters.countyId);
    }

    if (filters.constituencyId) {
      list = list.filter(p => p.representedConstituencyId === filters.constituencyId || p.originConstituencyId === filters.constituencyId || p.vyingConstituencyId === filters.constituencyId);
    }

    if (filters.partyId) {
      list = list.filter(p => p.partyId === filters.partyId);
    }

    if (filters.position) {
      list = list.filter(p => p.currentPosition === filters.position || p.vyingForPosition === filters.position);
    }

    if (typeof filters.isIncumbent === 'boolean') {
      list = list.filter(p => p.isIncumbent === filters.isIncumbent);
    }

    return list;
  }

  getPoliticianById(id: string) {
    const politician = this.politicians.find(p => p.id === id);
    if (!politician) return null;
    const scorecard = this.scorecards.find(s => s.politicianId === id);
    const party = this.parties.find(p => p.id === politician.partyId);
    const crowdLogs = this.crowdLogs.filter(l => l.politicianId === id);
    return {
      ...politician,
      scorecard,
      party,
      crowdLogs,
    };
  }

  getScorecards() { return this.scorecards; }
  getScorecardByPoliticianId(politicianId: string) { return this.scorecards.find(s => s.politicianId === politicianId); }

  getBureaucracy(branch?: string) {
    if (branch) {
      return this.bureaucracy.filter(b => b.branch.toLowerCase() === branch.toLowerCase());
    }
    return this.bureaucracy;
  }

  getBudgets(entityId?: string) {
    if (entityId) {
      return this.budgets.filter(b => b.entityId === entityId);
    }
    return this.budgets;
  }

  getPowerBrokers() { return this.brokers; }

  getEliteHangouts(category?: string) {
    if (category && category !== 'All') {
      return this.hangouts.filter(h => h.category.toLowerCase().includes(category.toLowerCase()));
    }
    return this.hangouts;
  }

  getEliteHangoutById(id: string) {
    return this.hangouts.find(h => h.id === id);
  }

  getCrowdLogs(filters?: { politicianId?: string; constituencyId?: string; category?: string }) {
    let list = this.crowdLogs;
    if (!filters) return list;
    if (filters.politicianId) list = list.filter(l => l.politicianId === filters.politicianId);
    if (filters.constituencyId) list = list.filter(l => l.constituencyId === filters.constituencyId);
    if (filters.category) list = list.filter(l => l.category === filters.category);
    return list;
  }

  addCrowdLog(entry: Omit<CrowdIntelligenceLog, 'id' | 'createdAt' | 'upvotes' | 'downvotes' | 'verifiedStatus'>): CrowdIntelligenceLog {
    const newLog: CrowdIntelligenceLog = {
      ...entry,
      id: `cl-${Date.now()}`,
      createdAt: new Date().toISOString(),
      upvotes: 1,
      downvotes: 0,
      verifiedStatus: 'Pending Verification'
    };
    this.crowdLogs.unshift(newLog);
    return newLog;
  }

  voteCrowdLog(id: string, type: 'up' | 'down') {
    const log = this.crowdLogs.find(l => l.id === id);
    if (log) {
      if (type === 'up') log.upvotes += 1;
      else log.downvotes += 1;
    }
    return log;
  }

  getCivicStats(): CivicStatsSummary {
    const silent = this.scorecards.filter(s => s.zeroActivityFlag || s.activityTier === 'Ghost/Silent').length;
    const totalNgCdf = this.constituencies.reduce((sum, c) => sum + (c.ngCdfAllocationKes || 0), 0);
    const verifiedReports = this.crowdLogs.filter(l => l.verifiedStatus.includes('Verified')).length;

    return {
      totalCounties: this.counties.length,
      totalConstituencies: 290,
      totalWards: 1450,
      totalMonitoredPoliticians: this.politicians.length,
      totalIncumbents: this.politicians.filter(p => p.isIncumbent).length,
      totalAspirants: this.politicians.filter(p => !p.isIncumbent || !!p.vyingForPosition).length,
      silentPoliticiansCount: silent,
      totalNgCdfAllocationsKes: totalNgCdf,
      totalCrowdReportsVerified: verifiedReports,
    };
  }
}

export const inMemoryStore = new InMemoryStore();

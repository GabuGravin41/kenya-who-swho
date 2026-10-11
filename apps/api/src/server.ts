import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { inMemoryStore } from '@kenya-elections/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// 1. Health check & stats summary
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Kenya Elections Intelligence API', timestamp: new Date().toISOString() });
});

app.get('/api/stats', (req, res) => {
  res.json(inMemoryStore.getCivicStats());
});

// 2. Counties
app.get('/api/counties', (req, res) => {
  res.json(inMemoryStore.getCounties());
});

app.get('/api/counties/:id', (req, res) => {
  const county = inMemoryStore.getCountyById(req.params.id);
  if (!county) return res.status(404).json({ error: 'County not found' });
  
  const constituencies = inMemoryStore.getConstituencies(county.id);
  const politicians = inMemoryStore.getPoliticians({ countyId: county.id });
  const leadership = inMemoryStore.getCountyLeadership(county.id);
  const budgets = inMemoryStore.getBudgets(county.id);

  res.json({
    ...county,
    leadership,
    constituencies,
    politicians,
    budgets
  });
});

// 2.5 County Leadership (Governors, Senators, Women Reps for all 47 Counties)
app.get('/api/county-leadership', (req, res) => {
  const { countyId } = req.query;
  res.json(inMemoryStore.getCountyLeadership(countyId as string | undefined));
});

app.get('/api/county-leadership/:countyId', (req, res) => {
  const cl = inMemoryStore.getCountyLeadership(req.params.countyId);
  if (!cl) return res.status(404).json({ error: 'County leadership record not found' });
  res.json(cl);
});

// 3. Constituencies
app.get('/api/constituencies', (req, res) => {
  const { countyId } = req.query;
  res.json(inMemoryStore.getConstituencies(countyId as string | undefined));
});

app.get('/api/constituencies/:id', (req, res) => {
  const c = inMemoryStore.getConstituencyById(req.params.id);
  if (!c) return res.status(404).json({ error: 'Constituency not found' });

  const wards = inMemoryStore.getWards(c.id);
  const politicians = inMemoryStore.getPoliticians({ constituencyId: c.id });
  const budgets = inMemoryStore.getBudgets(c.id);
  const crowdLogs = inMemoryStore.getCrowdLogs({ constituencyId: c.id });

  res.json({
    ...c,
    wards,
    politicians,
    budgets,
    crowdLogs
  });
});

// 4. Wards
app.get('/api/wards', (req, res) => {
  const { constituencyId } = req.query;
  res.json(inMemoryStore.getWards(constituencyId as string | undefined));
});

// 5. Parties
app.get('/api/parties', (req, res) => {
  res.json(inMemoryStore.getParties());
});

// 6. Politicians & Scorecards
app.get('/api/politicians', (req, res) => {
  const { countyId, constituencyId, partyId, position, isIncumbent, search, activityTier } = req.query;
  
  let list = inMemoryStore.getPoliticians({
    countyId: countyId as string | undefined,
    constituencyId: constituencyId as string | undefined,
    partyId: partyId as string | undefined,
    position: position as string | undefined,
    isIncumbent: isIncumbent !== undefined ? isIncumbent === 'true' : undefined,
    search: search as string | undefined,
  });

  // Attach quick scorecards
  const withScores = list.map(p => {
    const scorecard = inMemoryStore.getScorecardByPoliticianId(p.id);
    const party = inMemoryStore.getPartyById(p.partyId);
    return {
      ...p,
      scorecard,
      party
    };
  });

  if (activityTier) {
    const filtered = withScores.filter(p => p.scorecard?.activityTier.toLowerCase() === (activityTier as string).toLowerCase());
    return res.json(filtered);
  }

  res.json(withScores);
});

app.get('/api/politicians/:id', (req, res) => {
  const p = inMemoryStore.getPoliticianById(req.params.id);
  if (!p) return res.status(404).json({ error: 'Politician not found' });
  res.json(p);
});

// 7. Bureaucracy & Appointments
app.get('/api/bureaucracy', (req, res) => {
  const { branch } = req.query;
  res.json(inMemoryStore.getBureaucracy(branch as string | undefined));
});

// 8. Financial Power Brokers & Dynasties
app.get('/api/power-brokers', (req, res) => {
  res.json(inMemoryStore.getPowerBrokers());
});

// 8.5 Elite Hangouts & Access Architecture (Churches, Golf Clubs, Private Lounges)
app.get('/api/elite-hangouts', (req, res) => {
  const { category } = req.query;
  res.json(inMemoryStore.getEliteHangouts(category as string | undefined));
});

app.get('/api/elite-hangouts/:id', (req, res) => {
  const h = inMemoryStore.getEliteHangoutById(req.params.id);
  if (!h) return res.status(404).json({ error: 'Hangout venue not found' });
  res.json(h);
});

// 9. Budgets
app.get('/api/budgets', (req, res) => {
  const { entityId } = req.query;
  res.json(inMemoryStore.getBudgets(entityId as string | undefined));
});

// 10. Crowd Intelligence Logs
app.get('/api/crowd-logs', (req, res) => {
  const { politicianId, constituencyId, category } = req.query;
  res.json(inMemoryStore.getCrowdLogs({
    politicianId: politicianId as string | undefined,
    constituencyId: constituencyId as string | undefined,
    category: category as string | undefined,
  }));
});

app.post('/api/crowd-logs', (req, res) => {
  const { politicianId, constituencyId, countyId, category, title, description, authorAlias, location, evidenceLinks } = req.body;
  
  if (!title || !description || !authorAlias || !category) {
    return res.status(400).json({ error: 'Title, description, category, and author alias are required' });
  }

  const created = inMemoryStore.addCrowdLog({
    politicianId,
    constituencyId,
    countyId,
    category,
    title,
    description,
    authorAlias,
    location: location || 'Field Report',
    evidenceLinks: evidenceLinks || [],
  });

  res.status(201).json(created);
});

app.post('/api/crowd-logs/:id/vote', (req, res) => {
  const { type } = req.body;
  if (type !== 'up' && type !== 'down') {
    return res.status(400).json({ error: "Vote type must be 'up' or 'down'" });
  }
  const updated = inMemoryStore.voteCrowdLog(req.params.id, type);
  if (!updated) return res.status(404).json({ error: 'Log entry not found' });
  res.json(updated);
});

// ========================================================
// 11. COMMERCIAL MONETIZATION & CAMPAIGN PACK API ENDPOINTS
// ========================================================

const API_PLANS = [
  {
    planId: 'free-civic',
    name: 'Free Civic Tier',
    priceKes: 0,
    billingPeriod: 'Free Forever',
    rateLimitPerMinute: 60,
    features: [
      'Basic candidate directory & bio lookup',
      'Constituency voter counts & general budget figures',
      'Public crowd intelligence reporting',
      'Standard community support'
    ]
  },
  {
    planId: 'pro-intelligence',
    name: 'Pro Political Intelligence Tier',
    priceKes: 50000,
    priceUsd: 390,
    billingPeriod: 'Monthly',
    rateLimitPerMinute: 600,
    features: [
      'All 290 Constituency MPs with full Hansard delivery scorecards',
      'All 47 County Leadership Trios (Governors, Senators, Women Reps)',
      'State Bureaucracy & Constitutional Appointing matrix',
      'Auditor General expenditure flags & scandal tracking',
      'Full REST API programmatic access with developer API key'
    ]
  },
  {
    planId: 'enterprise-war-room',
    name: 'Enterprise / 2027 Campaign War-Room Pack',
    priceKes: 250000,
    priceUsd: 1950,
    billingPeriod: 'Per Seat / Monthly Campaign Retainer',
    rateLimitPerMinute: 3000,
    features: [
      'Unredacted Opposition Research & Vulnerability Dossiers',
      'Custom Campaign Briefing PDF Export Packs for all 290 Constituencies',
      'Power Hangouts & Elite Access Architecture (Churches, Golf Clubs, VIP Bars)',
      'Financial Moguls & Corporate Beneficial Ownership linkage',
      'Dedicated intelligence briefings and custom alert webhooks'
    ]
  }
];

const API_KEYS: Record<string, { planId: string; clientName: string; email: string; createdAt: string; queriesUsed: number }> = {
  'ke_live_demo_pro_key_2027': {
    planId: 'pro-intelligence',
    clientName: 'Nairobi Policy Institute',
    email: 'intel@nairobi-policy.org',
    createdAt: new Date().toISOString(),
    queriesUsed: 42
  }
};

// GET /api/v1/plans
app.get('/api/v1/plans', (req, res) => {
  res.json({
    currency: 'KES',
    plans: API_PLANS,
    paymentMethodsAccepted: ['M-Pesa Daraja API (STK Push)', 'Bank Wire (RTGS / KES / USD)', 'Credit Card (Stripe)']
  });
});

// POST /api/v1/auth/generate-key
app.post('/api/v1/auth/generate-key', (req, res) => {
  const { clientName, email, planId } = req.body;
  if (!clientName || !email) {
    return res.status(400).json({ error: 'clientName and email are required' });
  }

  const selectedPlan = API_PLANS.find(p => p.planId === planId) || API_PLANS[0];
  const apiKey = `ke_${selectedPlan.planId}_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 8)}`;

  API_KEYS[apiKey] = {
    planId: selectedPlan.planId,
    clientName,
    email,
    createdAt: new Date().toISOString(),
    queriesUsed: 0
  };

  res.status(201).json({
    status: 'success',
    apiKey,
    plan: selectedPlan,
    usageEndpoint: '/api/v1/usage',
    documentationUrl: 'https://github.com/GabuGravin41/kenya-who-swho#api-documentation'
  });
});

// GET /api/v1/campaign-packs/:politicianId
app.get('/api/v1/campaign-packs/:politicianId', (req, res) => {
  const politician = inMemoryStore.getPoliticianById(req.params.politicianId);
  if (!politician) return res.status(404).json({ error: 'Politician not found' });

  const scorecard = inMemoryStore.getScorecardByPoliticianId(politician.id);
  const party = inMemoryStore.getPartyById(politician.partyId);
  const budgets = politician.representedConstituencyId ? inMemoryStore.getBudgets(politician.representedConstituencyId) : [];
  const crowdLogs = inMemoryStore.getCrowdLogs({ politicianId: politician.id });
  const hangouts = inMemoryStore.getEliteHangouts().filter(h => 
    h.frequentPatrons.some(p => p.politicianId === politician.id || p.name.toLowerCase().includes(politician.name.toLowerCase()))
  );

  const pack = {
    classification: 'CONFIDENTIAL // 2027 ELECTORAL CAMPAIGN PACK',
    generatedAt: new Date().toISOString(),
    targetSubject: {
      id: politician.id,
      name: politician.name,
      aliases: politician.aliases,
      currentPosition: politician.currentPosition,
      representedConstituencyId: politician.representedConstituencyId,
      representedCountyId: politician.representedCountyId,
      party: party?.name,
      coalition: politician.coalition,
      declaredAssets: politician.declaredAssetsSummary,
      careerHistory: politician.careerHistory,
      educationSummary: politician.educationSummary,
      originStory: politician.originStory,
      keyAllies: politician.keyAllies,
      knownRivals: politician.knownRivals
    },
    performanceAudit: {
      deliveryScore: scorecard?.overallDeliveryScore ?? 50,
      activityTier: scorecard?.activityTier ?? 'Active',
      hansardSpeechCount: scorecard?.hansardSpeechCount ?? 0,
      billsSponsored: scorecard?.billsSponsoredCount ?? 0,
      zeroActivityFlag: scorecard?.zeroActivityFlag ?? false,
      flagExplanation: scorecard?.flagExplanation,
      auditorGeneralFlagsCount: scorecard?.auditorGeneralFlagsCount ?? 0,
      reportedScandals: scorecard?.reportedScandals ?? []
    },
    constituencyFinancialOversight: budgets,
    eliteAccessNetworks: hangouts.map(h => ({
      venueName: h.name,
      category: h.category,
      neighborhood: h.neighborhood,
      primeMeetingTimes: h.primeMeetingTimes,
      accessibility: h.accessRequirements.publicAccessibility,
      entryRules: h.accessRequirements.dressCode
    })),
    fieldSurveillanceLogs: crowdLogs,
    strategicVulnerabilityAssessment: {
      primaryAttackVectors: [
        scorecard?.zeroActivityFlag 
          ? `Capitalize on zero Hansard floor contributions in the 13th Parliament against candidate.`
          : `Audit committee oversight attendance and public finance voting records.`,
        `Focus campaign messaging on stalled NG-CDF school and clinic projects in ward borders.`,
        `Scrutinize party hopping history (${politician.partyHoppingHistory.map(h => h.party).join(' -> ')}) for consistency.`
      ]
    }
  };

  res.json(pack);
});

app.listen(PORT, () => {
  console.log(`[Kenya Elections API] Server running on http://localhost:${PORT}`);
});

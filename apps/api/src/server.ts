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

app.listen(PORT, () => {
  console.log(`[Kenya Elections API] Server running on http://localhost:${PORT}`);
});

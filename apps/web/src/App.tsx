import { useState, useEffect } from 'react';
import { 
  County, 
  PoliticalParty, 
  Politician, 
  PoliticianScorecard, 
  BureaucracyNode, 
  PowerBroker, 
  CrowdIntelligenceLog, 
  CivicStatsSummary 
} from '@kenya-elections/shared-types';
import { api } from './api';
import { Navbar } from './components/Navbar';
import { StatsOverview } from './components/StatsOverview';
import { PoliticianCard } from './components/PoliticianCard';
import { PoliticianModal } from './components/PoliticianModal';
import { ScorecardView } from './components/ScorecardView';
import { ConstituencyExplorer } from './components/ConstituencyExplorer';
import { BureaucracyView } from './components/BureaucracyView';
import { PowerBrokersView } from './components/PowerBrokersView';
import { CrowdIntelligenceView } from './components/CrowdIntelligenceView';
import { EliteHangoutsExplorer } from './components/EliteHangoutsExplorer';
import { Search } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'politicians' | 'scorecard' | 'counties' | 'bureaucracy' | 'power_brokers' | 'elite_hangouts' | 'crowd_intel'>('politicians');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  // Data State
  const [stats, setStats] = useState<CivicStatsSummary | null>(null);
  const [counties, setCounties] = useState<County[]>([]);
  const [parties, setParties] = useState<PoliticalParty[]>([]);
  const [politicians, setPoliticians] = useState<Array<Politician & { scorecard?: PoliticianScorecard; party?: PoliticalParty }>>([]);
  const [bureaucracy, setBureaucracy] = useState<BureaucracyNode[]>([]);
  const [brokers, setBrokers] = useState<PowerBroker[]>([]);
  const [crowdLogs, setCrowdLogs] = useState<CrowdIntelligenceLog[]>([]);
  const [selectedPolitician, setSelectedPolitician] = useState<any | null>(null);

  // Filters for politicians tab
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState('all');
  const [partyFilter, setPartyFilter] = useState('all');
  const [coalitionFilter, setCoalitionFilter] = useState('all');
  const [incumbentFilter, setIncumbentFilter] = useState<'all' | 'incumbent' | 'aspirant'>('all');

  const loadData = async () => {
    try {
      const [statsData, countiesData, partiesData, politiciansData, bureauData, brokerData, logsData] = await Promise.all([
        api.getStats(),
        api.getCounties(),
        api.getParties(),
        api.getPoliticians(),
        api.getBureaucracy(),
        api.getPowerBrokers(),
        api.getCrowdLogs()
      ]);

      setStats(statsData);
      setCounties(countiesData);
      setParties(partiesData);
      setPoliticians(politiciansData);
      setBureaucracy(bureauData);
      setBrokers(brokerData);
      setCrowdLogs(logsData);
    } catch (err) {
      console.error('Failed to load civic data', err);
    }
  };

  useEffect(() => {
    loadData();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Filtered politicians for primary directory
  const filteredPoliticians = politicians.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.aliases.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      p.originStory.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPosition = positionFilter === 'all' || p.currentPosition === positionFilter || p.vyingForPosition === positionFilter;
    const matchesParty = partyFilter === 'all' || p.partyId === partyFilter;
    const matchesCoalition = coalitionFilter === 'all' || p.coalition.toLowerCase().includes(coalitionFilter.toLowerCase());
    
    let matchesIncumbent = true;
    if (incumbentFilter === 'incumbent') matchesIncumbent = p.isIncumbent;
    if (incumbentFilter === 'aspirant') matchesIncumbent = !p.isIncumbent || !!p.vyingForPosition;

    return matchesSearch && matchesPosition && matchesParty && matchesCoalition && matchesIncumbent;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isOnline={isOnline} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <StatsOverview stats={stats} />

        {/* Tab 1: Primary Politicians & Aspirants Directory */}
        {activeTab === 'politicians' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-lg">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                {/* Search Box */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by candidate name, moniker (e.g. Sudi, Babu), or origin..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Dropdown Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  <select
                    value={positionFilter}
                    onChange={e => setPositionFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="all">All Offices</option>
                    <option value="president">President</option>
                    <option value="governor">Governors</option>
                    <option value="senator">Senators</option>
                    <option value="mp">Members of Parliament (MP)</option>
                    <option value="women_rep">Women Representatives</option>
                    <option value="mca">Members of County Assembly (MCA)</option>
                    <option value="aspirant">2027 Aspirants Only</option>
                  </select>

                  <select
                    value={partyFilter}
                    onChange={e => setPartyFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="all">All Political Parties</option>
                    {parties.map(prt => (
                      <option key={prt.id} value={prt.id}>
                        {prt.code} — {prt.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={coalitionFilter}
                    onChange={e => setCoalitionFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="all">All Coalitions</option>
                    <option value="Kenya Kwanza">Kenya Kwanza</option>
                    <option value="Azimio">Azimio la Umoja</option>
                    <option value="Independent">Independent / Third Force</option>
                  </select>

                  <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-0.5 text-xs">
                    <button
                      onClick={() => setIncumbentFilter('all')}
                      className={`px-3 py-1.5 rounded-lg transition ${incumbentFilter === 'all' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400'}`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setIncumbentFilter('incumbent')}
                      className={`px-3 py-1.5 rounded-lg transition ${incumbentFilter === 'incumbent' ? 'bg-emerald-950 text-emerald-400 font-medium' : 'text-slate-400'}`}
                    >
                      Incumbents
                    </button>
                    <button
                      onClick={() => setIncumbentFilter('aspirant')}
                      className={`px-3 py-1.5 rounded-lg transition ${incumbentFilter === 'aspirant' ? 'bg-amber-950 text-amber-400 font-medium' : 'text-slate-400'}`}
                    >
                      2027 Aspirants
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPoliticians.map(pol => (
                <PoliticianCard
                  key={pol.id}
                  politician={pol}
                  onSelect={p => setSelectedPolitician(p)}
                />
              ))}
            </div>

            {filteredPoliticians.length === 0 && (
              <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-3xl">
                <p className="text-slate-400 text-sm">No political actors matched the selected filters.</p>
                <button
                  onClick={() => { setSearchTerm(''); setPositionFilter('all'); setCoalitionFilter('all'); setIncumbentFilter('all'); }}
                  className="mt-3 px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-200 hover:bg-slate-700"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Hansard & Delivery Scorecard */}
        {activeTab === 'scorecard' && (
          <ScorecardView 
            politicians={politicians} 
            onSelectPolitician={p => setSelectedPolitician(p)}
          />
        )}

        {/* Tab 3: County & Constituency Explorer */}
        {activeTab === 'counties' && (
          <ConstituencyExplorer counties={counties} />
        )}

        {/* Tab 4: State Bureaucracy */}
        {activeTab === 'bureaucracy' && (
          <BureaucracyView nodes={bureaucracy} />
        )}

        {/* Tab 5: Financial Moguls */}
        {activeTab === 'power_brokers' && (
          <PowerBrokersView brokers={brokers} />
        )}

        {/* Tab 6: Power Hangouts & Access Architecture */}
        {activeTab === 'elite_hangouts' && (
          <EliteHangoutsExplorer />
        )}

        {/* Tab 7: Crowd Intelligence */}
        {activeTab === 'crowd_intel' && (
          <CrowdIntelligenceView logs={crowdLogs} onRefresh={loadData} />
        )}
      </main>

      {/* Politician Dossier Modal */}
      {selectedPolitician && (
        <PoliticianModal 
          politician={selectedPolitician} 
          onClose={() => setSelectedPolitician(null)}
          onRefresh={loadData}
        />
      )}

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">Kenya Who's Who (Elections & Governance Intelligence)</span>
            <span>• Progressive Web App (PWA)</span>
          </div>
          <div>
            Constitutional Governance & Delivery Surveillance • 2027 Electoral Horizon
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

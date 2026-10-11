import React, { useState } from 'react';
import { Politician, PoliticianScorecard, PoliticalParty } from '@kenya-elections/shared-types';
import { ShieldAlert, Mic, AlertTriangle, CheckCircle, Search } from 'lucide-react';

interface ScorecardViewProps {
  politicians: Array<Politician & { scorecard?: PoliticianScorecard; party?: PoliticalParty }>;
  onSelectPolitician: (politician: any) => void;
}

export const ScorecardView: React.FC<ScorecardViewProps> = ({ politicians, onSelectPolitician }) => {
  const [filterMode, setFilterMode] = useState<'all' | 'silent' | 'high_impact'>('all');
  const [search, setSearch] = useState('');

  const filtered = politicians.filter(p => {
    if (!p.scorecard) return false;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
      p.aliases.some(a => a.toLowerCase().includes(search.toLowerCase()));
    
    if (!matchesSearch) return false;

    if (filterMode === 'silent') {
      return p.scorecard.zeroActivityFlag || p.scorecard.activityTier === 'Ghost/Silent';
    }
    if (filterMode === 'high_impact') {
      return p.scorecard.activityTier === 'High Impact';
    }
    return true;
  }).sort((a, b) => {
    if (filterMode === 'silent') {
      return (a.scorecard?.hansardSpeechCount ?? 0) - (b.scorecard?.hansardSpeechCount ?? 0);
    }
    return (b.scorecard?.overallDeliveryScore ?? 0) - (a.scorecard?.overallDeliveryScore ?? 0);
  });

  return (
    <div className="space-y-6">
      {/* Intro banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldAlert className="w-4 h-4" />
            Parliamentary & Senate Delivery Surveillance
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Who Speaks for You vs Who Stays Silent?
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            Public salaries and allowances are paid monthly to legislators. Our automated Hansard intelligence tracks every floor speech, bill introduced, and committee session, instantly spotlighting members with near-zero activity alongside the most industrious lawmakers.
          </p>
        </div>

        {/* Filter controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                filterMode === 'all'
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Tracked ({politicians.filter(p => !!p.scorecard).length})
            </button>
            <button
              onClick={() => setFilterMode('silent')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                filterMode === 'silent'
                  ? 'bg-rose-950/60 text-rose-300 border border-rose-800'
                  : 'text-slate-400 hover:text-rose-400'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>Zero Speech / Ghost Mode</span>
            </button>
            <button
              onClick={() => setFilterMode('high_impact')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                filterMode === 'high_impact'
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800'
                  : 'text-slate-400 hover:text-emerald-400'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>High Impact Leaders</span>
            </button>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search politician..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full sm:w-64 bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Scorecard Table/List */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-mono text-[11px]">
              <tr>
                <th className="px-6 py-3.5">Politician</th>
                <th className="px-4 py-3.5">Position / Seat</th>
                <th className="px-4 py-3.5 text-center">Hansard Speeches</th>
                <th className="px-4 py-3.5 text-center">Bills Sponsored</th>
                <th className="px-4 py-3.5 text-center">Attendance</th>
                <th className="px-4 py-3.5 text-center">Activity Tier</th>
                <th className="px-6 py-3.5 text-right">Delivery Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map(p => {
                const sc = p.scorecard!;
                const isZero = sc.zeroActivityFlag || sc.activityTier === 'Ghost/Silent';

                return (
                  <tr 
                    key={p.id}
                    onClick={() => onSelectPolitician(p)}
                    className="hover:bg-slate-800/40 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img 
                        src={p.photoUrl} 
                        alt={p.name}
                        className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-800"
                      />
                      <div>
                        <div className="font-bold text-white text-sm hover:text-emerald-400 transition-colors">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          <span>{p.party?.code || 'IND'}</span>
                          <span>•</span>
                          <span>{p.coalition}</span>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-slate-300">
                      <div className="font-medium text-slate-200 uppercase">{p.currentPosition}</div>
                      <div className="text-[11px] text-slate-500">
                        {p.representedConstituencyId || p.representedCountyId ? `Seat: ${p.representedConstituencyId || p.representedCountyId}` : 'National'}
                      </div>
                    </td>

                    <td className="px-4 py-4 text-center">
                      <span className={`inline-flex items-center gap-1 font-mono font-bold px-2 py-1 rounded-lg ${
                        isZero 
                          ? 'bg-rose-950/80 text-rose-300 border border-rose-800' 
                          : 'bg-slate-950 text-slate-200'
                      }`}>
                        <Mic className="w-3 h-3" />
                        {sc.hansardSpeechCount}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center font-mono font-medium text-slate-300">
                      {sc.billsSponsoredCount}
                    </td>

                    <td className="px-4 py-4 text-center font-mono text-slate-300">
                      {sc.committeeAttendancePercentage}%
                    </td>

                    <td className="px-4 py-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        sc.activityTier === 'High Impact'
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                          : sc.activityTier === 'Active'
                          ? 'bg-blue-950/60 text-blue-300 border-blue-800'
                          : sc.activityTier === 'Moderate'
                          ? 'bg-slate-800 text-slate-300 border-slate-700'
                          : 'bg-rose-950/80 text-rose-300 border-rose-800'
                      }`}>
                        {sc.activityTier}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="text-base font-extrabold font-mono text-white">
                        {sc.overallDeliveryScore}%
                      </div>
                      <div className="w-20 bg-slate-800 h-1.5 rounded-full ml-auto mt-1 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            sc.overallDeliveryScore > 70 
                              ? 'bg-emerald-500' 
                              : sc.overallDeliveryScore > 40 
                              ? 'bg-amber-500' 
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${sc.overallDeliveryScore}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

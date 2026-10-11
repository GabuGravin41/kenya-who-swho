import React, { useState, useEffect } from 'react';
import { ConstituencyRaceOverview, SeatVulnerabilityTier } from '@kenya-elections/shared-types';
import { api } from '../api';
import { Target, TrendingUp, ChevronRight } from 'lucide-react';



export const BattlegroundMatrixExplorer: React.FC = () => {
  const [races, setRaces] = useState<ConstituencyRaceOverview[]>([]);
  const [selectedTier, setSelectedTier] = useState<string>('ALL');
  const [selectedRace, setSelectedRace] = useState<ConstituencyRaceOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await api.getBattlegroundRaces(selectedTier);
        setRaces(data);
        if (data.length > 0 && !selectedRace) {
          setSelectedRace(data[0]);
        }
      } catch (err) {
        console.error('Failed to load battlegrounds', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [selectedTier]);

  const getTierBadge = (tier: SeatVulnerabilityTier) => {
    switch (tier) {
      case 'HOT_BATTLEGROUND_TOSSUP':
        return { label: 'Toss-up Battleground', color: 'bg-red-950/60 text-red-300 border-red-700' };
      case 'HIGH_RISK_OPEN_SEAT':
        return { label: 'High-Risk Open Seat', color: 'bg-purple-950/60 text-purple-300 border-purple-700' };
      case 'LEAN_INCUMBENT':
        return { label: 'Lean Incumbent', color: 'bg-emerald-950/60 text-emerald-300 border-emerald-700' };
      case 'LEAN_OPPOSITION':
        return { label: 'Lean Opposition', color: 'bg-blue-950/60 text-blue-300 border-blue-700' };
      default:
        return { label: 'Safe Seat', color: 'bg-slate-800 text-slate-300 border-slate-700' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/70 via-slate-900 to-indigo-950/50 p-6 sm:p-8 border border-purple-900/40 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/50 border border-purple-700/60 text-purple-300 mb-3">
            <Target className="w-3.5 h-3.5 text-purple-400" />
            2027 General Election Forecast & Ground Contenders
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            2027 Swing Seat Matrix & Declared Challengers
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Kenyan parliamentary seats historically witness a 60%–70% turnover rate. Track vulnerable incumbents, emerging youth technocrats, projected campaign war chests, and the Gen-Z voter demographic shaping the 2027 ballot.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {[
          { id: 'ALL', label: 'All Monitored Races' },
          { id: 'HOT_BATTLEGROUND_TOSSUP', label: '🔥 Toss-Up Battlegrounds' },
          { id: 'HIGH_RISK_OPEN_SEAT', label: '⚡ Open Vacant Seats' },
          { id: 'LEAN_INCUMBENT', label: '🛡️ Lean Incumbent' },
        ].map(filter => (
          <button
            key={filter.id}
            onClick={() => setSelectedTier(filter.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition whitespace-nowrap ${
              selectedTier === filter.id
                ? 'bg-purple-900/60 border-purple-600 text-white shadow-lg shadow-purple-950/40'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Main Split View: Race Cards & Detailed Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Races List */}
        <div className="lg:col-span-5 space-y-3">
          {loading ? (
            <div className="py-12 text-center text-slate-500 text-sm">Loading battleground seats...</div>
          ) : (
            races.map(race => {
              const badge = getTierBadge(race.vulnerabilityTier);
              const isSelected = selectedRace?.id === race.id;

              return (
                <div
                  key={race.id}
                  onClick={() => setSelectedRace(race)}
                  className={`p-5 rounded-xl border transition cursor-pointer text-left ${
                    isSelected
                      ? 'bg-slate-900 border-purple-500 shadow-lg shadow-purple-950/20'
                      : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400">
                        {race.countyName} County
                      </span>
                      <h4 className="text-lg font-bold text-white mt-0.5">{race.constituencyName}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Incumbent: <span className="font-semibold text-slate-200">Hon. {race.incumbentName}</span> ({race.incumbentCurrentParty})
                      </p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border uppercase tracking-wider ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-center">
                    <div className="bg-slate-950/50 p-1.5 rounded">
                      <span className="text-[10px] text-slate-400 block">Registered Voters</span>
                      <span className="text-xs font-bold text-slate-200">{race.registeredVoters.toLocaleString()}</span>
                    </div>
                    <div className="bg-slate-950/50 p-1.5 rounded">
                      <span className="text-[10px] text-slate-400 block">Gen-Z Bulge</span>
                      <span className="text-xs font-bold text-purple-400">{race.genZBulgePercentage}%</span>
                    </div>
                    <div className="bg-slate-950/50 p-1.5 rounded">
                      <span className="text-[10px] text-slate-400 block">2022 Margin</span>
                      <span className="text-xs font-bold text-amber-400">+{race.marginOfVictory2022Votes.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>{race.topChallengers.length} Declared Challengers</span>
                    <span className="flex items-center text-purple-400 font-semibold group-hover:translate-x-0.5 transition">
                      View Race Dossier <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Active Race Detailed Overview */}
        <div className="lg:col-span-7">
          {selectedRace ? (
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-6 sticky top-20">
              {/* Race Header */}
              <div className="border-b border-slate-800 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                      Constituency Intelligence File • {selectedRace.countyName}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">{selectedRace.constituencyName} Battleground</h3>
                  </div>
                  <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${getTierBadge(selectedRace.vulnerabilityTier).color}`}>
                    {getTierBadge(selectedRace.vulnerabilityTier).label}
                  </span>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ground Intelligence Analysis</h5>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    {selectedRace.battlegroundAnalysis}
                  </p>
                </div>
              </div>

              {/* Incumbent Posture Card */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Incumbent 2027 Disposition</span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800">
                    {selectedRace.incumbent2027Status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-200">
                    MP
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Hon. {selectedRace.incumbentName}</h4>
                    <p className="text-xs text-slate-400">Party: {selectedRace.incumbentCurrentParty} • 2022 Win Margin: {selectedRace.marginOfVictory2022Votes.toLocaleString()} votes</p>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">Decisive Local Election Issues:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedRace.keyVoterIssues.map((issue, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-slate-900 border border-slate-800 text-slate-300">
                        • {issue}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Challengers Radar */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-base flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    Declared & Active Challengers ({selectedRace.topChallengers.length})
                  </h4>
                  <span className="text-[11px] text-slate-500">Ranked by Ground Momentum</span>
                </div>

                <div className="space-y-3">
                  {selectedRace.topChallengers.map(challenger => (
                    <div
                      key={challenger.id}
                      className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={challenger.photoUrl}
                            alt={challenger.name}
                            className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                          />
                          <div>
                            <h5 className="font-bold text-white text-base">{challenger.name}</h5>
                            <p className="text-xs text-purple-300 font-medium">{challenger.backgroundProfession}</p>
                            <p className="text-[11px] text-slate-400">
                              Target Ticket: <span className="font-semibold text-slate-300">{challenger.prospectiveParty}</span> ({challenger.coalitionAlignment})
                            </p>
                          </div>
                        </div>

                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                          challenger.estimatedGroundMomentum === 'Surging'
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                            : challenger.estimatedGroundMomentum === 'Competitive'
                            ? 'bg-blue-950/80 text-blue-300 border border-blue-800'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {challenger.estimatedGroundMomentum} Momentum
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800/60">
                        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">Est. Campaign War Chest</span>
                          <span className="font-bold text-emerald-400">
                            KES {(challenger.campaignWarChestEstKes / 1000000).toFixed(0)} Million
                          </span>
                        </div>
                        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                          <span className="text-[10px] text-slate-500 block">Key Endorsements</span>
                          <span className="font-semibold text-slate-300 truncate block">
                            {challenger.notableEndorsements[0] || 'Community Elders'}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                          Platform Priorities:
                        </span>
                        <ul className="space-y-1">
                          {challenger.keyPlatformPromises.map((promise, pIdx) => (
                            <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                              <span className="text-purple-400 font-bold">•</span>
                              {promise}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center text-slate-500 text-sm bg-slate-900/40 rounded-xl border border-slate-800">
              Select a battleground constituency from the list to view the full 2027 intelligence breakdown.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

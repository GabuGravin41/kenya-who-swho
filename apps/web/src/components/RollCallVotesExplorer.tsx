import React, { useState, useEffect } from 'react';
import { DivisionBill, PoliticianRollCallRecord } from '@kenya-elections/shared-types';
import { api } from '../api';
import { CheckCircle2, XCircle, AlertTriangle, Search, BookOpen, Flame } from 'lucide-react';




export const RollCallVotesExplorer: React.FC = () => {
  const [bills, setBills] = useState<DivisionBill[]>([]);
  const [selectedBillCode, setSelectedBillCode] = useState<string>('FINANCE_BILL_2024');
  const [votes, setVotes] = useState<PoliticianRollCallRecord[]>([]);
  const [search, setSearch] = useState('');
  const [voteFilter, setVoteFilter] = useState<'ALL' | 'YES' | 'NO' | 'ABSENT' | 'BACKLASH'>('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const billsData = await api.getDivisionBills();
        setBills(billsData);
        if (billsData.length > 0 && !selectedBillCode) {
          setSelectedBillCode(billsData[0].shortCode);
        }
        const votesData = await api.getRollCallVotes({ billShortCode: selectedBillCode });
        setVotes(votesData);
      } catch (err) {
        console.error('Failed to load roll call data', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [selectedBillCode]);

  const activeBill = bills.find(b => b.shortCode === selectedBillCode) || bills[0];

  const filteredVotes = votes.filter(v => {
    const matchSearch = v.politicianName.toLowerCase().includes(search.toLowerCase()) ||
      v.constituencyOrCounty.toLowerCase().includes(search.toLowerCase()) ||
      v.party.toLowerCase().includes(search.toLowerCase());

    if (!matchSearch) return false;

    if (voteFilter === 'ALL') return true;
    if (voteFilter === 'YES') return v.vote === 'YES';
    if (voteFilter === 'NO') return v.vote === 'NO';
    if (voteFilter === 'ABSENT') return v.vote === 'ABSENT' || v.vote === 'ABSTAIN';
    if (voteFilter === 'BACKLASH') return v.voterBacklashRating === 'CRITICAL_BACKLASH' || v.voterBacklashRating === 'STRONG_DISAPPROVAL';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-red-950/60 via-slate-900 to-amber-950/40 p-6 sm:p-8 border border-red-900/40 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-900/50 border border-red-700/60 text-red-300 mb-3">
            <Flame className="w-3.5 h-3.5 text-red-400" />
            National Assembly Division Register (2022 - 2027)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Roll-Call Votes & Public Accountability Index
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Hansard division records for watershed legislation that defined public fury, including Finance Bills 2023 & 2024, the Rigathi Gachagua impeachment, and mandatory levies. Discover exactly how your MP voted on the floor.
          </p>
        </div>
      </div>

      {/* Bill Selector Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {bills.map(bill => {
          const isSelected = bill.shortCode === selectedBillCode;
          return (
            <button
              key={bill.id}
              onClick={() => setSelectedBillCode(bill.shortCode)}
              className={`px-4 py-3 rounded-xl text-left border transition flex-shrink-0 min-w-[220px] ${
                isSelected
                  ? 'bg-red-950/50 border-red-600 text-white shadow-lg shadow-red-950/30'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-red-400">
                  {bill.chamber}
                </span>
                <span className="text-[10px] text-slate-400">{bill.dateVoted}</span>
              </div>
              <h4 className="font-semibold text-sm mt-1 text-slate-100 line-clamp-1">{bill.title}</h4>
              <p className="text-[11px] mt-1 text-slate-400">
                Yes: <span className="text-emerald-400 font-bold">{bill.totalYes}</span> | No: <span className="text-red-400 font-bold">{bill.totalNo}</span>
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Bill Executive Card */}
      {activeBill && (
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                {activeBill.officialActReference}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{activeBill.title}</h3>
              <p className="text-xs text-slate-400 mt-1">Chamber: {activeBill.chamber} • Date: {activeBill.dateVoted}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                activeBill.outcome.includes('Conceded') || activeBill.outcome.includes('Withdrawn')
                  ? 'bg-amber-950/40 text-amber-300 border-amber-800'
                  : activeBill.outcome === 'Passed'
                  ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800'
                  : 'bg-red-950/40 text-red-300 border-red-800'
              }`}>
                Outcome: {activeBill.outcome}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-center">
              <span className="text-xs text-emerald-400 font-medium">AYES (VOTED YES)</span>
              <p className="text-2xl font-black text-emerald-300 mt-1">{activeBill.totalYes}</p>
            </div>
            <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-center">
              <span className="text-xs text-red-400 font-medium">NOES (VOTED NO)</span>
              <p className="text-2xl font-black text-red-300 mt-1">{activeBill.totalNo}</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/40 text-center">
              <span className="text-xs text-slate-400 font-medium">ABSTAINED</span>
              <p className="text-2xl font-black text-slate-300 mt-1">{activeBill.totalAbstain}</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-900/40 text-center">
              <span className="text-xs text-amber-400 font-medium">ABSENT FROM PLENARY</span>
              <p className="text-2xl font-black text-amber-300 mt-1">{activeBill.totalAbsent}</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs">
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Summary: </span>
              {activeBill.summary}
            </p>
            <p className="text-amber-300/90 leading-relaxed">
              <span className="font-semibold text-amber-300">Ground Consequence & Legacy: </span>
              {activeBill.publicImpactNote}
            </p>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search MP name, constituency, or party..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {(['ALL', 'YES', 'NO', 'ABSENT', 'BACKLASH'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setVoteFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                voteFilter === tab
                  ? 'bg-red-950/60 border-red-700 text-white'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab === 'ALL' && 'All Records'}
              {tab === 'YES' && 'Voted YES (Ayes)'}
              {tab === 'NO' && 'Voted NO (Noes)'}
              {tab === 'ABSENT' && 'Absent / Walkout'}
              {tab === 'BACKLASH' && 'Critical Backlash'}
            </button>
          ))}
        </div>
      </div>

      {/* MP Votes Grid */}
      {loading ? (
        <div className="py-12 text-center text-slate-500 text-sm">Loading parliamentary roll-call division register...</div>
      ) : filteredVotes.length === 0 ? (
        <div className="py-12 text-center text-slate-500 text-sm bg-slate-900/40 rounded-xl border border-slate-800">
          No MP voting records match your search or filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVotes.map(vote => {
            const isYes = vote.vote === 'YES';
            const isNo = vote.vote === 'NO';
            const isAbsent = vote.vote === 'ABSENT' || vote.vote === 'ABSTAIN';

            return (
              <div
                key={vote.id}
                className="rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 p-5 space-y-3 transition group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-red-400 transition text-base">
                      {vote.politicianName}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {vote.constituencyOrCounty} • <span className="font-semibold text-slate-300">{vote.party}</span>
                    </p>
                  </div>

                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-black border ${
                    isYes 
                      ? 'bg-emerald-950/50 text-emerald-300 border-emerald-800' 
                      : isNo 
                      ? 'bg-red-950/50 text-red-300 border-red-800' 
                      : 'bg-amber-950/50 text-amber-300 border-amber-800'
                  }`}>
                    {isYes && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {isNo && <XCircle className="w-3.5 h-3.5" />}
                    {isAbsent && <AlertTriangle className="w-3.5 h-3.5" />}
                    VOTED {vote.vote}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Public Sentiment Consequence:</span>
                    <span className={`font-semibold uppercase tracking-wider ${
                      vote.voterBacklashRating === 'CRITICAL_BACKLASH'
                        ? 'text-red-400'
                        : vote.voterBacklashRating === 'STRONG_DISAPPROVAL'
                        ? 'text-amber-400'
                        : vote.voterBacklashRating === 'COMMENDED_BY_PUBLIC'
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                    }`}>
                      {vote.voterBacklashRating.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {vote.groundConsequenceSummary}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800/50">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-slate-500" />
                    {vote.hansardCitation}
                  </span>
                  <span>National Assembly Division</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { BureaucracyNode } from '@kenya-elections/shared-types';
import { Building2, UserCheck, Search } from 'lucide-react';

interface BureaucracyViewProps {
  nodes: BureaucracyNode[];
}

export const BureaucracyView: React.FC<BureaucracyViewProps> = ({ nodes }) => {
  const [selectedBranch, setSelectedBranch] = useState<'All' | 'Executive' | 'Judiciary' | 'Independent Commission' | 'County Administration'>('All');
  const [search, setSearch] = useState('');

  const filtered = nodes.filter(n => {
    const matchesBranch = selectedBranch === 'All' || n.branch === selectedBranch;
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.holderName.toLowerCase().includes(search.toLowerCase()) ||
      n.departmentMinistry.toLowerCase().includes(search.toLowerCase());
    return matchesBranch && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4" />
            State Bureaucracy & Executive Appointments Registry
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Who Appoints Kenya's Powerful Decision-Makers?
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            From Cabinet Secretaries to Principal Secretaries, the Chief Justice, and County Directors of Education, understand the appointment chains, constitutional mandate articles, and the public funds entrusted to each non-elected or appointed office.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Executive', 'Judiciary', 'Independent Commission', 'County Administration'] as const).map(b => (
              <button
                key={b}
                onClick={() => setSelectedBranch(b)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  selectedBranch === b 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search office or official..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full sm:w-60 bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Grid of Bureaucratic Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(node => (
          <div 
            key={node.id} 
            className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-3xl p-5 flex flex-col justify-between transition-all duration-200 shadow-sm"
          >
            <div>
              <div className="flex items-start gap-4 mb-3">
                <img 
                  src={node.holderPhotoUrl} 
                  alt={node.holderName} 
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-slate-800"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                    {node.branch}
                  </span>
                  <h3 className="font-bold text-white text-base mt-1.5 truncate">
                    {node.holderName}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold line-clamp-1">
                    {node.title}
                  </p>
                </div>
              </div>

              {/* Department */}
              <div className="text-xs text-slate-400 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60 mb-3">
                <span className="font-semibold text-slate-300">Ministry/Entity: </span>
                {node.departmentMinistry}
              </div>

              {/* Appointing Authority Box (Mandatory requirement from user!) */}
              <div className="bg-amber-950/20 border border-amber-900/40 rounded-2xl p-3 text-xs space-y-1 mb-3">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5" />
                  Appointment Mechanism
                </div>
                <div className="text-slate-200 font-medium">
                  {node.appointmentType}
                </div>
                <div className="text-slate-400 text-[11px]">
                  <strong>Appointed By:</strong> {node.appointingAuthority}
                </div>
                <div className="text-emerald-400 font-mono text-[10px]">
                  <strong>Legal Authority:</strong> {node.appointingLawArticle}
                </div>
              </div>

              {/* Mandate overview */}
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {node.mandateOverview}
              </p>
            </div>

            {/* Bottom: Annual Budget Oversight & Future Ambition */}
            <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Budget Oversight:</span>
                <span className="font-mono font-bold text-white">
                  KES {(node.annualBudgetOversightKes / 1000000000).toFixed(1)} Billion
                </span>
              </div>

              {node.isPoliticalAspirant && (
                <div className="bg-emerald-950/30 border border-emerald-900/60 p-2 rounded-xl text-[11px] text-emerald-300">
                  <span className="font-bold">Next Election Trajectory:</span> {node.futureVyingTarget}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

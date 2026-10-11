import React from 'react';
import { PowerBroker } from '@kenya-elections/shared-types';
import { Briefcase, Building } from 'lucide-react';

interface PowerBrokersViewProps {
  brokers: PowerBroker[];
}

export const PowerBrokersView: React.FC<PowerBrokersViewProps> = ({ brokers }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4" />
            Financial Moguls, Dynasties & State Contracts
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Economic Titans Shaping Political Outcomes
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            Elections in Kenya are deeply intertwined with financial oligarchs, multi-generational family conglomerates, and key defense/infrastructure contractors. Track who controls the nation's key private assets, commercial banks, and political campaign chests.
          </p>
        </div>
      </div>

      {/* Grid of Power Brokers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brokers.map(broker => (
          <div 
            key={broker.id}
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={broker.photoUrl} 
                  alt={broker.name} 
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-amber-500/30"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-950 border border-amber-900/60 text-amber-400">
                    {broker.familyDynasty || 'Independent Mogul'}
                  </span>
                  <h3 className="font-extrabold text-white text-lg mt-1 truncate">
                    {broker.name}
                  </h3>
                  <p className="text-xs text-slate-400 italic">
                    "{broker.aliasOrTitle}"
                  </p>
                </div>
              </div>

              {/* Net Worth & Region */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
                  <span className="text-slate-500 block text-[11px]">Est. Net Worth</span>
                  <span className="text-emerald-400 font-mono font-bold text-base">
                    KES {(broker.estimatedNetWorthKes / 1000000000).toFixed(0)} Billion+
                  </span>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
                  <span className="text-slate-500 block text-[11px]">Primary Base</span>
                  <span className="text-white font-medium text-sm">
                    {broker.originRegion}
                  </span>
                </div>
              </div>

              {/* Flagship Companies & Controlled Assets */}
              <div className="space-y-2 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-amber-400" />
                  Key Controlled Entities & Assets
                </h4>
                <div className="space-y-1.5">
                  {broker.flagshipCompanies.map((comp, idx) => (
                    <div key={idx} className="bg-slate-950/40 border border-slate-800/60 p-2.5 rounded-xl text-xs text-slate-200">
                      • {comp}
                    </div>
                  ))}
                </div>
              </div>

              {/* Influence narrative */}
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/30 p-3.5 rounded-xl border border-slate-800/80 mb-4">
                {broker.influenceSummary}
              </p>

              {/* Major state contracts */}
              {broker.notableStateTenders.length > 0 && (
                <div className="space-y-1 mb-4">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Notable State Infrastructure & Procurements:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {broker.notableStateTenders.map((tender, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                        {tender}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Political factions */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500">Historical Political Links:</span>
              <span className="text-amber-400 font-semibold">{broker.associatedPoliticalFactions.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

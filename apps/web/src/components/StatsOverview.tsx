import React from 'react';
import { CivicStatsSummary } from '@kenya-elections/shared-types';
import { Landmark, Users, MicOff, Coins, ShieldCheck, Map } from 'lucide-react';

interface StatsOverviewProps {
  stats: CivicStatsSummary | null;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 my-6">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium uppercase tracking-wider">Counties</span>
          <Landmark className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{stats.totalCounties}</div>
        <p className="text-[11px] text-slate-400 mt-0.5">Mombasa 001 to Nairobi 047</p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium uppercase tracking-wider">Constituencies</span>
          <Map className="w-4 h-4 text-blue-400" />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{stats.totalConstituencies}</div>
        <p className="text-[11px] text-slate-400 mt-0.5">Across 1,450 Wards</p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium uppercase tracking-wider">Monitored Politicians</span>
          <Users className="w-4 h-4 text-purple-400" />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{stats.totalMonitoredPoliticians}</div>
        <p className="text-[11px] text-purple-400 mt-0.5">{stats.totalIncumbents} Incumbents / {stats.totalAspirants} Aspirants</p>
      </div>

      <div className="bg-amber-950/20 border border-amber-900/50 rounded-xl p-3.5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-amber-400 mb-1">
          <span className="text-xs font-medium uppercase tracking-wider">Floor Inaction Flag</span>
          <MicOff className="w-4 h-4 text-amber-400" />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-amber-300 tracking-tight">{stats.silentPoliticiansCount}</div>
        <p className="text-[11px] text-amber-400/80 mt-0.5">Zero Hansard Speeches logged</p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium uppercase tracking-wider">CDF Monitored</span>
          <Coins className="w-4 h-4 text-amber-400" />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">KES {(stats.totalNgCdfAllocationsKes / 1000000).toFixed(0)}M+</div>
        <p className="text-[11px] text-slate-400 mt-0.5">Constituency Development</p>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-xs font-medium uppercase tracking-wider">Ground Intel</span>
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">{stats.totalCrowdReportsVerified} Verified</div>
        <p className="text-[11px] text-slate-400 mt-0.5">Citizen crowd audits</p>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { County, Constituency, Ward, BudgetAllocation } from '@kenya-elections/shared-types';
import { MapPin, Search } from 'lucide-react';
import { api } from '../api';

interface ConstituencyExplorerProps {
  counties: County[];
}

export const ConstituencyExplorer: React.FC<ConstituencyExplorerProps> = ({ counties }) => {
  const [selectedCounty, setSelectedCounty] = useState<County>(counties[counties.length - 1] || counties[0]); // Default Nairobi or first
  const [constituencies, setConstituencies] = useState<Constituency[]>([]);
  const [selectedConstituency, setSelectedConstituency] = useState<Constituency | null>(null);
  const [wards, setWards] = useState<Ward[]>([]);
  const [budgets, setBudgets] = useState<BudgetAllocation[]>([]);
  const [searchCounty, setSearchCounty] = useState('');

  useEffect(() => {
    if (selectedCounty) {
      api.getConstituencies(selectedCounty.id).then(list => {
        setConstituencies(list);
        if (list.length > 0) {
          setSelectedConstituency(list[0]);
        } else {
          setSelectedConstituency(null);
        }
      });
    }
  }, [selectedCounty]);

  useEffect(() => {
    if (selectedConstituency) {
      api.getWards(selectedConstituency.id).then(setWards);
      api.getBudgets(selectedConstituency.id).then(setBudgets);
    } else {
      setWards([]);
      setBudgets([]);
    }
  }, [selectedConstituency]);

  const filteredCounties = counties.filter(c => 
    c.name.toLowerCase().includes(searchCounty.toLowerCase()) || 
    c.capital.toLowerCase().includes(searchCounty.toLowerCase()) ||
    c.code.toString().includes(searchCounty)
  );

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <MapPin className="w-6 h-6 text-emerald-400" />
          Constituency & County Resource Surveillance
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Explore all 47 Counties, 290 Constituencies, Ward borders, and National Government CDF (NG-CDF) disbursements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 47 Counties list with Search */}
        <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800 rounded-3xl p-4 flex flex-col h-[700px]">
          <div className="mb-3 relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search 47 Counties..."
              value={searchCounty}
              onChange={e => setSearchCounty(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="overflow-y-auto space-y-1.5 flex-1 pr-1">
            {filteredCounties.map(c => {
              const isSelected = selectedCounty?.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCounty(c)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-emerald-500/15 border border-emerald-500/40 text-white shadow-sm'
                      : 'hover:bg-slate-800/50 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-950 text-emerald-400 font-bold border border-slate-800">
                      {String(c.code).padStart(3, '0')}
                    </span>
                    <div>
                      <div className="font-bold text-sm leading-none">{c.name}</div>
                      <div className="text-[11px] text-slate-500 mt-1">Cap: {c.capital}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono font-semibold text-slate-200">
                      KES {(c.annualEquitableShareKes / 1000000000).toFixed(1)}B
                    </div>
                    <div className="text-[10px] text-slate-500">Share</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected County & Constituencies Drilldown */}
        <div className="lg:col-span-8 space-y-6">
          {/* Selected County Overview */}
          {selectedCounty && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-400 font-mono text-xs font-bold">
                      County {String(selectedCounty.code).padStart(3, '0')}
                    </span>
                    <span className="text-xs text-slate-500 uppercase font-semibold">
                      Former {selectedCounty.formerProvince} Province
                    </span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mt-1">{selectedCounty.name} County</h3>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-3 px-4 text-right">
                  <div className="text-xs text-slate-400">Annual County Equitable Share</div>
                  <div className="text-xl font-bold font-mono text-emerald-400">
                    KES {(selectedCounty.annualEquitableShareKes / 1000000000).toFixed(2)} Billion
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80 mb-4">
                {selectedCounty.overviewSummary}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-950/40 border border-slate-800 p-2.5 rounded-xl">
                  <span className="text-[11px] text-slate-500 block">Capital</span>
                  <span className="text-sm font-bold text-white">{selectedCounty.capital}</span>
                </div>
                <div className="bg-slate-950/40 border border-slate-800 p-2.5 rounded-xl">
                  <span className="text-[11px] text-slate-500 block">Population</span>
                  <span className="text-sm font-bold text-white">{selectedCounty.population.toLocaleString()}</span>
                </div>
                <div className="bg-slate-950/40 border border-slate-800 p-2.5 rounded-xl">
                  <span className="text-[11px] text-slate-500 block">Registered Voters</span>
                  <span className="text-sm font-bold text-white">{selectedCounty.registeredVoters.toLocaleString()}</span>
                </div>
                <div className="bg-slate-950/40 border border-slate-800 p-2.5 rounded-xl">
                  <span className="text-[11px] text-slate-500 block">Constituencies</span>
                  <span className="text-sm font-bold text-emerald-400">{constituencies.length} Monitored</span>
                </div>
              </div>
            </div>
          )}

          {/* Constituencies under this County */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Constituencies in {selectedCounty?.name}
            </h4>

            {constituencies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {constituencies.map(c => {
                  const isCur = selectedConstituency?.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedConstituency(c)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        isCur 
                          ? 'bg-slate-950 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                          : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-base">{c.name}</span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold">
                          KES {(c.ngCdfAllocationKes / 1000000).toFixed(0)}M CDF
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{c.overviewSummary}</p>
                      <div className="mt-2 text-[11px] text-slate-500">
                        {c.registeredVoters.toLocaleString()} Registered Voters
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500 text-xs">
                Detailed local boundaries are loading for this county.
              </div>
            )}

            {/* Selected Constituency Deep Dive (NG-CDF & Wards) */}
            {selectedConstituency && (
              <div className="border-t border-slate-800/80 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-lg font-bold text-white">
                      {selectedConstituency.name} Constituency Delivery Audit
                    </h5>
                    <p className="text-xs text-slate-400">
                      National Government CDF Allocation: KES {(selectedConstituency.ngCdfAllocationKes / 1000000).toFixed(1)} Million
                    </p>
                  </div>
                </div>

                {/* Audited NG-CDF Projects */}
                {budgets.length > 0 && budgets[0].topFundedProjects.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 block">
                      Auditor-General Tracked Projects:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {budgets[0].topFundedProjects.map((proj, i) => (
                        <div key={i} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                          <div className="font-bold text-slate-200">{proj.projectName}</div>
                          <div className="text-slate-400 mt-1">KES {(proj.allocatedKes / 1000000).toFixed(1)}M</div>
                          <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-semibold ${
                            proj.status === 'Completed'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : proj.status === 'Ongoing'
                              ? 'bg-blue-950 text-blue-400 border border-blue-800'
                              : 'bg-rose-950 text-rose-400 border border-rose-800'
                          }`}>
                            {proj.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Wards list */}
                {wards.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-400 block mb-2">
                      Electoral Wards ({wards.length} Active in Record):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {wards.map(w => (
                        <div key={w.id} className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs">
                          <span className="font-medium text-white">{w.name} Ward</span>
                          <span className="text-slate-500 ml-2">({w.registeredVoters.toLocaleString()} voters)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

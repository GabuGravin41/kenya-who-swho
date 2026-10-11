import React, { useState, useEffect } from 'react';
import { EliteHangoutVenue } from '@kenya-elections/shared-types';
import { 
  Building2, 
  Search, 
  Church, 
  Flag, 
  Wine, 
  ShieldAlert, 
  Clock, 
  MapPin, 
  Lock, 
  DollarSign, 
  UserCheck, 
  Info 
} from 'lucide-react';
import { api } from '../api';

export const EliteHangoutsExplorer: React.FC = () => {
  const [venues, setVenues] = useState<EliteHangoutVenue[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVenue, setSelectedVenue] = useState<EliteHangoutVenue | null>(null);

  useEffect(() => {
    api.getEliteHangouts(selectedCategory).then(data => {
      setVenues(data);
      if (data.length > 0) {
        setSelectedVenue(data[0]);
      }
    });
  }, [selectedCategory]);

  const categories = [
    { label: 'All Spaces', value: 'All', icon: Building2 },
    { label: 'Elite Churches & Shrines', value: 'Church', icon: Church },
    { label: 'Golf & Country Clubs', value: 'Golf', icon: Flag },
    { label: 'Private Members Clubs', value: 'Private', icon: Lock },
    { label: 'Hotel Lounges & Bars', value: 'Hotel', icon: Wine },
    { label: 'Political Saloons', value: 'Saloon', icon: Wine },
  ];

  const filteredVenues = venues.filter(v => {
    const q = searchQuery.toLowerCase();
    const matchesName = v.name.toLowerCase().includes(q);
    const matchesArea = v.neighborhood.toLowerCase().includes(q);
    const matchesPatrons = v.frequentPatrons.some(p => p.name.toLowerCase().includes(q) || p.factionOrAffiliation.toLowerCase().includes(q));
    const matchesSignificance = v.politicalSignificance.toLowerCase().includes(q);
    return matchesName || matchesArea || matchesPatrons || matchesSignificance;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5" />
              Power Hangouts & Access Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Where Kenyan Power Deals Are Cut
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Deals, tender concessions, and coalition realignments in Kenya rarely happen in boardroom minutes. 
              Track Sunday morning church VIP pews, Saturday morning 19th Hole golf verandas, private members clubs, and late-night whiskey lounges—including exact access and entry rules.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-slate-950 border border-slate-800 px-4 py-3 rounded-2xl text-right">
              <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Monitored Sanctuaries</span>
              <span className="text-xl font-bold font-mono text-amber-400">{venues.length} Elite Spaces</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search venue, neighborhood, or patron (e.g. Karen, Sudi, Ruto)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Main Grid: Left List, Right Detailed Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Venue Cards List */}
        <div className="lg:col-span-5 space-y-3 max-h-[780px] overflow-y-auto pr-1">
          {filteredVenues.length > 0 ? (
            filteredVenues.map(venue => {
              const isSelected = selectedVenue?.id === venue.id;
              return (
                <div
                  key={venue.id}
                  onClick={() => setSelectedVenue(venue)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/40'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400">
                        {venue.category}
                      </span>
                      <h4 className="font-extrabold text-white text-base mt-1.5 truncate">
                        {venue.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{venue.neighborhood}, {venue.city}</span>
                      </div>
                    </div>
                    {venue.accessRequirements.membershipFeeKes && (
                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-slate-500 block">Joining Fee</span>
                        <span className="text-xs font-mono font-bold text-amber-400">
                          KES {(venue.accessRequirements.membershipFeeKes / 1000000).toFixed(1)}M
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Frequent Patrons Summary Badge */}
                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[11px] truncate">
                      Patrons: <strong className="text-slate-200">{venue.frequentPatrons.map(p => p.name).slice(0, 2).join(', ')}</strong>
                      {venue.frequentPatrons.length > 2 && ` +${venue.frequentPatrons.length - 2} more`}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 shrink-0">
                      {venue.accessRequirements.publicAccessibility}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 text-center text-slate-500 text-xs">
              No elite spaces match your search criteria.
            </div>
          )}
        </div>

        {/* Right Column: Deep-Dive Access & Intelligence Guide */}
        <div className="lg:col-span-7">
          {selectedVenue ? (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              {/* Image & Title Header */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-800">
                <img 
                  src={selectedVenue.photoUrl} 
                  alt={selectedVenue.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500 text-slate-950 shadow">
                      {selectedVenue.category}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-2 leading-tight">
                      {selectedVenue.name}
                    </h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {selectedVenue.coordinatesOrAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Prime Timing & Accessibility Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4" />
                    Prime Meeting Window
                  </div>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {selectedVenue.primeMeetingTimes}
                  </p>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    <UserCheck className="w-4 h-4" />
                    Accessibility Classification
                  </div>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {selectedVenue.accessRequirements.publicAccessibility}
                  </p>
                </div>
              </div>

              {/* Political Significance Dossier */}
              <div className="bg-amber-950/20 border border-amber-900/50 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5">
                  <Info className="w-4 h-4" />
                  Political Significance & Dealmaking History
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedVenue.politicalSignificance}
                </p>
              </div>

              {/* Frequent High-Profile Patrons */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <span>Regular High-Profile Patrons & Power Brokers</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedVenue.frequentPatrons.map((patron, i) => (
                    <div key={i} className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">{patron.name}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{patron.role}</div>
                      </div>
                      <div className="mt-2 text-[10px] font-medium text-amber-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 self-start">
                        {patron.factionOrAffiliation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Enter: Infiltration & Access Architecture */}
              <div className="border-t border-slate-800 pt-5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  How to Access & Enter This Space
                </h4>

                <div className="space-y-3 text-xs">
                  {/* Financial Requirements */}
                  {(selectedVenue.accessRequirements.membershipFeeKes || selectedVenue.accessRequirements.entryFeeOrMinimumSpendKes) && (
                    <div className="bg-slate-950/40 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-300">
                        <DollarSign className="w-4 h-4 text-emerald-400" />
                        <span>Financial Requirements:</span>
                      </div>
                      <div className="font-mono font-bold text-white text-right">
                        {selectedVenue.accessRequirements.membershipFeeKes && (
                          <span className="text-amber-400 mr-2">Joining Fee: KES {(selectedVenue.accessRequirements.membershipFeeKes).toLocaleString()}</span>
                        )}
                        {selectedVenue.accessRequirements.entryFeeOrMinimumSpendKes && (
                          <span className="text-emerald-400">Min Spend/Guest: KES {selectedVenue.accessRequirements.entryFeeOrMinimumSpendKes.toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Vetting rules */}
                  {selectedVenue.accessRequirements.membershipVetting && (
                    <div className="bg-slate-950/40 border border-slate-800 p-3 rounded-xl">
                      <strong className="text-amber-300 block mb-1">Vetting & Admission Rules:</strong>
                      <span className="text-slate-300 leading-relaxed">{selectedVenue.accessRequirements.membershipVetting}</span>
                    </div>
                  )}

                  {/* Dress Code */}
                  <div className="bg-slate-950/40 border border-slate-800 p-3 rounded-xl">
                    <strong className="text-amber-300 block mb-1">Dress Code Standards:</strong>
                    <span className="text-slate-300 leading-relaxed">{selectedVenue.accessRequirements.dressCode}</span>
                  </div>

                  {/* Protocol & Field Security Advice */}
                  <div className="bg-slate-950/40 border border-slate-800 p-3 rounded-xl space-y-1.5">
                    <strong className="text-amber-300 block mb-1">Security Screening & Field Protocol:</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 leading-relaxed">
                      {selectedVenue.accessRequirements.protocolAndSecurityTips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-500 text-sm">
              Select an elite space from the left column to view its detailed access architecture and political patronage profile.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

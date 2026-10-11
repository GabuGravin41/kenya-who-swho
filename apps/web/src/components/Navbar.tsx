import React from 'react';
import { 
  Vote, 
  ShieldAlert, 
  MapPin, 
  Building2, 
  Briefcase, 
  Radio, 
  Wifi, 
  WifiOff,
  Lock,
  Flame,
  Target
} from 'lucide-react';

export type NavigationTab = 
  | 'politicians' 
  | 'scorecard' 
  | 'roll_call'
  | 'battlegrounds'
  | 'counties' 
  | 'bureaucracy' 
  | 'power_brokers' 
  | 'elite_hangouts' 
  | 'crowd_intel';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  isOnline: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, isOnline }) => {
  const navItems = [
    { id: 'politicians', label: 'Politicians & Aspirants', icon: Vote },
    { id: 'scorecard', label: 'Hansard Scorecards', icon: ShieldAlert },
    { id: 'roll_call', label: 'Roll-Call Votes', icon: Flame },
    { id: 'battlegrounds', label: '2027 Battlegrounds', icon: Target },
    { id: 'counties', label: 'Counties & CDF', icon: MapPin },
    { id: 'bureaucracy', label: 'State Bureaucracy', icon: Building2 },
    { id: 'power_brokers', label: 'Financial Moguls', icon: Briefcase },
    { id: 'elite_hangouts', label: 'Power Hangouts', icon: Lock },
    { id: 'crowd_intel', label: 'Crowd Intel', icon: Radio },
  ] as const;


  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & National Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-amber-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="font-extrabold text-white text-lg tracking-wider">KE</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-tight text-lg">Kenya Who's Who</span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400">
                  Intel 2027
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Constitutional Governance, Candidate Dossiers & Delivery Audit
              </p>
            </div>
          </div>

          {/* Online/Offline status */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
              isOnline 
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60' 
                : 'bg-amber-950/40 text-amber-400 border-amber-800/60'
            }`}>
              {isOnline ? (
                <>
                  <Wifi className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Online Sync</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5" />
                  <span>Offline PWA Ready</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none border-t border-slate-900/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

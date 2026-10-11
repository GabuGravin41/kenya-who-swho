import React from 'react';
import { Politician, PoliticianScorecard, PoliticalParty } from '@kenya-elections/shared-types';
import { AlertTriangle, Award, CheckCircle, TrendingUp, Users, Mic, ScrollText } from 'lucide-react';

interface PoliticianCardProps {
  politician: Politician & { scorecard?: PoliticianScorecard; party?: PoliticalParty };
  onSelect: (politician: Politician & { scorecard?: PoliticianScorecard; party?: PoliticalParty }) => void;
}

export const PoliticianCard: React.FC<PoliticianCardProps> = ({ politician, onSelect }) => {
  const { scorecard, party } = politician;
  const isSilent = scorecard?.zeroActivityFlag || scorecard?.activityTier === 'Ghost/Silent';

  const positionLabel = (pos: string) => {
    switch (pos) {
      case 'president': return 'President of Kenya';
      case 'deputy_president': return 'Deputy President';
      case 'governor': return 'County Governor';
      case 'senator': return 'Senator';
      case 'mp': return 'Member of Parliament (MP)';
      case 'women_rep': return 'County Women Representative';
      case 'mca': return 'Member of County Assembly (MCA)';
      case 'aspirant': return '2027 Political Contender';
      default: return pos.toUpperCase();
    }
  };

  return (
    <div 
      onClick={() => onSelect(politician)}
      className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-slate-950/50 flex flex-col justify-between"
    >
      <div>
        {/* Header: Photo, Names, Party badge */}
        <div className="flex items-start gap-4">
          <div className="relative">
            <img 
              src={politician.photoUrl} 
              alt={politician.name}
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover ring-2 ring-slate-800 group-hover:ring-emerald-500/50 transition-all"
            />
            {politician.isIncumbent && (
              <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-1 rounded-full text-[10px] shadow" title="Incumbent Office Holder">
                <CheckCircle className="w-3 h-3" />
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span 
                className="text-xs font-bold px-2 py-0.5 rounded-md border text-slate-900 font-mono"
                style={{ 
                  backgroundColor: party?.colorHex || '#64748b',
                  borderColor: party?.colorHex || '#64748b'
                }}
              >
                {party?.code || 'IND'}
              </span>
              <span className="text-[11px] text-slate-400 font-medium truncate">
                {politician.coalition}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mt-1 truncate">
              {politician.name}
            </h3>

            {politician.aliases.length > 0 && (
              <p className="text-xs text-slate-400 italic truncate">
                "{politician.aliases.join('", "')}"
              </p>
            )}

            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-300">
              <span className="font-semibold text-emerald-400">
                {positionLabel(politician.currentPosition)}
              </span>
            </div>
          </div>
        </div>

        {/* Oscar Sudi / Inaction Warning Banner */}
        {isSilent && (
          <div className="mt-3.5 bg-rose-950/40 border border-rose-900/80 rounded-xl p-2.5 flex items-start gap-2 text-rose-300">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-relaxed">
              <span className="font-bold">Zero Floor Speech Warning: </span>
              {scorecard?.flagExplanation || "Recorded zero spoken Hansard contributions on the House floor throughout this term."}
            </div>
          </div>
        )}

        {/* 2027 Election Aspirations */}
        {politician.vyingForPosition && (
          <div className="mt-3 bg-slate-950/60 border border-slate-800/80 rounded-xl p-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">2027 Race Intention:</span>
              <span className="text-amber-400 font-bold uppercase tracking-wide">
                Vying for {positionLabel(politician.vyingForPosition)}
              </span>
            </div>
            {politician.campaignSlogan && (
              <p className="text-[11px] text-slate-400 mt-1 italic truncate">
                Slogan: "{politician.campaignSlogan}"
              </p>
            )}
          </div>
        )}

        {/* Performance Metrics Summary */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-center">
          <div className="bg-slate-950/40 rounded-lg p-2">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
              <Mic className="w-3 h-3 text-slate-400" />
              <span>Hansard</span>
            </div>
            <div className={`text-sm sm:text-base font-bold mt-0.5 ${
              (scorecard?.hansardSpeechCount ?? 0) === 0 ? 'text-rose-400' : 'text-slate-200'
            }`}>
              {scorecard?.hansardSpeechCount ?? 'N/A'}
            </div>
          </div>

          <div className="bg-slate-950/40 rounded-lg p-2">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
              <ScrollText className="w-3 h-3 text-slate-400" />
              <span>Bills</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-slate-200 mt-0.5">
              {scorecard?.billsSponsoredCount ?? '0'}
            </div>
          </div>

          <div className="bg-slate-950/40 rounded-lg p-2">
            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
              <Award className="w-3 h-3 text-emerald-400" />
              <span>Delivery</span>
            </div>
            <div className={`text-sm sm:text-base font-bold mt-0.5 ${
              (scorecard?.overallDeliveryScore ?? 0) < 40 ? 'text-rose-400' : 'text-emerald-400'
            }`}>
              {scorecard?.overallDeliveryScore ? `${scorecard.overallDeliveryScore}%` : 'N/A'}
            </div>
          </div>
        </div>
      </div>

      {/* Footer stats: Polls & Supporters */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-slate-400" />
          <span>{(politician.estimatedSupportersCount / 1000).toFixed(0)}k Base</span>
        </div>

        <div className="flex items-center gap-1 font-medium text-emerald-400">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Poll: {politician.latestPollScorePercentage}%</span>
        </div>
      </div>
    </div>
  );
};

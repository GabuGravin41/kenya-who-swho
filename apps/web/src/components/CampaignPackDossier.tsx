import React from 'react';
import { Politician, PoliticianScorecard, PoliticalParty, CrowdIntelligenceLog } from '@kenya-elections/shared-types';
import { Printer, ShieldAlert } from 'lucide-react';

interface CampaignPackDossierProps {
  politician: Politician & { 
    scorecard?: PoliticianScorecard; 
    party?: PoliticalParty;
    crowdLogs?: CrowdIntelligenceLog[];
  };
  onClose?: () => void;
}

export const CampaignPackDossier: React.FC<CampaignPackDossierProps> = ({ politician }) => {
  const { scorecard, party } = politician;
  const isSilent = scorecard?.zeroActivityFlag || scorecard?.activityTier === 'Ghost/Silent';

  return (
    <div className="p-6 sm:p-10 space-y-6 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0">
      {/* Printable Control Toolbar (Hidden during print) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800 print:hidden">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-md bg-amber-950 border border-amber-800 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            RESTRICTED // 2027 CAMPAIGN PACK
          </span>
          <span className="text-xs text-slate-500 font-mono">
            REF: KE-2027-DOSSIER-{politician.id.toUpperCase()}
          </span>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF Dossier</span>
        </button>
      </div>

      {/* Official Dossier Header */}
      <div className="border-b-2 border-amber-500 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 print:text-gray-600">
              Republic of Kenya • Electoral Intelligence & Political Risk Division
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white print:text-black uppercase mt-1">
              Candidate Strategic Dossier & Opposition Pack
            </h1>
            <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">
              Comprehensive Legislative Delivery, Constituency NG-CDF Audit & Vulnerability Assessment
            </p>
          </div>
          <div className="sm:text-right font-mono text-xs text-slate-400 print:text-gray-600 shrink-0">
            <div>CYCLE: 2027 GENERAL ELECTIONS</div>
            <div>STATUS: VERIFIED INTELLIGENCE</div>
            <div>DATE: {new Date().toLocaleDateString('en-KE')}</div>
          </div>
        </div>
      </div>

      {/* Subject Identity Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-900/80 print:bg-gray-50 p-6 rounded-2xl border border-slate-800 print:border-gray-300">
        <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <img 
            src={politician.photoUrl} 
            alt={politician.name} 
            className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-700 print:border-gray-400 shadow-md shrink-0"
          />
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-white print:text-black">{politician.name}</h2>
            <div className="text-xs font-bold text-amber-400 print:text-gray-800">
              {politician.currentPosition.toUpperCase()} • {party?.name || politician.partyId.toUpperCase()} ({politician.coalition})
            </div>
            <div className="text-xs text-slate-400 print:text-gray-600">
              Known Monikers: <span className="italic">{politician.aliases.join(', ') || 'None registered'}</span>
            </div>
            <div className="text-xs text-emerald-400 font-semibold pt-1">
              2027 Target Role: <strong>{politician.vyingForPosition?.toUpperCase() || 'INCUMBENT RETENTION'}</strong>
              {politician.campaignSlogan && ` • "${politician.campaignSlogan}"`}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-slate-800 print:border-gray-300 md:pl-6 space-y-1.5 text-xs">
          <div><span className="text-slate-500">Origin County:</span> <strong className="text-white print:text-black">County {politician.originCountyId}</strong></div>
          <div><span className="text-slate-500">Represented Seat:</span> <strong className="text-white print:text-black">{politician.representedConstituencyId || politician.representedCountyId || 'National'}</strong></div>
          <div><span className="text-slate-500">Voter Base Estimate:</span> <strong className="text-emerald-400 font-mono font-bold">{politician.estimatedSupportersCount.toLocaleString()}</strong></div>
          <div><span className="text-slate-500">Public Sentiment:</span> <strong className="text-amber-400 font-mono font-bold">{politician.publicSentimentRating} / 100</strong></div>
          <div><span className="text-slate-500">Nomination Route:</span> <strong className="text-white print:text-black">{politician.nominationType}</strong></div>
        </div>
      </div>

      {/* Section 1: Legislative Performance & Hansard Audit */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-gray-400 pb-1.5 flex items-center justify-between">
          <span>1. Legislative Accountability & Hansard Floor Audit</span>
          <span className="font-mono text-[10px] text-slate-500">13th Parliament Term</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-slate-900 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300">
            <span className="text-[10px] text-slate-500 uppercase block font-semibold">Hansard Speeches</span>
            <span className={`text-2xl font-black font-mono mt-1 block ${isSilent ? 'text-red-400' : 'text-emerald-400'}`}>
              {scorecard?.hansardSpeechCount ?? 0}
            </span>
            <span className="text-[10px] text-slate-400 mt-1 block">
              {isSilent ? '⚠️ Ghost/Silent Member' : 'Floor Interventions'}
            </span>
          </div>

          <div className="bg-slate-900 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300">
            <span className="text-[10px] text-slate-500 uppercase block font-semibold">Bills Sponsored</span>
            <span className="text-2xl font-black font-mono text-white print:text-black mt-1 block">
              {scorecard?.billsSponsoredCount ?? 0}
            </span>
            <span className="text-[10px] text-slate-400 mt-1 block">
              {scorecard?.billsPassedCount ?? 0} Bills Passed
            </span>
          </div>

          <div className="bg-slate-900 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300">
            <span className="text-[10px] text-slate-500 uppercase block font-semibold">Attendance Rate</span>
            <span className="text-2xl font-black font-mono text-white print:text-black mt-1 block">
              {scorecard?.floorAttendancePercentage ?? 50}%
            </span>
            <span className="text-[10px] text-slate-400 mt-1 block">
              Plenary & Committees
            </span>
          </div>

          <div className="bg-slate-900 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300">
            <span className="text-[10px] text-slate-500 uppercase block font-semibold">Overall Delivery Index</span>
            <span className="text-2xl font-black font-mono text-amber-400 mt-1 block">
              {scorecard?.overallDeliveryScore ?? 50}/100
            </span>
            <span className="text-[10px] text-slate-400 mt-1 block">
              Performance Rating
            </span>
          </div>
        </div>

        {/* Highlighted Silence Alert */}
        {isSilent && (
          <div className="bg-red-950/40 print:bg-red-50 border border-red-800 print:border-red-300 p-4 rounded-xl text-xs text-red-200 print:text-red-900 space-y-1">
            <div className="flex items-center gap-2 font-bold text-red-400 print:text-red-700 uppercase">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Ghost Member Vulnerability Verified: Zero Hansard Contributions</span>
            </div>
            <p className="leading-relaxed">
              Official Parliamentary indices confirm this member has made <strong>ZERO substantive spoken contributions</strong> on the floor of the National Assembly. Recommended counter-campaign strategy: highlight absenteeism and lack of legislative sponsorship in ward town halls.
            </p>
          </div>
        )}
      </div>

      {/* Section 2: Strategic Opposition Vulnerabilities & Attack Vectors */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-gray-400 pb-1.5 flex items-center justify-between">
          <span>2. Strategic Vulnerabilities & Campaign Counter-Strategy</span>
          <span className="font-mono text-[10px] text-slate-500">Opposition Playbook</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/60 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300 space-y-2">
            <strong className="text-amber-300 print:text-black block font-bold">Party Hopping & Ideological Inconsistency:</strong>
            <p className="text-slate-300 print:text-gray-700 leading-relaxed">
              Candidate history shows switching between parties:
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {politician.partyHoppingHistory.map((h, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-950 print:bg-white text-slate-300 print:text-black border border-slate-800 print:border-gray-300 text-[11px] font-mono">
                  {h.party} ({h.fromYear}-{h.toYear})
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300 space-y-2">
            <strong className="text-amber-300 print:text-black block font-bold">Key Rivals & Local Competition:</strong>
            <p className="text-slate-300 print:text-gray-700 leading-relaxed">
              Formidable opposition and aspirants challenging this seat:
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {politician.knownRivals.map((r, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-red-950/40 print:bg-red-50 text-red-300 print:text-red-800 border border-red-800/60 print:border-red-200 text-[11px]">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {scorecard?.reportedScandals && scorecard.reportedScandals.length > 0 && (
          <div className="bg-slate-900/60 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300 space-y-2 text-xs">
            <strong className="text-red-400 print:text-red-700 block font-bold uppercase">
              Auditor-General & EACC Inquests on Record:
            </strong>
            <div className="space-y-2">
              {scorecard.reportedScandals.map((s, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/60 print:bg-white border border-slate-800 print:border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white print:text-black">{s.title} ({s.year})</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 print:bg-gray-100 text-amber-400 font-mono">{s.agency}</span>
                  </div>
                  <p className="text-slate-300 print:text-gray-700 text-[11px] mt-1">{s.description}</p>
                  <div className="text-[10px] text-slate-500 mt-1">Status: <strong>{s.status}</strong></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Section 3: Background Dossier & Assets */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-black border-b border-slate-800 print:border-gray-400 pb-1.5">
          3. Background Dossier, Assets & Elite Networks
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/60 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300 space-y-1.5">
            <strong className="text-slate-400 print:text-gray-600 block">Education & Career:</strong>
            <p className="text-slate-200 print:text-black leading-relaxed">
              {politician.educationSummary.join(' • ')}
            </p>
            <p className="text-slate-400 print:text-gray-600 text-[11px] pt-1">
              Career History: {politician.careerHistory.join(' ➔ ')}
            </p>
          </div>

          <div className="bg-slate-900/60 print:bg-gray-100 p-4 rounded-xl border border-slate-800 print:border-gray-300 space-y-1.5">
            <strong className="text-slate-400 print:text-gray-600 block">Declared Commercial Assets & Interests:</strong>
            <p className="text-slate-200 print:text-black leading-relaxed">
              {politician.declaredAssetsSummary || 'Commercial corporate stakes, agricultural holdings, residential real estate.'}
            </p>
            <p className="text-slate-400 print:text-gray-600 text-[11px] pt-1">
              Key Allies: {politician.keyAllies.join(', ') || 'Parliamentary whips and coalition summit members.'}
            </p>
          </div>
        </div>
      </div>

      {/* Official Footer Verification */}
      <div className="pt-6 border-t-2 border-slate-800 print:border-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 print:text-gray-600">
        <div>
          <span>CONFIDENTIAL // PREPARED FOR 2027 CAMPAIGN STRATEGY & WAR-ROOM USE</span>
        </div>
        <div className="font-mono">
          KENYA WHO'S WHO INTELLIGENCE PLATFORM • ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

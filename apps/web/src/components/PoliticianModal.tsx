import React, { useState } from 'react';
import { Politician, PoliticianScorecard, PoliticalParty, CrowdIntelligenceLog } from '@kenya-elections/shared-types';
import { 
  X, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  ShieldAlert, 
  History, 
  Users, 
  Plus, 
  Landmark, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { api } from '../api';

interface PoliticianModalProps {
  politician: Politician & { 
    scorecard?: PoliticianScorecard; 
    party?: PoliticalParty;
    crowdLogs?: CrowdIntelligenceLog[];
  };
  onClose: () => void;
  onRefresh?: () => void;
}

export const PoliticianModal: React.FC<PoliticianModalProps> = ({ politician, onClose, onRefresh }) => {
  const { scorecard, party } = politician;
  const isSilent = scorecard?.zeroActivityFlag || scorecard?.activityTier === 'Ghost/Silent';

  const [activeTab, setActiveTab] = useState<'profile' | 'scorecard' | 'lineage' | 'crowd'>('profile');
  const [showAddLog, setShowAddLog] = useState(false);
  const [logForm, setLogForm] = useState({
    title: '',
    description: '',
    category: 'Development Proof' as const,
    authorAlias: '',
    location: '',
  });
  const [submittingLog, setSubmittingLog] = useState(false);

  const handleCreateLog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!logForm.title || !logForm.description || !logForm.authorAlias) return;

    setSubmittingLog(true);
    await api.addCrowdLog({
      politicianId: politician.id,
      countyId: politician.representedCountyId || politician.originCountyId,
      category: logForm.category,
      title: logForm.title,
      description: logForm.description,
      authorAlias: logForm.authorAlias,
      location: logForm.location || 'Field Watch',
      evidenceLinks: []
    });
    setSubmittingLog(false);
    setShowAddLog(false);
    setLogForm({ title: '', description: '', category: 'Development Proof', authorAlias: '', location: '' });
    if (onRefresh) onRefresh();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span 
              className="text-xs font-bold px-2.5 py-1 rounded-md text-slate-950 font-mono"
              style={{ backgroundColor: party?.colorHex || '#10b981' }}
            >
              {party?.code || 'IND'}
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">{politician.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Section */}
        <div className="p-6 bg-gradient-to-b from-slate-950/80 to-slate-900 border-b border-slate-800/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img 
              src={politician.photoUrl} 
              alt={politician.name} 
              className="w-24 h-24 rounded-2xl object-cover ring-2 ring-emerald-500/40 shadow-xl"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-emerald-400">
                  {politician.currentPosition.toUpperCase()}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  Origin: County {politician.originCountyId}
                </span>
                {politician.officeHeldSince && (
                  <>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs text-slate-400">
                      In office since {politician.officeHeldSince}
                    </span>
                  </>
                )}
              </div>

              {politician.aliases.length > 0 && (
                <p className="text-sm text-slate-400 italic mt-1">
                  Monikers: {politician.aliases.join(', ')}
                </p>
              )}

              {/* 2027 Ambition banner */}
              {politician.vyingForPosition && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-950/40 border border-amber-900/60 text-amber-300 text-xs">
                  <span className="font-semibold uppercase tracking-wider">2027 Election Race:</span>
                  <span>Targeting <strong>{politician.vyingForPosition.toUpperCase()}</strong></span>
                  {politician.campaignSlogan && <span className="text-amber-400 italic font-serif">"{politician.campaignSlogan}"</span>}
                </div>
              )}
            </div>
          </div>

          {/* Dossier Tabs */}
          <div className="flex space-x-2 mt-6 pt-4 border-t border-slate-800/80 overflow-x-auto">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'profile'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Background & Origins
            </button>
            <button
              onClick={() => setActiveTab('scorecard')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'scorecard'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Hansard & Deliverables {isSilent && '⚠️'}
            </button>
            <button
              onClick={() => setActiveTab('lineage')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'lineage'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Party History & Nominations
            </button>
            <button
              onClick={() => setActiveTab('crowd')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'crowd'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Crowd Audits
            </button>
          </div>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Origin Story */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                  <Landmark className="w-4 h-4 text-emerald-400" />
                  Origin Story & Roots
                </h3>
                <p className="prose-dossier text-slate-300 text-base leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80">
                  {politician.originStory}
                </p>
              </div>

              {/* Education */}
              {politician.educationSummary.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    Education Pedigree
                  </h3>
                  <div className="space-y-2">
                    {politician.educationSummary.map((edu, idx) => (
                      <div key={idx} className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-3 text-sm text-slate-200">
                        {edu}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Trajectory */}
              {politician.careerHistory.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                    Career & Public Service History
                  </h3>
                  <div className="space-y-2">
                    {politician.careerHistory.map((item, idx) => (
                      <div key={idx} className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-3 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Declared Assets */}
              {politician.declaredAssetsSummary && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    Declared Holdings & Economic Interests
                  </h3>
                  <div className="bg-slate-950/40 border border-slate-800/60 rounded-xl p-3.5 text-sm text-slate-300 leading-relaxed">
                    {politician.declaredAssetsSummary}
                  </div>
                </div>
              )}

              {/* Allies & Rivals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-950/10 border border-emerald-900/40 rounded-2xl p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
                    <Users className="w-4 h-4" />
                    Key Political Allies
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {politician.keyAllies.map((ally, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {ally}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-950/10 border border-rose-900/40 rounded-2xl p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2">
                    <Users className="w-4 h-4" />
                    Known Rivals & Competitors
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {politician.knownRivals.map((rival, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        {rival}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scorecard' && (
            <div className="space-y-6">
              {/* Inaction Warning for Silent Politicians like Oscar Sudi */}
              {isSilent && (
                <div className="bg-rose-950/30 border border-rose-800 rounded-2xl p-5 text-rose-200">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldAlert className="w-6 h-6 text-rose-400" />
                    <h4 className="text-base font-bold text-rose-300">
                      Zero Hansard Speech & Floor Contribution Flag
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-rose-200/90">
                    {scorecard?.flagExplanation}
                  </p>
                </div>
              )}

              {/* Numbers Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-center">
                  <div className="text-xs font-medium text-slate-400">Hansard Speeches</div>
                  <div className={`text-2xl font-bold mt-1 ${
                    (scorecard?.hansardSpeechCount ?? 0) === 0 ? 'text-rose-400' : 'text-emerald-400'
                  }`}>
                    {scorecard?.hansardSpeechCount ?? 0}
                  </div>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-center">
                  <div className="text-xs font-medium text-slate-400">Bills Sponsored</div>
                  <div className="text-2xl font-bold text-slate-100 mt-1">
                    {scorecard?.billsSponsoredCount ?? 0}
                  </div>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-center">
                  <div className="text-xs font-medium text-slate-400">Committee Attendance</div>
                  <div className="text-2xl font-bold text-slate-100 mt-1">
                    {scorecard?.committeeAttendancePercentage ?? 0}%
                  </div>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-center">
                  <div className="text-xs font-medium text-slate-400">Overall Delivery</div>
                  <div className={`text-2xl font-bold mt-1 ${
                    (scorecard?.overallDeliveryScore ?? 0) < 40 ? 'text-rose-400' : 'text-emerald-400'
                  }`}>
                    {scorecard?.overallDeliveryScore ?? 0}%
                  </div>
                </div>
              </div>

              {/* Notable Contributions */}
              {scorecard?.notableContributions && scorecard.notableContributions.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Verified Parliamentary & Field Contributions
                  </h4>
                  <div className="space-y-2">
                    {scorecard.notableContributions.map((contrib, i) => (
                      <div key={i} className="flex items-start gap-2 bg-slate-950/40 border border-slate-800/60 p-3 rounded-xl text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scandals & Inquiries */}
              {scorecard?.reportedScandals && scorecard.reportedScandals.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    Ethics & Integrity Scrutiny (EACC, DCI, Courts)
                  </h4>
                  <div className="space-y-3">
                    {scorecard.reportedScandals.map((scandal, i) => (
                      <div key={i} className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-rose-200">{scandal.title}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                            {scandal.agency} ({scandal.year})
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {scandal.description}
                        </p>
                        <div className="mt-2 text-[11px] font-semibold text-amber-400">
                          Status: {scandal.status} {scandal.amountKes ? `• Disputed Sum: KES ${(scandal.amountKes / 1000000).toFixed(1)}M` : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'lineage' && (
            <div className="space-y-6">
              {/* Nomination Info */}
              <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Nomination Credentials & Backing
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-slate-500 block text-xs">Nomination Type:</span>
                    <span className="text-white font-medium">{politician.nominationType}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Nominated / Backed By:</span>
                    <span className="text-emerald-400 font-medium">{politician.nominatedBy || 'Direct Grassroots'}</span>
                  </div>
                </div>
              </div>

              {/* Party Hopping History Timeline */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <History className="w-4 h-4 text-amber-400" />
                  Party Hopping & Coalition History
                </h4>
                <div className="relative border-l-2 border-slate-800 ml-3 space-y-6 py-2">
                  {politician.partyHoppingHistory.map((step, idx) => (
                    <div key={idx} className="relative pl-6">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500"></div>
                      <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-sm">{step.party}</span>
                          <span className="text-xs text-slate-400 font-mono">
                            {step.fromYear} — {step.toYear}
                          </span>
                        </div>
                        {step.notes && (
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {step.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'crowd' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Citizen Field Audits
                  </h4>
                  <p className="text-xs text-slate-500">
                    Crowdsourced observations submitted by constituents
                  </p>
                </div>
                <button
                  onClick={() => setShowAddLog(!showAddLog)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Submit Log</span>
                </button>
              </div>

              {showAddLog && (
                <form onSubmit={handleCreateLog} className="bg-slate-950 border border-emerald-800/60 rounded-2xl p-4 space-y-3">
                  <h5 className="text-xs font-bold text-emerald-400">Log New Ground Verification</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="Title of observation" 
                      value={logForm.title}
                      onChange={e => setLogForm({ ...logForm, title: e.target.value })}
                      required
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <select
                      value={logForm.category}
                      onChange={e => setLogForm({ ...logForm, category: e.target.value as any })}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Development Proof">Development Proof</option>
                      <option value="Broken Promise">Broken Promise</option>
                      <option value="Floor Inaction">Floor Inaction</option>
                      <option value="Rally Report">Rally Report</option>
                      <option value="Scandal Alert">Scandal Alert</option>
                    </select>
                  </div>
                  <textarea 
                    rows={3} 
                    placeholder="Provide specific details, dates, or school/project names..."
                    value={logForm.description}
                    onChange={e => setLogForm({ ...logForm, description: e.target.value })}
                    required
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="Your Alias / Citizen handle" 
                      value={logForm.authorAlias}
                      onChange={e => setLogForm({ ...logForm, authorAlias: e.target.value })}
                      required
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <input 
                      type="text" 
                      placeholder="Location (e.g. Kapseret Center)" 
                      value={logForm.location}
                      onChange={e => setLogForm({ ...logForm, location: e.target.value })}
                      className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddLog(false)}
                      className="px-3 py-1.5 rounded-xl text-xs text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submittingLog}
                      className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                    >
                      {submittingLog ? 'Submitting...' : 'Post for Verification'}
                    </button>
                  </div>
                </form>
              )}

              {/* Existing Logs */}
              <div className="space-y-3">
                {politician.crowdLogs && politician.crowdLogs.length > 0 ? (
                  politician.crowdLogs.map(log => (
                    <div key={log.id} className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-emerald-400">{log.category}</span>
                        <span className="text-slate-500">{new Date(log.createdAt).toLocaleDateString()}</span>
                      </div>
                      <h5 className="text-sm font-bold text-white">{log.title}</h5>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{log.description}</p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-900">
                        <span>Reported by <strong>{log.authorAlias}</strong> ({log.location})</span>
                        <span className="text-emerald-400">{log.verifiedStatus}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-500 text-xs">
                    No field crowd reports submitted yet for {politician.name}. Be the first to log ground evidence!
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { CrowdIntelligenceLog } from '@kenya-elections/shared-types';
import { Radio, ThumbsUp, ThumbsDown, Plus, ShieldCheck, MapPin, Search } from 'lucide-react';
import { api } from '../api';

interface CrowdIntelligenceViewProps {
  logs: CrowdIntelligenceLog[];
  onRefresh: () => void;
}

export const CrowdIntelligenceView: React.FC<CrowdIntelligenceViewProps> = ({ logs, onRefresh }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [search, setSearch] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'Development Proof' as const,
    authorAlias: '',
    location: '',
  });

  const categories = ['All', 'Development Proof', 'Floor Inaction', 'Broken Promise', 'Rally Report', 'Scandal Alert'];

  const filtered = logs.filter(l => {
    const matchesCat = selectedCategory === 'All' || l.category === selectedCategory;
    const matchesSearch = l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase()) ||
      l.authorAlias.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleVote = async (id: string, type: 'up' | 'down') => {
    await api.voteCrowdLog(id, type);
    onRefresh();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.authorAlias) return;

    setSubmitting(true);
    await api.addCrowdLog({
      title: form.title,
      description: form.description,
      category: form.category,
      authorAlias: form.authorAlias,
      location: form.location || 'Field Report',
      evidenceLinks: []
    });
    setSubmitting(false);
    setShowSubmitModal(false);
    setForm({ title: '', description: '', category: 'Development Proof', authorAlias: '', location: '' });
    onRefresh();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Radio className="w-4 h-4 animate-pulse" />
              Grassroots Verification & Citizen Intelligence
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Community Field Reports & Ground Truths
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Crowdsourcing reality: Constituents across all 290 constituencies report actual school renovations, stalled clinics, empty rallies, and verified floor deliveries directly from the ground.
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Post Field Log</span>
          </button>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search ground reports..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full sm:w-60 bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Feed list */}
      <div className="space-y-4">
        {filtered.map(log => (
          <div 
            key={log.id}
            className="bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-3xl p-5 sm:p-6 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                  log.category === 'Floor Inaction'
                    ? 'bg-rose-950/60 text-rose-300 border-rose-800'
                    : log.category === 'Development Proof'
                    ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                    : 'bg-amber-950/60 text-amber-300 border-amber-800'
                }`}>
                  {log.category}
                </span>

                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {log.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {log.verifiedStatus}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-500">
                  {new Date(log.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mt-1">
              {log.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              {log.description}
            </p>

            {/* Footer with upvote/downvote and author */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div>
                Reported by: <span className="font-semibold text-slate-200">{log.authorAlias}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleVote(log.id, 'up')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 transition"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span className="font-mono">{log.upvotes}</span>
                </button>

                <button
                  onClick={() => handleVote(log.id, 'down')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-rose-400 transition"
                >
                  <ThumbsDown className="w-3.5 h-3.5" />
                  <span className="font-mono">{log.downvotes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1">Submit Ground Intelligence Log</h3>
            <p className="text-xs text-slate-400 mb-4">Post direct evidence or updates from your constituency or ward.</p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs text-slate-400 font-semibold block mb-1">Report Category</label>
                <select
                  value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value as any })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="Development Proof">Development Proof (Completed School, Road, Clinic)</option>
                  <option value="Broken Promise">Broken Promise / Stalled Project</option>
                  <option value="Floor Inaction">Floor Inaction / Absentee Representative</option>
                  <option value="Rally Report">Rally Report & Ground Turnout</option>
                  <option value="Scandal Alert">Scandal Alert / Misuse of Funds</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-400 font-semibold block mb-1">Report Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Kapseret Vocational Lab Remains Incomplete" 
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 font-semibold block mb-1">Field Observation Details</label>
                <textarea 
                  rows={4}
                  placeholder="Specify location, names of schools, or contractors involved..." 
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 font-semibold block mb-1">Your Alias</label>
                  <input 
                    type="text" 
                    placeholder="e.g. EldoretWatch" 
                    value={form.authorAlias}
                    onChange={e => setForm({ ...form, authorAlias: e.target.value })}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 font-semibold block mb-1">Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Lang'ata, Nairobi" 
                    value={form.location}
                    onChange={e => setForm({ ...form, location: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                >
                  {submitting ? 'Submitting...' : 'Post Ground Log'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

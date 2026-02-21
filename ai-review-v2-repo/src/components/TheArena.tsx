import { Trophy, ShieldCheck, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import llmData from '@/data/llms.json';

const getPerformanceColor = (perf: string) => {
  switch (perf.toLowerCase()) {
    case 'elite': return 'text-brand-success bg-brand-success/10';
    case 'very high': return 'text-brand-primary bg-brand-primary/10';
    case 'high': return 'text-brand-info bg-brand-info/10';
    default: return 'text-gray-600 bg-gray-100';
  }
};

export default function TheArena() {
  const freeLLMs = llmData.filter(llm => llm.price.toLowerCase().includes('free'));
  const paidLLMs = llmData.filter(llm => !llm.price.toLowerCase().includes('free') || llm.name.includes('GPT-4') || llm.name.includes('Claude 3 Opus')); // Note: our mock data is mostly free/freemium

  // If paid list is empty in mock data, let's just show top performers in the second column for demo
  const eliteLLMs = llmData.filter(llm => llm.performance.toLowerCase() === 'elite' || llm.performance.toLowerCase() === 'very high');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-warning rounded-full"></span>
          The Arena <span className="text-sm font-normal text-gray-400 ml-2">(LLM Leaderboards)</span>
        </h2>
        <div className="flex gap-2">
          <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">Daily Updates</button>
          <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary">Weekly Top 10</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Free Tier / Open Source Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <Zap size={18} className="text-brand-warning fill-brand-warning" />
            <h3 className="font-bold text-gray-700">Best Free / Open Access</h3>
          </div>
          
          <div className="cu-card overflow-hidden">
            <div className="bg-gray-50/50 border-b border-[var(--border)] px-4 py-2 flex items-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
              <div className="flex-1">Model</div>
              <div className="w-24 text-center">Performance</div>
              <div className="w-20 text-right">Context</div>
            </div>
            <div className="divide-y divide-[var(--border)]">
              {freeLLMs.map((llm, idx) => (
                <div key={idx} className="px-4 py-4 flex items-center hover:bg-gray-50/50 transition-colors group">
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 truncate group-hover:text-brand-primary transition-colors">{llm.name}</span>
                      <span className="text-[10px] text-gray-400 font-medium px-1.5 py-0.5 border border-gray-100 rounded bg-white">{llm.provider}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{llm.description}</p>
                  </div>
                  <div className="w-24 flex justify-center">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${getPerformanceColor(llm.performance)}`}>
                      {llm.performance}
                    </span>
                  </div>
                  <div className="w-20 text-right">
                    <span className="text-xs font-mono font-medium text-gray-600">{llm.context}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-gray-50/30 text-center border-t border-[var(--border)]">
              <button className="text-[11px] font-bold text-brand-primary hover:underline flex items-center justify-center gap-1 mx-auto">
                Full Rankings <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Paid / Enterprise Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <ShieldCheck size={18} className="text-brand-primary fill-brand-primary" />
            <h3 className="font-bold text-gray-700">Top Rated (Premium)</h3>
          </div>

          <div className="cu-card overflow-hidden">
            <div className="bg-gray-50/50 border-b border-[var(--border)] px-4 py-2 flex items-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
              <div className="flex-1">Model</div>
              <div className="w-24 text-center">Performance</div>
              <div className="w-20 text-right">Context</div>
            </div>
            <div className="divide-y divide-[var(--border)]">
              {eliteLLMs.length > 0 ? eliteLLMs.map((llm, idx) => (
                <div key={idx} className="px-4 py-4 flex items-center hover:bg-gray-50/50 transition-colors group">
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 truncate group-hover:text-brand-primary transition-colors">{llm.name}</span>
                      <Trophy size={12} className="text-brand-warning" />
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">Industry-leading benchmarks</p>
                  </div>
                  <div className="w-24 flex justify-center">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${getPerformanceColor(llm.performance)}`}>
                      {llm.performance}
                    </span>
                  </div>
                  <div className="w-20 text-right">
                    <span className="text-xs font-mono font-medium text-gray-600">{llm.context}</span>
                  </div>
                </div>
              )) : (
                <div className="p-8 text-center text-gray-400 italic text-sm">
                  Loading enterprise rankings...
                </div>
              )}
            </div>
            <div className="p-3 bg-gray-50/30 text-center border-t border-[var(--border)]">
              <button className="text-[11px] font-bold text-brand-primary hover:underline flex items-center justify-center gap-1 mx-auto">
                Compare All Models <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

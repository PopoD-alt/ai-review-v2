import { Newspaper, ExternalLink, Clock, Info, AlertTriangle, MessageSquare } from 'lucide-react';
import newsData from '@/data/news.json';

const getCategoryIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('leak')) return <AlertTriangle size={14} className="text-brand-warning" />;
  if (t.includes('rumor')) return <MessageSquare size={14} className="text-brand-info" />;
  if (t.includes('release') || t.includes('v') || t.includes('official')) {
    return <Info size={14} className="text-brand-success" />;
  }
  return <Newspaper size={14} className="text-brand-primary" />;
};

const getCategoryLabel = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('leak')) return 'Leak';
  if (t.includes('rumor')) return 'Rumor';
  if (t.includes('release') || t.includes('official')) return 'Official';
  return 'News';
};

const getCategoryColor = (label: string) => {
  switch (label) {
    case 'Leak': return 'bg-brand-warning/10 text-brand-warning border-brand-warning/20';
    case 'Rumor': return 'bg-brand-info/10 text-brand-info border-brand-info/20';
    case 'Official': return 'bg-brand-success/10 text-brand-success border-brand-success/20';
    default: return 'bg-brand-primary/10 text-brand-primary border-brand-primary/20';
  }
};

export default function AIIntel() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span>
          AI Intel <span className="text-sm font-normal text-gray-400 ml-2">(News & Leaks)</span>
        </h2>
        <div className="flex gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 rounded text-gray-500 border border-gray-200">Live Feed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, idx) => {
          const label = getCategoryLabel(news.title);
          return (
            <div key={idx} className="cu-card group flex flex-col h-full border-t-4 border-t-transparent hover:border-t-brand-primary transition-all duration-300">
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded border ${getCategoryColor(label)}`}>
                    {getCategoryIcon(news.title)}
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 text-[11px]">
                    <Clock size={12} className="mr-1" />
                    {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                
                <h3 className="font-bold text-base leading-snug group-hover:text-brand-primary transition-colors flex-grow">
                  {news.title}
                </h3>
                
                <p className="text-sm text-gray-500 mt-3 line-clamp-3 leading-relaxed">
                  {news.summary}
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <a 
                    href={news.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-primary hover:text-brand-primary-dark flex items-center gap-1 group/link"
                  >
                    View Source
                    <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <span className="w-1 h-1 bg-brand-success rounded-full"></span>
                    Verified
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

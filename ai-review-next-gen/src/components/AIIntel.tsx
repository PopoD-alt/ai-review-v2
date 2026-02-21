import { Newspaper, ExternalLink, Clock, Info, AlertTriangle } from 'lucide-react';
import newsData from '@/data/news.json';

const getCategoryIcon = (title: string) => {
  if (title.toLowerCase().includes('leak') || title.toLowerCase().includes('rumor')) {
    return <AlertTriangle size={14} className="text-brand-warning" />;
  }
  if (title.toLowerCase().includes('release') || title.toLowerCase().includes('v')) {
    return <Info size={14} className="text-brand-success" />;
  }
  return <Newspaper size={14} className="text-brand-primary" />;
};

const getCategoryLabel = (title: string) => {
  if (title.toLowerCase().includes('leak')) return 'Leak';
  if (title.toLowerCase().includes('rumor')) return 'Rumor';
  if (title.toLowerCase().includes('release')) return 'Official';
  return 'News';
};

export default function AIIntel() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-primary rounded-full"></span>
          AI Intel <span className="text-sm font-normal text-gray-400 ml-2">(News & Leaks)</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, idx) => (
          <div key={idx} className="cu-card group flex flex-col h-full border-l-2 border-l-transparent hover:border-l-brand-primary transition-all duration-300">
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                  {getCategoryIcon(news.title)}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                    {getCategoryLabel(news.title)}
                  </span>
                </div>
                <div className="flex items-center text-gray-400 text-[11px]">
                  <Clock size={12} className="mr-1" />
                  {news.date}
                </div>
              </div>
              
              <h3 className="font-bold text-base leading-snug group-hover:text-brand-primary transition-colors flex-grow">
                {news.title}
              </h3>
              
              <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                {news.summary}
              </p>
              
              <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                <a 
                  href={news.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-primary hover:text-brand-primary-dark flex items-center gap-1 group/link"
                >
                  Read Source
                  <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
                <span className="text-[10px] text-gray-400 italic">verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

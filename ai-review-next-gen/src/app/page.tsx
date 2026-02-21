import { 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  Star,
  Zap,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { name: 'Total AI Tools', value: '1,284', change: '+12%', icon: Zap, color: 'text-brand-primary', bg: 'bg-brand-primary/10' },
  { name: 'Avg. Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-brand-warning', bg: 'bg-brand-warning/10' },
  { name: 'Weekly Reviews', value: '42', change: '+5', icon: TrendingUp, color: 'text-brand-success', bg: 'bg-brand-success/10' },
];

const latestNews = [
  { id: 1, title: 'GPT-5 Rumors: Everything we know so far about the next frontier', date: '2h ago', category: 'News' },
  { id: 2, title: 'OpenClaw v2.4 Released with advanced subagent orchestration', date: '5h ago', category: 'Updates' },
  { id: 3, title: 'Top 10 AI Image Generators for Designers in 2026', date: 'Yesterday', category: 'Tutorials' },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Editor</h1>
        <p className="text-gray-500 mt-1">Here's what's happening with the AI Review ecosystem today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="cu-card p-6">
            <div className="flex items-center justify-between">
              <div className={stat.bg + " p-2 rounded-lg"}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <span className="text-brand-success text-sm font-medium flex items-center">
                {stat.change}
                <ArrowUpRight size={14} className="ml-1" />
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 font-medium">{stat.name}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Trending Content</h2>
            <button className="text-brand-primary text-sm font-medium hover:underline flex items-center">
              View all <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="cu-card p-4 flex gap-4 items-start group cursor-pointer">
                <div className="w-24 h-24 bg-gray-200 rounded-md shrink-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gray-100 rounded text-gray-600">Article</span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <Clock size={12} className="mr-1" /> 20 min read
                    </span>
                  </div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">
                    {i === 1 ? "The Ultimate Guide to Fine-tuning Large Language Models on Consumer Hardware" : 
                     i === 2 ? "How AI is Revolutionizing the Consumer Electronics Market in 2026" : 
                     "Ethics in AI: Balancing Innovation with Human Responsibility"}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-1">
                    Exploring the latest breakthroughs and how they impact the average user...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar News */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Latest Headlines</h2>
          <div className="cu-card divide-y divide-[var(--border)] overflow-hidden">
            {latestNews.map((news) => (
              <div key={news.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-brand-primary">{news.category}</span>
                  <span className="text-[10px] text-gray-400">{news.date}</span>
                </div>
                <h4 className="font-medium text-sm leading-snug">{news.title}</h4>
              </div>
            ))}
          </div>
          
          <div className="cu-card bg-brand-primary p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">New: AI Tool Directory</h3>
              <p className="text-white/80 text-sm mb-4">Discover over 1,000+ vetted AI tools for your daily workflow.</p>
              <button className="bg-white text-brand-primary px-4 py-2 rounded font-bold text-sm hover:bg-gray-100 transition-colors">
                Browse Directory
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

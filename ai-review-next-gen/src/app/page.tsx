import { 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  Star,
  Zap,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import AIIntel from '@/components/AIIntel';
import TheArena from '@/components/TheArena';
import { RecommendedLearning } from '@/components/RecommendedLearning';

const stats = [
  { name: 'Total AI Tools', value: '1,284', change: '+12%', icon: Zap, color: 'text-brand-primary', bg: 'bg-brand-primary/10' },
  { name: 'Avg. Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-brand-warning', bg: 'bg-brand-warning/10' },
  { name: 'Weekly Reviews', value: '42', change: '+5', icon: TrendingUp, color: 'text-brand-success', bg: 'bg-brand-success/10' },
];

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Editor Dashboard</h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            <Clock size={14} />
            Updated 2 minutes ago
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-[var(--border)] rounded-md text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            Export Report
          </button>
          <button className="px-4 py-2 bg-brand-primary text-white rounded-md text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-md shadow-brand-primary/20">
            Publish New Review
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="cu-card p-6">
            <div className="flex items-center justify-between">
              <div className={stat.bg + " p-2 rounded-lg"}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <span className="text-brand-success text-sm font-medium flex items-center bg-brand-success/5 px-2 py-0.5 rounded-full">
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

      {/* Modules Grid */}
      <div className="space-y-12">
        {/* AI Intel Module */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <AIIntel />
        </section>

        {/* The Arena Module */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <TheArena />
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-info rounded-full"></span>
              Trending Content
            </h2>
            <button className="text-brand-primary text-sm font-medium hover:underline flex items-center">
              View all <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="cu-card p-4 flex gap-4 items-start group cursor-pointer hover:border-brand-primary/30 transition-colors">
                <div className="w-24 h-24 bg-gray-100 rounded-md shrink-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap size={24} className="text-gray-300" />
                  </div>
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

        {/* Action Sidebar */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-success rounded-full"></span>
            System Status
          </h2>
          <div className="cu-card divide-y divide-[var(--border)] overflow-hidden">
            <div className="p-4 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse"></div>
              <div>
                <p className="text-sm font-bold">Scraper Active</p>
                <p className="text-xs text-gray-500">Last run: 14 mins ago</p>
              </div>
            </div>
            <div className="p-4 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-success"></div>
              <div>
                <p className="text-sm font-bold">Search Index</p>
                <p className="text-xs text-gray-500">Synced: 1,429 documents</p>
              </div>
            </div>
            <div className="p-4 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-warning"></div>
              <div>
                <p className="text-sm font-bold">Pending Approval</p>
                <p className="text-xs text-gray-500">12 news items waiting</p>
              </div>
            </div>
          </div>
          
          <div className="cu-card bg-brand-primary p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">New: AI Tool Directory</h3>
              <p className="text-white/80 text-sm mb-4">Discover over 1,000+ vetted AI tools for your daily workflow.</p>
              <button className="bg-white text-brand-primary px-4 py-2 rounded font-bold text-sm hover:bg-gray-100 transition-colors w-full shadow-lg shadow-black/10">
                Browse Directory
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          <RecommendedLearning />
        </div>
      </div>
    </div>
  );
}

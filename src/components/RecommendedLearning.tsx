import React from 'react';
import Link from 'next/link';
import { BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { tutorials } from '@/data/tutorials';

export function RecommendedLearning() {
  // Just show the first 2 for the widget
  const recommended = tutorials.slice(0, 2);

  return (
    <div className="cu-card p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-brand-primary/10 rounded-lg text-brand-primary">
            <GraduationCap size={20} />
          </div>
          <h2 className="font-bold text-gray-900">Recommended Learning</h2>
        </div>
        <Link 
          href="/tutorials" 
          className="text-xs font-medium text-brand-primary hover:underline flex items-center"
        >
          View all <ChevronRight size={14} />
        </Link>
      </div>

      <div className="space-y-4">
        {recommended.map((tutorial) => (
          <Link 
            key={tutorial.id} 
            href={`/tutorials/${tutorial.slug}`}
            className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="mt-1 p-2 bg-gray-100 rounded-md text-gray-500 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
              <BookOpen size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                {tutorial.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={cn(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded border",
                  tutorial.difficulty === 'Beginner' 
                    ? "bg-brand-success/10 text-brand-success border-brand-success/20" 
                    : "bg-brand-warning/10 text-brand-warning border-brand-warning/20"
                )}>
                  {tutorial.difficulty}
                </span>
                <span className="text-[10px] text-gray-400">{tutorial.estimatedTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Need to import cn for the status tag
import { cn } from '@/lib/utils';

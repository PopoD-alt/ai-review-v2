import React from 'react';
import Link from 'next/link';
import { Clock, BarChart, Tag } from 'lucide-react';
import { Tutorial } from '@/data/tutorials';
import { cn } from '@/lib/utils';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Link href={`/tutorials/${tutorial.slug}`} className="block h-full">
      <div className="cu-card h-full flex flex-col p-5 hover:border-brand-primary/30 transition-all">
        <div className="flex justify-between items-start mb-3">
          <span 
            className={cn(
              "text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border",
              tutorial.difficulty === 'Beginner' 
                ? "bg-brand-success/10 text-brand-success border-brand-success/20" 
                : "bg-brand-warning/10 text-brand-warning border-brand-warning/20"
            )}
          >
            {tutorial.difficulty}
          </span>
          <div className="flex items-center text-gray-400 text-xs">
            <Clock size={12} className="mr-1" />
            {tutorial.estimatedTime}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-primary">
          {tutorial.title}
        </h3>
        
        <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-2">
          {tutorial.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
          {tutorial.category.map(tag => (
            <span key={tag} className="flex items-center text-[11px] text-gray-400 bg-gray-50 px-2 py-1 rounded">
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

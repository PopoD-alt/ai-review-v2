import React from 'react';
import { CheckCircle2, Info, Lightbulb } from 'lucide-react';
import { Tutorial } from '@/data/tutorials';

interface TutorialViewProps {
  tutorial: Tutorial;
}

export function TutorialView({ tutorial }: TutorialViewProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase border ${
            tutorial.difficulty === 'Beginner' 
              ? "bg-brand-success/10 text-brand-success border-brand-success/20" 
              : "bg-brand-warning/10 text-brand-warning border-brand-warning/20"
          }`}>
            {tutorial.difficulty}
          </span>
          <span className="text-gray-400 text-sm">•</span>
          <span className="text-gray-500 text-sm">{tutorial.estimatedTime} read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{tutorial.title}</h1>
        <p className="text-xl text-gray-500 leading-relaxed">{tutorial.description}</p>
      </div>

      {/* Prerequisites */}
      {tutorial.prerequisites && tutorial.prerequisites.length > 0 && (
        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-6 mb-10">
          <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold">
            <Info size={18} />
            <span>Prerequisites</span>
          </div>
          <ul className="space-y-2">
            {tutorial.prerequisites.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-blue-800 text-sm">
                <CheckCircle2 size={14} className="mt-1 flex-shrink-0 text-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Steps */}
      <div className="space-y-12">
        {tutorial.content?.map((step, index) => (
          <section key={index} className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
            <div className="prose prose-slate max-w-none text-gray-600 mb-6">
              <p>{step.content}</p>
            </div>
            
            {step.code && (
              <div className="bg-gray-900 rounded-lg overflow-hidden my-6 shadow-lg">
                <div className="bg-gray-800 px-4 py-2 flex justify-between items-center border-b border-gray-700">
                  <span className="text-xs text-gray-400 font-mono">{step.language || 'code'}</span>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-gray-100 font-mono text-sm leading-relaxed">
                    {step.code}
                  </code>
                </pre>
              </div>
            )}

            {step.proTip && (
              <div className="bg-brand-primary/5 border-l-4 border-brand-primary p-5 my-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2 text-brand-primary font-bold italic">
                  <Lightbulb size={18} />
                  <span>Alfred's Pro-Tip</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.proTip}
                </p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

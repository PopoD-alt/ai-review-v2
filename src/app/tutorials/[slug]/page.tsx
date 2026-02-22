import React from 'react';
import { tutorials } from '@/data/tutorials';
import { TutorialView } from '@/components/TutorialView';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TutorialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tutorial = tutorials.find(t => t.slug === slug);

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            href="/tutorials" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-primary transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            Back to Workshop
          </Link>
        </div>
      </div>
      <TutorialView tutorial={tutorial} />
    </div>
  );
}

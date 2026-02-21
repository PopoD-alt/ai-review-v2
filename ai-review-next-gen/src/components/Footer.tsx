import Link from 'next/link';
import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--border)] py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-black">
                AR
              </div>
              <span className="font-black text-xl tracking-tighter italic">AI REVIEW</span>
            </Link>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Tracking the exponential growth of artificial intelligence. From LLMs to hardware, we review the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">AI Intel (News)</Link></li>
              <li><Link href="/" className="hover:text-brand-primary transition-colors">The Arena (Compare)</Link></li>
              <li><Link href="/" className="hover:text-brand-primary transition-colors">Gadget Lab (Hardware)</Link></li>
              <li><Link href="/tutorials" className="hover:text-brand-primary transition-colors">Workshop (Learning)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Advertising</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Ethical AI Reviewing</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <p>© 2026 AI REVIEW HUB. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            HELLO@AIREVIEW.NEXT
          </div>
        </div>
      </div>
    </footer>
  );
}

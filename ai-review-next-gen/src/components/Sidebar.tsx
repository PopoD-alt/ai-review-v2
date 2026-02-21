"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Newspaper, 
  Wrench, 
  Trophy, 
  BookOpen, 
  Smartphone, 
  LayoutDashboard,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'AI Intel', icon: Newspaper, href: '/#news' },
  { name: 'The Arena', icon: Trophy, href: '/#arena' },
  { name: 'Gadget Lab', icon: Smartphone, href: '/#gadgets' },
  { name: 'Workshop', icon: BookOpen, href: '/tutorials' },
  { name: 'AI Tools', icon: Wrench, href: '/#tools' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <aside 
      className={cn(
        "hidden md:flex flex-col h-screen sticky top-0 bg-[var(--sidebar)] border-r border-[var(--border)] transition-all duration-300 shadow-cu-sidebar",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-[var(--border)] h-16">
        {!isCollapsed && <span className="font-bold text-xl text-brand-primary tracking-tight">AI Review</span>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className={cn(
              "cu-sidebar-item",
              item.name === 'Dashboard' && "cu-sidebar-item-active",
              isCollapsed && "justify-center px-0"
            )}
            title={isCollapsed ? item.name : ""}
          >
            <item.icon size={20} />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-[var(--border)] space-y-1">
        <button className={cn("cu-sidebar-item w-full", isCollapsed && "justify-center px-0")}>
          <Settings size={20} />
          {!isCollapsed && <span>Settings</span>}
        </button>
        <button className={cn("cu-sidebar-item w-full", isCollapsed && "justify-center px-0")}>
          <HelpCircle size={20} />
          {!isCollapsed && <span>Help & Support</span>}
        </button>
      </div>
    </aside>
  );
}

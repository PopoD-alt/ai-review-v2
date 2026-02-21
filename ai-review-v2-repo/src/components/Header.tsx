"use client";

import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="cu-header h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 md:hidden">
        <button className="p-2 -ml-2 hover:bg-gray-100 rounded-md">
          <Menu size={20} />
        </button>
        <span className="font-bold text-lg text-brand-primary">AI Review</span>
      </div>

      <div className="hidden md:flex flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search AI reviews, tools, or news..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-md focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-danger rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-8 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-medium border border-brand-primary/20 cursor-pointer overflow-hidden">
          <User size={18} />
        </div>
      </div>
    </header>
  );
}

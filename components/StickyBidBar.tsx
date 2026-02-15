"use client";

import React, { useState, useEffect } from "react";
import {
  IconMailForward,
  IconChevronRight,
  IconFileDownload,
} from "@tabler/icons-react";

export const StickyBidBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show bar only after the user has scrolled a bit (e.g., past the hero)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed hidden bottom-6 inset-x-0 z-50 px-4 animate-in slide-in-from-bottom-10 duration-500">
      <div className="container mx-auto">
        <div className="bg-slate-950 border border-white/10 shadow-2xl rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md bg-opacity-95">
          {/* Left: Context */}
          <div className="flex items-center gap-4 px-6">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-amber-500 items-center justify-center text-slate-950">
              <IconMailForward size={20} />
            </div>
            <div>
              <p className="text-white font-black uppercase italic text-xs tracking-tighter">
                Ready to Mobilize?
              </p>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                Request a technical proposal for your site.
              </p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 w-full md:w-auto px-2">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 text-white hover:text-amber-500 text-[10px] font-black uppercase tracking-widest transition-colors">
              <IconFileDownload size={16} /> Download Specs
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 text-slate-950 rounded-xl md:rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-amber-500/20">
              Request Bid <IconChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

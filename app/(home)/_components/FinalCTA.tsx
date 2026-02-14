"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  IconFileDownload,
  IconPhoneCall,
  IconArrowRight,
} from "@tabler/icons-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#040d0a] relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-amber-500 font-black uppercase tracking-[0.5em] text-sm">
            Ready to Build?
          </h2>

          <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase italic leading-[0.85] tracking-tighter">
            Let’s Move <br />
            <span
              className="text-transparent border-b-4 border-amber-500 pb-2"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Mountains.
            </span>
          </h3>

          <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
            From logistical frameworks to site execution, partner with FORBLIZ
            for infrastructure that stands the test of time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black h-16 px-10 rounded-2xl text-lg w-full sm:w-auto transition-transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Start a Conversation <IconPhoneCall size={22} />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 h-16 px-10 rounded-2xl text-lg w-full sm:w-auto font-bold"
            >
              <a
                href="/assets/forbliz-profile.pdf"
                download
                className="flex items-center gap-3"
              >
                Download Corporate Profile <IconFileDownload size={22} />
              </a>
            </Button>
          </div>

          <div className="pt-16 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale group hover:grayscale-0 transition-all">
            <p className="text-white text-xs font-black uppercase tracking-widest w-full mb-4">
              A Proud Subsidiary of
            </p>
            {/* You can put the AIRMOB Logo here subtly */}
            <div className="text-2xl font-black text-white tracking-tighter italic">
              AIRMOB <span className="text-emerald-500">NIGERIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-16 md:py-24 bg-[#040d0a] relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-amber-500 font-black uppercase tracking-[0.5em] text-sm">
            Ready to Build?
          </h2>

          <h3 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase italic leading-[0.85] tracking-tighter">
            Let’s Move <br className="hidden lg:block" />
            <span
              className="text-transparent border-b-4 border-amber-500 pb-2"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Mountains.
            </span>
          </h3>

          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            From logistical frameworks to site execution, partner with FORBLIZ
            for infrastructure that stands the test of time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/contact" className="flex items-center gap-3">
                Start a Conversation <IconPhoneCall size={22} />
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full sm:w-auto">
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

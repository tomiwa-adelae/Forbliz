"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconCone, IconTractor } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] py-24 overflow-hidden flex items-center justify-center bg-[#040d0a]">
      {/* 1. Background Visuals */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/digger.jpg"
          alt="Heavy machinery at mining site"
          fill
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d0a] via-[#040d0a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d0a] via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 ">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black text-white tracking-tighter leading-[1.1] uppercase italic">
            Building <span className="text-amber-500">Brilliance</span>{" "}
            <br className="hidden md:block" />
            Rising{" "}
            <span className="text-transparent stroke-text">Greatness</span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-lg md:text-xl text-gray-300 font-medium leading-relaxed border-l-4 border-amber-600 pl-3 md:pl-6">
            From deep-earth mining to complex civil engineering, Forbliz Global
            Resources delivers the structural foundation for industrial
            evolution.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Button className="w-full md:w-auto" asChild>
              <Link href="/projects" className="flex items-center gap-2">
                Our Projects <IconArrowRight />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full md:w-auto"
            >
              <Link href="/machinery" className="flex items-center gap-2">
                <IconTractor />
                View Fleet
              </Link>
            </Button>
          </div>
          <div className="w-full hidden lg:block">
            <div className="flex gap-12 border-t border-white/10 pt-4 max-w-2xl">
              {[
                { val: "50+", label: "Heavy Fleet" },
                { val: "120+", label: "Projects Completed" },
                { val: "100%", label: "Safety Record" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-white">{stat.val}</p>
                  <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};

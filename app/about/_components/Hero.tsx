"use client";

import React from "react";
import Image from "next/image";
import {
  IconHistory,
  IconTargetArrow,
  IconUsersGroup,
} from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] w-full flex items-center pt-24 overflow-hidden bg-[#040d0a]">
      {/* 1. Background Visual - Using a wide shot of a construction/mining landscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/about-hero.jpg" // A wide panoramic shot of a project site
          alt="Forbliz Industrial Landscape"
          fill
          className="object-cover opacity-30 grayscale contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040d0a]/80 via-[#040d0a]/60 to-[#040d0a]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          {/* Breadcrumb / Tag */}
          <div className="flex items-center gap-2 text-amber-500 mb-6">
            <span className="h-[2px] w-8 bg-amber-500" />
            <span className="text-xs font-black uppercase tracking-[0.4em]">
              Our Story
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none uppercase italic tracking-tighter mb-8">
            The Foundation <br className="hidden lg:block" />
            of <span className="text-amber-500">Progress.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl border-l-4 border-amber-600 pl-8 mb-12">
            Established as the infrastructure backbone of AIRMOB Nigeria
            Limited, Forbliz Global Resources was born out of a necessity for
            precision, power, and unwavering industrial integrity.
          </p>

          {/* Core Values Quick-Grid */}
          <div className="hidden grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {[
              {
                icon: <IconHistory />,
                label: "Years of Expertise",
                val: "15+",
              },
              {
                icon: <IconTargetArrow />,
                label: "Project Success",
                val: "99%",
              },
              {
                icon: <IconUsersGroup />,
                label: "Site Personnel",
                val: "250+",
              },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-amber-500">{stat.icon}</div>
                <div>
                  <p className="text-2xl font-black text-white leading-none">
                    {stat.val}
                  </p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial Texture Overlay */}
      <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
};

"use client";

import React from "react";
import { IconShieldCheck, IconHammer, IconBulb } from "@tabler/icons-react";
import { Handshake } from "lucide-react";

const values = [
  {
    title: "Integrity",
    desc: "Unwavering commitment to honesty and ethical standards in every contract and site operation.",
    icon: <Handshake size={40} />,
  },
  {
    title: "Precision",
    desc: "Merging advanced engineering with meticulous attention to detail to ensure structural excellence.",
    icon: <IconHammer size={40} />,
  },
  {
    title: "Innovation",
    desc: "Continuously evolving our mining and construction techniques to maximize efficiency and safety.",
    icon: <IconBulb size={40} />,
  },
  {
    title: "Safety",
    desc: "Our 'Zero-Harm' culture ensures that every team member returns home safely, every single day.",
    icon: <IconShieldCheck size={40} />,
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fbbf24 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-amber-500 font-black uppercase tracking-[0.4em] text-sm mb-4">
            Our DNA
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
            The Pillars of <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Forbliz.
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 rounded-[2rem] overflow-hidden">
          {values.map((value, i) => (
            <div
              key={i}
              className="p-10 border-white/10 border-b md:border-b-0 md:border-r last:border-0 hover:bg-amber-500 transition-all duration-500 group"
            >
              <div className="text-amber-500 group-hover:text-slate-950 transition-colors mb-8">
                {value.icon}
              </div>
              <h4 className="text-2xl font-black uppercase italic mb-4 group-hover:text-slate-950 transition-colors">
                {value.title}
              </h4>
              <p className="text-gray-400 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import {
  IconCertificate,
  IconListSearch,
  IconSettings,
  IconTractor,
} from "@tabler/icons-react";

const steps = [
  {
    title: "Site Survey & Analysis",
    desc: "Detailed geological and structural assessment to determine soil stability and resource density.",
    icon: <IconListSearch size={32} />,
  },
  {
    title: "Strategic Mobilization",
    desc: "Deployment of specialized fleet and logistics frameworks tailored to the terrain's specific needs.",
    icon: <IconSettings size={32} />,
  },
  {
    title: "Execution & Management",
    desc: "Precision operations governed by real-time data tracking and rigorous site management protocols.",
    icon: <IconTractor size={32} />,
  },
  {
    title: "Compliance & Handover",
    desc: "Final structural integrity checks, environmental restoration, and official project commissioning.",
    icon: <IconCertificate size={32} />,
  },
];

export const ProjectMethodology = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-amber-500 font-black uppercase tracking-[0.4em] text-sm mb-4">
            The Forbliz Standard
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-none">
            Project <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Execution Cycle.
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="group relative">
              <div className="mb-8 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl">
                {step.icon}
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-black group-hover:bg-white group-hover:text-slate-900">
                  0{i + 1}
                </div>
              </div>

              <h4 className="text-xl font-black uppercase italic mb-4 group-hover:text-amber-500 transition-colors">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

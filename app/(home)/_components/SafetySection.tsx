"use client";

import React from "react";
import {
  IconShieldCheck,
  IconCertificate,
  IconUsers,
  IconLeaf,
} from "@tabler/icons-react";

const standards = [
  {
    icon: <IconShieldCheck size={25} />,
    title: "Zero Harm Policy",
    desc: "Our primary objective is to maintain a work environment where safety is integrated into every operation.",
  },
  {
    icon: <IconCertificate size={25} />,
    title: "ISO Standards",
    desc: "Rigorous adherence to international quality management and safety protocols in all civil projects.",
  },
  {
    icon: <IconUsers size={25} />,
    title: "Training Programs",
    desc: "Continuous operator certification and safety workshops for our 200+ site personnel.",
  },
  {
    icon: <IconLeaf size={25} />,
    title: "Eco-Compliance",
    desc: "Minimizing the environmental footprint of our mining operations through sustainable land reclamation.",
  },
];

export const SafetySection = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm">
              Our Priority
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase italic leading-[1.1]">
              Safety is the <br className="hidden lg:block" />
              <span className="text-amber-500">Foundation</span> of Every Site.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              At FORBLIZ, we believe that brilliance begins with safety. We
              operate under strict QHSE guidelines to ensure that our people,
              our clients, and the environment are protected at all times.
            </p>
            <div className="flex w-full gap-2">
              <div className="flex-1 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <p className="text-2xl md:text-3xl font-black text-slate-900 leading-none">
                  0
                </p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  LTI (Lost Time Injuries)
                </p>
              </div>
              <div className="flex-1 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <p className="text-2xl md:text-3xl font-black text-slate-900 leading-none">
                  100%
                </p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  PPE Compliance
                </p>
              </div>
            </div>
          </div>

          {/* Right: Icon Grid */}
          <div className="grid sm:grid-cols-2 gap-2">
            {standards.map((item, i) => (
              <div
                key={i}
                className="p-8 md:p-6 bg-white rounded-3xl border border-slate-200 hover:border-amber-500/50 transition-colors group"
              >
                <div className="text-slate-900 group-hover:text-amber-500 transition-colors mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 uppercase italic mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

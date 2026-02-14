"use client";

import React from "react";
import {
  IconFileText,
  IconMailForward,
  IconHammer,
  IconUserSearch,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export const ServiceInquiry = () => {
  return (
    <section className="py-24 bg-[#040d0a] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Contact Info & CTA */}
            <div className="lg:w-2/5 p-12 lg:p-16 bg-amber-500 text-slate-950 flex flex-col justify-between">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-70">
                  Project Intake
                </h2>
                <h3 className="text-4xl md:text-5xl font-black uppercase italic leading-none mb-8">
                  Request a <br /> Proposal.
                </h3>
                <p className="font-medium text-lg leading-relaxed mb-10">
                  Submit your project specifications or site requirements. Our
                  engineering team will review the data and provide a
                  preliminary logistical framework within 48 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950/10 flex items-center justify-center">
                    <IconFileText size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      Direct Response
                    </p>
                    <p className="font-bold">proposals@forbliz.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Simplified Intake Form */}
            <div className="lg:w-3/5 p-12 lg:p-16 space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Service Required
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all appearance-none">
                    <option className="bg-slate-900">Mining Operations</option>
                    <option className="bg-slate-900">
                      Civil Infrastructure
                    </option>
                    <option className="bg-slate-900">Logistics & Fleet</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all"
                  placeholder="Describe site location, estimated tonnage, or infrastructure scope..."
                />
              </div>

              <Button className="w-full h-16 bg-amber-500 hover:bg-white hover:text-slate-950 text-slate-950 font-black uppercase tracking-widest rounded-xl transition-all flex gap-3">
                Send Inquiry <IconMailForward size={20} />
              </Button>

              <div className="flex items-center gap-6 pt-4 grayscale opacity-40">
                <div className="flex items-center gap-2">
                  <IconHammer size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    Rigorous Standards
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconUserSearch size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    Expert Consultation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

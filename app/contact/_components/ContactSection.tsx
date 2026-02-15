"use client";

import React from "react";
import {
  IconMapPin,
  IconHeadset,
  IconMail,
  IconClock,
  IconSend,
  IconBriefcase,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">
            Connect with us
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-none uppercase italic">
            Command <br className="hidden lg:block" />
            <span className="text-slate-400">Center.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* 1. Physical Presence & Details */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h4 className="text-xl font-black uppercase italic text-amber-500">
                  Headquarters
                </h4>

                <div className="flex gap-4">
                  <IconMapPin className="text-amber-500 shrink-0" />
                  <p className="text-sm font-medium text-gray-300">
                    12 Industrial Estate Road,{" "}
                    <br className="hidden lg:block" />
                    Ikeja, Lagos, Nigeria.
                  </p>
                </div>

                <div className="flex gap-4">
                  <IconHeadset className="text-amber-500 shrink-0" />
                  <p className="text-sm font-medium text-gray-300">
                    +234 (0) 1 456 7890
                  </p>
                </div>

                <div className="flex gap-4">
                  <IconMail className="text-amber-500 shrink-0" />
                  <p className="text-sm font-medium text-gray-300">
                    ops@forbliz.com
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                  <IconClock size={18} className="text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Site Ops: 24/7 Deployment
                  </span>
                </div>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 opacity-10 text-white scale-150 rotate-12">
                <IconMapPin size={160} />
              </div>
            </div>

            {/* Careers CTA */}
            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2rem] group hover:border-amber-500 transition-colors">
              <IconBriefcase className="text-slate-400 group-hover:text-amber-600 mb-4 transition-colors" />
              <h5 className="font-black uppercase italic text-slate-900">
                Join the Crew
              </h5>
              <p className="text-sm text-slate-500 mt-2 mb-4">
                We are always looking for certified operators and engineers.
              </p>
            </div>
          </div>

          {/* 2. Communication Form */}
          <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-6 md:p-12">
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Your Identity
                </label>
                <input
                  type="text"
                  placeholder="Full Name / Company"
                  className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-amber-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-amber-500 transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Inquiry Department
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Tenders", "Logistics", "General", "Equipment Rental"].map(
                    (dept) => (
                      <label key={dept} className="cursor-pointer">
                        <input
                          type="radio"
                          name="dept"
                          className="peer hidden"
                        />
                        <span className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 peer-checked:bg-slate-900 peer-checked:text-amber-500 peer-checked:border-slate-900 transition-all inline-block">
                          {dept}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Detailed Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Briefly describe your project scope or equipment needs..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-amber-500 transition-all resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <Button className="w-full md:w-auto">Dispatch Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

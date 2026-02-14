"use client";

import React from "react";
import {
  IconClipboardCheck,
  IconTruckLoading,
  IconTractor,
  IconUserCircle,
  IconMapPin,
} from "@tabler/icons-react";

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header Section */}
      <section className="pt-32 pb-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-6">
              Project <span className="text-amber-500">Initiation.</span>
            </h1>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              Submit your project parameters below. Our engineering and
              logistics teams will review the data to provide a comprehensive
              mobilization framework and cost estimate.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Form Body */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Step 1: Contact Personnel */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-amber-600">
                  <IconUserCircle size={28} />
                  <h3 className="text-xl font-black uppercase italic tracking-widest text-slate-900">
                    01. Contact Personnel
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b-2 border-slate-200 py-4 outline-none focus:border-amber-500 transition-all font-medium"
                  />
                  <input
                    type="email"
                    placeholder="Corporate Email"
                    className="w-full border-b-2 border-slate-200 py-4 outline-none focus:border-amber-500 transition-all font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border-b-2 border-slate-200 py-4 outline-none focus:border-amber-500 transition-all font-medium"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border-b-2 border-slate-200 py-4 outline-none focus:border-amber-500 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Step 2: Project Scope */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-amber-600">
                  <IconMapPin size={28} />
                  <h3 className="text-xl font-black uppercase italic tracking-widest text-slate-900">
                    02. Project Scope
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <select className="w-full border-b-2 border-slate-200 py-4 outline-none focus:border-amber-500 transition-all font-medium bg-transparent">
                    <option>Select Service Category</option>
                    <option>Surface Mining</option>
                    <option>Civil Construction</option>
                    <option>Heavy Haulage / Logistics</option>
                    <option>Equipment Rental</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Project Location (State/City)"
                    className="w-full border-b-2 border-slate-200 py-4 outline-none focus:border-amber-500 transition-all font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Estimated Tonnage (if applicable)"
                    className="w-full border-b-2 border-slate-200 py-4 outline-none focus:border-amber-500 transition-all font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Anticipated Start Date"
                    className="w-full border-b-2 border-slate-200 py-4 outline-none focus:border-amber-500 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Step 3: Equipment Needs */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-amber-600">
                  <IconTractor size={28} />
                  <h3 className="text-xl font-black uppercase italic tracking-widest text-slate-900">
                    03. Equipment Requirements
                  </h3>
                </div>
                <textarea
                  rows={4}
                  placeholder="List specific machinery needed or describe technical challenges..."
                  className="w-full bg-slate-50 rounded-2xl p-6 outline-none border border-slate-200 focus:border-amber-500 transition-all"
                />
              </div>

              <button className="w-full md:w-auto px-16 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.3em] italic text-sm hover:bg-amber-500 hover:text-slate-950 transition-all shadow-xl">
                Submit RFQ Package
              </button>
            </div>

            {/* Support Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200">
                <IconClipboardCheck className="text-amber-500 mb-4" size={32} />
                <h4 className="font-black uppercase italic text-slate-900 mb-4">
                  What happens next?
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-slate-600">
                    <span className="font-bold text-slate-900">01.</span>{" "}
                    Technical review by our site engineers.
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600">
                    <span className="font-bold text-slate-900">02.</span>{" "}
                    Logistical assessment (Mobilization path).
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600">
                    <span className="font-bold text-slate-900">03.</span> Formal
                    Quote & Timeline delivery within 48h.
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-amber-500 rounded-[2.5rem] text-slate-900 shadow-xl shadow-amber-500/20">
                <IconTruckLoading className="mb-4" size={32} />
                <h4 className="font-black uppercase italic text-lg mb-2">
                  Need Immediate Support?
                </h4>
                <p className="text-sm font-medium mb-6 opacity-80">
                  For urgent mobilization or equipment failure, call our
                  emergency hotline.
                </p>
                <p className="text-2xl font-black">+234 800-FORBLIZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

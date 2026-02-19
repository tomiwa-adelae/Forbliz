import React from "react";
import {
  IconClipboardCheck,
  IconTruckLoading,
  IconTractor,
  IconUserCircle,
  IconMapPin,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { PHONE } from "@/constants";
import { QuoteForm } from "./_components/QuoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Request Quote Forbliz Global Resources | Heavy Equipment & Industrial Services",
  description:
    "Forbliz Global Resources Ltd is a premier industrial partner providing heavy equipment sourcing, civil infrastructure engineering, and site mobilization across Nigeria.",
};

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header Section */}
      <section className="pt-32 pb-12 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-none mb-6">
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
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-2 space-y-12">
              <QuoteForm />
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
                <a
                  href={`tel:${PHONE}`}
                  className="text-2xl font-black hover:underline"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

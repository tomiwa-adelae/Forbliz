import React from "react";
import { IconArrowUpRight, IconLink } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export const ParentLink = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Visual Branding Side */}
          <div className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-slate-200">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Strategic Partnership
                </p>
                <h3 className="text-2xl font-black italic uppercase text-slate-900 leading-none mb-2">
                  An <span className="text-green-500">AIRMOB</span>
                </h3>
                <p className="text-base md:text-lg font-bold text-slate-900 uppercase italic">
                  Subsidiary
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Side */}
          <div className="w-full md:w-2/3 space-y-4">
            <div className="flex items-center gap-2 text-green-600">
              <IconLink size={20} stroke={3} />
              <span className="text-sm font-black uppercase tracking-[0.3em]">
                Synergy & Strength
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black italic uppercase text-slate-900 leading-tight">
              Leveraging the Energy & Logistics Power of{" "}
              <span className="underline decoration-green-500">
                AIRMOB Nigeria
              </span>
              .
            </h2>

            <p className="text-slate-600 font-medium leading-relaxed max-w-2xl">
              Forbliz Global Resources operates as a specialized subsidiary of
              AIRMOB Nigeria Limited. This relationship grants us access to a
              massive industrial value chain, ranging from precision lubricant
              manufacturing to large-scale exploration support, ensuring
              unmatched reliability in our site mobilization and engineering
              projects.
            </p>

            <Button
              variant="outline"
              className="bg-green-600 text-white hover:bg-green-700 border-green-600 hover:text-white transition-colors"
              asChild
            >
              <a
                href="https://airmob.net.ng"
                target="_blank"
                className="flex items-center gap-2"
              >
                Visit AIRMOB Nigeria <IconArrowUpRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

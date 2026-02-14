"use client";

import { IconEye, IconRocket, IconTrophy } from "@tabler/icons-react";

const pillars = [
  {
    title: "Our Mission",
    desc: "To deliver world-class infrastructure and mining solutions that drive industrial evolution through precision engineering and sustainable practices.",
    icon: <IconRocket size={32} />,
    accent: "bg-amber-500",
  },
  {
    title: "Our Vision",
    desc: "To be the foremost engineering powerhouse in Africa, recognized for bridging the gap between resource potential and physical greatness.",
    icon: <IconEye size={32} />,
    accent: "bg-slate-900",
  },
];

export const MissionSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Detailed Narrative */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm">
                Strategic Intent
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-tight">
                Driving Excellence <br />
                <span className="text-slate-400">Beyond the Surface.</span>
              </h3>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              Forbliz Global Resources operates at the intersection of energy
              and infrastructure. As an AIRMOB subsidiary, we carry a legacy of
              excellence into the toughest terrains, ensuring that every site we
              touch becomes a landmark of progress.
            </p>

            <div className="p-8 bg-slate-50 border-l-8 border-amber-500 rounded-r-3xl">
              <p className="text-slate-900 font-bold italic text-xl">
                "We don't just build structures; we build the foundations upon
                which economies and industries rise."
              </p>
            </div>
          </div>

          {/* Right: Vision/Mission Cards */}
          <div className="w-full lg:w-1/2 grid gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="group p-10 rounded-[2rem] border border-slate-200 hover:border-amber-500/30 transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div
                    className={`w-16 h-16 shrink-0 rounded-2xl ${pillar.accent} text-white flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12`}
                  >
                    {pillar.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black text-slate-900 uppercase italic">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none translate-x-1/4 -translate-y-1/4">
        <IconTrophy size={600} />
      </div>
    </section>
  );
};

import React from "react";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
import { CertificationBar } from "../about/_components/CertificationBar";
import { ContactSection } from "./_components/ContactSection";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header: Minimalist and Clean */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-6">
                Get In <span className="text-amber-500">Touch.</span>
              </h1>
              <p className="text-gray-400 text-lg font-medium">
                Whether it's a large-scale mining tender or a civil
                infrastructure consultation, our team is ready to deploy.
              </p>
            </div>

            {/* Quick Contact Pills */}
            <div className="hidden lg:flex flex-col gap-1 text-right">
              <div className="flex items-center justify-end gap-1 text-amber-500">
                <IconPhone size={20} />
                <span className="text-base font-bold text-white">
                  +234 (0) 800 FORBLIZ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Main Contact Form & Info (The section we built previously) */}
      <ContactSection />

      {/* 3. Integrated Map Section */}
      <section className="w-full h-[400px] bg-slate-200 grayscale contrast-125">
        {/* You can embed a Google Maps iframe here or a styled Mapbox component */}
        <div className="w-full h-full flex items-center justify-center bg-[url('/assets/images/map.jpg')] bg-cover bg-center">
          <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 shadow-lg">
              <IconMapPin size={24} />
            </div>
            <div>
              <p className="font-black uppercase italic text-slate-900">
                Forbliz HQ
              </p>
              <p className="text-[10px] font-bold text-slate-500 uppercase">
                Ikeja, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Certifications & Compliance */}
      <CertificationBar />
    </main>
  );
};

export default ContactPage;

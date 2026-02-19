import React from "react";
import { Hero } from "./_components/Hero";
import { MissionSection } from "./_components/MissionSection";
import { ValuesSection } from "./_components/ValuesSection";
import { LeadershipSection } from "./_components/LeadershipSection";
import { FootprintSection } from "./_components/FootprintSection";
import { ServicesHero } from "../services/_components/ServicesHero";
import { CertificationBar } from "./_components/CertificationBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Forbliz Global Resources | Heavy Equipment & Industrial Services",
  description:
    "Forbliz Global Resources Ltd is a premier industrial partner providing heavy equipment sourcing, civil infrastructure engineering, and site mobilization across Nigeria.",
};
const page = () => {
  return (
    <div>
      <Hero />
      <MissionSection />
      <ValuesSection />
      {/* <LeadershipSection /> */}
      <FootprintSection />
      <CertificationBar />
    </div>
  );
};

export default page;

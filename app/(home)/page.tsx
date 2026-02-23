import React from "react";
import { Hero } from "./_components/Hero";
import { ExpertiseSection } from "./_components/ExpertiseSection";
import { FleetSection } from "./_components/FleetSection";
import { ProjectSection } from "./_components/ProjectSection";
import { SafetySection } from "./_components/SafetySection";
import { FinalCTA } from "./_components/FinalCTA";
import { ParentLink } from "./_components/ParentLink";

const page = () => {
  return (
    <div>
      <Hero />
      <ExpertiseSection />
      {/* <FleetSection /> */}
      <ProjectSection />
      <SafetySection />
      <FinalCTA />
      <ParentLink />
    </div>
  );
};

export default page;

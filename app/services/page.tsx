import React from "react";
import { ServicesHero } from "./_components/ServicesHero";
import { MiningDetailSection } from "./_components/MiningDetailSection";
import { CivilDetailSection } from "./_components/CivilDetailSection";
import { LogisticsDetailSection } from "./_components/LogisticsDetailSection";
import { ServiceInquiry } from "./_components/ServiceInquiry";
import { FleetCatalog } from "./_components/FleetCatalog";
import { ProjectsPortfolio } from "./_components/ProjectsPortfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services Forbliz Global Resources | Heavy Equipment & Industrial Services",
  description:
    "Forbliz Global Resources Ltd is a premier industrial partner providing heavy equipment sourcing, civil infrastructure engineering, and site mobilization across Nigeria.",
};

const page = () => {
  return (
    <div>
      <ServicesHero />
      <MiningDetailSection />
      <CivilDetailSection />
      <LogisticsDetailSection />
      <ServiceInquiry />
      <FleetCatalog />
      <ProjectsPortfolio />
    </div>
  );
};

export default page;

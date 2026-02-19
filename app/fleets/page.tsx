import React from "react";
import { Hero } from "./_components/Hero";
import { FleetMaintenance } from "./_components/FleetMaintenance";
import { FleetLogistics } from "./_components/FleetLogistics";
import { FleetCatalog } from "../services/_components/FleetCatalog";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title:
    "Fleets Forbliz Global Resources | Heavy Equipment & Industrial Services",
  description:
    "Forbliz Global Resources Ltd is a premier industrial partner providing heavy equipment sourcing, civil infrastructure engineering, and site mobilization across Nigeria.",
};

const page = () => {
  return (
    <div>
      <Hero />
      <FleetMaintenance />
      <FleetLogistics />
      <FleetCatalog />
    </div>
  );
};

export default page;

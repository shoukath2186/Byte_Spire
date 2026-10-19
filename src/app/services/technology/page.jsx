"use client";

import React from "react";
import { technologyServices } from "@/data/services/mainServices";
import { ServiceDetailTemplate } from "@/components/services";

export default function TechnologyServicePage() {
  return <ServiceDetailTemplate service={technologyServices} />;
}

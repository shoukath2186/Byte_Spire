"use client";

import React from "react";
import { brandingServices } from "@/data/services/mainServices";
import { ServiceDetailTemplate } from "@/components/services";

export default function BrandingServicePage() {
  return <ServiceDetailTemplate service={brandingServices} />;
}

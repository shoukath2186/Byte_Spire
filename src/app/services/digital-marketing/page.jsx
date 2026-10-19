"use client";

import React from "react";
import { digitalMarketingServices } from "@/data/services/mainServices";
import { ServiceDetailTemplate } from "@/components/services";

export default function DigitalMarketingServicePage() {
  return <ServiceDetailTemplate service={digitalMarketingServices} />;
}

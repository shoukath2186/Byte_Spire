"use client";

import React, { use } from "react";
import { ServiceDetailTemplate } from "@/components/services";
import { 
  technologyServices, 
  digitalMarketingServices, 
  experienceDesignServices, 
  brandingServices 
} from "@/data/services/mainServices";

const serviceDataMap = {
  technology: technologyServices,
  "digital-marketing": digitalMarketingServices,
  "experience-design": experienceDesignServices,
  branding: brandingServices,
};

export default function ServiceDetail({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;
  const data = slug ? serviceDataMap[slug] : null;

  return <ServiceDetailTemplate service={data} />;
}
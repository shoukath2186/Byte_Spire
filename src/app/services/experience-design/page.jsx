"use client";

import React from "react";
import { experienceDesignServices } from "@/data/services/mainServices";
import { ServiceDetailTemplate } from "@/components/services";

export default function ExperienceDesignServicePage() {
  return <ServiceDetailTemplate service={experienceDesignServices} />;
}

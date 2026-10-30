import React from "react";
import { seoService } from "@/data/innerServices/innerServicesForMarketing";
import InnerServicePage from "@/components/services/innerServices/InnerServicePage";

export const metadata = {
  title: seoService.meta.title,
  description: seoService.meta.description,
  keywords: seoService.meta.keywords,
  alternates: {
    canonical: seoService.meta.canonical,
  },
  openGraph: {
    title: seoService.meta.openGraph?.title || seoService.meta.title,
    description: seoService.meta.openGraph?.description || seoService.meta.description,
    images: seoService.meta.openGraph?.images || [{ url: "/logo.svg" }],
    url: seoService.meta.canonical,
    siteName: "ByteSpire",
  },
};

export default function SeoServicePage() {
  return <InnerServicePage service={seoService} />;
}


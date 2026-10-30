import React from "react";
import {
  getInnerMarketingService,
  innerMarketingServices,
} from "@/data/innerServices/innerServicesForMarketing";
import InnerServicePage from "@/components/services/innerServices/InnerServicePage";

export async function generateStaticParams() {
  return Object.keys(innerMarketingServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const service = getInnerMarketingService(slug);

  if (!service || !service.meta) {
    return {
      title: "Service Not Found | ByteSpire",
      description: "The requested marketing service could not be found.",
    };
  }

  return {
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    alternates: {
      canonical:
        service.meta.canonical ||
        `https://bytespire.in/services/digital-marketing/${slug}`,
    },
    openGraph: {
      title: service.meta.openGraph?.title || service.meta.title,
      description:
        service.meta.openGraph?.description || service.meta.description,
      images: service.meta.openGraph?.images || [{ url: "/logo.svg" }],
      url:
        service.meta.canonical ||
        `https://bytespire.in/services/digital-marketing/${slug}`,
      siteName: "ByteSpire",
    },
  };
}

export default async function DigitalMarketingInnerServicePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const service = getInnerMarketingService(slug);

  return <InnerServicePage service={service} />;
}


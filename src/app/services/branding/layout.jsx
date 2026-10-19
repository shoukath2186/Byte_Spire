import { brandingServices } from "@/data/services/mainServices";

export const metadata = {
  title: `${brandingServices.title} | ByteSpire Innovations`,
  description: brandingServices.description,
  openGraph: {
    title: `${brandingServices.title} | ByteSpire Innovations`,
    description: brandingServices.description,
    images: [{ url: brandingServices.bannerImage || "/service_branding.png" }],
  },
};

export default function BrandingLayout({ children }) {
  return <>{children}</>;
}

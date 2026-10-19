import { digitalMarketingServices } from "@/data/services/mainServices";

export const metadata = {
  title: `${digitalMarketingServices.title} | ByteSpire Innovations`,
  description: digitalMarketingServices.description,
  openGraph: {
    title: `${digitalMarketingServices.title} | ByteSpire Innovations`,
    description: digitalMarketingServices.description,
    images: [{ url: digitalMarketingServices.bannerImage || "/service_marketing.png" }],
  },
};

export default function DigitalMarketingLayout({ children }) {
  return <>{children}</>;
}

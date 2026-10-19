import { technologyServices } from "@/data/services/mainServices";

export const metadata = {
  title: `${technologyServices.title} | ByteSpire Innovations`,
  description: technologyServices.description,
  openGraph: {
    title: `${technologyServices.title} | ByteSpire Innovations`,
    description: technologyServices.description,
    images: [{ url: technologyServices.bannerImage || "/service_tech.png" }],
  },
};

export default function TechnologyLayout({ children }) {
  return <>{children}</>;
}

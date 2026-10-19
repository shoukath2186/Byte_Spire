import { experienceDesignServices } from "@/data/services/mainServices";

export const metadata = {
  title: `${experienceDesignServices.title} | ByteSpire Innovations`,
  description: experienceDesignServices.description,
  openGraph: {
    title: `${experienceDesignServices.title} | ByteSpire Innovations`,
    description: experienceDesignServices.description,
    images: [{ url: experienceDesignServices.bannerImage || "/service_design.png" }],
  },
};

export default function ExperienceDesignLayout({ children }) {
  return <>{children}</>;
}

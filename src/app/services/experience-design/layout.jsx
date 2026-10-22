import { experienceDesignServices } from "@/data/services/mainServices";

export const metadata = {
  ...experienceDesignServices.meta,
};

export default function ExperienceDesignLayout({ children }) {
  return <>{children}</>;
}

import { brandingServices } from "@/data/services/mainServices";

export const metadata = {
  ...brandingServices.meta,
};

export default function BrandingLayout({ children }) {
  return <>{children}</>;
}

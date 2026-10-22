import { digitalMarketingServices } from "@/data/services/mainServices";

export const metadata = {
  ...digitalMarketingServices.meta,
};

export default function DigitalMarketingLayout({ children }) {
  return <>{children}</>;
}

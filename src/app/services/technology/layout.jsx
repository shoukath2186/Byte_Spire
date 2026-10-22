import { technologyServices } from "@/data/services/mainServices";

export const metadata = {
  ...technologyServices.meta,
};

export default function TechnologyLayout({ children }) {
  return <>{children}</>;
}

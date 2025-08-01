

import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import {PortfolioContentDetail} from "@/widgets/portfolio";

export default function PortfolioDetail() {
  return (
    <div className="elementor">
        <BreadcrumbHeader
            items={[{ label: "Contact", path: "/contact" }]}
        />
        <PortfolioContentDetail />
   </div>
  );
}

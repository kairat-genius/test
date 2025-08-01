import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import { CenterBanner } from "@/widgets/banner";
import { ServicesContentDetail } from "@/widgets/services";

export default function ServicesDetail() {
  return (
    <div className="elementor">
        <BreadcrumbHeader
            items={[{ label: "Contact", path: "/contact" }]}
        />
      <ServicesContentDetail />
      <CenterBanner />
    </div>
  );
}

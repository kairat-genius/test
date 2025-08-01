

import { PortfolioList} from "@/widgets/portfolio";
import {CenterBanner} from "@/widgets/banner"
import { Testimonials } from "@/widgets/testimonials";
import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import {useTranslations} from "next-intl";

export default function Portfolios() {
    const t = useTranslations('header');
  return (
    <div className="elementor">
        <BreadcrumbHeader
            items={[{ label: t('portfolio'), path: "/portfolio" }]}
        />
        <PortfolioList />
        <CenterBanner />
        <Testimonials />
   </div>
  );
}


import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import {Testimonials} from "@/widgets/testimonials";
import {Statistics, WhyChooseUs} from "@/widgets/About"
import {CenterBanner} from "@/widgets/banner"
import { ServicesList } from "@/widgets/services";
import {useTranslations} from "next-intl";

export default function Services() {
    const t = useTranslations('header');
  return (
    <div className="elementor">
        <BreadcrumbHeader
            items={[{ label: t('services'), path: "/services" }]}
        />
        <ServicesList />
        <CenterBanner />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
   </div>
  );
}
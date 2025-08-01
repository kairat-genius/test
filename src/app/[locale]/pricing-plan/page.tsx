
import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import {CenterBanner} from "@/widgets/banner"
import { PricingPlan } from "@/widgets/pricingPlan";
import {useTranslations} from "next-intl";
export default function PricingPlans() {
    const t = useTranslations('header');
  return (
    <div className="elementor">
        <BreadcrumbHeader
            items={[{ label: t('pricingPlan'), path: "/pricing-plan" }]}
        />
        <PricingPlan />
        <CenterBanner />
   </div>
  );
}

import {TitleBlock } from "@/shared/ui";
import './PricingPlan.css'
import {PricingCard} from "./PricingCard";
export const PricingPlan = () => {
  return (
    <div className="elementor-element elementor-element-e621bbd e-flex e-con-boxed e-con e-parent e-lazyloaded" >
      <div className="e-con-inner">
         <TitleBlock title="Pricing Plan" specification="Smart Marketing Solutions, Tailored to Your Budget" align="center"/>
        <div className="elementor-element elementor-element-a5d5f40 e-grid e-con-full e-con e-child">

        <PricingCard />
          <PricingCard />
          <PricingCard />

        </div>
      </div>
    </div>
  );
};

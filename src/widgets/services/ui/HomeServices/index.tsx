import {TitleBlock, Button} from "@/shared/ui"
import { ItemService } from "@/entities";
import {useTranslations} from "next-intl";

export const HomeServices = () => {
    const t = useTranslations('servicesSection');
  return (
    <div className="elementor-element elementor-element-d03c2ef e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-c937c11 e-con-full e-flex e-con e-child" >
        <TitleBlock title={t('subtitle')} specification={t('title')} description={t('description')} align="left"/>
          <Button link="services" title="View More Services"/>
        </div>
        <div className="elementor-element elementor-element-fade30f e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-18be483 e-con-full e-flex e-con e-child">
          <ItemService />
          <ItemService />
          </div>
          <div className="elementor-element elementor-element-978ef91 e-con-full e-flex e-con e-child">
              <ItemService />
              <ItemService />
          </div>
        </div>
      </div>
    </div>
  );
};

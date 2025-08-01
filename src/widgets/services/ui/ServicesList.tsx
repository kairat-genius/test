import { TitleBlock, Paragraph } from "@/shared/ui";
import "./ServicesList.css";
import { ItemService } from "@/entities";
import {useTranslations} from "next-intl";

export const ServicesList = () => {
  const t = useTranslations('servicesSection');
  return (
    <div className="elementor-element elementor-element-7d15c74 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <TitleBlock title={t('subtitle')} specification={t('title')} align="center"/>
        <div className="elementor-element elementor-element-cefea63 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-e370d36 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-9d96d87 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-2cda564 e-con-full e-flex e-con e-child">
                <Paragraph>{t('description')}</Paragraph>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-640f9fb e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-ee32491 e-con-full e-flex e-con e-child">
              <ItemService />
            </div>
            <div className="elementor-element elementor-element-d6a363a e-con-full e-flex e-con e-child" >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

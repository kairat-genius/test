import {Accordion, Button} from "@/shared/ui";
import {TitleBlock, Paragraph, Heading} from "@/shared/ui"
import './AboutUsBlock.css'
import Image from "next/image";
import {useTranslations} from "next-intl";

export const AboutUsBlock = () => {
    const t = useTranslations('about');
    const faq = t.raw("faqs");
  const stats = t('statistics_block.stats');
  const [statTitle, statPercentage, statLabel] = stats.split("|").map(item => item.trim());
  return (
    <div className="elementor-element elementor-element-4377ff1 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <TitleBlock title={t('subtitle')} specification={t('title')} align="center"/>

        <div className="elementor-element elementor-element-cad3d17 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-cb24d9f e-con-full e-flex e-con e-child">
            <Paragraph>{t('description')}</Paragraph>
              <Button title={t('button_read_more')} link="" element="be216da"/>
              <Accordion items={faq} />
          </div>
          <div className="elementor-element elementor-element-6b988ff e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-ee58599 elementor-widget elementor-widget-image animated fadeIn">
              <div className="elementor-widget-container">
                <Image
                  decoding="async"
                  width={800}
                  height={516}
                  src="/img/about/group.webp"
                  className="attachment-large size-large wp-image-1385"
                  alt="About"
                />
              </div>
            </div>
            <div className="elementor-element elementor-element-532ab9a e-con-full e-flex e-con e-child animated fadeInRight">
              <div className="elementor-element elementor-element-17ee975 e-con-full e-flex e-con e-child" >
                <Heading level={3}>{statTitle}</Heading>
                <div className="elementor-element elementor-element-acd45c9 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      {statPercentage}
                    </span>
                  </div>
                </div>
                <Heading level={3}>{statLabel}</Heading>
              </div>
              <Paragraph>{t('statistics_block.description')}</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

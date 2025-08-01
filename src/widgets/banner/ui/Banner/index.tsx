
import {Paragraph, Heading, StarRating, Button} from "@/shared/ui"
import {Tag} from "@/widgets/banner/ui/Banner/Tag";
import {useTranslations} from 'next-intl';

export const Banner = () => {
  const t = useTranslations('bannerSection');
  const headings = t('headings').split(',');

  return (
    <div className="elementor-element elementor-element-b2f1c1e e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-2702db6 e-con-full e-flex e-con e-child" >
          <div className="elementor-element elementor-element-ff44912 e-con-full e-flex e-con e-child">
            <Heading align="center" level={1}>{t('banner')}</Heading>
            <Paragraph align="center">{t('description')}</Paragraph>
            <div className="elementor-element elementor-element-ab65203 e-con-full e-flex e-con e-child">
              <Button title={t('button_start')} link="" element="be216da"/>
              <Button title={t('button_learn_more')} link="" element="8bbcdd3"/>
            </div>
          </div>
          <div className="elementor-element elementor-element-e52a0df e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-2f19ea4 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-8480c57 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-aeae29b elementor-widget elementor-widget-heading" >
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      4.9
                    </span>
                  </div>
                </div>
                <StarRating activeStars={4} />
                <div className="elementor-element elementor-element-4018f82 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      {t('clients_rating')}
                    </span>
                  </div>
                </div>
              </div>
              <div  className="elementor-element elementor-element-ebfb0b8 elementor-widget elementor-widget-heading" >
                <div className="elementor-widget-container">
                  <span className="elementor-heading-title elementor-size-default">
                     {t('customer_satisfaction')}
                  </span>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-bdcfbc5 e-con-full e-flex e-con e-child" >
              {headings?.map((heading, index) => (
                  <Tag key={index} title={heading.trim()} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

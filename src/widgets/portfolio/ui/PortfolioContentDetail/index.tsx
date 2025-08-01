
import { Heading, Paragraph, Photo, KeyFeatures} from "@/shared/ui";

export const PortfolioContentDetail = () => {
  return (
    <div className="elementor-element elementor-element-82517ef e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-8d4c06c e-con-full e-flex e-con e-child">
          <Heading>Descripton</Heading>
          <Paragraph> описание</Paragraph>
          <Photo />
          <Heading level={3}>Descripton</Heading>
          <Paragraph> описание</Paragraph>
        </div>
        <div className="elementor-element elementor-element-12aac79 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-5503708 e-con-full e-flex e-con e-child animated fadeInRight">
            <Heading level={3}>Descripton</Heading>
            <div className="elementor-element elementor-element-9075914 elementor-widget elementor-widget-spacer">
              <div className="elementor-widget-container">
                <div className="elementor-spacer">
                  <div className="elementor-spacer-inner"></div>
                </div>
              </div>
            </div>
            <KeyFeatures />
            <KeyFeatures />
            <KeyFeatures />
          </div>
        </div>
      </div>
    </div>
  );
};

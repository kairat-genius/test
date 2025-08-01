import Link from "next/link";
import { Heading, Paragraph, Photo } from "@/shared/ui";
import Icon from "@/shared/icon";
export const PortfolioCard = () => {
  return (
    <Link
      href="/portfolio/awdd"
      className="elementor-element elementor-element-685d528 e-con-full animated-fast e-flex e-con e-child animated fadeIn"
      style={{ color: "inherit" }}
    >
      <div className="elementor-element elementor-element-0976678 e-con-full e-flex e-con e-child">
        <Photo />
        <div className="elementor-element elementor-element-76bfc47 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-182bd45 elementor-widget elementor-widget-heading">
            <div className="elementor-widget-container">
              <span className="elementor-heading-title elementor-size-default">
                Web Design &amp; Development
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-50bf8a7 e-con-full e-flex e-con e-child">
        <Heading level={3}>Web Development for Digital Agency</Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Paragraph>
        <div className="elementor-element elementor-element-3f3524c e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-e50a554 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
            <div className="elementor-widget-container">
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-48fa532 elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon">
            <div className="elementor-widget-container">
              <div className="elementor-icon-wrapper">
                <span className="elementor-icon">
                  <i aria-hidden="true" className="jki jki-right-arrow-12"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-60c6279 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon">
        <div className="elementor-widget-container">
          <div className="elementor-icon-wrapper">
            <div className="elementor-icon">
              <Icon icon="decor-dot" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-7c6db2a elementor-absolute elementor-view-default elementor-widget elementor-widget-icon">
        <div className="elementor-widget-container">
          <div className="elementor-icon-wrapper">
            <div className="elementor-icon">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-circle"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

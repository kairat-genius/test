import { TitleBlock, ProgressBars } from "@/shared/ui";
import "./WhyChooseUs.css";
import Image from "next/image";

export const WhyChooseUs = () => {

  return (
    <div className="elementor-element elementor-element-465aa0d e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-8c831b3 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-235d0dd elementor-widget elementor-widget-image">
            <div className="elementor-widget-container">
              <Image
                width={800}
                height={534}
                src="https://templatekit.bittheme.net/next/wp-content/uploads/sites/2/2024/10/portrait-of-smiling-multi-cultural-business-team-s-2024-10-21-23-44-52-utc_result-1024x683.webp"
                className="attachment-large size-large wp-image-1396"
                alt=" "
              />
            </div>
          </div>
          <div className="elementor-element elementor-element-f07d3eb e-grid e-con-full e-con e-child">
            <div className="elementor-element elementor-element-322321c e-con-full animated-fast e-flex e-con e-child animated fadeInUp">
              <div className="elementor-element elementor-element-77d0896 elementor-position-right elementor-mobile-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon elementor-animation-">
                        <i aria-hidden="true" className="icon icon-badge"></i>
                      </span>
                    </div>

                    <div className="elementor-icon-box-content">
                      <h4 className="elementor-icon-box-title">
                        <span>Proven Results, Every Time </span>
                      </h4>

                      <p className="elementor-icon-box-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-4b5c041 e-con-full e-flex e-con e-child animated fadeInUp">
              <div className="elementor-element elementor-element-0574a27 elementor-position-right elementor-mobile-position-right elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon elementor-animation-">
                        <i aria-hidden="true" className="icon icon-team-1"></i>
                      </span>
                    </div>

                    <div className="elementor-icon-box-content">
                      <h4 className="elementor-icon-box-title">
                        <span>Industry-Leading Expertise </span>
                      </h4>

                      <p className="elementor-icon-box-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-223f34d e-con-full e-flex e-con e-child" >
        <TitleBlock title="Why Choose Us" specification="Success Stories from Brands We’ve Helped Grow" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." align="left"/>
          <ProgressBars title="Website Design &amp; Development" percentage="85"/>
          <ProgressBars title="Search Engine Optimization" percentage="90"/>
          <ProgressBars title="Digital Marketing" percentage="87"/>
        </div>
      </div>
    </div>
  );
};

import Link from "next/link";
import "./ItemService.css";
import Icon from "@/shared/icon";
export const ItemService = () => {
  return (
    <div className="elementor-element elementor-element-1c7bd68 e-con-full e-flex e-con e-child animated fadeInRight">
      <div className="elementor-element elementor-element-7842ff1 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box">
        <div className="elementor-widget-container">
          <div className="jeg-elementor-kit jkit-icon-box icon-position-right elementor-animation- jeg_module_1494__673db6d1c9982">
            <div className="jkit-icon-box-wrapper hover-from-left">
              <div className="icon-box icon-box-header elementor-animation-">
                <div className="icon style-color">
                  <i aria-hidden="true" className="jki jki-cogwheel-light"></i>
                </div>
              </div>
              <div className="icon-box icon-box-body">
                <h3 className="title">Search Engine Optimization</h3>
                <p className="icon-box-description">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus
                  nunc nibh praesent proin bibendum id ante pretium.
                </p>
                <div className="icon-box-button ">
                  <div className="btn-wrapper icon-position-before">
                    <Link
                      href="/services/awdawd"
                      className="icon-box-link"
                      aria-label="Learn More"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-fe2bdf3 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon">
        <div className="elementor-widget-container">
          <div className="elementor-icon-wrapper">
            <div className="elementor-icon">
              <Icon icon="decor-dot" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-7886d1c elementor-absolute elementor-view-default elementor-widget elementor-widget-icon">
        <div className="elementor-widget-container">
          <div className="elementor-icon-wrapper">
            <div className="elementor-icon">
              <Icon icon="decor-dot" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

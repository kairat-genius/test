import "./BlogBannerDetail.css";
import {Heading} from "@/shared/ui"
export const BlogBannerDetail = () => {
  return (
    <div className="elementor-element elementor-element-65496f9 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-bdb48d9 e-con-full e-flex e-con e-child">
          <Heading level={1} align="center">How to Create a Social Media Calendar That Drives Engagement</Heading>
          <div className="elementor-element elementor-element-931c902 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
            <div className="elementor-widget-container">
              <ul className="elementor-icon-list-items elementor-inline-items">
                <li className="elementor-icon-list-item elementor-inline-item">
                  <a href="#">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="jki jki-user-light"></i>
                    </span>
                    <span className="elementor-icon-list-text">John Doe</span>
                  </a>
                </li>
                <li className="elementor-icon-list-item elementor-inline-item">
                  <a href="#">
                    <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="icon icon-calendar-full"></i>
                    </span>
                    <span className="elementor-icon-list-text">Nov 11, 2024</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

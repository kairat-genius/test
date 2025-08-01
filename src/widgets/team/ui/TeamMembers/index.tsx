import "./TeamMembers.css";
import { Social, Heading } from "@/shared/ui";
export const TeamMembers = () => {
  return (
    <div className="elementor-element elementor-element-4c73301 e-con-full e-flex e-con e-child animated fadeInLeft">
      <div className="elementor-element elementor-element-e6f7db1 elementor-widget elementor-widget-image">
        <div className="elementor-widget-container">
          <img
            decoding="async"
            width="800"
            height="800"
            src="https://templatekit.bittheme.net/next/wp-content/uploads/sites/2/2024/10/Team-3-1024x1024.webp"
            className="attachment-large size-large wp-image-70"
            alt=""
          />
        </div>
      </div>
      <div className="elementor-element elementor-element-2afd3a3 e-con-full e-flex e-con e-child">
        <Heading level={3}>John Doe</Heading>
        <div className="elementor-element elementor-element-e8f7513 elementor-widget elementor-widget-heading">
          <div className="elementor-widget-container">
            <span className="elementor-heading-title elementor-size-default">
              CEO &amp; Founder
            </span>
          </div>
        </div>
        <div className="elementor-element elementor-element-9c843ad elementor-widget elementor-widget-spacer">
          <div className="elementor-widget-container">
            <div className="elementor-spacer">
              <div className="elementor-spacer-inner"></div>
            </div>
          </div>
        </div>
        <Social align="center"/>
      </div>
    </div>
  );
};

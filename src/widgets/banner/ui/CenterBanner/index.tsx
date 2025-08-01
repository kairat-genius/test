
import {Heading, Paragraph, Button} from "@/shared/ui"
import "./CenterBanner.css"
export const CenterBanner = () => {
  return (
    <div className="elementor-element elementor-element-036e21a e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-fe0c259 e-con-full e-flex e-con e-child">
          <div  className="elementor-element elementor-element-05c157f e-con-full e-flex e-con e-child">
            <Heading align="center">Ready to Transform? Connect with Our Experts</Heading>
            <Paragraph align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.</Paragraph>
            <Button title="Get Started Now"/>
          </div>
        </div>
      </div>
    </div>
  );
};

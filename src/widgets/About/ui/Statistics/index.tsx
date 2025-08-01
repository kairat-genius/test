
import './Statistics.css'
import {TitleBlock, Achievements, Paragraph, StarRating} from "@/shared/ui"
export const Statistics = () => {
  return (
    <div className="elementor-element elementor-element-9e221d4 e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-18b0436 e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-406a558 e-con-full e-flex e-con e-child">
          <TitleBlock specification="Success Stories from Brands We’ve Helped Grow" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." align="left"/>
            <div className="elementor-element elementor-element-2756e00 e-con-full e-grid e-con e-child">
              <Achievements number={15} title="Projects Done"/>
              <Achievements number={152} title="Projects Done"/>
              <Achievements number={151} title="Projects Done"/>
            </div>
          </div>
           <div className="elementor-element elementor-element-f541416 e-con-full e-flex e-con e-child animated fadeInRight">
            <div className="elementor-element elementor-element-ffa87de e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-b2ffe37 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-55c50c3 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      4.9
                    </span>
                  </div>
                </div>
                <StarRating activeStars={5} />
              </div>
              <div className="elementor-element elementor-element-3238569 elementor-widget elementor-widget-heading" >
                <div className="elementor-widget-container">
                  <span className="elementor-heading-title elementor-size-default">
                    Clients Rating
                  </span>
                </div>
              </div>
              <Paragraph>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                dapibus leo.</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

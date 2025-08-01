import {Button, Heading} from "@/shared/ui";
import {FeatureList} from "../FeatureList"

export const PricingCard = () => {
    return (
        <div className="elementor-element elementor-element-8debf39 e-con-full e-flex e-con e-child animated fadeInUp">
            <div className="elementor-element elementor-element-6500689 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-a229b79 elementor-view-stacked elementor-position-right elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                      <span className="elementor-icon elementor-animation-">
                        <i aria-hidden="true" className="icon icon-star-1"></i>{" "}
                      </span>
                            </div>

                            <div className="elementor-icon-box-content">
                                <h3 className="elementor-icon-box-title">
                                    <span>Premium Plan </span>
                                </h3>

                                <p className="elementor-icon-box-description">
                                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                                    dapibus leo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-de72443 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-f045b51 elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      $229
                    </span>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-c58c93d elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      / Monthly
                    </span>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-ea4c25b elementor-align-justify elementor-widget elementor-widget-button">
                    <Button title="Choose Package"/>
                </div>
                <Heading level={4}>Key Features</Heading>
                <FeatureList />

            </div>
        </div>
    );
};

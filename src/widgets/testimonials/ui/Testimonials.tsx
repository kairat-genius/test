import "./Testimonials.css"
import { TitleBlock, ArrowButton} from "@/shared/ui";
import Image from "next/image";
import {useTranslations} from "next-intl";

export const Testimonials = () => {
  const t = useTranslations('reviewsSection');
  return (
    <div className="elementor-element elementor-element-a131e2e e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <TitleBlock title={t('subtitle')} specification={t('title')} description={t('description')} align="left"/>
        <div className="elementor-element elementor-element-1b386ff e-con-full e-flex e-con e-child">
          <div className="elementor-element elementor-element-13b69f0 elementor-widget elementor-widget-jkit_testimonials animated fadeInRight">
            <div className="elementor-widget-container">
              <div className="jeg-elementor-kit jkit-testimonials arrow-top-left style-2">
                <div className="testimonials-list">

                    <div
                      className="tns-controls"
                      aria-label="Carousel Navigation"
                      tabIndex={0}
                    >
                      <ArrowButton direction="prev" ariaControls="tns1" />
                      <ArrowButton direction="next" ariaControls="tns1" />
                    </div>

                        <div className="testimonials-track tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal">
                          <div className="testimonial-item elementor-repeater-item-5d1b0e5 tns-item tns-slide-cloned" aria-hidden="true" tabIndex={-1}>
                            <div className="testimonial-box hover-from-left">
                              <div className="comment-content">
                                <p>
                                  Lorem ipsum odor amet, consectetuer adipiscing
                                  elit. Eu mollis dapibus senectus fringilla
                                  pulvinar penatibus dictum volutpat? Tempus est
                                  nullam dapibus volutpat aenean tellus
                                  habitasse eros integer.
                                </p>
                              </div>
                              <div className="comment-header">
                                <ul className="rating-stars"></ul>
                              </div>
                              <div className="comment-bio">
                                <div className="bio-details">
                                  <div className="profile-image">
                                    <Image
                                      width={768}
                                      height={768}
                                      src="https://templatekit.bittheme.net/next/wp-content/uploads/sites/2/2024/10/Team-1-768x768.webp"
                                      className="source-library"
                                      alt="Samantha Ling"
                                    />
                                  </div>
                                  <span className="profile-info">
                                    <strong className="profile-name">
                                      Samantha Ling
                                    </strong>
                                    <p className="profile-des">Client</p>
                                  </span>
                                </div>
                                <div className="icon-content"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

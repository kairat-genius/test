import Link from "next/link";
import { TitleBlock } from "@/shared/ui";
import "@/styles/post-1743.css";

export default function NotFound() {
  return (
    <div className="elementor elementor-1743">
      <div className="elementor-element elementor-element-08170e6 e-flex e-con-boxed e-con e-parent e-lazyloaded">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-dbfb9a1 e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-2c0ae2b elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <span className="elementor-heading-title elementor-size-default">
                  404
                </span>
              </div>
            </div>
            <TitleBlock
              specification="Page Is Not Found!"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo."
                  align="center"
            />
            <div className="elementor-element elementor-element-52af611 elementor-align-center elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href="/public"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">
                        Back To Home
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

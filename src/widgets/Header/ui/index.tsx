import Link from "next/link";
import {NavBar} from "./NavBar";
import Image from "next/image";
import {SwitchLanguage} from "./SwitchLanguage";
import "./post-698.css"

export const Header = () => {
  return (
    <header className="elementor elementor-698">
        <div className="elementor-element elementor-element-26a43e4 e-flex e-con-boxed e-con e-parent e-lazyloaded">
          <div className="e-con-inner">
            <Link href="/" className="elementor-element elementor-element-837aff8 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-14f99fc elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Image width={800} height={366} src="https://templatekit.bittheme.net/next/wp-content/uploads/sites/2/2024/10/Logo-1.webp" className="attachment-large size-large wp-image-699" alt="Logo Header" sizes="(max-width: 800px) 100vw, 800px"/>
                </div>
              </div>
            </Link>
            <NavBar/>
              <SwitchLanguage/>
          </div>
        </div>
    </header>
  );
};

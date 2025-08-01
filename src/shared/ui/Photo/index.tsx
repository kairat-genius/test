import './Photo.css'
import Image from "next/image";
export const Photo = () => {
    return (
        <div className="elementor-element elementor-element-f80d44f elementor-widget elementor-widget-image">
            <div className="elementor-widget-container">
              <Image
                decoding="async"
                width={800}
                height={578}
                src="https://templatekit.bittheme.net/next/wp-content/uploads/sites/2/2024/10/diverse-pair-of-friends-colleagues-shoot-2023-11-27-05-23-00-utc_result-1024x740.webp"
                className="attachment-large size-large wp-image-1389"
                alt="awdawd"
              />
            </div>
          </div>
    );
  };
  
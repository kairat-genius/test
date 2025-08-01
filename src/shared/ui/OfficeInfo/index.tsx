
import './OfficeInfo.css'
interface OfficeInfoProps {
  title: string;
  description: string;
}

export const OfficeInfo = ({title, description}: OfficeInfoProps) => {
  return (
    <div className="elementor-element elementor-element-139d4e1 e-con-full e-flex e-con e-child">
    <div className="elementor-element elementor-element-c231af0 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" >
      <div className="elementor-widget-container">
        <div className="elementor-icon-box-wrapper">
          <div className="elementor-icon-box-icon">
            <span className="elementor-icon elementor-animation-">
              <i aria-hidden="true" className="icon icon-clock11"></i>
            </span>
          </div>

          <div className="elementor-icon-box-content">
            <h3 className="elementor-icon-box-title">
              <span>{title}</span>
            </h3>

            <p className="elementor-icon-box-description">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

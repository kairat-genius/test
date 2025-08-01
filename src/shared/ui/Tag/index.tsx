interface TagProps {
  title: string;
}

export const Tag = ({ title}: TagProps) => {
    return (
        <div className="elementor-element elementor-element-bcbbbfe elementor-position-left elementor-vertical-align-middle animated-fast elementor-mobile-position-left elementor-view-default elementor-widget elementor-widget-icon-box animated fadeInUp" >
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-icon">
              <span className="elementor-icon elementor-animation-">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-circle"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                </svg>
              </span>
            </div>

            <div className="elementor-icon-box-content">
              <span className="elementor-icon-box-title">
                <span>{title}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
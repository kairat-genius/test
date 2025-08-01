
interface ButtonProps {
    link?: string;
    title: string;
    element?: string;
  }
  

export const Button = ({link, title, element} : ButtonProps) => {
    return (
      <div className={`elementor-element elementor-element-${element} elementor-widget elementor-widget-button`}>
        <div className="elementor-widget-container">
          <div className="elementor-button-wrapper">
            <a className="elementor-button elementor-button-link elementor-size-sm" href={link}>
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">{title}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
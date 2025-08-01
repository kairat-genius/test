import './ProgressBars.css'

interface ProgressBarsProps {
  title: string;
  percentage: string;
}

export const ProgressBars = ({ title, percentage }: ProgressBarsProps) => {
    return (
        <div className="elementor-element elementor-element-1f5ce82 animated-fast elementor-widget elementor-widget-jkit_progress_bar animated fadeIn">
            <div className="elementor-widget-container">
              <div className="jeg-elementor-kit jkit-progress-bar jeg_module_1494_6_673dbce9ebad9">
                <div className="progress-group default">
                  <div className="progress-skill-bar">
                    <div className="skill-bar-content">
                      <span className="skill-title">
                        {title}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-track" style={{ width: `${percentage}%` }}>
                        <div className="number-percentage-wrapper">
                          <span className="number-percentage loaded">
                            {percentage}%
                          </span>
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
  
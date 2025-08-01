import "./Achievements.css";

interface AchievementsProps {
  title: string;
  number: number;
}
export const Achievements = ({ title, number }: AchievementsProps) => {
  return (
    <div className="elementor-element elementor-element-bf5f7f4 e-con-full animated-fast e-flex e-con e-child animated fadeInUp">
      <div className="elementor-element elementor-element-fc026c4 elementor-widget elementor-widget-jkit_fun_fact">
        <div className="elementor-widget-container">
          <div className="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_1494_11_673dbce9ed08e">
            <div className="fun-fact-inner">
              <div className="content">
                <div className="number-wrapper">
                  <span className="number loaded">
                    {number}
                  </span>
                  <span className="suffix">+</span>
                </div>
                <span className="title">{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

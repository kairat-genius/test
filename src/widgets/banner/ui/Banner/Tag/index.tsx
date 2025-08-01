interface TagProps {
    title: string;
}

export const Tag = ({title}: TagProps) => {

    return (

        <div
            className="elementor-element elementor-element-3b2d888 animated-slow elementor-widget elementor-widget-heading animated fadeInUp">
            <div className="elementor-widget-container">
                  <span className="elementor-heading-title elementor-size-default">
                    {title}
                  </span>
            </div>
        </div>

    );
};

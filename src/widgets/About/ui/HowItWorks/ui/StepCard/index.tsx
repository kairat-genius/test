import {Heading, Paragraph} from "@//shared/ui";
import {Step} from "@/interface/global";


export const StepCard = ({ id, title, description }:  { id: number } & Step) => {
    return (
        <div className="elementor-element elementor-element-ece9138 e-con-full animated-fast e-flex e-con e-child animated fadeIn">
            <div className="elementor-element elementor-element-32235be e-con-full e-flex e-con e-child">
                <Heading level={3} color="orange">
                    {`0${id}`}
                </Heading>
                <Heading level={3}>{title}</Heading>
            </div>
            <Paragraph>
                {description}
            </Paragraph>
        </div>

    );
};

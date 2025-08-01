import {TitleBlock} from "@/shared/ui";

import "./HowItWorks.css";
import {StepCard} from "./ui/StepCard";
import {useTranslations} from "next-intl";
import {Step} from "@/interface/global";

export const HowItWorks = () => {
    const t = useTranslations('howItWorksSection');
    const steps = t.raw("steps");
    return (
        <div className="elementor-element elementor-element-340e763 e-flex e-con-boxed e-con e-parent e-lazyloaded">
            <div className="e-con-inner">
                <TitleBlock
                    title={t('subtitle')}
                    specification={t('title')}
                    align="center"
                />

                <div className="elementor-element elementor-element-293fa0f e-grid e-con-full e-con e-child">
                    {steps.map((item: Step, index: number) => (
                        <StepCard key={index} id={index + 1} title={item.title}
                                  description={item.description}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

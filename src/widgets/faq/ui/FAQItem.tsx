import {TitleBlock, Accordion} from "@/shared/ui";
import {FQAs} from "@/interface/global";

interface FAQItemProps {
    item: FQAs; // Определяем тип для пропса item
}

export const FAQItem = ({ item }: FAQItemProps) => {
    return (
        <div className="elementor-element elementor-element-ae9e842 e-flex e-con-boxed e-con e-parent e-lazyloaded">
            <div className="e-con-inner">
                <TitleBlock
                    specification={item.title}
                    description={item.description}
                    align="left"
                />
                <div className="elementor-element elementor-element-5584efd e-con-full e-flex e-con e-child">
                    <Accordion items={item.faqs}/>
            </div>
        </div>
</div>
)
    ;
};

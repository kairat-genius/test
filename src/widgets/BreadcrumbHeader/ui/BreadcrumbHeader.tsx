
import "./BreadcrumbHeader.css"
import {Heading} from "@/shared/ui"
import {Breadcrumbs} from "@/widgets/BreadcrumbHeader/ui/Breadcrumbs";

type BreadcrumbItem = {
    label: string;
    path?: string;
};

type BreadcrumbHeaderProps = {
    items: BreadcrumbItem[];
};

export const BreadcrumbHeader = ({ items}: BreadcrumbHeaderProps) => {
    const lastItem = items[items.length - 1];
    return (
        <div className="elementor-element elementor-element-fb9609e e-flex e-con-boxed e-con e-parent e-lazyloaded">
            <div className="e-con-inner">
                <div className="elementor-element elementor-element-785372a e-con-full e-flex e-con e-child">
                    <Heading level={1}>{lastItem.label}</Heading>
                    <Breadcrumbs items={items} />
                </div>
            </div>
        </div>
    );
};

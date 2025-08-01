import {Team} from "@/widgets/team";
import {AboutUsBlock, HowItWorks, WhyChooseUs, Statistics} from "@/widgets/About";
import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import {useTranslations} from 'next-intl';

export default function Abouts() {
    const t = useTranslations('header');
    return (
        <div className="elementor">
            <BreadcrumbHeader
                items={[{label: t('about'), path: "/about"}]}
            />
            <AboutUsBlock/>
            <Team/>
            <Statistics/>
            <HowItWorks/>
            <WhyChooseUs/>
        </div>
    );
}

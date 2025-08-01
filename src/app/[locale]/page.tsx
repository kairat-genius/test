
import {PortfolioList} from "@/widgets/portfolio";
import {ServiceTags, HomeServices} from "@/widgets/services";
import {Banner, CenterBanner} from "@/widgets/banner";
import {HowItWorks, AboutUsBlock, WhyChooseUs, Statistics} from "@/widgets/About";
import {Testimonials} from "@/widgets/testimonials";

export default function Home() {
    return (
        <div className="elementor elementor-602">
            <Banner/>
            <ServiceTags/>
            <AboutUsBlock/>
            <HomeServices/>
            <HowItWorks/>
            <CenterBanner/>
            <WhyChooseUs/>
            <Statistics/>
            <PortfolioList/>
            <Testimonials/>
        </div>
    );
}

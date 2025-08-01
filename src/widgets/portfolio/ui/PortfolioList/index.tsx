
import "./portfolio.css";
import {TitleBlock} from "@/shared/ui"
import  {PortfolioCard} from  "@/entities"
import {useTranslations} from "next-intl";

export const PortfolioList = () => {
  const t = useTranslations('portfolioSection');
  return (
    <div className="elementor-element elementor-element-2c9f92e e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <TitleBlock title={t('subtitle')} specification={t('title')} align="center"/>
        <div className="elementor-element elementor-element-a0a8a94 e-grid e-con-full e-con e-child">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        {/*<Pagination />*/}
      </div>
    </div>
  );
};

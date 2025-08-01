
import "@/styles/post-1721.css"
import { FAQ } from "@/widgets/faq";
import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import {useTranslations} from "next-intl";
export default function Faq() {
    const t = useTranslations('header');
  return (
    <div className="elementor elementor-1721">
        <BreadcrumbHeader
            items={[{ label: t('faqs'), path: "/faqs" }]}
        />
        <FAQ />
   </div>
  );
}

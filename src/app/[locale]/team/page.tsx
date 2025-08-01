import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import { Team } from "@/widgets/team";
import '@/styles/widget-social-icons.min.css'
import {useTranslations} from "next-intl";

export default function Teams() {
    const t = useTranslations('header');
  return (
    <div className="elementor">
        <BreadcrumbHeader
            items={[{ label: t('team'), path: "/team" }]}
        />
        <Team />
   </div>
  );
}

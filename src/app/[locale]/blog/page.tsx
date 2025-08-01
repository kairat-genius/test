
import { BlogList } from "@/widgets/blog";
import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import {useTranslations} from "next-intl";
export default function Blog() {
    const t = useTranslations('header');
    return (
    <div className="elementor">
        <BreadcrumbHeader
            items={[{ label: t('blog'), path: "/blog" }]}
        />
        <BlogList />
   </div>
  );
}

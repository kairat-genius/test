
import {ContactSection, LocationContactForm} from "@/widgets/contact"
import "./contact.css"
import {BreadcrumbHeader} from "@/widgets/BreadcrumbHeader";
import {useTranslations} from "next-intl";

export default function Contact() {
    const t = useTranslations('header');
  return (
    <div className="elementor elementor-1840">
        <BreadcrumbHeader
            items={[{ label: t('contact'), path: "/contact" }]}
        />
        <ContactSection />
        <LocationContactForm />
   </div>
  );
}

import {FAQItem} from "./FAQItem"
import {useTranslations} from "next-intl";
import {FQAs} from "@/interface/global";

export const FAQ = () => {
    const t = useTranslations();
    const faq = t.raw("FQAs");
    return (
        <>
            {faq.map((item: FQAs) => (
                <FAQItem key={item.id} item={item}/>
            ))}
        </>
    );
};

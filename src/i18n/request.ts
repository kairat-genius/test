import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {getGlobals} from "@/api/language/getGlobals";
import {AbstractIntlMessages} from 'next-intl';

export default getRequestConfig(async ({requestLocale}) => {
    let locale: string | undefined = await requestLocale;

    if (!locale || !routing.locales.includes(locale)) {
        locale = routing.defaultLocale;
    }

    const globalData = await getGlobals(locale);

    return {
        locale,
        messages: globalData as unknown as AbstractIntlMessages
    };
});



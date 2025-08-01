import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

import {SUPPORTED_LOCALES} from "@/fetch/settings";

export const routing = defineRouting({
    locales: SUPPORTED_LOCALES,
    defaultLocale: SUPPORTED_LOCALES[0],
    localePrefix: 'as-needed',
    localeDetection: false,

});

export const {Link, redirect, usePathname} =
    createNavigation(routing);

import {ReactNode} from "react";
import {Header} from "@/widgets/Header"
import {Footer} from "@/widgets/Footer"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "@/styles/globals.css";
import "../test.css"
import "@/styles/index.css"
import "@/styles/header-footer.min.css"
import "@/styles/theme.min.css"
import "@/styles/all.min.css"
import "@/styles/frontend.min.css"
import "@/styles/jkiticon.css"
import "@/styles/main.css"
import "@/styles/post-4.css"
import "@/styles/post-602.css"
import "@/styles/post-757.css"
import "@/styles/post-789.css"
import "@/styles/responsive.css"
import "@/styles/style.css"
import "@/styles/widget-divider.min.css"
import "@/styles/widget-heading.min.css"
import "@/styles/widget-icon-box.min.css"
import "@/styles/widget-icon-list.min.css"
import "@/styles/widget-image.min.css"
import "@/styles/widget-rating.min.css"
import "@/styles/widget-spacer.min.css"
import "@/styles/widget-styles.css"
import "@/styles/ekiticons.css"
import "@/styles/css.css"

// анимация
import "@/styles/fadeIn.min.css"

interface RootLayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }


    const messages = await getMessages();

    return (
      <html lang={locale}>
      <body>
      <div className="envato_tk_templates-template envato_tk_templates-template-elementor_header_footer single single-envato_tk_templates postid-5 jkit-color-scheme elementor-default elementor-template-full-width elementor-kit-4 elementor-page elementor-page-5 e--ua-blink e--ua-edge e--ua-webkit">
      <NextIntlClientProvider messages={messages}>
      <Header/>
      {children}
      <Footer/>
      </NextIntlClientProvider>
      </div>
      </body>
      </html>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomScripts from "@/components/CustomScripts";
import { NextIntlClientProvider, hasLocale} from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from "@/components/BootstrapClient";
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import $ from 'jquery';

import {getStrapiData} from "@/lib/StrapiApis";
import {Lato,Cairo} from "next/font/google";
import "../locomotive-scroll.css";
import "../globals.css";
import "../custom.css";
import "../navigation.css";
import "../responsive.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const latoFont = Lato({
  subsets: ["latin"],
  weight: "100",
});

const cairoFont = Cairo({
  subsets: ["latin"],
  weight: "200",
});


export async function generateMetadata({ params: { locale } }) {

  // const strapiDataGlobal =  await getStrapiData("/api/global?locale=" + locale);

  return {
    title: "D360",
    description: "D360",
    manifest: '/favicons/manifest.json',
    icons: {
      icon: '/favicons/favicon-32x32.png',
    },

    // title: strapiDataGlobal.data.siteName,
    // description: strapiDataGlobal.data.siteDescription
    // alternates: {
    //   canonical: '/', // Your base URL
    //   languages: Object.fromEntries(
    //     i18n.locales.map((loc) => [loc, `/${loc}`])
    //   ),
    // },
    // openGraph: {
    //   title: `${appConfig.appName} - ${locale.toUpperCase()}`,
    //   description: `The official website for ${appConfig.appName} (${locale})`,
    //   locale: locale, // Set the Open Graph locale
    //   // ... other Open Graph properties
    // },
 
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  //const strapiDataHome =  await getStrapiData("/api/global?locale=" + locale);
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const t = await getTranslations();
  const messages = await getMessages();


  return (
    <html lang={locale} dir={dir}>
      <head> 
        <script
              src="https://code.jquery.com/jquery-3.6.0.min.js"
              integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
              crossOrigin="anonymous"></script>
      </head>
      <body>
      
        <div data-scroll-container>
          <NextIntlClientProvider messages={messages}>

              <Navbar locale={locale} />

              {children}

              <Footer locale={locale} />
 
             
          </NextIntlClientProvider>
        </div> 

        <BootstrapClient />
        <CustomScripts locale={locale} />
      </body>
    </html>
  );
}

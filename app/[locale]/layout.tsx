import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomScripts from "@/components/CustomScripts";
import LocomotiveScripts from "@/components/LocomotiveScripts";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from "@/components/BootstrapClient";
import { Html, Head, Main, NextScript } from 'next/document';
import CustomStyles from "@/components/CustomStyles";
import Image from 'next/image';
import Script from 'next/script';
import $ from 'jquery';

import {getStrapiData} from "@/lib/StrapiApis";
import {Lato,Tajawal} from "next/font/google";
import "../styles/bootstrap-rtl.css";
import "../styles/locomotive-scroll.css";
import "../styles/globals.css";
import "../styles/custom.css";
import "../styles/navigation.css";
import "../styles/responsive.css";
import "../styles/custom-rtl.css";
import "../styles/navigation-rtl.css";
import "../styles/responsive-rtl.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const latoFont = Lato({
  subsets: ["latin"],
  weight: "400",
});

const cairoFont = Tajawal({
  subsets: ["latin"],
  weight: "400",
});


export async function generateMetadata() {

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
        {/*<CustomStyles />*/}
      </head>
      <body id={locale}>

        <div data-scroll-container>
          <NextIntlClientProvider messages={messages}>

              <Navbar locale={locale} />

              {children}

              <Footer locale={locale} />
 
             
          </NextIntlClientProvider>
        </div> 

        <BootstrapClient />
        <LocomotiveScripts locale={locale} />
        <CustomScripts locale={locale} />

          <div className="modal fade" id="dpAppQr">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5"></h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">

                  <center>
                    <h2>Get D360 Bank App</h2>
                    <div className="spacer-40"></div>
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <Image src={'/icons/qr.bcbd6d65.svg'} alt="" className="img-fluid" width={600} height={600}/>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                    
                    <div className="spacer-40"></div>
                    {/*<p className="fnt-20">or get a download link via SMS</p>*/}
                  </center>
          
                </div>

                {/*<div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>*/}
              </div>
            </div>
          </div>

      </body>
    </html>
  );
}

import { useTranslations } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import {getStrapiData} from "@/lib/StrapiApis";
import Image from 'next/image';
import Link from "next/link";

export async function generateMetadata({ params: { locale } }) {
  // const strapiDataGlobal =  await getStrapiData("/api/global?locale=" + locale);
  // console.log(strapiDataGlobal.data.siteName);

  const t = await getTranslations("AboutPage");

  return {
    title: t('title')
  };
}



export default function About() {

  const t = useTranslations("AboutPage");

  
  return (

    <div className="main-content "  data-scroll-section>

      <section id="bannerSection" className="vh-100 bannerCover" style={{ 'background-image': 'url(/about/bg-about.png)' }}>

        <div className="banner-caption-page">
          <div className="container">
            <div className="spacer-100"></div>
            <div className="spacer-80"></div>

            <div className="row">
              <div className="col-md-6">
                <h2 className="banner-title-page fnt-drk-blue">ABOUT<br/>D360</h2>
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="spacer-20"></div>

            <button className="btn btn-orange btn-lg btn-dark-dl">Download the App</button>

          </div>
          <div className="spacer-100"></div>
          <div className="spacer-80"></div>          
        </div>
      </section>

      <section id="storySection" className="">
        <div className="container">
            <div className="spacer-100"></div>
            <div className="spacer-80"></div>

              <div className="row">
                <div className="col-md-6">
                  <center>
                    <Image src={'/about/about-story.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                  </center>

                </div>
                <div className="col-md-6">

                    <h2 className="fnt-60 fnt-drk-blue fnt-w700">Our Story</h2> 
                    <div className="spacer-20"></div>

                    <p className="fnt-25">A Saudi digital bank, fully Sharia-compliant and dedicated to delivering the best banking experience for everyone in Saudi Arabia. </p>
                    <p className="fnt-25">It’s not just about banking services, we’re redefining what banking means. A bank that’s close to you, adapts to your needs, designed for you, and always one step ahead, with products and services that fully comply with Islamic Sharia. We are leading the next era of banking, smarter, faster, and always one step ahead.</p>
                    <p className="fnt-25">We believe banking should be easy, straightforward, and grounded in trust and transparency.</p>

                </div>
              </div>

            <div className="spacer-100"></div>
            <div className="spacer-80"></div>          
        </div>
        
      </section>

         



    </div>

  );
}

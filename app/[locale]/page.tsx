import { useTranslations } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import {getStrapiData} from "@/lib/StrapiApis";
import Image from 'next/image';
import Link from "next/link";

export async function generateMetadata({ params: { locale } }) {
  // const strapiDataGlobal =  await getStrapiData("/api/global?locale=" + locale);
  // console.log(strapiDataGlobal.data.siteName);

  const t = await getTranslations("HomePage");

  return {
    title: t('title')
  };
}


 
export default function Home() {

  const t = useTranslations("HomePage");

  return (


    <div className="main-content">

      <section id="bannerSection" className="" data-scroll-section>

        <div className="banner-media">
          <div className="container-fluid remPad">
            <div className="ratio ratio-16x9">
              <video autoPlay loop muted playsInline >
                <source src={'/videos/home-banner.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
              </video> 
            </div>
          </div>
        </div>

        <div className="banner-caption">
          <div className="container">

            <div className="row">
              <div className="col-md-6">
                <h2 className="banner-title">YOUR MONEY IN MOTION</h2>
                <p className="banner-subtitle">Bank seamlessly across borders and currencies wherever you go.</p>
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="spacer-20"></div>

            <button className="btn btn-dark btn-lg btn-dark-dl">Download the App</button>

          </div>
        </div>
      </section>

      <section id="cardSection" className="bg-beige" data-scroll-section>
        <div className="container">
          <div className="spacer-100"></div>

          <div className="row">
            <div className="col-md-6">
                <div className="card-caption capAnim capAnim-show capAnim-1">
                  <h2 className="card-title">BANK ANYTIME, ANYWHERE</h2>
                  <p className="card-subtitle">Because your world never stops, and neither should your bank.</p>            
                </div>

                <div className="card-caption capAnim capAnim-2">
                  <h1 className="card-title">SECURITY YOU CAN TRUST</h1>
                  <p className="card-subtitle">Your money and data are protected with top-tier security.</p>            
                </div>  

                <div className="card-caption capAnim capAnim-3">
                  <h1 className="card-title">BANKING IN A BLINK</h1>
                  <p className="card-subtitle">All your banking services are completed in minutes.</p>            
                </div> 

                <div className="card-caption capAnim capAnim-3">
                  <h1 className="card-title">BANK ANYTIME, ANYWHERE</h1>
                  <p className="card-subtitle">Because your world never stops, and neither should your bank..</p>            
                </div>                 
            </div>
            <div className="col-md-6">

            </div>
          </div>

          <div className="spacer-100"></div>  
        </div>

      </section>

      <section id="infoSection" data-scroll-section>
        <div className="container">
          <div className="spacer-100"></div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <center> 
                <h2 className="fnt-60 fnt-drk-blue fnt-w700">A shariah-compliant Saudi Digital Bank that aims to provide the best financial experience in the Kingdom.</h2> 

                <div className="spacer-40"></div>

                <div className="row">

                  <div className="col-md-4">
                    <center>
                      <p className="fnt-60 fnt-orange fnt-w700">1st</p>
                      <p className="fnt-30 fnt-light-gray fnt-w600">Saudi Digital Bank</p>
                    </center>
                    <div className="spacer-40"></div>
                  </div>

                  <div className="col-md-4">
                    <center>
                      <p className="fnt-60 fnt-orange fnt-w700">+1M</p>
                      <p className="fnt-30 fnt-light-gray fnt-w600">Users</p>
                    </center>
                    <div className="spacer-40"></div>
                  </div>

                  <div className="col-md-4">
                    <center>
                      <p className="fnt-60 fnt-orange fnt-w700">+70</p>
                      <p className="fnt-30 fnt-light-gray fnt-w600">Countries</p>
                    </center>
                    <div className="spacer-40"></div>
                  </div>
                </div>

              </center>              
            </div>
            <div className="col-md-2"></div>
          </div>

        </div>
        
        <div className="spacer-100"></div>
      </section>

      <section id="cardTypeSection" className="bg-black"  data-scroll-section>
        <div className="container-fluid">


          <div className="row vh-75 posRel">
            <div className="col-md-6 bannerCover rempad" style={{ 'backgroundImage': 'url(/bg-ct-left.png)' }}>
              
            </div>
            <div className="col-md-6 bannerCover rempad" style={{ 'backgroundImage': 'url(/bg-ct-right.png)' }}>

            </div>
          </div>




        </div>      
      </section>

      <section id="shariahSection" className="" style={{ 'backgroundImage': 'url(/bg-shariah.png)' }} data-scroll-section>
        <div className="container-fluid">
          <div className="spacer-100"></div>

            <div className="container">

              <div className="row">
                <div className="col-md-7">
                  <h2 className="fnt-100 fnt-white fnt-w700">SHARIAH COMPLIANT</h2>
                  <p className="fnt-30 fnt-white fnt-w300">D360 Bank is committed to the principles of Islamic Shariah and ensuring compliance in all its banking transactions. To achieve this, an independent Shariah committee has been established to oversee all the bank's operations, products, and services.</p>  

                    <div className="spacer-20"></div>

                    <Link href="" className="btn btn-transparent btn-lg btn-dark-dl">Read more</Link>

                </div>
                <div className="col-md-5"></div>
              </div>
              
            </div>
          <div className="spacer-100"></div>       
        </div>      
      </section>  

      <section id="transferSection" className="" data-scroll-section>     
        <div className="container">
          <div className="spacer-100"></div>    

          <div className="row">
            <div className="col-md-7">

                <h2 className="fnt-80 fnt-drk-blue fnt-w700">INTERNATIONAL TRANSFERS?</h2>
                <p className="fnt-60 fnt-drk-blue fnt-w300">Faster & better rates</p>
                <p className="fnt-30 fnt-drk-blue fnt-w300">Experience fast global transfers, clear and competitive rates, and full transparency every step of the way</p>
              
              <div className="spacer-40"></div>
            </div>

            <div className="col-md-5">

              <center>
                <Image src={'/icon-app.png'} alt="" className="img-fluid" width={520} height={600}/>
              </center>


              <div className="spacer-40"></div>
            </div>
          </div>
          
          <div className="spacer-100"></div>           
        </div>            
      </section>            



    </div>

  );
}

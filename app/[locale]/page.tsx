import { useTranslations } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import {getStrapiData} from "@/lib/StrapiApis";
import Image from 'next/image';
import Link from "next/link";

// export async function generateMetadata({ params: { locale } }) {
//   // const strapiDataGlobal =  await getStrapiData("/api/global?locale=" + locale);
//   // console.log(strapiDataGlobal.data.siteName);

//   const t = await getTranslations("HomePage");

//   return {
//     title: t('title')
//   };
// }


 
export default function Home() {

  const t = useTranslations();

  return (


    <div className="main-content">

      <section id="bannerSection" className="snap-target" data-scroll-section>

      
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
              <div className="col-7 col-md-6">
                <div className="col-lang col-en">
                  <h2 className="banner-title lato-black">{t("HomePage.bannerSection.title")}</h2>
                  <p className="banner-subtitle">{t("HomePage.bannerSection.subTitle")}</p>
                  <div className="spacer-20"></div>
                  <button className="btn btn-dark btn-lg btn-dark-dl" data-bs-toggle="modal" data-bs-target="#dpAppQr">{t("Buttons.dpApp")}</button>                  
                </div>
              </div>
              <div className="col-7 col-md-6">
                <div className="col-lang col-ar">
                  <h2 className="banner-title">{t("HomePage.bannerSection.title")}</h2>
                  <p className="banner-subtitle">{t("HomePage.bannerSection.subTitle")}</p>
                  <div className="spacer-20"></div>
                  <button className="btn btn-dark btn-lg btn-dark-dl">{t("Buttons.dpApp")}</button>                  
                </div>              
              </div>
            </div>
          </div>
        </div>
        
        <div data-scroll data-scroll-repeat data-scroll-call="cardSectionStart"></div>
      </section>


      <div id="cardsection" className="posRel desktop-view">

        <div id="cardSectionImg" className="reveal-img">
          <Image src={'/card/card.png'} alt="" className="img-fluid" width={600} height={600}/>
        </div>

        <div id="cardIcons1" className="hideIcons">
          <Image src={'/card/icon-plane.png'} alt="" className="img-fluid icon1" width={150} height={150}/>
          <Image src={'/card/icon-coin.png'} alt="" className="img-fluid icon2" width={150} height={150}/>
          <Image src={'/card/icon-map.png'} alt="" className="img-fluid icon3" width={150} height={150}/>
          <Image src={'/card/ss-1.png'} alt="" className="img-fluid icon4" width={350} height={350}/>
        </div>

        <div id="cardIcons2" className="hideIcons">
          <Image src={'/card/icon-lock.png'} alt="" className="img-fluid icon1" width={150} height={150}/>
          <Image src={'/card/icon-coin.png'} alt="" className="img-fluid icon2" width={150} height={150}/>
          <Image src={'/card/icon-shield.png'} alt="" className="img-fluid icon3" width={150} height={150}/>
          <Image src={'/card/ss-2.png'} alt="" className="img-fluid icon4" width={350} height={350}/>
        </div>

        <div id="cardIcons3" className="hideIcons">
          <Image src={'/card/icon-arrow.png'} alt="" className="img-fluid icon1" width={150} height={150}/>
          <Image src={'/card/icon-rocket.png'} alt="" className="img-fluid icon2" width={150} height={150}/>
          <Image src={'/card/iocn-clock.png'} alt="" className="img-fluid icon3" width={150} height={150}/>
          <Image src={'/card/ss-3.png'} alt="" className="img-fluid icon4" width={350} height={350}/>
        </div>

        <div id="cardIcons4" className="hideIcons">
          <Image src={'/card/icon-diamond.png'} alt="" className="img-fluid icon1" width={150} height={150}/>
          <Image src={'/card/icon-search.png'} alt="" className="img-fluid icon2" width={150} height={150}/>
          <Image src={'/card/icon-coin.png'} alt="" className="img-fluid icon3" width={150} height={150}/>
          <Image src={'/card/ss-4.png'} alt="" className="img-fluid icon4" width={350} height={350}/>
        </div>

        <section id="cardSection1" className="bg-beige vh-100 snap-target" data-scroll-section>

          
          <div className="container">


            <div className="row vh-100 d-flex align-items-center">
              <div className="col-md-6">
                <div className="card-caption capAnim-show capAnim-1">
                  <h2 className="card-title reveal-top" data-scroll-class="in-view" data-scroll data-scroll-repeat data-scroll-call="cardSection1">
                    {t("HomePage.cardSection.title1")}
                  </h2>
                  <p className="card-subtitle reveal-bottom" data-scroll-class="in-view" data-scroll data-scroll-repeat>
                    {t("HomePage.cardSection.subTitle1")}
                  </p>            
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
           
          </div>

        </section>

        <section id="cardSection2" className="bg-beige vh-100 snap-target" data-scroll-section>
          <div className="container">
          
            <div className="row vh-100 d-flex align-items-center">
              <div className="col-md-6">
                <div className="card-caption  capAnim-show capAnim-2">
                  <h2 className="card-title reveal-top" data-scroll-class="in-view" data-scroll data-scroll-repeat data-scroll-call="cardSection2">
                    {t("HomePage.cardSection.title2")}
                  </h2>
                  <p className="card-subtitle reveal-bottom" data-scroll-class="in-view" data-scroll data-scroll-repeat>
                    {t("HomePage.cardSection.subTitle2")}
                  </p>            
                </div> 
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>

        </section>

        <section id="cardSection3" className="bg-beige vh-100 snap-target" data-scroll-section>
          <div className="container">

            <div className="row vh-100 d-flex align-items-center">
              <div className="col-md-6"> 
                <div className="card-caption  capAnim-show capAnim-3">
                  <h2 className="card-title reveal-top" data-scroll-class="in-view" data-scroll data-scroll-repeat data-scroll-call="cardSection3">
                    {t("HomePage.cardSection.title3")}
                  </h2>
                  <p className="card-subtitle reveal-bottom" data-scroll-class="in-view" data-scroll data-scroll-repeat>
                    {t("HomePage.cardSection.subTitle3")}
                  </p>            
                </div> 
              </div>
              <div className="col-md-6"></div>
            </div>

           
          </div>

        </section>

        <section id="cardSection4" className="bg-beige vh-100 snap-target" data-scroll-section >
          <div className="container">
          

            <div className="row vh-100 d-flex align-items-center">
              <div className="col-md-6"> 
                <div className="card-caption  capAnim-show capAnim-4">
                  <h2 className="card-title reveal-top" data-scroll-class="in-view" data-scroll data-scroll-repeat data-scroll-call="cardSection4">
                    {t("HomePage.cardSection.title4")}
                  </h2>
                  <p className="card-subtitle reveal-bottom" data-scroll-class="in-view" data-scroll data-scroll-repeat>
                    {t("HomePage.cardSection.subTitle4")}
                  </p>            
                </div>                 
              </div>
              <div className="col-md-6"></div>
            </div>           
          </div>
          
        </section>


      </div>


      <section id="infoSection" className="snap-target" data-scroll-section> 

        <div className="container" data-scroll-sticky>
          <div className="spacer-100"></div>
          <div className="spacer-100"></div>

          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <center> 
                <h2 className="fnt-60 fnt-drk-blue fnt-w700" data-scroll data-scroll-speed="3" data-scroll-repeat>
                {t("HomePage.infoSection.title")}
                </h2> 

                <div className="spacer-40"></div>

                <div className="row">

                  <div className="col-md-4" data-scroll data-scroll-speed="4" data-scroll-repeat>
                    <center>
                      <p className="fnt-60 fnt-orange fnt-w700 force-trans">{t("HomePage.infoSection.counter1")}</p>
                      <p className="fnt-30 fnt-light-gray fnt-w600">{t("HomePage.infoSection.sdb")}</p>
                    </center>
                    <div className="spacer-40"></div>
                  </div>

                  <div className="col-md-4" data-scroll data-scroll-speed="4" data-scroll-repeat>
                    <center>
                      <p className="fnt-60 fnt-orange fnt-w700 force-trans">{t("HomePage.infoSection.counter2")}</p>
                      <p className="fnt-30 fnt-light-gray fnt-w600">{t("HomePage.infoSection.users")}</p>
                    </center>
                    <div className="spacer-40"></div>
                  </div>

                  <div className="col-md-4" data-scroll data-scroll-speed="4" data-scroll-repeat>
                    <center>
                      <p className="fnt-60 fnt-orange fnt-w700 force-trans">{t("HomePage.infoSection.counter3")}</p>
                      <p className="fnt-30 fnt-light-gray fnt-w600">{t("HomePage.infoSection.countries")}</p>
                    </center>
                    <div className="spacer-40"></div>
                  </div>
                </div>

              </center>              
            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
        

          <div data-scroll data-scroll-repeat data-scroll-call="cardSectionEnd"></div>

        <div className="spacer-100"></div>
        
        
      </section>

      <section id="cardTypeSection" className="bg-black posRel vh-75 desktop-view"  data-scroll-section>
        <div className="container-fluid posRel vh-75 remPad">

          <div className="ct-anim-bg vh-75">
              
              <div className="vh-75 ct-card">
                <Image src={'/card/card.png'} alt="" className="img-fluid" width={300} height={500}/>
                <div className="ct-caption-physical">
                  <center>
                    <p className="fnt-30 fnt-white fnt-bold remMar">{t("HomePage.cardType.physical")}</p>
                    <p className="fnt-15 fnt-white remMar">{t("HomePage.cardType.physicalDesc")}</p>
                    <div className="spacer-20"></div>
                    <Link href="" className="btn btn-white btn-sm btn-dl">{t("Buttons.createCard")}</Link>
                  </center>
                </div>
              </div> 

              <div className="vh-75 ct-bg ct-bg-left">
                <Image src={'/home/bg-ct-left.jpg'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
              </div>

              <div className="vh-75 ct-phone">
                <Image src={'/home/ct-phone.png'} alt="" className="img-fluid" width={350} height={500}/>
                <div className="ct-caption-digital">
                  <center>
                    <p className="fnt-30 fnt-white fnt-bold remMar">{t("HomePage.cardType.digital")}</p>
                    <p className="fnt-15 fnt-white remMar">{t("HomePage.cardType.digitalDesc")}</p>
                    <div className="spacer-20"></div>
                    <Link href="" className="btn btn-white btn-sm btn-dl">{t("Buttons.createCard")}</Link>
                  </center>
                </div>                
              </div>              

              <div className="vh-75 ct-bg ct-bg-right">
                <Image src={'/home/bg-ct-right.jpg'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
              </div>

          </div>


        </div>      
      
      </section>

      <section id="shariahSection" className="" style={{ 'backgroundImage': 'url(/home/bg-shariah.png)' }} data-scroll-section>
        <div className="container-fluid">
          <div className="spacer-100"></div>

            <div className="container">

              <div className="row">
                <div className="col-md-7">
                  <h2 className="fnt-100 fnt-white fnt-w700">{t("HomePage.shariahSection.title")}</h2>
                  <p className="fnt-30 fnt-white fnt-w300">{t("HomePage.shariahSection.title")}</p>  

                    <div className="spacer-20"></div>

                    <Link href="" className="btn btn-transparent btn-lg btn-dark-dl">{t("Buttons.readMore")}</Link>

                </div>
                <div className="col-md-5"></div>
              </div>
              
            </div>
          <div className="spacer-100"></div>       
        </div>      
      
      </section>  

{/*      <section id="transferSection" className="" data-scroll-section>     
        <div className="container">
          <div className="spacer-100"></div>    

          <div className="row">
            <div className="col-md-7">

                <h2 className="fnt-80 fnt-drk-blue fnt-w700">{t("HomePage.transferSection.title")}</h2>
                <p className="fnt-60 fnt-drk-blue fnt-w300">{t("HomePage.transferSection.subTitle")}</p>
                <p className="fnt-30 fnt-drk-blue fnt-w300">{t("HomePage.transferSection.description")}</p>
              
              <div className="spacer-40"></div>
            </div>

            <div className="col-md-5">

              <center>
                <Image src={'/home/icon-app.png'} alt="" className="img-fluid" width={520} height={600}/>
              </center>


              <div className="spacer-40"></div>
            </div>
          </div>
          
          <div className="spacer-100"></div>           
        </div>            
      
      </section>  */}          



    </div>

  );
}

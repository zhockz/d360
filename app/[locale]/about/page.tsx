
import { useTranslations } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import {getStrapiData} from "@/lib/StrapiApis";
import Image from 'next/image';
import Link from "next/link";
import LocomotiveScroll from 'locomotive-scroll';

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

    <div className="main-content">

      <section id="bannerSection" className="vh-100 bannerCover" style={{ 'backgroundImage': 'url(/about/bg-about.png)' }} data-scroll-section>

        <div className="banner-caption-page">
          <div className="container">
            <div className="spacer-100"></div>

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
        </div>
      
      </section>

      <section id="counterSection" data-scroll-section>
        <div className="container">
          <div className="spacer-100"></div>

            <div className="row">
              <div className="col-6 col-md-3">
                <div className="about-counter">
                  <center>
                    <h4 className="fnt-30 fnt-drk-blue fnt-w300">Lorem Ipsum</h4>
                    <p className="fnt-60 fnt-orange fnt-w700">+250K</p>
                  </center>
                </div>              
                <div className="spacer-40"></div>
              </div>
              
              <div className="col-6 col-md-3">
                <div className="about-counter">
                  <center>
                    <h4 className="fnt-30 fnt-drk-blue fnt-w300">Lorem Ipsum</h4>
                    <p className="fnt-60 fnt-orange fnt-w700">+500K</p>
                  </center>
                </div>              
                <div className="spacer-40"></div>
              </div>

              <div className="col-6 col-md-3">
                <div className="about-counter">
                  <center>
                    <h4 className="fnt-30 fnt-drk-blue fnt-w300">Lorem Ipsum</h4>
                    <p className="fnt-60 fnt-orange fnt-w700">+300K</p>
                  </center>
                </div>              
                <div className="spacer-40"></div>
              </div>

              <div className="col-6 col-md-3">
                <div className="about-counter">
                  <center>
                    <h4 className="fnt-30 fnt-drk-blue fnt-w300">Lorem Ipsum</h4>
                    <p className="fnt-60 fnt-orange fnt-w700">+400K</p>
                  </center>
                </div>              
                <div className="spacer-40"></div>
              </div>
            </div>

        </div>

      </section>      

      <section id="storySection" data-scroll-section> 
        <div className="container">
          <div className="spacer-100"></div> 

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
        
        </div> 
      
      </section>
  
      <section id="investorSection" data-scroll-section>
      
        <div className="container">
            <div className="spacer-100"></div>

              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  
                  <center>
                    <h2 className="fnt-60 fnt-drk-blue fnt-w700">Our Main Investors</h2> 
                    <div className="spacer-40"></div>
                  </center>

                  <div className="row d-flex align-items-center">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                      <center>
                        <Image src={'/about/investor-1.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>                 
                      </center>
                    </div>
                    <div className="col-md-3">
                    <center>
                        <Image src={'/about/investor-2.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>                 
                      </center>
                    </div>
                    <div className="col-md-3"></div>
                  </div>



                </div>
                <div className="col-md-2"></div>
              </div>


            <div className="spacer-100"></div>
        </div>
      
      </section>

      <section id="leaderSection" data-scroll-section>

        <div className="container">
          <div className="spacer-100"></div>

            <h3 className="fnt-40 fnt-drk-blue fnt-w700">Meet Our Leaders</h3>
            <div className="spacer-40"></div>

            <div className="leaderSectionTabs">
              
              <ul className="nav nav-tabs" id="leaderSectionMenu">
                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#bod">Board of Directors</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#mt">Management Team</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#sh">Shariah</button>
                </li>
              </ul>

              <div className="row">

                <div id="leaderContent" className="col-md-12">
                </div>

                <div id="leaderLists" className="col-md-12">
                  <div className="tab-content">

                    <div className="tab-pane fade show active" id="bod">
                      <div className="spacer-40"></div>
                        BOD
                      <div className="spacer-40"></div>
                    </div>

                    <div className="tab-pane fade" id="mt">
                     <div className="spacer-40"></div>
                      MT
                      <div className="spacer-40"></div>
                    </div>

                    <div className="tab-pane fade" id="sh">
                     <div className="spacer-40"></div>
                      SH
                      <div className="spacer-40"></div>
                    </div>
                  </div>                  
                </div>
                
              </div>
      

            </div>

          <div className="spacer-100"></div>
    
        </div>
      
      </section>

      <section id="faqSection" data-scroll-section>
        <div className="container">
          <div className="spacer-100"></div>

          <h2 className="fnt-60 fnt-drk-blue fnt-w700">FAQs</h2> 
          <div className="spacer-20"></div>

          <div className="accordion" id="faqAccordion">

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  Is D360 Bank a licensed bank in Saudi Arabia?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="fnt-20">D360 Bank is licensed by the council of Ministers Resolution and subject to the supervision of Saudi Central Bank</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" >
                  How do I open an account with D360 Bank?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="fnt-20">It's simple: Download the app, fill in your details, and complete the registration steps. Your account will be ready in 2 minutes.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" >
                  Is D360 Bank compliant with Islamic Shariah principles?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="fnt-20">Yes, all products and services of D360 Bank are compliant with Islamic Shariah principles. Therefore, a fully independent Shariah board has been established to oversee all the bank's operations, products, and services.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" >
                  How can I benefit from the bank's services?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="fnt-20">It's simple: Download the app, fill in your details, and complete the registration steps. Your account will be ready in 2 minutes.</p>
                </div>
              </div>
            </div>

          </div>


          <div className="spacer-100"></div>
        </div>
      
      </section>

      <section id="helpSection" className="bannerCover" style={{ 'backgroundImage': 'url(/about/helping.png)' }} data-scroll-section>
        <div className="container">
          <div className="spacer-100"></div>
          <div className="spacer-80"></div>

          <center>
            <h2 className="fnt-60 fnt-drk-blue fnt-w700">Helping you wherever you are</h2>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <p className="fnt-20 fnt-drk-blue">Your opinion matters because you are at the heart of everything we do. Have a question, feedback, or even a complaint? Our team is here for you</p>

                  <div className="spacer-20"></div>
                  <Link href="" className="btn btn-orange btn-lg btn-dl">Contact US</Link>                 
              </div>
              <div className="col-md-2"></div>
            </div>
            
          </center>

          <div className="spacer-80"></div>
          <div className="spacer-100"></div>
        </div>
        
      </section>

      <section id="contactSection" data-scroll-section>
        <div className="container">
          <div className="spacer-100"></div>

          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <center>
                <Image src={'/about/reach.png'} alt="" className="img-fluid borded-img" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
              </center>
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-7">

              <h4 className="fnt-40 fnt-drk-blue fnt-w700">How to Reach Us?</h4>

              <div className="row">

                <div className="col-md-4">
                  <p className="fnt-20 fnt-light-gray">Inside Saudi Arabia</p>
                  <p className="fnt-20 fnt-drk-blue">8001244410</p>
                </div>

                <div className="col-md-4">
                  <p className="fnt-20 fnt-light-gray">Outside Saudi Arabia</p>
                  <p className="fnt-20 fnt-drk-blue">00966920024360</p>
                </div>

                <div className="col-md-4">
                  <p className="fnt-20 fnt-light-gray">Email</p>
                  <p className="fnt-20 fnt-drk-blue">test@d360bank.com</p>
                </div>

              </div>

              <div className="spacer-40"></div>

              <h4 className="fnt-30 fnt-drk-blue fnt-w700">Via the App</h4>

              <p className="fnt-20 fnt-drk-blue">Reach out through the Help section. Send us a message or request a callback, and we'll be there for you.</p>

              <div className="spacer-20"></div>
              <Link href="" className="btn btn-orange btn-lg btn-dl">Download app</Link>              

            </div>
          </div>

          <div className="spacer-100"></div>
        </div>
        
      </section>


    </div>

  );

}

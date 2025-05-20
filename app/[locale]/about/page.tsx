
import { useTranslations } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import {getStrapiData} from "@/lib/StrapiApis";
import Image from 'next/image';
import Link from "next/link";

// export async function generateMetadata({ params: { locale } }) {
  
//   // const strapiDataGlobal =  await getStrapiData("/api/global?locale=" + locale);
//   // console.log(strapiDataGlobal.data.siteName);

//   const t = await getTranslations("AboutPage");

//   return {
//     title: t('title')
//   };
// }



export default function About() {

  const t = useTranslations();
  
  return (

    <div className="main-content">

      <section id="bannerSection" className="vh-100 bannerCover" style={{ 'backgroundImage': 'url(/about/bg-about.png)' }} data-scroll-section>

        <div className="banner-caption-page">
          <div className="container">
            <div className="spacer-100"></div>

            <div className="row">

              <div className="col-md-6">
                <div className="col-lang col-en">
                  <h2 className="banner-title-page fnt-drk-blue">{t("AboutPage.bannerSection.title")}<br/>{t("AboutPage.bannerSection.subTitle")}</h2>
                  <div className="spacer-20"></div>
                  <button className="btn btn-orange btn-lg btn-dark-dl">{t("Buttons.dpApp")}</button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="col-lang col-ar">
                  <h2 className="banner-title-page fnt-drk-blue">{t("AboutPage.bannerSection.title")}<br/>{t("AboutPage.bannerSection.subTitle")}</h2>
                  <div className="spacer-20"></div>
                  <button className="btn btn-orange btn-lg btn-dark-dl">{t("Buttons.dpApp")}</button>
                </div>
              </div>

            </div>



          </div>
          <div className="spacer-100"></div>         
        </div>
      
      </section>

      <section id="counterSection" data-scroll-section>
        <div className="container">
          <div className="spacer-100"></div>

            <div className="row">
              <div className="col-6 col-md-3 anim-opacity-hide"  data-scroll-class="anim-opacity-show" data-scroll  data-scroll-speed="4" >
                <div className="about-counter">
                  <center>
                    <h4 className="fnt-30 fnt-drk-blue fnt-w300">{t("AboutPage.counterSection.counter1")}</h4>
                    <p className="fnt-60 fnt-orange fnt-w700 force-trans">{t("AboutPage.counterSection.counterDesc1")}</p>
                  </center>
                </div>              
                <div className="spacer-40"></div>
              </div>
              
              <div className="col-6 col-md-3 anim-opacity-hide" data-scroll-class="anim-opacity-show" data-scroll  data-scroll-speed="4" >
                <div className="about-counter">
                  <center>
                    <h4 className="fnt-30 fnt-drk-blue fnt-w300">{t("AboutPage.counterSection.counter2")}</h4>
                    <p className="fnt-60 fnt-orange fnt-w700 force-trans">{t("AboutPage.counterSection.counterDesc2")}</p>
                  </center>
                </div>              
                <div className="spacer-40"></div>
              </div>

              <div className="col-6 col-md-3 anim-opacity-hide" data-scroll-class="anim-opacity-show" data-scroll  data-scroll-speed="4" >
                <div className="about-counter">
                  <center>
                    <h4 className="fnt-30 fnt-drk-blue fnt-w300">{t("AboutPage.counterSection.counter3")}</h4>
                    <p className="fnt-60 fnt-orange fnt-w700 force-trans">{t("AboutPage.counterSection.counterDesc3")}</p>
                  </center>
                </div>              
                <div className="spacer-40"></div>
              </div>

              <div className="col-6 col-md-3 anim-opacity-hide" data-scroll-class="anim-opacity-show" data-scroll  data-scroll-speed="4" >
                <div className="about-counter">
                  <center>
                    <h4 className="fnt-30 fnt-drk-blue fnt-w300">{t("AboutPage.counterSection.counter4")}</h4>
                    <p className="fnt-60 fnt-orange fnt-w700 force-trans">{t("AboutPage.counterSection.counterDesc4")}</p>
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

                    <h2 className="fnt-60 fnt-drk-blue fnt-w700">{t("AboutPage.storySection.title")}</h2> 
                    <div className="spacer-20"></div>

                    <p className="fnt-25">{t("AboutPage.storySection.description.par1")}</p>
                    <p className="fnt-25">{t("AboutPage.storySection.description.par2")}</p>
                    <p className="fnt-25">{t("AboutPage.storySection.description.par3")}</p>

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
                    <h2 className="fnt-60 fnt-drk-blue fnt-w700">{t("AboutPage.investorSection.title")}</h2> 
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

            <h3 className="fnt-40 fnt-drk-blue fnt-w700">{t("AboutPage.leaderSection.title")}</h3>
            <div className="spacer-40"></div>

            <div className="leaderSectionTabs">
              
              <ul className="nav nav-tabs" id="leaderSectionMenu">
                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#bod">{t("AboutPage.leaderSection.tabs.bod")}</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#mt">{t("AboutPage.leaderSection.tabs.mt")}</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#sh">{t("AboutPage.leaderSection.tabs.sh")}</button>
                </li>
              </ul>

              <div className="row">

                <div id="leaderContent" className="col-md-12">

                  <div className="spacer-40"></div>

                  <div id="id1" className="contentBox">
                    <div className="row">
                      <div className="col-10">
                        <p className="member-name">Taha Al-Quweiz</p>
                        <p className="member-position">Chairman</p>
                        <div className="spacer20"></div>
                      </div>
                      <div className="col-2"></div>
                    </div>

                    <p className="content">In addition to being the Chairman of the Board at D360 Bank, Mr. AlKuwaiz is currently the Chairman of the Board of Derayah Financial Company, where he played a pivotal role in establishing the company. He has held various senior positions including Chairman of Bank AlJazira, Chairman of the Saudi Stock Exchange (Tadawul) and Vice Chairman of STC. He was also the Deputy CEO of NCB, and a former Director of Banking Technology at SAMA. Mr. AlKuwaiz holds a bachelor’s degree in computer science from King Fahd University of Petroleum & Minerals. He has extensive work experience in the financial services sector.</p>
                      <div className="spacer-40"></div>



                  </div>


                </div>

                <div id="leaderLists" className="col-md-12">


                  <div className="tab-content">

                    <div className="tab-pane fade show active" id="bod">
                      <div className="spacer-40"></div>

                        <div className="teamList">
                          <div className="row">

                            <div className="col-list col-md-3">
                              <div className="teamDetails posRel" data-team="#id1" >
                                <div className="teamImg">
                                  <Image src={'/about/team/taha.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Taha Al-Quweiz</p>
                                  <p className="fnt-20 fnt-w100 remMar">Chairman</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div>

                            <div className="col-list col-md-3" data-team="#id2">
                              <div className="teamDetails posRel">
                                <div className="teamImg">
                                  <Image src={'/about/team/zaki.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Zaki Alshowaier</p>
                                  <p className="fnt-20 fnt-w100 remMar">Vice Chairman</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div>

                            <div className="col-list col-md-3">
                              <div className="teamDetails posRel">
                                <div className="teamImg">
                                  <Image src={'/about/team/ibrahim.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Ibrahim Al Jammaz</p>
                                  <p className="fnt-20 fnt-w100 remMar">Board Member</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div>

                            <div className="col-list col-md-3">
                              <div className="teamDetails posRel">
                                <div className="teamImg">
                                  <Image src={'/about/team/bassem.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Bassem Al Sallom</p>
                                  <p className="fnt-20 fnt-w100 remMar">Board Member</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div>

                            <div className="col-list col-md-3">
                              <div className="teamDetails posRel">
                                <div className="teamImg">
                                  <Image src={'/about/team/fahad.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Fahad AlJomaih</p>
                                  <p className="fnt-20 fnt-w100 remMar">Board Member</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div>    

                            <div className="col-list col-md-3">
                              <div className="teamDetails posRel">
                                <div className="teamImg">
                                  <Image src={'/about/team/nouf.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Nouf AlJoaid</p>
                                  <p className="fnt-20 fnt-w100 remMar">Board Member</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div>  

                            <div className="col-list col-md-3">
                              <div className="teamDetails posRel">
                                <div className="teamImg">
                                  <Image src={'/about/team/tim.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Tim Brooke</p>
                                  <p className="fnt-20 fnt-w100 remMar">Board Member</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div> 

                            <div className="col-list col-md-3">
                              <div className="teamDetails posRel">
                                <div className="teamImg">
                                  <Image src={'/about/team/mudassir.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Mudassir Sheikha</p>
                                  <p className="fnt-20 fnt-w100 remMar">Board Member</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div>  

                            <div className="col-list col-md-3">
                              <div className="teamDetails posRel">
                                <div className="teamImg">
                                  <Image src={'/about/team/faraz.png'} alt="" className="img-fluid" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                                </div>
                                <div className="teamCaption">
                                  <p className="fnt-20 fnt-bold remMar">Faraz Khalid</p>
                                  <p className="fnt-20 fnt-w100 remMar">Board Member</p>
                                </div>                              
                              </div>
                              <div className="spacer-40"></div>
                            </div>                                                           

                          </div>
                        </div>


                      <div className="spacer-40"></div>
                    </div>

                    <div className="tab-pane fade" id="mt">
                     <div className="spacer-40"></div>
                      MANAGEMENT TEAM
                      <div className="spacer-40"></div>
                    </div>

                    <div className="tab-pane fade" id="sh">
                     <div className="spacer-40"></div>
                      SHARIAH
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

          <h2 className="fnt-60 fnt-drk-blue fnt-w700">{t("AboutPage.faqSection.title")}</h2> 
          <div className="spacer-20"></div>

          <div className="accordion" id="faqAccordion">

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  {t("AboutPage.faqSection.faq.q1")}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="fnt-20">{t("AboutPage.faqSection.faq.a1")}</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" >
                  {t("AboutPage.faqSection.faq.q2")}
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="fnt-20">{t("AboutPage.faqSection.faq.a2")}</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" >
                  {t("AboutPage.faqSection.faq.q3")}
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="fnt-20">{t("AboutPage.faqSection.faq.a3")}</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" >
                  {t("AboutPage.faqSection.faq.q4")}
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  <p className="fnt-20">{t("AboutPage.faqSection.faq.a4")}</p>
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
            <h2 className="fnt-60 fnt-drk-blue fnt-w700">{t("AboutPage.helpSection.title")}</h2>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <p className="fnt-20 fnt-drk-blue">{t("AboutPage.helpSection.subTitle")}</p>

                  <div className="spacer-20"></div>
                  <Link href="" className="btn btn-orange btn-lg btn-dl">{t("Buttons.contactUs")}</Link>                 
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

              <h4 className="fnt-40 fnt-drk-blue fnt-w700">{t("AboutPage.contactSection.title")}</h4>

              <div className="row">

                <div className="col-md-4">
                  <p className="fnt-20 fnt-light-gray">{t("AboutPage.contactSection.contactDet.insideKSA")}</p>
                  <p className="fnt-20 fnt-drk-blue">{t("AboutPage.contactSection.contactDet.insideNumber")}</p>
                </div>

                <div className="col-md-4">
                  <p className="fnt-20 fnt-light-gray">{t("AboutPage.contactSection.contactDet.outsideKSA")}</p>
                  <p className="fnt-20 fnt-drk-blue">{t("AboutPage.contactSection.contactDet.outsideNumber")}</p>
                </div>

                <div className="col-md-4">
                  <p className="fnt-20 fnt-light-gray">{t("AboutPage.contactSection.contactDet.emailLabel")}</p>
                  <p className="fnt-20 fnt-drk-blue">{t("AboutPage.contactSection.contactDet.emailAdd")}</p>
                </div>

              </div>

              <div className="spacer-40"></div>

              <h4 className="fnt-30 fnt-drk-blue fnt-w700">{t("AboutPage.contactSection.contactDet.viaApp")}</h4>

              <p className="fnt-20 fnt-drk-blue">{t("AboutPage.contactSection.subTitle")}</p>

              <div className="spacer-20"></div>
              <Link href="" className="btn btn-orange btn-lg btn-dl">{t("Buttons.dpApp")}</Link>              

            </div>
          </div>

          <div className="spacer-100"></div>
        </div>
        
      </section>


    </div>

  );

}

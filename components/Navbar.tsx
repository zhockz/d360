"use client";

import Image from 'next/image';
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
import { useTransition } from 'react';


const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale; // Change the locale segment
    const newPath = segments.join('/');

    startTransition(() => {
      router.replace(newPath); // Navigates without a full reload
    });
  }; 

  return (

    <div>
      <div id="main-navigation" className="desktop-view">
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
          <div className="container-fluid">

            <div className="container d-flex align-items-center">
              <Link className="navbar-brand" href={`/${locale}/`}>
                <Image src={'/logo/logo-main-white.svg'} alt="" className="img-fluid nav-logo logo-main logo-show" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
                <Image src={'/logo/logo-main-colored.svg'} alt="" className="img-fluid nav-logo logo-white logo-hide" width={0} height={0} sizes="50vw" style={{ width: 'auto', height: 'auto' }}/>
              </Link>
            
              <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li className="nav-item">
                    <Link className="nav-link nav-pad" href={`/${locale}/about`}>{t("about")}</Link>
                  </li>
                  {/*<li className="nav-item">
                    <Link className="nav-link nav-pad" href={`/${locale}/personal`}>{t("personal")}</Link>
                  </li>*/}
                  <li className="nav-item">
                    <button id="lang-switcher-en" className="nav-link nav-pad-lang" onClick={() => changeLanguage("ar")}>
                      <font className="fnt-trans">
                      {t("langDpAR")}
                      </font>
                    </button>
                  </li>

                 <li className="nav-item">
                    <button id="lang-switcher-ar" className="nav-link nav-pad-lang" onClick={() => changeLanguage("en")}>
                      <font className="fnt-trans">
                      {t("langDpEN")}
                      </font>
                    </button>
                  </li>
                </ul>



             </div>
            </div>
          </div>
        </nav>     
      </div>

      <div id="main-navigation-mobile" className="mobile-view">

        <div className="container-fluid">
          <div className="mobile-navbar">
            <div className="row d-flex align-items-center">
              <div className="col-6">
               <Image src={'/logo/logo-main-white.svg'} alt="" className="img-fluid nav-logo-mobile" width={0} height={0} sizes="50vw" style={{ width: 'auto', height: 'auto' }}/>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <Image src={'/icons/menu-btn.png'} alt="" className="img-fluid btn-menu" data-bs-toggle="offcanvas" data-bs-target="#d360offCanvas" width={25} height={25}/>
              </div>
            </div>          
          </div>
        </div>


        <div className="offcanvas offcanvas-start"  id="d360offCanvas">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">
              <Image src={'/logo/logo-main-colored.svg'} alt="" className="img-fluid nav-logo-offCanvas" width={0} height={0} sizes="50vw" style={{ width: 'auto', height: 'auto' }}/>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">

            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link nav-pad" href={`/${locale}/about`}>{t("about")}</Link>
                </li>
                <li className="nav-item">
                  <button id="lang-switcher-en" className="nav-link nav-pad-lang" onClick={() => changeLanguage("ar")}>
                    <font className="fnt-trans">
                    {t("langDpAR")}
                    </font>
                  </button>
                </li>

               <li className="nav-item">
                  <button id="lang-switcher-ar" className="nav-link nav-pad-lang" onClick={() => changeLanguage("en")}>
                    <font className="fnt-trans">
                    {t("langDpEN")}
                    </font>
                  </button>
                </li>
            </ul>
          </div>
        </div>        


      </div>
    </div>  
  );
};

export default Navbar;

"use client";

import Image from 'next/image';
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";


const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
  return (
      <div id="main-navigation" className="desktop-view">
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
          <div className="container-fluid">

            <div className="container d-flex align-items-center">
              <Link className="navbar-brand" href={`/${locale}/`}>
                <Image src={'/logo/logo-main.svg'} alt="" className="img-fluid nav-logo logo-main logo-show" width={65} height={105}/>
                <Image src={'/logo/logo-white.svg'} alt="" className="img-fluid nav-logo logo-white logo-hide" width={65} height={105}/>
              </Link>
            
              <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link nav-pad" href={`/${locale}/about`}>{t("about")}</Link>
                  </li>
                  {/*<li className="nav-item">
                    <Link className="nav-link nav-pad" href={`/${locale}/personal`}>{t("personal")}</Link>
                  </li>*/}
                  <li className="nav-item">
                    <Link id="lang-switcher" className="nav-link nav-pad-lang" href=""><font className="fnt-trans">{t("language")}</font></Link>
                  </li>

                </ul>

                <div className="hideThis">
                  <select value={locale} onChange={handleLanguageChange} className="form-control">
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                  </select>
                </div>

             </div>
            </div>
          </div>
        </nav>     
      </div>

  );
};

export default Navbar;

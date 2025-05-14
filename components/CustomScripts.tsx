"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Script from 'next/script';
import $ from 'jquery';

const CustomScripts = ({ locale }: { locale: string }) => {

     useEffect(() => {

        var aScript = document.createElement('script');
        aScript.type = 'text/javascript';

        document.head.appendChild(aScript);
       aScript.onload = () => {};

      import('locomotive-scroll').then((locomotiveModule) => {

        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });  

        // scroll.destroy();
        // scroll.init();
         // scroll.update();
        scroll.on("scroll",(instance) => {

            //console.log(instance.scroll.y);

                if (instance.scroll.y > 150) {

                    $("#main-navigation .navbar").addClass("hideTopHeader");
                    $("#main-navigation .navbar").removeClass("hideTopHeader");
                    $("#main-navigation .navbar").removeClass("navbar-transparent");
                    $("#main-navigation .navbar").addClass("navbar-dark");
                    $("#main-navigation .logo-main").removeClass("logo-show");
                    $("#main-navigation .logo-main").addClass("logo-hide");
                    $("#main-navigation .logo-white").removeClass("logo-hide");
                    $("#main-navigation .logo-white").addClass("logo-show");

                }else{

                    $("#main-navigation .navbar").addClass("hideTopHeader");
                    $("#main-navigation .navbar").removeClass("hideTopHeader");
                    $("#main-navigation .navbar").addClass("navbar-transparent");
                    $("#main-navigation .navbar").removeClass("navbar-dark");
                    $("#main-navigation .logo-main").addClass("logo-show");
                    $("#main-navigation .logo-main").removeClass("logo-hide");
                    $("#main-navigation .logo-white").addClass("logo-hide");
                    $("#main-navigation .logo-white").removeClass("logo-show");                    

                }    

        });          


      });



    });


};

export default CustomScripts;
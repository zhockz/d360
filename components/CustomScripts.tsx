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

       //  var aScript = document.createElement('script');
       //  aScript.type = 'text/javascript';

       //  document.head.appendChild(aScript);
       // aScript.onload = () => {};

      import('locomotive-scroll').then((locomotiveModule) => {

        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smoothMobile: false,
        });  


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

       new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
        return () => scroll.destroy();
      });

      $(".ct-bg-left").on("mouseenter", function(){
        $(this).addClass("slide-right");
        $(".ct-bg-right").addClass("fade-card");
        $(".ct-phone").addClass("fade-card");
      });

      $(".ct-bg-left").on("mouseleave", function(){
        $(this).removeClass("slide-right");
        $(".ct-bg-right").removeClass("fade-card");
        $(".ct-phone").removeClass("fade-card");
      });

      $(".ct-bg-right").on("mouseenter", function(){
        $(this).addClass("slide-left");
        $(".ct-bg-left").addClass("fade-card");
        $(".ct-card").addClass("fade-card");
      });

      $(".ct-bg-right").on("mouseleave", function(){
        $(this).removeClass("slide-left");
        $(".ct-bg-left").removeClass("fade-card");
        $(".ct-card").removeClass("fade-card");
      });
  

      

    },[]);


};

export default CustomScripts;
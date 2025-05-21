"use client";

import { useTranslations } from "next-intl";
import Router from "next/router";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Script from 'next/script';
import $ from 'jquery';

const LocomotiveScripts = ({ locale }: { locale: string }) => {

     useEffect(() => {

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

        const snapSection = document.querySelector('.snap-target');
        let hasSnapped = false;

        scroll.on('scroll', (args) => {
          const scrollY = args.scroll.y;
          const sectionTop = snapSection.offsetTop;
          const sectionHeight = snapSection.offsetHeight;

          // Trigger when user is within 25% of section center
          const distanceToSection = Math.abs(scrollY - sectionTop);

          if (!hasSnapped && distanceToSection < sectionHeight / 4) {
            hasSnapped = true;
            scroll.scrollTo(snapSection, {
              offset: 0,
              duration: 500,
              disableLerp: true
            });
          }

          // Reset flag when user scrolls away
          if (hasSnapped && distanceToSection > sectionHeight / 2) {
            hasSnapped = false;
          }
        });

        new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));
        return () => scroll.destroy();         

    },[]);


};

export default LocomotiveScripts;

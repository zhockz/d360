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

    const pathname = usePathname();

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


        let currentIndex = 0;
        let isScrolling = false;
        const sections = document.querySelectorAll('.snap-target');

        function scrollToSection(index) {
          if (index < 0 || index >= sections.length) return;
          isScrolling = true;

          scroll.scrollTo(sections[index], {
            offset: 0,
            duration: 800,
          });

          currentIndex = index;
          setTimeout(() => {
            isScrolling = false;
          }, 500);


        }

        function handleWheel(e) {
          if (isScrolling) return;

          if (e.deltaY > 50) {
            scrollToSection(currentIndex + 1);
  

          } else if (e.deltaY < -50) {
            scrollToSection(currentIndex - 1);
           
          }
        }

        // Prevent native scroll behavior
        window.addEventListener('wheel', (e) => {
          e.preventDefault();
          handleWheel(e);

        }, { passive: false });


        scroll.on('call', (value, way, obj) => {

          if (way === 'enter') {


            if(value === 'cardSectionStart'){
                $("#cardSectionImg").addClass("reveal-img");
                $("#cardSectionImg").removeClass("show-img");   
            } 

            if(value === 'cardSectionEnd'){
              $("#cardSectionImg").addClass("reveal-img"); 
              $("#cardSectionImg").removeClass("show-img");  
            } 
             
            if(value === 'cardSection1'){
                $("#cardSectionImg").removeClass("reveal-img");                
                $("#cardSectionImg").addClass("show-img");      

                $("#cardSectionImg img").removeClass("rotate-img1 rotate-img2 rotate-img3 rotate-img4");                
                $("#cardSectionImg img").addClass("rotate-img1");
            }
            if(value === 'cardSection2'){
                $("#cardSectionImg").removeClass("reveal-img");             
                $("#cardSectionImg").addClass("show-img");   

                $("#cardSectionImg img").removeClass("rotate-img1 rotate-img2 rotate-img3 rotate-img4");  
                $("#cardSectionImg img").addClass("rotate-img2");
            }

            if(value === 'cardSection3'){ 
                $("#cardSectionImg").removeClass("reveal-img");               
                $("#cardSectionImg").addClass("show-img");    

                $("#cardSectionImg img").removeClass("rotate-img1 rotate-img2 rotate-img3 rotate-img4");  
                $("#cardSectionImg img").addClass("rotate-img3");
            }

            if(value === 'cardSection4'){
                $("#cardSectionImg").removeClass("reveal-img");                  
                $("#cardSectionImg").addClass("show-img");   

                $("#cardSectionImg img").removeClass("rotate-img1 rotate-img2 rotate-img3 rotate-img4");  
                $("#cardSectionImg img").addClass("rotate-img4");
            }
          }

          if (way === 'exit') {

   
          }
        });

        new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));
        return () => scroll.destroy();         

    },[pathname]);


};

export default LocomotiveScripts;

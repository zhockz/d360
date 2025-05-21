"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useEffect, useState  } from "react";
import Script from 'next/script';
import $ from 'jquery';



const CustomScripts = ({ locale }: { locale: string }) => {

  const pathname = usePathname();

   useEffect(() => {

    function callJqueryFunctions() {

        $(".ct-bg-left").on("mouseenter", function(){
          $(this).addClass("slide-right");
          $(".ct-bg-right").addClass("fade-card");
          $(".ct-phone").addClass("fade-card");
          $(".ct-caption-physical").addClass("ct-caption-show");
        });

        $(".ct-bg-left").on("mouseleave", function(){
          $(this).removeClass("slide-right");
          $(".ct-bg-right").removeClass("fade-card");
          $(".ct-phone").removeClass("fade-card");
          $(".ct-caption-physical").removeClass("ct-caption-show");
        });

        $(".ct-bg-right").on("mouseenter", function(){
          $(this).addClass("slide-left");
          $(".ct-bg-left").addClass("fade-card");
          $(".ct-card").addClass("fade-card");
          $(".ct-caption-digital").addClass("ct-caption-show");            
        });

        $(".ct-bg-right").on("mouseleave", function(){
          $(this).removeClass("slide-left");
          $(".ct-bg-left").removeClass("fade-card");
          $(".ct-card").removeClass("fade-card");
          $(".ct-caption-digital").removeClass("ct-caption-show");            
        });

        $(".teamDetails").each(function(){
          $(this).on("click touch", function(){

              var getData = $(this).attr("data-team");
              console.log(getData);
              
              $(".teamDetails").removeClass("active");
              $(".teamDetails").addClass("non-active");
              $(this).addClass("active");
              $(this).addClass("non-active");

              $("#leaderContent").addClass("col-md-4"); 
              $("#leaderLists").addClass("col-md-8");
              $(".teamList .col-list").removeClass("col-md-3");
              $(".teamList .col-list").addClass("col-md-4");              
              $("#leaderLists").removeClass("col-md-12");
              $("#leaderContent").removeClass("col-md-12");
              $("#leaderContent").addClass("showContent");
              $(".contentBox").removeClass("active");
              $(getData).addClass("active")
              setTimeout(function(){
               
              },500);
                           
          });
        });

        $(".closeDetails").each(function(){

          $(this).on("click touch", function(){

              $(".teamDetails").removeClass("active");
              $(".teamDetails").removeClass("non-active");
              $("#leaderContent").removeClass("showContent"); 

              $("#leaderContent").removeClass("col-md-4"); 
              $("#leaderLists").removeClass("col-md-8");
              $(".teamList .col-list").addClass("col-md-3");
              $(".teamList .col-list").removeClass("col-md-4");              
              $("#leaderLists").addClass("col-md-12");
              $("#leaderContent").addClass("col-md-12");               

              setTimeout(function(){
                
              },500);            

          });

        });

        $("#leaderSectionMenu .nav-link").each(function(){

          $(this).on("click touch", function(){

              $(".teamDetails").removeClass("active");
              $(".teamDetails").removeClass("non-active");
              $("#leaderContent").removeClass("showContent"); 

              $("#leaderContent").removeClass("col-md-4"); 
              $("#leaderLists").removeClass("col-md-8");
              $(".teamList .col-list").addClass("col-md-3");
              $(".teamList .col-list").removeClass("col-md-4");              
              $("#leaderLists").addClass("col-md-12");
              $("#leaderContent").addClass("col-md-12");               

              setTimeout(function(){
                
              },500);            

          });

        });
    };    

     callJqueryFunctions();  


  },[pathname]);


};

export default CustomScripts;
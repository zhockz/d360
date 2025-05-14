"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useEffect, useState  } from "react";
import Script from 'next/script';
import $ from 'jquery';

const CustomScripts = ({ locale }: { locale: string }) => {


     useEffect(() => {

        $(document).ready(function () {

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
        });


    },[]);


};

export default CustomScripts;
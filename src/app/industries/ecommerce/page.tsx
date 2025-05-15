"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import ECommerceback from "@/app/industries/ecommerce/image/ECommerceback.gif"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";

import personalizedProduct from "@/app/industries/ecommerce/image/personalizedProduct.svg"
import virtualTryon  from "@/app/industries/ecommerce/image/virtualTryon.svg"
import voiceCommerce  from "@/app/industries/ecommerce/image/voiceCommerce.svg"
import subsriptionServices  from "@/app/industries/ecommerce/image/subsriptionServices.svg"
import socialCommerce  from "@/app/industries/ecommerce/image/socialCommerce.svg"
import  sameDayDelivery from "@/app/industries/ecommerce/image/sameDayDelivery.svg"
import  automatedCustomerSupp from "@/app/industries/ecommerce/image/automatedCustomerSupp.svg"
import  interectiveProductionVis from "@/app/industries/ecommerce/image/interectiveProductionVis.svg"
import  blockChain from "@/app/industries/ecommerce/image/blockChain.svg"
import  gamificationof from "@/app/industries/ecommerce/image/gamificationof.svg"

import  aiRecommandation from "@/app/industries/ecommerce/image/aiRecommandation.svg"
import  OmniChannelI from "@/app/industries/ecommerce/image/OmniChannelI.svg"
import  platformDevelopment from "@/app/industries/ecommerce/image/platformDevelopment.svg"

import cardSmartSuggestion  from "@/app/industries/ecommerce/image/cardSmartSuggestion.svg"
import   cardVirtualTry from "@/app/industries/ecommerce/image/cardVirtualTry.svg"
import  cardVoiceCommerce from "@/app/industries/ecommerce/image/cardVoiceCommerce.svg"
import  cardSubcriptionServ from "@/app/industries/ecommerce/image/cardSubcriptionServ.svg"
import   cardSocailC from "@/app/industries/ecommerce/image/cardSocailC.svg"
import  cardSameDayD from "@/app/industries/ecommerce/image/cardSameDayD.svg"

// white  
import  personalProductRecmWhite from "@/app/industries/ecommerce/image/personalProductRecmWhite.svg"
import  virtualTryOnWhite from "@/app/industries/ecommerce/image/virtualTryOnWhite.svg"
import  voiceCommerceWhite from "@/app/industries/ecommerce/image/voiceCommerceWhite.svg"
import  subscriptionServicesWhite from "@/app/industries/ecommerce/image/subscriptionServicesWhite.svg"
import  socialCommerceWhite from "@/app/industries/ecommerce/image/socialCommerceWhite.svg"
import  sameDayDelivryWhite from "@/app/industries/ecommerce/image/sameDayDelivryWhite.svg"
import  automatedCustomerSuppoWhite from "@/app/industries/ecommerce/image/automatedCustomerSuppoWhite.svg"
import  InterectiveProductionVisulazitionWhite from "@/app/industries/ecommerce/image/InterectiveProductionVisulazitionWhite.svg"
import  gsmificstionOfshopingWhite from "@/app/industries/ecommerce/image/gsmificstionOfshopingWhite.svg"
import  blockChainSupplyWhite from "@/app/industries/ecommerce/image/blockChainSupplyWhite.svg"
const Ecommerce  = () => {
    const valueItems=[ 
        {
          iconUrl: platformDevelopment,
          title: "Platform Development",
          description:
            "Develop scalable, feature-packed e-commerce platforms customized to align with your unique business requirements.",
        },
        {
          iconUrl: aiRecommandation,
          title: "AI Recommendations",
          description:
            "Leverage AI-driven algorithms to deliver personalized product suggestions, elevating customer experience and driving engagement.",
        },
        {
          iconUrl: OmniChannelI, 
          title: "Omni-Channel Integration",
          description:
            "Integrate e-commerce systems with offline retail channels to enable seamless inventory management and enhance customer engagement.",
        },
      ]
      const scrollItems = [
        {
          imagelight: personalizedProduct, 
          imageDark: personalProductRecmWhite ,
          title: "Personalized Product Recommendations",
        },
        {
          imagelight: virtualTryon,
          imageDark:  virtualTryOnWhite ,
          title: "Virtual Try-On",
        },
        {
          imagelight:  voiceCommerce,
          imageDark: voiceCommerceWhite,
          title: "Voice Commerce",
        },
        {
          imagelight: subsriptionServices,
          imageDark: subscriptionServicesWhite ,
          title: "Subscription Services",
        },
        {
          imagelight: socialCommerce,
          imageDark: socialCommerceWhite ,
          title: "Social Commerce",
        },
        {
          imagelight:  sameDayDelivery,
          imageDark:  sameDayDelivryWhite,
          title: "Same-Day Delivery",
        },
        {
          imagelight: automatedCustomerSupp,
          imageDark: automatedCustomerSuppoWhite,
          title: "Automated Customer Support",
        },
        {
          imagelight: interectiveProductionVis ,
          imageDark: InterectiveProductionVisulazitionWhite,
          title: "Interactive Product Visualization",
        },
        {
          imagelight: gamificationof,
          imageDark: gsmificstionOfshopingWhite ,
          title: "Gamification of Shopping",
        },
        {
          imagelight:  blockChain,
          imageDark: blockChainSupplyWhite ,
          title: "Blockchain-Based Supply Chain Tracking",
        }
      ];
      const benefitsData = [
        {
          icon: cardSmartSuggestion,
          title: "Smart Suggestions",
          description:
            "Our personalized recommendation engine elevates the shopping experience by providing customized product suggestions based on customer preferences and behaviors.",
        },
        {
          icon: cardVirtualTry,
          title: "Virtual Try-On",
          description:
            "Our virtual try-on technology allows customers to simulate product experiences, enhancing confidence and satisfaction in their purchasing choices.",
        },
        {
          icon: cardVoiceCommerce ,
          title: "Voice Commerce",
          description:
            "Our voice commerce solutions simplify shopping through voice commands, offering seamless browsing, purchasing, and order tracking for greater convenience.",
        },
        {
          icon: cardSubcriptionServ,
          title: "Subscription Services",
          description:
            "Our subscription services drive customer loyalty and revenue growth by offering personalized plans that provide convenience, exclusivity, and ongoing benefits.",
        },
        {
          icon: cardSocailC,
          title: "Social Commerce",
          description:
            "Our social commerce strategies harness the power of platforms for effortless product discovery, sharing, and direct purchasing, boosting brand reach and customer engagement.",
        },
        {
          icon: cardSameDayD,
          title: "Same-Day Delivery",
          description:
            "Our same-day delivery service ensures fast fulfillment, boosting customer satisfaction through reliable and efficient logistics solutions.",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Customized E-Commerce Software Solutions"}
        description={
          "Our e-commerce software development services are designed to deliver secure, scalable, and customer-focused solutions, transforming digital shopping experiences without depending on off-the-shelf platforms."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={ECommerceback}
       />
           <CustomValue
            heading="How MindSees Can Help in Ecommerce"
            subheading="Discover how MindSees can elevate your e-commerce operations with customized digital solutions designed to drive growth and enhance customer experiences."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Ecommerce Platform Services"
 subtitle="Explore how MindSees can enhance your e-commerce operations with customized digital solutions designed to streamline workflows and increase efficiency."
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/011fc175-cd40-47a3-733c-84c3031c0700/w=3840,q=75"
 description="In the dynamic e-commerce landscape, innovation is key. Advanced technologies and fresh approaches are reshaping the shopping experience, improving convenience and creating stronger connections with brands."
 scrollItems={scrollItems}
 buttonText="Let's discuss"
 buttonColor="#00d280"
 cardBgColor="#d6f1ff"
 cardHoverBgColor="#0575ad"
 cardBorderColor="#0575ad"
 textHoverColor="white"
/>
<Clientsline/>
<BenefitsCard 
     heading="Benefits of Having MindSees' Ecommerce Solutions" 
     benefits={benefitsData} 
   />
   <div className="mt-14 mb-20">
       <Stories/>
   
       </div>
       <LastBusinessesSection/>
   </div>
    )
}
export default Ecommerce;
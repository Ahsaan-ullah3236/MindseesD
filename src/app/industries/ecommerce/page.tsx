"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import bannerImage from "@/app/industries/ecommerce/image/ecommerceBanner.png"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";

const Ecommerce =()=>{

    const valueItems=[ 
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-1.svg",
          title: "Platform Development",
          description:
            "Develop scalable, feature-packed e-commerce platforms customized to align with your unique business requirements.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "AI Recommendations",
          description:
            "Leverage AI-driven algorithms to deliver personalized product suggestions, elevating customer experience and driving engagement.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Omni-Channel Integration",
          description:
            "Integrate e-commerce systems with offline retail channels to enable seamless inventory management and enhance customer engagement.",
        },
      ]

      const scrollItems = [
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/medical-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/medical.svg",
          title: "Personalized Product Recommendations",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/management-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
          title: "Virtual Try-On",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Voice Commerce",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Subscription Services",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Social Commerce",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Same-Day Delivery",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Automated Customer Support",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Interactive Product Visualization",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Gamification of Shopping",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Blockchain-Based Supply Chain Tracking",
        }
      ];

      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Smart Suggestions",
          description:
            "Our personalized recommendation engine elevates the shopping experience by providing customized product suggestions based on customer preferences and behaviors.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "Virtual Try-On",
          description:
            "Our virtual try-on technology allows customers to simulate product experiences, enhancing confidence and satisfaction in their purchasing choices.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Voice Commerce",
          description:
            "Our voice commerce solutions simplify shopping through voice commands, offering seamless browsing, purchasing, and order tracking for greater convenience.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Subscription Services",
          description:
            "Our subscription services drive customer loyalty and revenue growth by offering personalized plans that provide convenience, exclusivity, and ongoing benefits.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Social Commerce",
          description:
            "Our social commerce strategies harness the power of platforms for effortless product discovery, sharing, and direct purchasing, boosting brand reach and customer engagement.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
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
        image={bannerImage}
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
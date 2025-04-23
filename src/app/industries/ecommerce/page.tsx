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
            "Build scalable and feature-rich ecommerce platforms tailored to your business needs.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "AI Recommendations",
          description:
            "Implement AI algorithms to personalize product recommendations and enhance customer experience.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Omni-Channel Integration",
          description:
            "Integrate ecommerce systems with offline retail channels for seamless inventory management and customer engagement.",
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
            "Our personalized recommendation engine enhances shopping experiences, offering tailored product suggestions based on customer preferences and behaviors",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "Virtual Try-On",
          description:
            "Our virtual try-on technology empowers customers to simulate product experiences, boosting confidence and satisfaction in their purchasing decisions",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Voice Commerce",
          description:
            "Our voice commerce solutions streamline shopping with voice commands, providing seamless browsing, purchasing, and order tracking for enhanced convenience",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Subscription Services",
          description:
            "Our subscription services foster customer loyalty and revenue growth, offering personalized plans that ensure convenience, exclusivity, and recurring benefits",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Social Commerce",
          description:
            "Our social commerce strategies leverage platforms for seamless product discovery, sharing, and direct purchasing, maximizing brand reach and engagement",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Same-Day Delivery",
          description:
            "Our same-day delivery service guarantees prompt fulfillment, enhancing customer satisfaction with reliable and efficient logistics solutions",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Customized E-Commerce \nSoftware Solutions"}
        description={
          "Our e-commerce software development services are tailored to provide your business with secure, scalable, and customer-centric solutions, reshaping digital shopping experiences without relying on off-the-shelf options."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
       />
           <CustomValue
            heading="How MindSees Can Help in Ecommerce"
            subheading="Explore how MindSees can transform your ecommerce operations with our tailored digital solutions."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Ecommerce Platform Services"
 subtitle="Discover how MindSees can optimize ecommerce operations with our tailored digital solutions designed to streamline processes and boost efficiency."
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/011fc175-cd40-47a3-733c-84c3031c0700/w=3840,q=75"
 description="In the fast-paced world of e-commerce, innovation is essential. Cutting-edge technologies and novel approaches redefine the shopping experience, enhancing convenience and fostering deeper brand connections."
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
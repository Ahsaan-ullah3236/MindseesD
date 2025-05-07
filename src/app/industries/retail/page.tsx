"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import bannerImage from "@/app/industries/retail/image/retailBanner.png"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";

const Retail =()=>{

    const valueItems=[
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-1.svg",
          title: "Inventory Management",
          description:
            "Enhance stock management and optimize supply chains with real-time visibility, helping to reduce costs in retail.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Customer Experiences",
          description:
            "Boost engagement with AI-powered personalized shopping tools, building lasting customer relationships.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Omni-channel Integration",
          description:
            "Provide a seamless shopping experience across all channels, ensuring a unified customer journey.",
        },
      ]

      const scrollItems = [
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/medical-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/medical.svg",
          title: "E-commerce Development",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/management-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
          title: "Point-of-Sale (POS) Systems",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Inventory Management",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "CRM Software",
        },
       
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Omni-channel Integration",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "AI Solutions",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Data Analytics",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Mobile Apps",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Payment Integration",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Custom Software",
        }
      ];

      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Enhanced Efficiency",
          description:
            "Simplify operations with advanced inventory management and automation, minimizing manual tasks and optimizing workflows to boost efficiency and productivity.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "Enhanced CX",
          description:
            "Create personalized shopping experiences across all channels, boosting customer satisfaction and loyalty through streamlined operations and advanced automation.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Data-Driven Decisions",
          description:
            "Leverage advanced analytics to extract actionable insights into customer behavior, market trends, and operational performance, optimizing strategic decision-making processes.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Scalability & Flexibility",
          description:
            "Easily adapt and scale with flexible solutions that accommodate evolving business needs and dynamic market demands, ensuring long-term success.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Cost Savings",
          description:
            "Boost cost efficiency by optimizing processes, reducing inventory holding costs, improving resource allocation, and enhancing overall operational effectiveness.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Security & Compliance",
          description:
            "Safeguard customer information and maintain trust by ensuring data security and compliance with industry standards, while effectively meeting regulatory requirements.",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Transforming Retail with \nInnovative Technology"}
        description={
          "Elevate customer experiences, optimize operations, and fuel growth with Mindsees' custom software solutions for retailers. Stay ahead with our tailored solutions and cutting-edge technologies. Choose Mindsees for the innovation that propels your retail business forward."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
       />
           <CustomValue
            heading="How MindSees Can Help in Retail"
            subheading="Discover how MindSees can transform your retail operations with our customized solutions designed specifically for the retail industry."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Retail Platform Services"
 subtitle="Explore how MindSees can transform your retail operations with our tailored enterprise solutions, streamlining processes and driving growth."
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2743efc8-f659-4d64-41b9-42cd51abca00/w=3840,q=75"
 description="Revolutionize your retail business with Kavelogics' cutting-edge tech solutions. Our expert team enhances efficiency, drives growth, and creates new opportunities. Partner with us to innovate and elevate your success, delivering unmatched value to your customers at every interaction."
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
     heading="Benefits of Having MindSees' Retail Solutions" 
     benefits={benefitsData} 
   />
   <div className="mt-14 mb-20">
       <Stories/>
   
       </div>
       <LastBusinessesSection/>
   </div>
    )
}
export default Retail;
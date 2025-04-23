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
            "Optimize stock levels and streamline supply chains with real-time visibility, reducing costs in retail.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Customer Experiences",
          description:
            "Drive engagement with AI-driven personalized shopping tools, fostering lasting customer relationships.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Omni-channel Integration",
          description:
            "Deliver a seamless shopping journey across all channels for a cohesive customer experience.",
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
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
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
        }
      ];

      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Enhanced Efficiency",
          description:
            "Streamline operations with advanced inventory management and automation, reducing manual tasks and optimizing workflows for enhanced efficiency and productivity.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "Enhanced CX",
          description:
            "Deliver personalized shopping experiences across all channels, enhancing customer satisfaction and loyalty with streamlined operations and advanced automation.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Data-Driven Decisions",
          description:
            "Utilize powerful analytics to gain actionable insights into customer behavior, market trends, operational performance, and optimize strategic decision-making processes effectively.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Scalability & Flexibility",
          description:
            "Adapt and grow seamlessly with scalable solutions that flexibly accommodate changing business needs and dynamic market demands for sustained success.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Cost Savings",
          description:
            "Increase cost efficiency through optimized processes, reduced inventory holding costs, improved resource allocation, and enhanced operational effectiveness.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Security & Compliance",
          description:
            "Ensure data security and compliance with industry standards, safeguarding customer information, maintaining trust, and meeting regulatory requirements effectively.",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Transforming Retail with \nInnovative Technology"}
        description={
          "Enhance customer experiences, streamline operations, and drive growth with Kavelogics' custom software solutions for retailers. Stay ahead with our tailored solutions and advanced technologies. Choose Kavelogics for innovation that propels your retail business forward."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
       />
           <CustomValue
            heading="How MindSees Can Help in Retail"
            subheading="Explore how MindSees can revolutionize your retail operations with our tailored solutions for the retail industry."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Retail Platform Services"
 subtitle="Discover how MindSees can revolutionize your retail operations with our customized suite of enterprise solutions, optimizing processes and fostering growth."
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2743efc8-f659-4d64-41b9-42cd51abca00/w=3840,q=75"
 description="Transform your retail business with Kavelogics' advanced tech solutions. Our team drives efficiency, fuels growth, and unlocks new opportunities. Partner with us to innovate and propel your success to new heights, delivering exceptional value to your customers at every touchpoint."
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
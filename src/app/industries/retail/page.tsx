"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import Retailback from "@/app/industries/retail/image/Retailback.gif"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import ecommerceS from "@/app/industries/retail/image/ecommerceS.svg"
import POS from "@/app/industries/retail/image/POS.svg"
import InventoryManagmentS from "@/app/industries/retail/image/InventoryManagmentS.svg"
import CRMS from "@/app/industries/retail/image/CRMS.svg"
import omnichannelS from "@/app/industries/retail/image/omnichannelS.svg"
import AiSolutionS from "@/app/industries/retail/image/AiSolutionS.svg"
import DataAnalyticsS from "@/app/industries/retail/image/DataAnalyticsS.svg"
import mobileAppS from "@/app/industries/retail/image/mobileAppS.svg"
import paymentIntegration from "@/app/industries/retail/image/paymentIntegration.svg"
import customSoftwreS from "@/app/industries/retail/image/customSoftwreS.svg"
import enhancedEfficiency from "@/app/industries/retail/image/enhancedEfficiency.svg"
import CX from "@/app/industries/retail/image/CX.svg"
import dataDeiven from "@/app/industries/retail/image/dataDeiven.svg"
import ScalabilitFlexibility from "@/app/industries/retail/image/ScalabilitFlexibility.svg"
import CostSaving from "@/app/industries/retail/image/CostSaving.svg"
import securityCompilence from "@/app/industries/retail/image/securityCompilence.svg"
import inventoryManagment  from "@/app/industries/retail/image/inventoryManagment.svg"
import customerExperience  from "@/app/industries/retail/image/customerExperience.svg"
import ominChannelIntegration from "@/app/industries/retail/image/ominChannelIntegration.svg"

// white 
import ecommerceDevelopmentWhite from "@/app/industries/retail/image/ecommerceDevelopmentWhite.svg"
import POSWhite  from "@/app/industries/retail/image/POSWhite.svg"
import inventoryManagemntWhite  from "@/app/industries/retail/image/inventoryManagemntWhite.svg"
import CRMsoftwareWhite from "@/app/industries/retail/image/CRMsoftwareWhite.svg"
import omniChannelIntegrationWhite from "@/app/industries/retail/image/omniChannelIntegrationWhite.svg"
import aiSolutionWhite from "@/app/industries/retail/image/aiSolutionWhite.svg"
import dataAnalyticsWhite from "@/app/industries/retail/image/dataAnalyticsWhite.svg"
import mobileAppsWhite from "@/app/industries/retail/image/mobileAppsWhite.svg"
import paymentIntegrationWhite  from "@/app/industries/retail/image/paymentIntegrationWhite.svg"
import customSoftwareWhite  from "@/app/industries/retail/image/customSoftwareWhite.svg"
const Retail = () => {
  const valueItems = [
    {
      iconUrl: inventoryManagment,
      title: "Inventory Management",
      description:
        "Enhance stock management and optimize supply chains with real-time visibility, helping to reduce costs in retail.",
    },
    {
      iconUrl: customerExperience,
      title: "Customer Experiences",
      description:
        "Boost engagement with AI-powered personalized shopping tools, building lasting customer relationships.",
    },
    {
      iconUrl: ominChannelIntegration,
      title: "Omni-channel Integration",
      description:
        "Provide a seamless shopping experience across all channels, ensuring a unified customer journey.",
    },
  ]
  const scrollItems = [
    {
      imagelight: ecommerceS,
      imageDark: ecommerceDevelopmentWhite,
      title: "E-commerce Development",
    },
    {
      imagelight: POS,
      imageDark: POSWhite,
      title: "Point-of-Sale (POS) Systems",
    },
    {
      imagelight: InventoryManagmentS,
      imageDark: inventoryManagemntWhite ,
      title: "Inventory Management",
    },
    {
      imagelight: CRMS,
      imageDark:  CRMsoftwareWhite,
      title: "CRM Software",
    },
    {
      imagelight: omnichannelS,
      imageDark: omniChannelIntegrationWhite,
      title: "Omni-channel Integration",
    },
    {
      imagelight: AiSolutionS,
      imageDark:  aiSolutionWhite,
      title: "AI Solutions",
    },
    {
      imagelight: DataAnalyticsS,
      imageDark: dataAnalyticsWhite,
      title: "Data Analytics",
    },
    {
      imagelight: mobileAppS,
      imageDark: mobileAppsWhite,
      title: "Mobile Apps",
    },
    {
      imagelight: paymentIntegration,
      imageDark: paymentIntegrationWhite ,
      title: "Payment Integration",
    },
    {
      imagelight: customSoftwreS,
      imageDark: customSoftwareWhite,
      title: "Custom Software",
    }
  ];
  const benefitsData = [
    {
      icon: enhancedEfficiency,
      title: "Enhanced Efficiency",
      description:
        "Simplify operations with advanced inventory management and automation, minimizing manual tasks and optimizing workflows to boost efficiency and productivity.",
    },
    {
      icon: CX,
      title: "Enhanced CX",
      description:
        "Create personalized shopping experiences across all channels, boosting customer satisfaction and loyalty through streamlined operations and advanced automation.",
    },
    {
      icon: dataDeiven,
      title: "Data-Driven Decisions",
      description:
        "Leverage advanced analytics to extract actionable insights into customer behavior, market trends, and operational performance, optimizing strategic decision-making processes.",
    },
    {
      icon: ScalabilitFlexibility,
      title: "Scalability & Flexibility",
      description:
        "Easily adapt and scale with flexible solutions that accommodate evolving business needs and dynamic market demands, ensuring long-term success.",
    },
    {
      icon: CostSaving,
      title: "Cost Savings",
      description:
        "Boost cost efficiency by optimizing processes, reducing inventory holding costs, improving resource allocation, and enhancing overall operational effectiveness.",
    },
    {
      icon: securityCompilence,
      title: "Security & Compliance",
      description:
        "Safeguard customer information and maintain trust by ensuring data security and compliance with industry standards, while effectively meeting regulatory requirements.",
    },
  ];
  return (
    <div>
      <CustomBanner
        heading={"Transforming Retail with \nInnovative Technology"}
        description={
          "Elevate customer experiences, optimize operations, and fuel growth with Mindsees' custom software solutions for retailers. Stay ahead with our tailored solutions and cutting-edge technologies. Choose Mindsees for the innovation that propels your retail business forward."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={Retailback}
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
      <Clientsline />
      <BenefitsCard
        heading="Benefits of Having MindSees' Retail Solutions"
        benefits={benefitsData}
      />
      <div className="mt-14 mb-20">
        <Stories />

      </div>
      <LastBusinessesSection />
    </div>
  )
}
export default Retail;
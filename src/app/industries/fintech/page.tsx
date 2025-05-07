"use client"
import React from "react"
import CustomBanner from "../components/customBanner"
import bannerImage from "@/app/industries/fintech/image/fintectbanner.png"
import CustomValue from "../components/customValue"
import ServicePlatform from "../components/customPlatformServices"
import Clientsline from "@/app/clientsline/page"
import BenefitsCard from "../components/customBenefitCard"
import Stories from "@/app/Stories/page"
import LastBusinessesSection from "@/app/Lastbusinesses/page"

const FinTech=()=>{

    const valueItems=[
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-1.svg",
          title: "Digital Banking",
          description:
            "Create tailored digital banking solutions to improve customer experience and optimize financial operations.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Blockchain Integration",
          description:
            "Integrate blockchain technology to ensure secure, transparent transactions, maintaining data integrity and minimizing fraud.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Mobile Payments",
          description:
            "Develop secure and intuitive mobile payment applications to enable smooth transactions and enhance customer convenience.",
        },
      ]

      const scrollItems = [
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/medical-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/medical.svg",
          title: "Mobile Banking",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/management-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
          title: "Crowd Funding Platforms",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "P2P Lending",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Know your customer",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Credit Scoring Platforms",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Digital Wallets",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "API Integration",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Payment Gateway",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Regtech Solutions",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Financial Analytics",
        }
      ];
      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Enhanced Security",
          description:
            "Our solutions focus on safeguarding your company's data, ensuring secure transactions, preventing fraud, and upholding regulatory compliance standards.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "User-Friendly Platforms",
          description:
            "We create intuitive interfaces that make it easy for your customers to navigate, understand, and seamlessly use your FinTech services, boosting user satisfaction and engagement.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Seamless Integration",
          description:
            "We ensure your FinTech solutions integrate seamlessly with existing systems, minimizing downtime and operational disruptions for smooth, uninterrupted functionality.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Scalable Solutions",
          description:
            "Our FinTech platforms are designed to scale with your business, effortlessly handling growing user demand while maintaining high performance and reliability.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Regulatory Compliance",
          description:
            "We deliver RegTech solutions that keep your business compliant with evolving financial regulations and standards, ensuring peace of mind and operational efficiency.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Advanced Analytics",
          description:
            "Our financial analytics tools provide deep insights into market trends, customer behavior, operational efficiency, and the competitive landscape, empowering your business to make informed decisions.",
        },
      ];
    return(
        <div>
             <CustomBanner 
             heading={"Cutting-Edge FinTech \nSoftware Solutions"}
             description={
               "FinTech is transforming the financial sector with interactive platforms and personalized services, addressing a wide range of needs and making financial management accessible worldwide."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <CustomValue
      heading="How MindSees Can Help in Fintech"
      subheading="Discover how MindSees can transform your financial operations with our customized FinTech solutions."
      values={valueItems}
    />

<ServicePlatform
      title="Our Fintech Platform Services"
      subtitle="Explore how MindSees can transform your financial education and optimize operations with our all-encompassing suite of customized FinTech solutions."
      imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/5cea0081-83f7-4c19-9470-e6cb15b12500/w=3840,q=75"
      description="Integrating FinTech services into your business can transform financial processes, improve efficiency, and elevate customer satisfaction. Adopting these innovative solutions requires thoughtful planning and adherence to regulatory standards, providing your business with a competitive edge in the digital age."
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
              heading="Benefits of Having MindSees' FinTech Solutions" 
              benefits={benefitsData} 
            />
             <div className="mt-14 mb-20">
            <Stories/>
        
            </div>
            <LastBusinessesSection/>
        </div>
    )
}
export default FinTech;
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
            "Develop customized digital banking solutions to enhance customer experience and streamline financial operations.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Blockchain Integration",
          description:
            "Implement blockchain technology for secure and transparent transactions, ensuring data integrity and reducing fraud.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Mobile Payments",
          description:
            "Create secure and user-friendly mobile payment applications to facilitate seamless transactions and improve customer convenience.",
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
        }
      ];
      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Enhanced Security",
          description:
            "Our solutions prioritize your company's data security, ensuring safe transactions, protecting against fraud, and maintaining regulatory compliance standards.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "User-Friendly Platforms",
          description:
            "We design intuitive interfaces, making it easier for your customers to navigate, understand, and seamlessly use your fintech services. This enhances user satisfaction and engagement.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Seamless Integration",
          description:
            "We ensure that your fintech solutions integrate smoothly with existing systems, minimizing downtime and operational disruption for seamless functionality.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Scalable Solutions",
          description:
            "Our fintech platforms are built to grow with your business, accommodating increased user demand effortlessly while ensuring scalability and performance.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Regulatory Compliance",
          description:
            "We provide Regtech solutions that help your business stay compliant with ever-changing financial regulations and standards, ensuring peace of mind and operational efficiency.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Advanced Analytics",
          description:
            "Our financial analytics tools give your business deep insights into market trends, customer behavior, operational efficiency, and competitive landscape, empowering informed decision-making.",
        },
      ];
    return(
        <div>
             <CustomBanner 
             heading={"Cutting-Edge FinTech \nSoftware Solutions"}
             description={
               "FinTech is revolutionizing finance with interactive platforms and personalized services, catering to diverse needs and making financial management globally accessible."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <CustomValue
      heading="How MindSees Can Help in Fintech"
      subheading="Explore how MindSees can revolutionize your financial operations with our tailored Fintech solutions."
      values={valueItems}
    />

<ServicePlatform
      title="Our Fintech Platform Services"
      subtitle="Discover how MindSees can  revolutionize your financial education and streamline operations with our comprehensive suite of tailored Fintech solutions."
      imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/5cea0081-83f7-4c19-9470-e6cb15b12500/w=3840,q=75"
      description="Integrating fintech services into your business holds the potential to revolutionize financial processes, boost efficiency, and enhance customer satisfaction. Embracing these innovative solutions requires careful planning and compliance with regulatory standards, offering your business a pathway to stay competitive in the digital era."
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
"use client"
import React from "react"
import CustomBanner from "../components/customBanner"
import FinTechback from "@/app/industries/fintech/image/FinTechback.gif"
import CustomValue from "../components/customValue"
import ServicePlatform from "../components/customPlatformServices"
import Clientsline from "@/app/clientsline/page"
import BenefitsCard from "../components/customBenefitCard"
import Stories from "@/app/Stories/page"
import LastBusinessesSection from "@/app/Lastbusinesses/page"
import MobileBanking from "@/app/industries/fintech/image/MobileBanking.svg"
import crowdfunding from "@/app/industries/fintech/image/crowdfunding.svg"
import P2Planding from "@/app/industries/fintech/image/P2Planding.svg"
import KnownYourCtmr from "@/app/industries/fintech/image/KnownYourCtmr.svg"
import creditScrong from "@/app/industries/fintech/image/creditScrong.svg"
import DigitalValets from "@/app/industries/fintech/image/DigitalValets.svg"
import ApiIntegration from "@/app/industries/fintech/image/ApiIntegration.svg"
import paymentGateWay from "@/app/industries/fintech/image/paymentGateWay.svg"
import regtechSolutoin from "@/app/industries/fintech/image/regtechSolutoin.svg"
import FinanAnalytics from "@/app/industries/fintech/image/FinanAnalytics.svg"
import blockch from "@/app/industries/fintech/image/blockch.svg"
import DigitalB from "@/app/industries/fintech/image/DigitalB.svg"
import MobilePayments from "@/app/industries/fintech/image/MobilePayments.svg"
import SamlesIntegration from "@/app/industries/fintech/image/SamlesIntegration.svg"
import  enhancesecurity  from "@/app/industries/fintech/image/enhancesecurity.svg"
import UserFriendly from "@/app/industries/fintech/image/UserFriendly.svg"
import ScalableSolution  from "@/app/industries/fintech/image/ScalableSolution.svg"
import RegulatoryCompliance from "@/app/industries/fintech/image/RegulatoryCompliance.svg"
import AdvancedAnalytics from "@/app/industries/fintech/image/AdvancedAnalytics.svg"

// white 
import mobileBankingWhite from "@/app/industries/fintech/image/mobileBankingWhite.svg"
import crowdFundingPlatofrmsWhite from "@/app/industries/fintech/image/crowdFundingPlatofrmsWhite.svg"
import p2PLandingwhite from "@/app/industries/fintech/image/p2PLandingwhite.svg"
import knownYourCustomerWhite from "@/app/industries/fintech/image/knownYourCustomerWhite.svg"
import creditsScoringPlatformsWhite from "@/app/industries/fintech/image/creditsScoringPlatformsWhite.svg"
import dagitalWalletsWhite from "@/app/industries/fintech/image/dagitalWalletsWhite.svg"
import apiIntegrationWhite from "@/app/industries/fintech/image/apiIntegrationWhite.svg"
import paymentGetwayWhite from "@/app/industries/fintech/image/paymentGetwayWhite.svg"
import regtechSolutionWhite from "@/app/industries/fintech/image/regtechSolutionWhite.svg"
import financialAnalyticsWhite from "@/app/industries/fintech/image/financialAnalyticsWhite.svg"
const FinTech = () => {
  const valueItems = [
    {
      iconUrl: DigitalB,
      title: "Digital Banking",
      description:
        "Create tailored digital banking solutions to improve customer experience and optimize financial operations.",
    },
    {
      iconUrl: blockch,
      title: "Blockchain Integration",
      description:
        "Integrate blockchain technology to ensure secure, transparent transactions, maintaining data integrity and minimizing fraud.",
    },
    {
      iconUrl: MobilePayments,
      title: "Mobile Payments",
      description:
        "Develop secure and intuitive mobile payment applications to enable smooth transactions and enhance customer convenience.",
    },
  ]
  const scrollItems = [
    {
      imagelight: MobileBanking,
      imageDark: mobileBankingWhite ,
      title: "Mobile Banking",
    },
    {
      imagelight: crowdfunding,
      imageDark: crowdFundingPlatofrmsWhite,
      title: "Crowd Funding Platforms",
    },
    {
      imagelight: P2Planding,
      imageDark: p2PLandingwhite,
      title: "P2P Lending",
    },
    {
      imagelight: KnownYourCtmr,
      imageDark: knownYourCustomerWhite,
      title: "Know your customer",
    },
    {
      imagelight: creditScrong,
      imageDark: creditsScoringPlatformsWhite,
      title: "Credit Scoring Platforms",
    },
    {
      imagelight: DigitalValets,
      imageDark: dagitalWalletsWhite,
      title: "Digital Wallets",
    },
    {
      imagelight: ApiIntegration,
      imageDark: apiIntegrationWhite,
      title: "API Integration",
    },
    {
      imagelight: paymentGateWay,
      imageDark: paymentGetwayWhite,
      title: "Payment Gateway",
    },
    {
      imagelight: regtechSolutoin,
      imageDark: regtechSolutionWhite,
      title: "Regtech Solutions",
    },
    {
      imagelight: FinanAnalytics,
      imageDark: financialAnalyticsWhite,
      title: "Financial Analytics",
    }
  ];
  const benefitsData = [
    {
      icon: enhancesecurity ,
      title: "Enhanced Security",
      description:
        "Our solutions focus on safeguarding your company's data, ensuring secure transactions, preventing fraud, and upholding regulatory compliance standards.",
    },
    {
      icon: UserFriendly,
      title: "User-Friendly Platforms",
      description:
        "We create intuitive interfaces that make it easy for your customers to navigate, understand, and seamlessly use your FinTech services, boosting user satisfaction and engagement.",
    },
    {
      icon: SamlesIntegration,
      title: "Seamless Integration",
      description:
        "We ensure your FinTech solutions integrate seamlessly with existing systems, minimizing downtime and operational disruptions for smooth, uninterrupted functionality.",
    },
    {
      icon: ScalableSolution,
      title: "Scalable Solutions",
      description:
        "Our FinTech platforms are designed to scale with your business, effortlessly handling growing user demand while maintaining high performance and reliability.",
    },
    {
      icon: RegulatoryCompliance,
      title: "Regulatory Compliance",
      description:
        "We deliver RegTech solutions that keep your business compliant with evolving financial regulations and standards, ensuring peace of mind and operational efficiency.",
    },
    {
      icon: AdvancedAnalytics,
      title: "Advanced Analytics",
      description:
        "Our financial analytics tools provide deep insights into market trends, customer behavior, operational efficiency, and the competitive landscape, empowering your business to make informed decisions.",
    },
  ];
  return (
    <div>
      <CustomBanner
        heading={"Cutting-Edge FinTech \nSoftware Solutions"}
        description={
          "FinTech is transforming the financial sector with interactive platforms and personalized services, addressing a wide range of needs and making financial management accessible worldwide."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={FinTechback}
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
      <Clientsline />
      <BenefitsCard
        heading="Benefits of Having MindSees' FinTech Solutions"
        benefits={benefitsData}
      />
      <div className="mt-14 mb-20">
        <Stories />

      </div>
      <LastBusinessesSection />
    </div>
  )
}
export default FinTech;
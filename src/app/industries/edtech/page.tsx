"use client";
import React from "react";
import CustomBanner from "../components/customBanner";
import EdTechback from "@/app/industries/edtech/image/EdTechback.gif"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import LMSdevelopment from "@/app/industries/edtech/image/LMSdevelopment.svg"
import mobileLearning from "@/app/industries/edtech/image/mobileLearning.svg"
import TroubleShooting from "@/app/industries/edtech/image/TroubleShooting.svg"
import DataCenterM from "@/app/industries/edtech/image/DataCenterM.svg"
import EducationSoftwa from "@/app/industries/edtech/image/EducationSoftwa.svg"
import mvp from "@/app/industries/edtech/image/mvp.svg"
import vle from "@/app/industries/edtech/image/vle.svg"
import gamifiedEducation from "@/app/industries/edtech/image/gamifiedEducation.svg"
import TeachingDevelopment from "@/app/industries/edtech/image/TeachingDevelopment.svg"
import elearnModernization from "@/app/industries/edtech/image/elearnModernization.svg"
import ElearninhPlatforms from "@/app/industries/edtech/image/ElearninhPlatforms.svg"
import virtualClassrom from "@/app/industries/edtech/image/virtualClassrom.svg"
import dataAnalytics from "@/app/industries/edtech/image/dataAnalytics.svg"
import EnhencedEngagement from "@/app/industries/edtech/image/EnhencedEngagement.svg"
import samlessintegration from "@/app/industries/edtech/image/samlessintegration.svg"
import improvedEfficiency from "@/app/industries/edtech/image/improvedEfficiency.svg"
import ReliableSupport from "@/app/industries/edtech/image/ReliableSupport.svg"
import modernizedElearning from "@/app/industries/edtech/image/modernizedElearning.svg"

// white 
import LMSdevelopmentWhite from "@/app/industries/edtech/image/LMSdevelopmentWhite.svg"
import mobileLearningWite from "@/app/industries/edtech/image/mobileLearningWite.svg"
import dataCenterNetWhite from "@/app/industries/edtech/image/dataCenterNetWhite.svg"
import educationSoftwareWhite from "@/app/industries/edtech/image/educationSoftwareWhite.svg"
import MVPWhite from "@/app/industries/edtech/image/MVPWhite.svg"
import eLearningModerWhite from "@/app/industries/edtech/image/eLearningModerWhite.svg"
import vledevelopmentWhite from "@/app/industries/edtech/image/vledevelopmentWhite.svg"
import gamifiedEduSerWhite from "@/app/industries/edtech/image/gamifiedEduSerWhite.svg"
import TroublrDhootingWhite from "@/app/industries/edtech/image/TroublrDhootingWhite.svg"
import techingDevelopmentWhite from "@/app/industries/edtech/image/techingDevelopmentWhite.svg"


const EdTech = () => {
  const valueItems = [
    {
      iconUrl: ElearninhPlatforms,
      title: "E-learning Platforms",
      description:
        "Create tailored e-learning platforms to enhance student engagement and streamline the delivery of education.",
    },
    {
      iconUrl: virtualClassrom,
      title: "Virtual Classrooms",
      description:
        "Develop powerful virtual classroom solutions for interactive real-time learning and seamless remote education.",
    },
    {
      iconUrl: dataAnalytics,
      title: "Data Analytics",
      description:
        "Provide data analytics to track student performance, identify patterns, and facilitate informed decision-making.",
    },
  ]
  const scrollItems = [
    {
      imagelight: LMSdevelopment,
      imageDark: LMSdevelopmentWhite,
      title: "LMS Development",
    },
    {
      imagelight: mobileLearning,
      imageDark: mobileLearningWite,
      title: "Mobile Learning Applications",
    },
    {
      imagelight: DataCenterM,
      imageDark: dataCenterNetWhite,
      title: "Data Center & Network Management",
    },
    {
      imagelight: EducationSoftwa,
      imageDark:  educationSoftwareWhite,
      title: "Education Software Integration",
    },
    {
      imagelight: mvp,
      imageDark: MVPWhite,
      title: "MVP Development",
    },
    {
      imagelight: elearnModernization,
      imageDark: eLearningModerWhite ,
      title: "E-Learning Modernization",
    },
    {
      imagelight: vle,
      imageDark: vledevelopmentWhite,
      title: "VLE Development",
    },
    {
      imagelight: gamifiedEducation,
      imageDark: gamifiedEduSerWhite,
      title: "Gamified Education Services",
    },
    {
      imagelight: TroubleShooting,
      imageDark: TroublrDhootingWhite ,
      title: "Troubleshooting Support",
    },
    {
      imagelight: TeachingDevelopment,
      imageDark: techingDevelopmentWhite ,
      title: "Teaching Development Applications",
    },
  ];
  const benefitsData = [
    {
      icon: EnhencedEngagement,
      title: "Enhanced Engagement",
      description:
        "Our LMS and gamified education services greatly enhance student interaction and participation, fostering a more engaging and effective learning experience.",
    },
    {
      icon: samlessintegration,
      title: "Seamless Integration",
      description:
        "Our software integration services ensure that all your educational tools work together seamlessly, enhancing efficiency and creating a more cohesive learning environment.",
    },
    {
      icon: mobileLearning,
      title: "Mobile Learning",
      description:
        "Our mobile learning applications provide on-the-go access, boosting flexibility, engagement, and participation while enhancing accessibility for students.",
    },
    {
      icon: improvedEfficiency,
      title: "Improved Effeciency",
      description:
        "Our data center and network management optimize your operations, reducing downtime and improving efficiency, reliability, and performance.",
    },
    {
      icon: ReliableSupport,
      title: "Reliable Support",
      description:
        "Our troubleshooting services provide quick resolution of technical issues, ensuring uninterrupted learning experiences for students.",
    },
    {
      icon: modernizedElearning,
      title: "Modernized E-learning",
      description:
        "Our e-learning modernization upgrades your existing systems to enhance functionality, usability, user experience, and performance.",
    },
  ];
  return (
    <div>
      <CustomBanner
        heading={"Innovative EdTech \nSoftware Solutions"}
        description={
          "EdTech is transforming education through interactive platforms and personalized learning, addressing a wide range of needs and making education accessible worldwide."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={EdTechback}
      />
      <CustomValue
        heading="How MindSees Can Make an Impact in EdTech"
        subheading="Discover how MindSees can revolutionize your educational operations with our customized digital solutions."
        values={valueItems}
      />
      <ServicePlatform
        title="Our EdTech Platform Services"
        subtitle="Learn how MindSees can improve learning outcomes and optimize operations with our all-encompassing suite of customized digital education solutions."
        imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/6cc9e570-ba59-43f8-5d0b-d358875aea00/w=3840,q=75"
        description="We specialize in modernizing e-learning software by incorporating the latest technologies, integrating third-party solutions, and migrating to robust infrastructures with enhanced architectural improvements. Our team delivers software modernization services that integrate cutting-edge advancements and feature upgrades to strengthen the digital capabilities of EdTech solutions."
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
        heading="Benefits of Having MindSees' EdTech Solutions"
        benefits={benefitsData}
      />
      <div className="mt-14 mb-20">
        <Stories />

      </div>
      <LastBusinessesSection />
    </div>
  )
}
export default EdTech;
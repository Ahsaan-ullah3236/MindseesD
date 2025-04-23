"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import bannerImage from "@/app/industries/entertainment/image/entertainmentBanner.png"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";

const Entertainment =()=>{

    const valueItems=[
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-1.svg",
          title: "Content Distribution",
          description:
            "Develop robust platforms for distributing digital content such as movies, TV shows, and music, enhancing audience reach and engagement.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Augmented Reality",
          description:
            "Create immersive AR applications for interactive entertainment experiences, increasing user interaction and satisfaction.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Analytics",
          description:
            "Use advanced analytics to analyze user behavior for personalized content recommendations and targeted marketing strategies.",
        },
      ]

      const scrollItems = [
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/medical-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/medical.svg",
          title: "VR Experiences",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/management-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
          title: "AR Applications",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "AI Content Recommendations",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Streaming Platforms",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Live Interactive Broadcasting",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Blockchain Content Distribution",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Gamified Content",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Immersive Audio",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Personalized Merchandising",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Location-Based Entertainment",
        }
      ];

      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "VR Experiences",
          description:
            "Our VR experiences elevate entertainment with immersive environments and interactive storytelling for unparalleled engagement.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "AR Applications",
          description:
            "Our AR applications enrich entertainment by blending digital content with real-world environments, enhancing user interaction.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "AI Recommendations",
          description:
            "Our AI recommendations personalize entertainment choices, ensuring tailored experiences based on user preferences.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Streaming Platforms",
          description:
            "Our streaming platforms deliver high-quality content seamlessly, offering a user-friendly interface for optimal viewing experiences.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Interactive Broadcasting",
          description:
            "ur interactive broadcasting engages audiences with real-time interactions and immersive content delivery.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Blockchain Distribution",
          description:
            "Our blockchain distribution ensures secure and transparent entertainment delivery, enhancing content accessibility and trust.",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Modern Entertainment \nSoftware Solutions"}
        description={
          "We revolutionize audience engagement, from immersive experiences to personalized storytelling, redefining cultural norms."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
       />
           <CustomValue
            heading="How MindSees Can Help in Entertainment"
            subheading="Explore how MindSees can revolutionize your entertainment operations with our customized digital solutions."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Entertainment Platform Services"
 subtitle="Discover how MindSees can enhance entertainment and streamline operations with our comprehensive suite of tailored digital solutions."
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/3ad4bad1-7ec2-48fb-f3ec-d399fff1d900/w=3840,q=75"
 description="Today's entertainment landscape thrives on innovation, from immersive virtual reality and personalized AI recommendations to streaming platforms, interactive broadcasting, and blockchain distribution, making entertainment more engaging and accessible than ever."
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
     heading="Benefits of Having MindSees' Entertainment Solutions" 
     benefits={benefitsData} 
   />
   <div className="mt-14 mb-20">
       <Stories/>
   
       </div>
       <LastBusinessesSection/>
   </div>
    )
}
export default Entertainment;
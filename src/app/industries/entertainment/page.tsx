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
            "Create powerful platforms for distributing digital content like movies, TV shows, and music, expanding audience reach and boosting engagement.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Augmented Reality",
          description:
            "Develop immersive AR applications that deliver interactive entertainment experiences, enhancing user interaction and satisfaction.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Analytics",
          description:
            "Leverage advanced analytics to study user behavior, enabling personalized content recommendations and targeted marketing strategies.",
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
            "Our VR solutions enhance entertainment by creating immersive environments and interactive storytelling, delivering unmatched audience engagement.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "AR Applications",
          description:
            "Our AR applications elevate entertainment by seamlessly merging digital content with real-world environments, boosting user interaction and engagement.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "AI Recommendations",
          description:
            "Our AI-driven recommendations customize entertainment experiences, delivering personalized content based on individual user preferences.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Streaming Platforms",
          description:
            "Our streaming platforms provide seamless, high-quality content delivery with intuitive interfaces, ensuring an exceptional viewing experience.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Interactive Broadcasting",
          description:
            "Our interactive broadcasting solutions captivate audiences through real-time engagement and immersive content experiences.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Blockchain Distribution",
          description:
            "Our blockchain-based distribution guarantees secure, transparent delivery of entertainment content, enhancing accessibility and building audience trust.",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Modern Entertainment \nSoftware Solutions"}
        description={
          "We transform audience engagement by offering immersive experiences and personalized storytelling, reshaping cultural norms."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
       />
           <CustomValue
            heading="How MindSees Can Enhance the Entertainment Industry"
            subheading="Discover how MindSees can transform your entertainment operations with our tailored digital solutions."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Entertainment Platform Services"
 subtitle="Explore how MindSees can elevate entertainment and optimize operations with our complete range of customized digital solutions."
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/3ad4bad1-7ec2-48fb-f3ec-d399fff1d900/w=3840,q=75"
 description="The entertainment landscape today thrives on innovation, with immersive virtual reality, personalized AI recommendations, streaming platforms, interactive broadcasting, and blockchain distribution, all making entertainment more engaging and accessible than ever."
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
     heading="Advantages of Choosing MindSees' Entertainment Solutions" 
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
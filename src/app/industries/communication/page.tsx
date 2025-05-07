"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import bannerImage from "@/app/industries/communication/image/communicationBanner.png"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";

const Communication =()=>{

    const valueItems=[
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-1.svg",
          title: "Unified Platforms",
          description:
            "Create integrated communication platforms that combine messaging, voice, and video, streamlining business communication and enhancing collaboration.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Network Optimization",
          description:
            "Improve the performance and reliability of communication networks with advanced optimization techniques and tools.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Mobile Solutions",
          description:
            "Design and develop custom mobile communication apps tailored to your business needs, ensuring seamless connectivity and enhanced user engagement.",
        },
      ]

      const scrollItems = [
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/medical-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/medical.svg",
          title: "Virtual Event Management",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/management-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
          title: "AI Customer Service Chatbots",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Secure Blockchain Messaging",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Augmented Reality Marketing",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Remote Collaboration Platforms ",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Data Visualization Services",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Social Media Analytics",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Multi-channel Communication Integration",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Voice-Activated Assistants",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Personalized Content Recommendations",
        }
      ];

      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Virtual Events",
          description:
            "Our virtual event management solutions boost engagement and interaction, ensuring your online events are seamless and impactful.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "AI Chatbots",
          description:
            "Our AI-powered customer service chatbots enhance response times and customer satisfaction by delivering instant, intelligent support.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Blockchain Messaging",
          description:
            "Our secure blockchain messaging guarantees private, tamper-proof, and secure communications, safeguarding sensitive information.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Remote Collaboration",
          description:
            "Our remote collaboration platforms facilitate seamless teamwork and productivity, offering real-time communication tools to connect teams regardless of location.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Data Visualization",
          description:
            "Our data visualization services convert complex data into clear, actionable insights, empowering you to make informed decisions swiftly.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Voice Assistants",
          description:
            "Our voice-activated assistants simplify operations and enhance user experience through hands-free, intuitive voice commands and interactions.",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Custom Software for \nCommunication"}
        description={
          "MindSees specializes in custom software for the communication industry, boosting connectivity, efficiency, and customer engagement to help businesses thrive in the digital landscape."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
       />
           <CustomValue
            heading="How MindSees Can Enhance Communication Solutions"
            subheading="Discover how MindSees can revolutionize your communication operations with our customized digital solutions."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Communication Platform Services"
 subtitle="Explore how MindSees can improve communication and optimize operations with our complete range of customized digital solutions."
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/011fc175-cd40-47a3-733c-84c3031c0700/w=3840,q=75"
 description="Discover the future of communication with MindSees. As industry leaders, we are committed to pushing boundaries and redefining standards. Our innovative approach combines cutting-edge technology with unparalleled expertise to deliver solutions that revolutionize the way businesses communicate. From streamlined operations to enhanced customer experiences, MindSees is dedicated to driving success in the communication industry."
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
     heading="Advantages of Choosing MindSees' Communication Solutions" 
     benefits={benefitsData} 
   />
   <div className="mt-14 mb-20">
       <Stories/>
   
       </div>
       <LastBusinessesSection/>
   </div>
    )
}
export default Communication;
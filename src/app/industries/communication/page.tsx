"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import Communicationback from "@/app/industries/communication/image/Communicationback.gif"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import VirtualEvent from "@/app/industries/communication/image/VirtualEvent.svg"
import AICustomerServis from "@/app/industries/communication/image/AICustomerServis.svg"
import SecureBlockChain from "@/app/industries/communication/image/SecureBlockChain.svg"
import AugmentedRealityMarketing from "@/app/industries/communication/image/AugmentedRealityMarketing.svg"
import remotecolleboration from "@/app/industries/communication/image/remotecolleboration.svg"
import DataVisualization from "@/app/industries/communication/image/DataVisualization.svg"
import SocialMediaAnalytics from "@/app/industries/communication/image/SocialMediaAnalytics.svg"
import MulticahnnelComm from "@/app/industries/communication/image/MulticahnnelComm.svg"
import voiceactivated from "@/app/industries/communication/image/voiceactivated.svg"
import PersonalizedContent from "@/app/industries/communication/image/PersonalizedContent.svg"
import eventsfil from "@/app/industries/communication/image/eventsfil.svg"
import AiChatbots from "@/app/industries/communication/image/AiChatbots.svg"
import blockChain from "@/app/industries/communication/image/blockChain.svg"
import remote from "@/app/industries/communication/image/remote.svg"
import dataVis from "@/app/industries/communication/image/dataVis.svg"
import VoiceAssitant from "@/app/industries/communication/image/VoiceAssitant.svg"
import Unified from "@/app/industries/communication/image/Unified.svg"
import networkOptimi from "@/app/industries/communication/image/networkOptimi.svg"
import MobileSolution from "@/app/industries/communication/image/MobileSolution.svg"

// white  
import virtualEventWhite from "@/app/industries/communication/image/virtualEventWhite.svg"
import aicustomerServicesChatbotsWhite from "@/app/industries/communication/image/aicustomerServicesChatbotsWhite.svg"
import secureBlockChainServiceWhite from "@/app/industries/communication/image/secureBlockChainServiceWhite.svg"
import augmentedRealityMarketingWhite from "@/app/industries/communication/image/augmentedRealityMarketingWhite.svg"
import remoteCollaborationWhite from "@/app/industries/communication/image/remoteCollaborationWhite.svg"
import dataVisulazitionServicesWhite from "@/app/industries/communication/image/dataVisulazitionServicesWhite.svg"
import socailMediaAnalyticsWhite from "@/app/industries/communication/image/socailMediaAnalyticsWhite.svg"
import multiChannelIntgrationWhite from "@/app/industries/communication/image/multiChannelIntgrationWhite.svg"
import voiceActivatedWhite from "@/app/industries/communication/image/voiceActivatedWhite.svg"
import personalizedContentRecommendationWhite from "@/app/industries/communication/image/personalizedContentRecommendationWhite.svg"
const Communication = () => {
  const valueItems = [
    {
      iconUrl: Unified,
      title: "Unified Platforms",
      description:
        "Create integrated communication platforms that combine messaging, voice, and video, streamlining business communication and enhancing collaboration.",
    },
    {
      iconUrl: networkOptimi,
      title: "Network Optimization",
      description:
        "Improve the performance and reliability of communication networks with advanced optimization techniques and tools.",
    },
    {
      iconUrl: MobileSolution,
      title: "Mobile Solutions",
      description:
        "Design and develop custom mobile communication apps tailored to your business needs, ensuring seamless connectivity and enhanced user engagement.",
    },
  ]
  const scrollItems = [
    {
      imagelight: VirtualEvent,
      imageDark: virtualEventWhite,
      title: "Virtual Event Management",
    },
    {
      imagelight: AICustomerServis,
      imageDark: aicustomerServicesChatbotsWhite,
      title: "AI Customer Service Chatbots",
    },
    {
      imagelight: SecureBlockChain,
      imageDark: secureBlockChainServiceWhite,
      title: "Secure Blockchain Messaging",
    },
    {
      imagelight: AugmentedRealityMarketing,
      imageDark: augmentedRealityMarketingWhite,
      title: "Augmented Reality Marketing",
    },
    {
      imagelight: remotecolleboration,
      imageDark: remoteCollaborationWhite,
      title: "Remote Collaboration Platforms ",
    },
    {
      imagelight: DataVisualization,
      imageDark: dataVisulazitionServicesWhite,
      title: "Data Visualization Services",
    },
    {
      imagelight: SocialMediaAnalytics,
      imageDark: socailMediaAnalyticsWhite,
      title: "Social Media Analytics",
    },
    {
      imagelight: MulticahnnelComm,
      imageDark: multiChannelIntgrationWhite,
      title: "Multi-channel Communication Integration",
    },
    {
      imagelight: voiceactivated,
      imageDark: voiceActivatedWhite,
      title: "Voice-Activated Assistants",
    },
    {
      imagelight: PersonalizedContent,
      imageDark: personalizedContentRecommendationWhite,
      title: "Personalized Content Recommendations",
    }
  ];
  const benefitsData = [
    {
      icon: eventsfil,
      title: "Virtual Events",
      description:
        "Our virtual event management solutions boost engagement and interaction, ensuring your online events are seamless and impactful.",
    },
    {
      icon: AiChatbots,
      title: "AI Chatbots",
      description:
        "Our AI-powered customer service chatbots enhance response times and customer satisfaction by delivering instant, intelligent support.",
    },
    {
      icon: blockChain,
      title: "Blockchain Messaging",
      description:
        "Our secure blockchain messaging guarantees private, tamper-proof, and secure communications, safeguarding sensitive information.",
    },
    {
      icon: remote,
      title: "Remote Collaboration",
      description:
        "Our remote collaboration platforms facilitate seamless teamwork and productivity, offering real-time communication tools to connect teams regardless of location.",
    },
    {
      icon: dataVis,
      title: "Data Visualization",
      description:
        "Our data visualization services convert complex data into clear, actionable insights, empowering you to make informed decisions swiftly.",
    },
    {
      icon: VoiceAssitant,
      title: "Voice Assistants",
      description:
        "Our voice-activated assistants simplify operations and enhance user experience through hands-free, intuitive voice commands and interactions.",
    },
  ];
  return (
    <div>
      <CustomBanner
        heading={"Custom Software for \nCommunication"}
        description={
          "MindSees specializes in custom software for the communication industry, boosting connectivity, efficiency, and customer engagement to help businesses thrive in the digital landscape."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={Communicationback}
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
      <Clientsline />
      <BenefitsCard
        heading="Advantages of Choosing MindSees' Communication Solutions"
        benefits={benefitsData}
      />
      <div className="mt-14 mb-20">
        <Stories />

      </div>
      <LastBusinessesSection />
    </div>
  )
}
export default Communication;
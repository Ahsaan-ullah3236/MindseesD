"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import Entertainmentback from "@/app/industries/entertainment/image/Entertainmentback.gif"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import VrE from "@/app/industries/entertainment/image/VrE.svg"
import ARappli from "@/app/industries/entertainment/image/ARappli.svg"
import Aicontent from "@/app/industries/entertainment/image/Aicontent.svg"
import StreamingPlatfo from "@/app/industries/entertainment/image/StreamingPlatfo.svg"
import live from "@/app/industries/entertainment/image/live.svg"
import blockchain from "@/app/industries/entertainment/image/blockchain.svg"
import GemifiedContent from "@/app/industries/entertainment/image/GemifiedContent.svg"
import Audio from "@/app/industries/entertainment/image/Audio.svg"
import PersMerchandising from "@/app/industries/entertainment/image/PersMerchandising.svg"
import location from "@/app/industries/entertainment/image/location.svg"
import Vr from "@/app/industries/entertainment/image/Vr.svg"
import arApplication from "@/app/industries/entertainment/image/arApplication.svg"
import Airecomandation from "@/app/industries/entertainment/image/Airecomandation.svg"
import streaming from "@/app/industries/entertainment/image/streaming.svg"
import InterectiveBroadcasting from "@/app/industries/entertainment/image/InterectiveBroadcasting.svg"
import blockchainDist from "@/app/industries/entertainment/image/blockchainDist.svg"
import ContentDistribution from "@/app/industries/entertainment/image/ContentDistribution.svg"
import AugumentedReality from "@/app/industries/entertainment/image/AugumentedReality.svg"
import Analytics from "@/app/industries/entertainment/image/Analytics.svg"

// white  
import vrExperienceWhite from "@/app/industries/entertainment/image/vrExperienceWhite.svg"
import arApplicationWhite from "@/app/industries/entertainment/image/arApplicationWhite.svg"
import aiContentWhite from "@/app/industries/entertainment/image/aiContentWhite.svg"
import stramingPlatformsWhite from "@/app/industries/entertainment/image/stramingPlatformsWhite.svg"
import liveInterctiveWhite from "@/app/industries/entertainment/image/liveInterctiveWhite.svg"
import blockChainContentWhite from "@/app/industries/entertainment/image/blockChainContentWhite.svg"
import gamifiedContentWhite from "@/app/industries/entertainment/image/gamifiedContentWhite.svg"
import immersiveAudioWhite from "@/app/industries/entertainment/image/immersiveAudioWhite.svg"
import personalizesMerchandisingWhite from "@/app/industries/entertainment/image/personalizesMerchandisingWhite.svg"
import locationBasedEntertanimentWhite from "@/app/industries/entertainment/image/locationBasedEntertanimentWhite.svg"

const Entertainment = () => {
  const valueItems = [
    {
      iconUrl: ContentDistribution,
      title: "Content Distribution",
      description:
        "Create powerful platforms for distributing digital content like movies, TV shows, and music, expanding audience reach and boosting engagement.",
    },
    {
      iconUrl: AugumentedReality,
      title: "Augmented Reality",
      description:
        "Develop immersive AR applications that deliver interactive entertainment experiences, enhancing user interaction and satisfaction.",
    },
    {
      iconUrl: Analytics,
      title: "Analytics",
      description:
        "Leverage advanced analytics to study user behavior, enabling personalized content recommendations and targeted marketing strategies.",
    },
  ]
  const scrollItems = [
    {
      imagelight: VrE,
      imageDark: vrExperienceWhite,
      title: "VR Experiences",
    },
    {
      imagelight: ARappli,
      imageDark: arApplicationWhite,
      title: "AR Applications",
    },
    {
      imagelight: Aicontent,
      imageDark: aiContentWhite,
      title: "AI Content Recommendations",
    },
    {
      imagelight: StreamingPlatfo,
      imageDark: stramingPlatformsWhite,
      title: "Streaming Platforms",
    },
    {
      imagelight: live,
      imageDark: liveInterctiveWhite,
      title: "Live Interactive Broadcasting",
    },
    {
      imagelight: blockchain,
      imageDark: blockChainContentWhite,
      title: "Blockchain Content Distribution",
    },
    {
      imagelight: GemifiedContent,
      imageDark: gamifiedContentWhite ,
      title: "Gamified Content",
    },
    {
      imagelight: Audio,
      imageDark: immersiveAudioWhite ,
      title: "Immersive Audio",
    },
    {
      imagelight: PersMerchandising,
      imageDark: personalizesMerchandisingWhite, 
      title: "Personalized Merchandising",
    },
    {
      imagelight: location,
      imageDark: locationBasedEntertanimentWhite ,
      title: "Location-Based Entertainment",
    }
  ];
  const benefitsData = [
    {
      icon: Vr,
      title: "VR Experiences",
      description:
        "Our VR solutions enhance entertainment by creating immersive environments and interactive storytelling, delivering unmatched audience engagement.",
    },
    {
      icon: arApplication,
      title: "AR Applications",
      description:
        "Our AR applications elevate entertainment by seamlessly merging digital content with real-world environments, boosting user interaction and engagement.",
    },
    {
      icon: Airecomandation,
      title: "AI Recommendations",
      description:
        "Our AI-driven recommendations customize entertainment experiences, delivering personalized content based on individual user preferences.",
    },
    {
      icon: streaming,
      title: "Streaming Platforms",
      description:
        "Our streaming platforms provide seamless, high-quality content delivery with intuitive interfaces, ensuring an exceptional viewing experience.",
    },
    {
      icon: InterectiveBroadcasting,
      title: "Interactive Broadcasting",
      description:
        "Our interactive broadcasting solutions captivate audiences through real-time engagement and immersive content experiences.",
    },
    {
      icon: blockchainDist,
      title: "Blockchain Distribution",
      description:
        "Our blockchain-based distribution guarantees secure, transparent delivery of entertainment content, enhancing accessibility and building audience trust.",
    },
  ];
  return (
    <div>
      <CustomBanner
        heading={"Modern Entertainment \nSoftware Solutions"}
        description={
          "We transform audience engagement by offering immersive experiences and personalized storytelling, reshaping cultural norms."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={Entertainmentback}
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
      <Clientsline />
      <BenefitsCard
        heading="Advantages of Choosing MindSees' Entertainment Solutions"
        benefits={benefitsData}
      />
      <div className="mt-14 mb-20">
        <Stories />

      </div>
      <LastBusinessesSection />
    </div>
  )
}
export default Entertainment;
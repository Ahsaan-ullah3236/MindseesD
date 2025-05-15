"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import Businessback from "@/app/industries/business/image/Businessback.gif"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import ProductProtoTypinf from "@/app/industries/business/image/ProductProtoTypinf.svg"
import  crossIndustryP from "@/app/industries/business/image/crossIndustryP.svg"
import BusinessInteli from "@/app/industries/business/image/BusinessInteli.svg"
import AgileProjectM from "@/app/industries/business/image/AgileProjectM.svg"
import PatentAdvisory  from "@/app/industries/business/image/PatentAdvisory.svg"
import DigitalTransformation from "@/app/industries/business/image/DigitalTransformation.svg"
import SustainabilityConsulting from "@/app/industries/business/image/SustainabilityConsulting.svg"
import InnovationLab from "@/app/industries/business/image/InnovationLab.svg"
import BusinessAutomation from "@/app/industries/business/image/BusinessAutomation.svg"
import CustotmDevelopment  from "@/app/industries/business/image/CustotmDevelopment.svg"
import cloudIntergration from "@/app/industries/business/image/cloudIntergration.svg"
import streamline from "@/app/industries/business/image/streamline.svg"
import HolisticTransformation  from "@/app/industries/business/image/HolisticTransformation.svg"
import ActionableSight from "@/app/industries/business/image/ActionableSight.svg"
import efficientDelivery  from "@/app/industries/business/image/EfficientDelivery.svg"
import StrategicProtection from "@/app/industries/business/image/StrategicProtection.svg"
import   competativeEdge from "@/app/industries/business/image/competativeEdge.svg"
// white 
import   productProttypingServicesWhite from "@/app/industries/business/image/productProttypingServicesWhite.svg"
import   crossIndustryPartnerShipWhite from "@/app/industries/business/image/crossIndustryPartnerShipWhite.svg"
import   businessInteligencetollsWhite from "@/app/industries/business/image/businessInteligencetollsWhite.svg"
import   agileProjectManagmnetWhite from "@/app/industries/business/image/agileProjectManagmnetWhite.svg"
import   patientAdvisoryServicesWhite from "@/app/industries/business/image/patientAdvisoryServicesWhite.svg"
import   digitalTransfomationSolutionWhite from "@/app/industries/business/image/digitalTransfomationSolutionWhite.svg"
import   SustainabilityConsultingWhite from "@/app/industries/business/image/SustainabilityConsultingWhite.svg"
import   inovationLabsWhite from "@/app/industries/business/image/inovationLabsWhite.svg"

const Business =()=>{
    const valueItems=[
        {
          iconUrl: BusinessAutomation ,
          title: "Business Automation",
          description:
            "Deploy automated solutions to optimize workflows and enhance operational efficiency.",
        },
        {
          iconUrl: CustotmDevelopment ,
          title: "Custom Development",
          description:
            "Create customized software applications designed to address your unique business needs and objectives.",
        },
        {
          iconUrl: cloudIntergration,
          title: "Cloud Integration",
          description:
            "Help migrate your business operations to the cloud, ensuring scalability and fostering improved collaboration.",
        },
      ]
      const scrollItems = [
        {
          imagelight: ProductProtoTypinf,
          imageDark: productProttypingServicesWhite,
          title: "Product Prototyping Services",
        },
        {
          imagelight: crossIndustryP,
          imageDark: crossIndustryPartnerShipWhite,
          title: "Cross-Industry Partenrships",
        },
        {
          imagelight: BusinessInteli ,
          imageDark: businessInteligencetollsWhite,
          title: "Business Intelligence Tools",
        },
        {
          imagelight: AgileProjectM ,
          imageDark: agileProjectManagmnetWhite,
          title: "Agile Project Management",
        },
        {
          imagelight:PatentAdvisory ,
          imageDark: patientAdvisoryServicesWhite,
          title: "Patent Advisory Services",
        },
        {
          imagelight: DigitalTransformation,
          imageDark: digitalTransfomationSolutionWhite,
          title: "Digital Transformation Solutions",
        },
        {
          imagelight: SustainabilityConsulting,
          imageDark: SustainabilityConsultingWhite,
          title: "Sustainability Consulting",
        },
        {
          imagelight: InnovationLab ,
          imageDark: inovationLabsWhite ,
          title: "Innovation Labs",
        }
      ];
      const benefitsData = [
        {
          icon: streamline,
          title: "Streamlined Prototyping",
          description:
            "We fast-track your product development lifecycle, turning innovative ideas into prototypes quickly with our expert guidance, support, and cutting-edge technology solutions.",
        },
        {
          icon: HolisticTransformation,
          title: "Holistic Transformation",
          description:
            "We create customized digital transformation solutions that align with your business goals, boosting efficiency and competitiveness across operations while ensuring long-term growth.",
        },
        {
          icon: ActionableSight ,
          title: "Actionable Insights",
          description:
            "We enable data-driven decision-making with advanced analytics and visualization tools, optimizing performance across your organization and providing strategic insights.",
        },
        {
          icon: efficientDelivery,
          title: "Efficient Delivery",
          description:
            "We guarantee timely project success by using agile methodologies that adapt to changing needs, ensuring alignment with your business objectives through expert project management.",
        },
        {
          icon: StrategicProtection ,
          title: "Strategic Protection",
          description:
            "We offer strategic insights and advisory services, protecting your innovations and maximizing the value of your intellectual property as you navigate patent landscapes.",
        },
        {
          icon: competativeEdge ,
          title: "Competitive Edge",
          description:
            "We foster sustainable growth and market leadership with strong, tailored market strategies that capitalize on opportunities and strengthen your industry presence.",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Transformative Business Software Solutions"}
        description={
          "Accelerate your success with MindSees' innovative solutions for tech businesses. Stay ahead with our cutting-edge software and seamless integrations. Choose MindSees for innovation that drives your business forward."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={Businessback}
       />
           <CustomValue
            heading="How MindSees Can Support Your Business"
            subheading="Discover how MindSees can transform your business operations with our customized business solutions."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Business Platform Services"
 subtitle="Discover how MindSees can transform your business operations with our customized suite of enterprise solutions, streamlining processes and driving growth."
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/20aaebc0-a483-4372-6716-8ff91e6abc00/w=3840,q=75"
 description="Boost your business with MindSees' advanced tech solutions. Our expert team provides innovative services that enhance efficiency, foster growth, and open new opportunities. Partner with us to harness the power of innovation and take your business to new heights."
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
     heading="Advantages of Choosing MindSees' Business Solutions" 
     benefits={benefitsData} 
   />
   <div className="mt-14 mb-20">
       <Stories/>
   
       </div>
       <LastBusinessesSection/>
   </div>
    )
}
export default Business;
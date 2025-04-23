"use client"
import React from "react";
import CustomBanner from "../components/customBanner";
import bannerImage from "@/app/industries/business/image/businessBanner.png"
import CustomValue from "../components/customValue";
import ServicePlatform from "../components/customPlatformServices";
import Clientsline from "@/app/clientsline/page";
import BenefitsCard from "../components/customBenefitCard";
import Stories from "@/app/Stories/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";

const Business =()=>{

    const valueItems=[
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-1.svg",
          title: "Business Automation",
          description:
            "Implement automated solutions to streamline workflows and improve efficiency.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Custom Development",
          description:
            "Develop tailored software applications to meet specific business needs and goals.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Cloud Integration",
          description:
            "Assist in migrating business operations to the cloud for scalability and enhanced collaboration.",
        },
      ]

      const scrollItems = [
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/medical-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/medical.svg",
          title: "Product Prototyping Services",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/management-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
          title: "Cross-Industry Partenrships",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Business Intelligence Tools",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Agile Project Management",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Patent Advisory Services",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Digital Transformation Solutions",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Sustainability Consulting",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Innovation Labs",
        }
      ];

      const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Streamlined Prototyping",
          description:
            "We accelerate your product development lifecycle, transforming innovative ideas into prototypes efficiently with our expert guidance, support, and industry-leading technology solutions.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "Holistic Transformation",
          description:
            "We tailor comprehensive digital transformation solutions to align with your business goals, enhancing efficiency and competitiveness across operations and ensuring sustainable growth.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Actionable Insights",
          description:
            "We empower data-driven decision-making with powerful analytics and visualization tools, optimizing performance across your entire organization and enabling strategic insights",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Efficient Delivery",
          description:
            "We ensure timely project success with agile methodologies that adapt to evolving needs, aligning with your business objectives under our expert project management.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Strategic Protection",
          description:
            "We provide strategic insights and advisory services, safeguarding your innovations and maximizing intellectual property value in navigating patent landscapes.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Competitive Edge",
          description:
            "We drive sustainable growth and market leadership with robust market strategies tailored to capitalize on opportunities and enhance industry presence.",
        },
      ];
    return(
        <div>
        <CustomBanner 
        heading={"Transformative Business \nSoftware Solutions"}
        description={
          "Drive success with MindSees' innovative solutions for tech businesses. Stay ahead with our cutting-edge software and advanced integrations. Choose Kavelogics for innovation that propels your business forward."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
       />
           <CustomValue
            heading="How MindSees Can Help in Business"
            subheading="Explore how MindSees can revolutionize your business operations with our tailored Business solutions."
            values={valueItems}
           />
            <ServicePlatform
 title="Our Business Platform Services"
 subtitle="Explore how MindSees can transform your business operations with our tailored suite of enterprise solutions, optimizing processes and driving growth"
 imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/20aaebc0-a483-4372-6716-8ff91e6abc00/w=3840,q=75"
 description="Elevate your business with MindSees' cutting-edge tech solutions. Our expert team delivers innovative services to enhance efficiency, drive growth, and unlock new opportunities. Partner with us to unleash the power of innovation and propel your business to unprecedented success."
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
     heading="Benefits of Having MindSees' Business Solutions" 
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
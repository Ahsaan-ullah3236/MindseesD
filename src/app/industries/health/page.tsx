"use client";
import React from "react";
import Healthcare from "@/app/industries/health/image/healthCare1.gif"
import CustomBanner from "../components/customBanner";
import CustomValue from "../components/customValue";
import Clientsline from "@/app/clientsline/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page"
import ServicePlatform from "../components/customPlatformServices";
import BenefitsCard from "../components/customBenefitCard";
import teleHealth from "@/app/industries/health/image/teleHealth.svg"
import digital from "@/app/industries/health/image/digital.svg"
import dataAnal from "@/app/industries/health/image/dataAnal.svg"
import medicalImageInter from "@/app/industries/health/image/dataAnal.svg"
import mhospital from "@/app/industries/health/image/mhospital.svg"
import integration from "@/app/industries/health/image/integration.svg"
import telehealthMangment from "@/app/industries/health/image/telehealthMangment.svg"
import cloudHealthServices from "@/app/industries/health/image/dataAnal.svg"
import ehr from "@/app/industries/health/image/ehr.svg"
import lims1 from "@/app/industries/health/image/lims1.svg"
import remote from "@/app/industries/health/image/remote.svg"
import CRM from "@/app/industries/health/image/CRM.svg"
import pharmacy from "@/app/industries/health/image/pharmacy.svg"
import ImprovedAccurac from "@/app/industries/health/image/ImprovedAccurac.svg"
import PatientSatisfaction from "@/app/industries/health/image/PatientSatisfaction.svg"
import EnhancedEfficiency from "@/app/industries/health/image/EnhancedEfficiency.svg"
import dataSecurity2 from "@/app/industries/health/image/dataSecurity2.svg"
import scalabelSolution from "@/app/industries/health/image/scalabelSolution.svg"
import SeamlessIntegration from "@/app/industries/health/image/SeamlessIntegration.svg"
const Health = () => {
  const benefitsData = [
    {
      icon: ImprovedAccurac,
      title: "Improved Accuracy",
      description:
        "Our advanced healthcare tools boost data accuracy, helping to minimize errors in patient records and treatment plans.",
    },
    {
      icon: PatientSatisfaction,
      title: "Patient Satisfaction",
      description:
        "Our user-friendly systems elevate patient engagement and satisfaction by delivering better, more efficient, and personalized care.",
    },
    {
      icon: EnhancedEfficiency,
      title: "Enhanced Efficiency",
      description:
        "Our innovative solutions effortlessly streamline your processes, cut down manual tasks, and greatly enhance overall operational efficiency.",
    },
    {
      icon: dataSecurity2,
      title: "Data Security",
      description:
        "We safeguard your data with advanced security measures, ensuring patient confidentiality and full compliance with industry standards and regulations.",
    },
    {
      icon: scalabelSolution,
      title: "Scalable Solutions",
      description:
        "Our services offer scalable solutions that grow with your facility, effortlessly adapting to your changing needs and requirements.",
    },
    {
      icon: SeamlessIntegration,
      title: "Seamless Integration",
      description:
        "Our integration services enable seamless data flow between systems, enhancing information accessibility and supporting better decision-making.",
    },
  ];
  const scrollItems = [
    {
      imagelight: medicalImageInter,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
      title: "Medical Image Interpretation",
    },
    {
      imagelight: mhospital,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
      title: "Management Systems for Hospitals",
    },
    {
      imagelight: telehealthMangment,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
      title: "Telehealth App Development",
    },
    {
      imagelight: integration,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
      title: "Integration of Health Data",
    },
    {
      imagelight: cloudHealthServices,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
      title: "Cloud Health Services",
    },
    {
      imagelight: ehr,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
      title: "EHR Creation",
    },
    {
      imagelight: lims1,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
      title: "Development of LIMS",
    },
    {
      imagelight: remote,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
      title: "Remote Patient Observation",
    },
    {
      imagelight: CRM,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
      title: "CRM for Healthcare",
    },
    {
      imagelight: pharmacy,
      imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
      title: "Solutions for Pharmacy Management",
    }
  ];
  const valueItems = [
    {
      iconUrl: digital,
      title: "Digital Health Solutions",
      description:
        "Unlock personalized digital health solutions to enhance patient care and streamline operational efficiency.",
    },
    {
      iconUrl: dataAnal,
      title: "Data Analytics",
      description:
        "Leverage advanced data analytics to gain valuable insights and enhance decision-making in healthcare operations.",
    },
    {
      iconUrl: teleHealth,
      title: "Telehealth Applications",
      description:
        "Access cutting-edge telehealth applications for seamless remote patient consultation and monitoring.",
    },
  ]
  return (
    <div>
      <CustomBanner
        heading={"Custom Healthcare \nSoftware Solutions"}
        description={
          "Revolutionize the healthcare system with tailored digital solutions that boost accessibility and improve patient outcomes. Embark on a transformative journey with us to bring your vision to life and make a lasting impact. "
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={Healthcare}
      />
      <CustomValue
        heading="How MindSees Can Help in Healthcare"
        subheading="Discover how MindSees can elevate your healthcare operations through our customized digital solutions."
        values={valueItems}
      />

      <ServicePlatform
        title="Our Health Platform Services"
        subtitle="Explore how MindSees can elevate patient care and optimize operations with our comprehensive range of customized digital health solutions."
        imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/5cea0081-83f7-4c19-9470-e6cb15b12500/w=3840,q=75"
        description="Our custom telehealth software empowers physicians with virtual consultations, mobile healthcare services, video conferencing, real-time data management, intuitive screen sharing, and advanced annotation tools, delivering a transformative healthcare experience for both hospitals and startups."
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
        heading="Advantages of Choosing MindSees Health Solutions"
        benefits={benefitsData}
      />
      <div className="mt-14 mb-20">
        <Stories />

      </div>
      <LastBusinessesSection />




    </div>
  )
}
export default Health;
{/* <div className="min-h-screen spacing-secton">
          <div className="text-5xl font-bold text-gray-900 text-center mt-30">Our Health Platform Services</div>
      <div className="text-lg text-center mt-5">Discover how Kavelogics can enhance patient care and streamline operations with our comprehensive suite of tailored <br/>digital health solutions</div>
      
      <div className="max-w-7xl mx-auto py-18">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          
          <div className="mb-10 lg:mb-0">
            <Image src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/5cea0081-83f7-4c19-9470-e6cb15b12500/w=3840,q=75" 
            alt="image"
            height={300}
            width={300}
            className="w-full"
            
            />
            
            <p className="text-lg text-black mb-8 mt-9">
            Our custom telehealth software empowers physicians with virtual consultations, mobile healthcare services, video conferencing, real-time data handling, user-friendly screen sharing, and advanced annotation features, ensuring a revolutionary healthcare experience for hospitals and startups alike.
            </p>
            
            <div className="mb-10 text-black">
             <button className="text-[#00d280] py-2 font-bold text-xl transition duration-200">
                Lets discuss
              </button>
            </div>
          </div>

          
          <div className="relative">
            <div 
              className="h-[90vh] overflow-y-auto scroll-smooth left-scrollbarGray pl-4 space-y-8"
            >
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="mt-14">
                       {scrollItemsLeft.map((item, index) => (
                            
                       <div 
                        key={index}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="bg-[#d6f1ff] hover:bg-[#0575ad]  hover:text-white p-5 rounded-xl  my-4 border-2 border-[#0575ad] "
                        >

                            <Image src={hovered ? item?.imageDark: item?.imagelight} alt="logo" height={20} width={20} className="w-13 h-13 mx-auto" />
                         <h3 className=" font-bold text-black-800 mb-4 text-center mt-4" style={{lineHeight:'24px', fontSize:'19px'}}>{item.title}</h3>
                    
                        </div>
                         ))}
                    </div>
                    <div className="">
                       {scrollItemsRight.map((item, index) => (
                            
                       <div 
                        key={index}
                        className="bg-[#d6f1ff] hover:bg-[#0575ad]  hover:text-white p-5 rounded-xl  my-4 border-2 border-[#0575ad] "
                        >

                            <Image src={hovered ? item?.imageDark: item?.imagelight} alt="logo" height={20} width={20} className="w-13 h-13 mx-auto" />
                         <h3 className=" font-bold text-black-800 mb-4 text-center mt-4" style={{lineHeight:'24px', fontSize:'19px'}}>{item.title}</h3>
                    
                        </div>
                         ))}
                    </div>
                    <div>

                    </div>

                </div>
             
            </div>
          </div>
        </div>
      </div>

      
    </div> */}
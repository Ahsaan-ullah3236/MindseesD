"use client";
import React from "react";
import bannerImage from "@/app/industries/health/image/banner.png"
import CustomBanner from "../components/customBanner";
import CustomValue from "../components/customValue";
import Clientsline from "@/app/clientsline/page";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page"
import ServicePlatform from "../components/customPlatformServices";
import BenefitsCard from "../components/customBenefitCard";

const Health =()=>{


    const benefitsData = [
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Innovation",
          description:
            "Our advanced healthcare tools enhance your data accuracy, effectively minimizing errors in patient records and treatment plans.",
        },
        {
          icon: "https://kavelogics.com/about/centricity.svg",
          title: "Customer-Centricity",
          description:
            "Our user-friendly systems enhance your patient engagement and satisfaction through better, more efficient, and personalized service delivery.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Integrity",
          description:
            "Our innovative solutions seamlessly streamline your processes, reducing manual work and significantly increasing overall operational efficiency.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Integrity",
          description:
            "Our innovative solutions seamlessly streamline your processes, reducing manual work and significantly increasing overall operational efficiency.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Integrity",
          description:
            "Our innovative solutions seamlessly streamline your processes, reducing manual work and significantly increasing overall operational efficiency.",
        },
        {
          icon: "https://kavelogics.com/about/integrity.svg",
          title: "Integrity",
          description:
            "Our innovative solutions seamlessly streamline your processes, reducing manual work and significantly increasing overall operational efficiency.",
        },
      ];

    const scrollItems = [
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/medical-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/medical.svg",
          title: "Expertise & Innovation",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/management-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/management.svg",
          title: "Quality Assurance",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Client-Centric Solutions",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Cutting-Edge Technologies",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Transparent Process",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/telehealth.svg",
          title: "Client",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/integration-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/integration.svg",
          title: "Technologies",
        },
        {
          imagelight: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud-hover.svg",
          imageDark: "https://kavelogics.com/actual-industries/health/scroll-cards/cloud.svg",
          title: "Transparent",
        }
      ];

    const valueItems=[
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-1.svg",
          title: "Innovation",
          description:
            "We pioneer new ideas and technologies to deliver solutions that drive your business forward.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-2.svg",
          title: "Customer-Centricity",
          description:
            "Your needs and goals are our top priority, and we tailor our solutions to meet them perfectly.",
        },
        {
          iconUrl: "https://kavelogics.com/actual-industries/health/card/card-3.svg",
          title: "Integrity",
          description:
            "At Kavelogics, we prioritize trust and transparency in all interactions—with clients, partners, and within our team.",
        },
      ]

    return(
        <div>
            <CustomBanner 
             heading={"Custom Healthcare \nSoftware Solutions"}
             description={
               "Reshape healthcare system with personalized digital solutions by enhancing accessibility and improving patient outcomes. Join us on a transformative journey to turn your vision into a captivating reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <CustomValue
      heading="How MindSees Can Help in Healthcare"
      subheading="Explore how MindSees can transform your healthcare operations with our tailored digital solutions."
      values={valueItems}
    />

   <ServicePlatform
      title="Our Health Platform Services"
      subtitle="Discover how Kavelogics can enhance patient care and streamline operations with our comprehensive suite of tailored digital health solutions"
      imageUrl="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/5cea0081-83f7-4c19-9470-e6cb15b12500/w=3840,q=75"
      description="Our custom telehealth software empowers physicians with virtual consultations, mobile healthcare services, video conferencing, real-time data handling, user-friendly screen sharing, and advanced annotation features, ensuring a revolutionary healthcare experience for hospitals and startups alike."
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
      heading="Benefits of Having Kavelogics' Health Solutions" 
      benefits={benefitsData} 
    />
    <div className="mt-14 mb-20">
    <Stories/>

    </div>
    <LastBusinessesSection/>

            
       

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
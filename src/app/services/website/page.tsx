"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/website/image/websiteBanner.png"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";

const WebsiteDevelopment=()=>{

    const faqs = [
        {
          question: "Can you help with content creation and copywriting for websites?",
          answer: "While our primary focus is on website development and design, we can provide guidance and recommendations for content creation and copywriting. We work closely with clients to understand their messaging and branding, and can collaborate with external content creators if needed.",
        },
        {
          question: "What is your process for website testing and quality assurance?",
          answer: "We conduct thorough testing throughout the website development process to ensure that all features and functionalities work as intended. Our testing includes functional testing, usability testing, compatibility testing, performance testing, and security testing to identify and address any issues before launch.",
        },
        {
          question: "How do you handle website hosting and domain registration?",
          answer: "We can assist with website hosting and domain registration, either by recommending reliable hosting providers and domain registrars or by managing the process on behalf of the client. We ensure that websites are hosted on secure and reliable servers to guarantee optimal performance and uptime.",
        },
        {
          question: "Do you provide website maintenance and support services after launch?",
          answer: "Yes, we offer ongoing website maintenance and support services to ensure that your website remains secure, up-to-date, and performing optimally post-launch. Our maintenance services include regular updates, security monitoring, backup management, and technical support.",
        },
      
      ];

    const technologies = [
        { name: "php", icon: "https://kavelogics.com/services/web/tech/php.svg" },
        { name: "Python", icon: "https://kavelogics.com/services/web/tech/Python.svg"},
        { name: "HTML", icon: "https://kavelogics.com/services/web/tech/HTML.svg"},
        { name: "Javascript", icon: "https://kavelogics.com/services/web/tech/js.svg" },
        { name: "Angular", icon: "https://kavelogics.com/services/web/tech/Angular.svg" },
        { name: "React", icon: "https://kavelogics.com/services/web/tech/React.svg"},
        { name: "Ruby On Rails", icon: "https://kavelogics.com/services/web/tech/ror.svg"},
        { name: "CSS", icon: "https://kavelogics.com/services/web/tech/css.svg"},
        { name: "Node JS", icon: "https://kavelogics.com/services/web/tech/Node_JS.svg" },
      ];

       const features = [
    { title: 'API Intergation', subtitle: 'Services' },
    { title: 'Full Stack', subtitle: 'Development' },
    { title: 'Bubble ', subtitle: 'Development' },
    { title: 'WordPress', subtitle: 'Development' },
  ];

  const CustomWhyChooseData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Expertise & Experience",
      description:
        "With years of experience under our belt, we have successfully delivered numerous projects across various industries, ensuring high-quality results that meet our clients' needs.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Customized Solutions",
      description:
        "We take the time to understand your unique requirements, goals, and brand identity to tailor a customized solution that perfectly aligns with your vision and objectives.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Cutting-edge Technology",
      description:
        "We stay ahead of the curve by leveraging the latest tools, technologies, and frameworks in website development. We ensure to deliver optimal performance and user experience.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Attention to Detail",
      description:
        "Our meticulous approach to website development ensures that every aspect of your website, from design elements to coding standards, is carefully crafted to perfection.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Timely Delivery",
      description:
        "Our streamlined development process, coupled with effective project management practices, enables us to meet tight deadlines without compromising on quality.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Exceptional Support",
      description:
        "We offer ongoing support and maintenance services to ensure that your website remains up and running smoothly at all times. Our team is here to help you every step of the way.",
    },
    
  ];

  const SolutionData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Custom Web Development",
      description:
        "We provide custom web development, crafting websites from scratch to precisely match clients' brand identity, functional needs, and target audience preferences.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "E-commerve Development",
      description:
        "We offer end-to-end e-commerce development solutions, including online store setup, product catalog management, secure payment gateway and order processing functionalities.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Website Maintenance",
      description:
        "We provide clients with website maintenance plans that include frequent updates, backups, performance tracking, and help with trouble to ensure their websites are up and operating.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "PWA Development",
      description:
        "We explore the creation of progressive web applications (PWAs) aiming to deliver a web browser experience comparable to that of native apps.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Performance Optimization",
      description:
        "We optimize website performance by implementing techniques such as image compression, use of CSS & JavaScript, and leveraging content delivery networks.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "CMS Integration",
      description:
        "Our team offers integration with popular CMS platforms such as WordPress, Drupal, or Joomla for easy content updates and management by clients.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"Website Development"}
             description={
               "Get full stack web development services that connect front-end design, user experience, back-end management, and database. Join us on a transformative journey to turn your vision into a captivating reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Innovative Website Development Solutions" 
      subHeading="At MindSees, we specialize in developing captivating websites that drive business growth. Our technical expertise ensures your digital presence stands out in today's competitive landscape."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our Website Devlopment Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Our team of professionals will design, build, test, and release new applications created especially for you using the power of bespoke web development. It will take a collaborative effort from front-end, back-end, and full-stack developers, business analysts, and quality assurance testers to pull this off.
      </p>

      <div className="relative flex justify-center gap-10 flex-wrap">
        <div className="flex justify-center gap-6 sm:gap-13 relative w-full">
         
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Collect Information</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:rounded-sm after:-translate-x-1/2 after:w-3 after:h-35 after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Design</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] "
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Launch & Support</span>
                </div>
              </div>
            </div>
         
        </div>

        <div className="flex justify-center gap-7 sm:gap-14 mt-15 sm:mt-10 relative w-full">
          
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[-140%] sm:after:top-[-96%] after:left-[80%] after:-translate-x-1/2 after:w-3 after:h-36 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#0575ad] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Wireframing</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[-134%] sm:after:top-[-90%] after:left-[80%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#0575ad]  flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Development</span>
                </div>
              </div>
            </div>
        </div>
       
      </div>
            </section>

            <CustomServiceDetail
             heading={"Pinnacle Website \nDevelopment Services"}
             description={
               "Embark on a journey of innovation with our top-tier development services. We deliver solutions that redefine industry standards, ensuring a seamless experience from concept to execution. Elevate your digital presence with our commitment to excellence. Partner with us today and transform your ideas into impactful realities."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9d9056b4-49fe-4086-1ae2-a3f0c1d75c00/w=1920,q=75"
           
             />
            <Clientsline/>
            
  
            <CustomWhyChoose 
      heading={"Why should you choose MindSees for Website Development"}
      CustomWhyChoose={CustomWhyChooseData} 
    />
    <TechnologyGrid technologies={technologies} />

    <FaqAccordion faqs={faqs} />
            <Stories/>
            <LastBusinessesSection/>


        </div>
    )
}
export default WebsiteDevelopment ;
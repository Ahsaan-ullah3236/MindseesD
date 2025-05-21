"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/website/image/website.gif"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";
import wCustomWevb from "@/app/services/website/image/wCustomWevb.svg"
import wEcommerce from "@/app/services/website/image/wEcommerce.svg"
import wMaintaince from "@/app/services/website/image/wMaintaince.svg"
import wPWADevelopment from "@/app/services/website/image/wPWADevelopment.svg"
import wPerformance from "@/app/services/website/image/wPerformance.svg"
import wCMS from "@/app/services/website/image/wCMS.svg"
import wExperties from "@/app/services/website/image/wExperties.svg"
import wCustomizedS from "@/app/services/website/image/wCustomizedS.svg"
import wtechnology from "@/app/services/website/image/wtechnology.svg"
import WDetail from "@/app/services/website/image/WDetail.svg"
import wTimelyD from "@/app/services/website/image/wTimelyD.svg"
import WSupport from "@/app/services/website/image/WSupport.svg"

import php from "@/app/services/website/image/php.svg"
import python from "@/app/services/website/image/python.svg"
import HTML from "@/app/services/website/image/HTML.svg"
import java from "@/app/services/website/image/Javascript.svg"
import Angular from "@/app/services/website/image/Angular.svg"
import react from "@/app/services/website/image/React.svg"
import RubyOnRails from "@/app/services/website/image/RubyOnRails.svg"
import CSS from "@/app/services/website/image/CSS.svg"
import NodeJS from "@/app/services/website/image/NodeJS.svg"
import Web from "@/app/services/website/image/Web.png"




const WebsiteDevelopment = () => {
  const faqs = [
    {
      question: "Do you offer content creation and copywriting services for websites?",
      answer: "Yes, we provide expert content creation and copywriting services to ensure your website engages and converts visitors effectively.",
    },
    {
      question: "What steps do you take for website testing and quality assurance?",
      answer: "We conduct thorough testing across multiple devices and browsers to ensure functionality, performance, and security, delivering a flawless website experience.",
    },
    {
      question: "How do you manage website hosting and domain registration?",
      answer: "We assist with selecting the right hosting provider and handle domain registration to ensure a seamless launch and ongoing performance of your website.",
    },
    {
      question: "Do you offer post-launch website maintenance and support services?",
      answer: "Yes, we offer ongoing website maintenance and support services to ensure your website stays updated, secure, and performs optimally.",
    },

  ];
  const technologies = [
    { name: "php", icon: php },
    { name: "Python", icon: python },
    { name: "HTML", icon: HTML },
    { name: "Javascript", icon: java },
    { name: "Angular", icon: Angular },
    { name: "React", icon: react },
    { name: "Ruby On Rails", icon: RubyOnRails },
    { name: "CSS", icon: CSS },
    { name: "Node JS", icon: NodeJS },
  ];
  const features = [
    { title: 'API Intergation', subtitle: 'Services' },
    { title: 'Full Stack', subtitle: 'Development' },
    { title: 'Bubble ', subtitle: 'Development' },
    { title: 'WordPress', subtitle: 'Development' },
  ];
  const CustomWhyChooseData = [
    {
      icon: wExperties,
      title: "Expertise & Experience",
      description:
        "With years of expertise, we have successfully completed numerous projects across diverse industries, consistently delivering high-quality results that align with our clients' needs.",
    },
    {
      icon: wCustomizedS,
      title: "Customized Solutions",
      description:
        "We invest time in understanding your unique needs, goals, and brand identity to create a personalized solution that aligns perfectly with your vision and objectives.",
    },
    {
      icon: wtechnology,
      title: "Cutting-edge Technology",
      description:
        "We stay at the forefront of innovation by utilizing the latest tools, technologies, and frameworks in website development, ensuring optimal performance and an exceptional user experience.",
    },
    {
      icon: WDetail,
      title: "Attention to Detail",
      description:
        "Our thorough approach to website development guarantees that every detail, from design elements to coding standards, is meticulously crafted to deliver perfection.",
    },
    {
      icon: wTimelyD,
      title: "Timely Delivery",
      description:
        "Our efficient development process, combined with strong project management practices, ensures we meet tight deadlines while maintaining the highest quality standards.",
    },
    {
      icon: WSupport,
      title: "Exceptional Support",
      description:
        "We provide continuous support and maintenance services to keep your website running smoothly. Our team is dedicated to assisting you at every stage.",
    },

  ];
  const SolutionData = [
    {
      icon: wCustomWevb,
      title: "Custom Web Development",
      description:
        "We offer custom web development, building websites from the ground up to perfectly align with clients' brand identity, functional requirements, and target audience needs.",
    },
    {
      icon: wEcommerce,
      title: "E-commerve Development",
      description:
        "We provide comprehensive e-commerce development solutions, covering online store setup, product catalog management, secure payment gateways, and seamless order processing functionalities.",
    },
    {
      icon: wMaintaince,
      title: "Website Maintenance",
      description:
        "We offer website maintenance plans that include regular updates, backups, performance monitoring, and troubleshooting support to ensure your website remains operational and efficient.",
    },
    {
      icon: wPWADevelopment,
      title: "PWA Development",
      description:
        "We specialize in developing Progressive Web Applications (PWAs) that offer a web browser experience on par with native apps.",
    },
    {
      icon: wPerformance,
      title: "Performance Optimization",
      description:
        "We enhance website performance through techniques like image compression, efficient use of CSS and JavaScript, and leveraging content delivery networks (CDNs).",
    },
    {
      icon: wCMS,
      title: "CMS Integration",
      description:
        "Our team provides seamless integration with popular CMS platforms like WordPress, Drupal, and Joomla, allowing clients to easily manage and update their content.",
    },

  ];
  return (
    <div>
      <ServicesCustomBanner
        heading={"Website Development"}
        description={
          "Experience comprehensive full-stack web development services that seamlessly integrate front-end design, user experience, back-end management, and database functionality. Let us help transform your vision into a captivating reality."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
      />
      <FeatureList features={features} />


      <CustomSolutionCard
        heading="Our Cutting-Edge Website Development Solutions"
        subHeading="At MindSees, we specialize in creating engaging websites that fuel business growth. Our technical expertise ensures your digital presence excels in today’s competitive market."
        Solution={SolutionData}
      />

      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl sm:text-5xl font-semibold sm:text-bold text-[#013a54] mb-4">Our Website Devlopment Process</h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54] px-2">
          Our team of experts will design, build, test, and launch custom applications tailored to your needs through bespoke web development. This collaborative effort involves front-end, back-end, and full-stack developers, business analysts, and quality assurance testers to ensure success.
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
        heading={"Premier Website Development Services"}
        description={
          "Embark on an innovative journey with our premier development services. We provide solutions that set new industry standards, ensuring a smooth experience from concept to execution. Enhance your digital presence with our dedication to excellence. Partner with us today to turn your ideas into impactful realities."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={Web}

      />
      <Clientsline />


      <CustomWhyChoose
        heading={"Why should you choose MindSees for Website Development"}
        CustomWhyChoose={CustomWhyChooseData}
      />
      <TechnologyGrid technologies={technologies} />

      <FaqAccordion faqs={faqs} />
      <Stories />
      <LastBusinessesSection />


    </div>
  )
}
export default WebsiteDevelopment;
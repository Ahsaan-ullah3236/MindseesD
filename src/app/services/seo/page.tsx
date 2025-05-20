"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/seo/image/bgBanner.gif"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";

import SaasDigital from "@/app/services/seo/image/SaasDigital.svg"
import SaasSEO from "@/app/services/seo/image/SaasSEO.svg"
import SaasContent from "@/app/services/seo/image/SaasContent.svg"
import SaasPPC from "@/app/services/seo/image/SaasPPC.svg"
import SaasEmail from "@/app/services/seo/image/SaasEmail.svg"

import SendPulse from "@/app/services/seo/image/SendPulse.svg"
import  Klaviyo from "@/app/services/seo/image/Klaviyo.svg"
import  Brevo from "@/app/services/seo/image/Brevo.svg"
import Typeform from "@/app/services/seo/image/Typeform.svg"
import Intercom from "@/app/services/seo/image/Intercom.svg"
import Callpage from "@/app/services/seo/image/Callpage.svg"
import GoogleAnalytics from "@/app/services/seo/image/GoogleAnalytics.svg"
import Kissmetrics from "@/app/services/seo/image/Kissmetrics.svg"
import  SEMRush from "@/app/services/seo/image/SEMRush.svg"

import   Saas2Creative from "@/app/services/seo/image/Saas2Creative.svg"
import  Saas2Component from "@/app/services/seo/image/Saas2Component.svg"
import  Saa2Analytics from "@/app/services/seo/image/Saa2Analytics.svg"
import Saas2Communication from "@/app/services/seo/image/Saas2Communication.svg"
import Saas2Clinets  from "@/app/services/seo/image/Saas2Clinets.svg"
import SaasUnique from "@/app/services/seo/image/SaasUnique.svg"
const SEO = () => {
  const faqs = [
    {
      question: "What is SEO, and why is it crucial for my business?",
      answer: "SEO (Search Engine Optimization) is the process of optimizing your website to improve its visibility on search engines. It's crucial for driving organic traffic, increasing brand awareness, and boosting conversions.",
    },
    {
      question: "How long does it take to see results from SEO efforts?",
      answer: "The time it takes to see results from SEO can vary based on factors like industry competition, your website's current status, and the strategies used. While major improvements in rankings and traffic may take several months, smaller gains can be seen in just a few weeks. Keep in mind that SEO is a long-term investment that demands continuous effort to sustain and enhance results.",
    },
    {
      question: "What SEO strategies and techniques do you use?",
      answer: "We implement a mix of on-page optimization, off-page optimization, technical SEO, content marketing, and link building to enhance your website's search engine visibility. Our approach is customized to align with your business goals and target audience, while staying current with the latest SEO trends and best practices for optimal results.",
    },
    {
      question: "Do you guarantee first-page rankings on Google?",
      answer: "While we work to improve your website's rankings and visibility, it's important to understand that SEO results are influenced by factors beyond our control, such as algorithm changes and competitor activity. While we can't guarantee specific rankings, we assure you that we will apply proven strategies to boost your website's overall performance and visibility.",
    },

  ];
  const technologies = [
    { name: "Send Pulse", icon: SendPulse  },
    { name: "Klaviyo", icon:Klaviyo  },
    { name: "Brevo", icon: Brevo},
    { name: "Typeform", icon: Typeform},
    { name: "Intercom", icon:  Intercom},
    { name: "Callpage", icon: Callpage},
    { name: "Google Analytics", icon: GoogleAnalytics },
    { name: "Kissmetrics", icon: Kissmetrics},
    { name: "SEMRush", icon:  SEMRush},
  ];
  const features = [
    { title: 'Digital ', subtitle: 'Marketing' },
    { title: 'Internet Marketing', subtitle: 'Services' },
    { title: 'Search Engine', subtitle: 'Optimization' },
    { title: 'Social Media', subtitle: 'Management' },
  ];
  const CustomWhyChooseData = [
    {
      icon: Saas2Creative,
      title: "Creative Ideas",
      description:
        "When developing your comprehensive digital advertising plan, our team of specialists leverages years of experience and strategic creativity to deliver impactful results.",
    },
    {
      icon: Saas2Component,
      title: "Component KPIs",
      description:
        "Our internet marketing team is dedicated to not just meeting, but surpassing all agreed-upon KPIs, ensuring results are delivered on time and within budget.",
    },
    {
      icon: Saa2Analytics,
      title: "Analytics",
      description:
        "Our internet marketing team holds regular meetings with you to review the progress of your plan, using analytics to track and measure what matters most.",
    },
    {
      icon: Saas2Communication,
      title: "Communication",
      description:
        "Our team truly listens to your needs and creates solutions that work, understanding that you are the expert when it comes to your business.",
    },
    {
      icon: Saas2Clinets,
      title: "Client Centric Strategy",
      description:
        "To create a plan that works, we invest time in understanding every aspect of your company—your competitors, successes, and challenges.",
    },
    {
      icon: SaasUnique,
      title: "Unique Plans",
      description:
        "For your specific situation, certain digital marketing components may be more effective than others. We identify the best solutions and build from there.",
    },

  ];
  const SolutionData = [
    {
      icon: SaasDigital,
      title: "Digital Marketing",
      description:
        "We are passionate about digital marketing, focused on driving exceptional sales conversions, maximizing ROI, and securing top market share in the digital space.",
    },
    {
      icon: SaasSEO,
      title: "SEO",
      description:
        "We boost ROI by optimizing crucial website factors like page speed, mobile responsiveness, and organic search rankings.",
    },
    {
      icon: SaasContent,
      title: "Content Marketing",
      description:
        "We enhance your online presence and industry influence with personalized strategies, content calendars, and SEO-optimized creations.",
    },
    {
      icon: SaasPPC,
      title: "PPC & CRO",
      description:
        "We utilize PPC and CRO strategies to drive success by precisely targeting your audience across search engines and social media platforms.",
    },
    {
      icon: SaasEmail,
      title: "Email Marketing",
      description:
        "As an online marketing firm, we specialize in creating impactful email campaigns that drive results and grow your subscriber base.",
    },

  ];
  return (
    <div>
      <ServicesCustomBanner
        heading={"SEO & Marketing"}
        description={
          "Unlock powerful engagement tools designed to boost website traffic, generate leads, and drive sales. Let’s work together to transform your vision into a compelling success."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
      />
      <FeatureList features={features} />


      <CustomSolutionCard
        heading="Our Cutting-Edge SEO & Marketing Solutions"
        subHeading="Maximize your online success with our customized SEO & Marketing services, designed to boost brand visibility and drive targeted traffic."
        Solution={SolutionData}
      />

      <section className="py-16 text-center bg-white">
        <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our SEO & Marketing Process</h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54] px-2">
          Our proven process delivers customized SEO & marketing strategies designed to enhance your online presence. From in-depth analysis to precise execution, we guide you toward digital success.
        </p>

        <div className="relative flex justify-center gap-10 flex-wrap">
          <div className="flex justify-center gap-6 sm:gap-13 relative w-full">

            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Client Kick Off</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:rounded-sm after:-translate-x-1/2 after:w-3 after:h-35 after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Plan &  Calendar</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] "
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Analyze & Evaluate</span>
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
                  <span className="font-bold text-[9px] sm:text-sm text-black">Competitive Analysis</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[-134%] sm:after:top-[-90%] after:left-[80%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#0575ad]  flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Execute Plan</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CustomServiceDetail
        heading={"Digital Marketing Across Multiple Channels for Startups"}
        description={
          "At our startup marketing agency, we take an integrative and holistic approach. We begin by crafting a solid strategy and an engaging website concept. From there, we continuously test and refine to achieve quick wins while ensuring ongoing engagement across all key channels."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/e1ee1f7d-7871-4d88-1e0b-34e1e287b300/w=1920,q=75"

      />
      <Clientsline />


      <CustomWhyChoose
        heading={"Why should you choose MindSees for online marketing"}
        CustomWhyChoose={CustomWhyChooseData}
      />
      <TechnologyGrid technologies={technologies} />

      <FaqAccordion faqs={faqs} />
      <Stories />
      <LastBusinessesSection />


    </div>
  )
}
export default SEO;
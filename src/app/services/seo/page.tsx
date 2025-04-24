"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/seo/image/seoBanner.png"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";

const SEO=()=>{

    const faqs = [
        {
          question: "What is SEO, and why is it important for my business?",
          answer: "SEO (Search Engine Optimization) is the process of improving your website's visibility and ranking in search engine results pages (SERPs). It helps drive organic traffic to your website, increases brand visibility, and improves your online presence. SEO is essential for businesses as it enhances their chances of being found by potential customers searching for products or services related to their industry.",
        },
        {
          question: "How long does it take to see results from SEO efforts?",
          answer: "The timeline for seeing results from SEO efforts can vary depending on various factors, including the competitiveness of your industry, the current state of your website, and the strategies implemented. Generally, significant improvements in rankings and traffic can take several months, but smaller improvements may be noticeable within a few weeks. It's important to understand that SEO is a long-term investment that requires ongoing efforts to maintain and improve results over time.",
        },
        {
          question: "What SEO strategies and techniques do you employ?",
          answer: "We utilize a combination of on-page optimization, off-page optimization, technical SEO, content marketing, and link building strategies to improve your website's search engine visibility. Our approach is tailored to your specific business goals and target audience, and we stay updated with the latest SEO trends and best practices to ensure optimal results.",
        },
        {
          question: "Do you guarantee first-page rankings on Google?",
          answer: "While we strive to improve your website's rankings and visibility on search engines, it's important to note that SEO results can be influenced by various factors beyond our control, such as algorithm changes and competitor activity. We cannot guarantee specific rankings, but we do promise to implement proven strategies to enhance your website's overall performance and visibility.",
        },
      
      ];

    const technologies = [
        { name: "Send Pulse", icon: "https://kavelogics.com/services/seo/tech/send-impulse.svg" },
        { name: "Klaviyo", icon: "https://kavelogics.com/services/seo/tech/klaviyo.svg"},
        { name: "Brevo", icon: "https://kavelogics.com/services/seo/tech/brevo.svg"},
        { name: "Typeform", icon: "https://kavelogics.com/services/seo/tech/typeform.svg" },
        { name: "Intercom", icon: "https://kavelogics.com/services/seo/tech/intercom.svg" },
        { name: "Callpage", icon: "https://kavelogics.com/services/seo/tech/callpage.svg"},
        { name: "Google Analytics", icon: "https://kavelogics.com/services/seo/tech/google-analytics.svg"},
        { name: "Kissmetrics", icon: "https://kavelogics.com/services/seo/tech/kissmetrics.svg"},
        { name: "SEMRush", icon: "https://kavelogics.com/services/seo/tech/sem-rush.svg" },
      ];

       const features = [
    { title: 'Digital ', subtitle: 'Marketing' },
    { title: 'Internet Marketing', subtitle: 'Services' },
    { title: 'Search Engine', subtitle: 'Optimization' },
    { title: 'Social Media', subtitle: 'Management' },
  ];

  const CustomWhyChooseData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Creative Ideas",
      description:
        "When creating your comprehensive digital advertising plan, our team of digital marketing specialists draws on their years of experience and decisive creativity.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Component KPIs",
      description:
        "Our internet marketing team is committed to not only meeting but exceeding all mutually agreed-upon KPIs, delivering results on time and within the allocated budget.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Analytics",
      description:
        "Our internet marketing team meets with you on a regular basis to go over the progress of your plan and uses analytics to measure what matters most.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Communication",
      description:
        "Our team genuinely listens to your demands and develops solutions that work because we recognize that you are the expert on your company.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Client Centric Strategy",
      description:
        "In order to create a plan that works, we take the time to learn everything there is to know about your company, your rivals, your triumphs and failures.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Unique Plans",
      description:
        "For your particular situation, some components of digital marketing can be more appropriate than others. We identify the unique solutions and go from there.",
    },
    
  ];

  const SolutionData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Digital Marketing",
      description:
        "Our passion for digital marketing matches our drive for exceptional sales conversions and ROI, while aiming for top market share in the digital realm.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "SEO",
      description:
        "We generate high ROI by optimizing key website performance factors: page speed, mobile responsiveness, and organic search rankings.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Content Marketing",
      description:
        "We elevate online presence and industry influence with our tailored strategy, content calendar, and SEO-optimized creations.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "PPC & CRO",
      description:
        "We employ PPC and CRO to maximize a company's success by precisely targeting your audience across search and social media platforms.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Email Marketing",
      description:
        "As an online marketing firm, we excel in impactful email campaigns, driving results and expanding subscriber base.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"SEO & Marketing"}
             description={
               "Get the right set of engagement tools to increase website traffic, lead generation, and increase sales. Join us on a transformative journey to turn your vision into a captivating reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Advanced SEO & Marketing Solution" 
      subHeading="Unlock the full potential of your online presence with our tailored SEO & Marketing services. Elevate your brand visibility and drive targeted traffic to maximize your digital success."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our SEO & Marketing Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Our proven process ensures tailored SEO & Marketing strategies crafted to amplify your online presence. From comprehensive analysis to targeted implementation, we pave the path for your digital triumph.
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
             heading={"Multichannel Digital \nMarketing for Startups"}
             description={
               "We use an integrative and comprehensive strategy at our startup marketing agency. We start by creating a strong plan and an intriguing website concept. From there, we continue to test and improve to improve performance for immediate wins while maintaining constant engagement across all relevant channels."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/e1ee1f7d-7871-4d88-1e0b-34e1e287b300/w=1920,q=75"
           
             />
            <Clientsline/>
            
  
            <CustomWhyChoose 
      heading={"Why should you choose MindSees for online marketing"}
      CustomWhyChoose={CustomWhyChooseData} 
    />
    <TechnologyGrid technologies={technologies} />

    <FaqAccordion faqs={faqs} />
            <Stories/>
            <LastBusinessesSection/>


        </div>
    )
}
export default SEO ;
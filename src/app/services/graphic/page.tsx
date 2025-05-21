"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/graphic/image/bgimage.gif"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";



import AdobeCreativeCloud from "@/app/services/graphic/image/AdobeCreativeCloud.svg"
import canva from "@/app/services/graphic/image/canva.svg"
import sketch from "@/app/services/graphic/image/sketch.svg"
import AffinityDesigner from "@/app/services/graphic/image/AffinityDesigner.svg"
import corledraw from "@/app/services/graphic/image/corledraw.svg"
import gimp from "@/app/services/graphic/image/gimp.svg"
import pixl from "@/app/services/graphic/image/pixl.svg"
import asSp from "@/app/services/graphic/image/asSp.svg"
import vectr from "@/app/services/graphic/image/vectr.svg"

import GBusiness from "@/app/services/graphic/image/GBusiness.svg"
import GPostcard  from "@/app/services/graphic/image/GPostcard.svg"
import poster from "@/app/services/graphic/image/poster.svg"
import  GBrochure from "@/app/services/graphic/image/GBrochure.svg"
import Gclothing from "@/app/services/graphic/image/Gclothing.svg"

import Strategic from "@/app/services/graphic/image/Strategic.svg"
import  timely from "@/app/services/graphic/image/timely.svg"
import proven from "@/app/services/graphic/image/proven.svg"
import creativity from "@/app/services/graphic/image/creativity.svg"
import customized from "@/app/services/graphic/image/customized.svg"
import client from "@/app/services/graphic/image/client.svg"
import graphic from "@/app/services/graphic/image/graphic.png"

const Graphic = () => {
  const faqs = [
    {
      question: "What types of graphic design services do you offer?",
      answer: "We provide a comprehensive range of graphic design services, including logo design, branding, marketing materials (such as brochures, flyers, and posters), social media graphics, and more. Our experienced design team is equipped to handle all your design needs, helping to enhance your brand identity and visual presence.",
    },
    {
      question: "How do you approach the design process??",
      answer: "Our design process involves understanding your goals, creating tailored concepts, refining through feedback, and delivering a final product that aligns with your brand vision.",
    },
    {
      question: "Is it possible to request revisions to the initial design concepts?",
      answer: "Absolutely, we value your input and provide revision rounds to ensure the final design meets your vision. Our designers collaborate with you to make adjustments until you're fully satisfied with the outcome.",
    },
    {
      question: "Is it possible for me to give input or feedback throughout the design process?",
      answer: "Definitely! We encourage your involvement and feedback throughout the design process to ensure the final result aligns with your expectations and vision. Your input is important to us, and we consider it at every stage to ensure your satisfaction.",
    },

  ];
  const technologies = [
    { name: "Adobe Creative Cloud", icon: AdobeCreativeCloud },
    { name: "Canva", icon: canva },
    { name: "Sketch", icon: sketch },
    { name: "Affinity Designer", icon: AffinityDesigner },
    { name: "CorelDraw", icon: corledraw },
    { name: "GIMP", icon: gimp },
    { name: "PIXLR", icon: pixl },
    { name: "Adobe Spark", icon: asSp},
    { name: "Vectr", icon: vectr },
  ];
  const features = [
    { title: 'Logo Designing', subtitle: '' },
    { title: 'Posters &', subtitle: 'Advertising' },
    { title: 'Packaging &', subtitle: 'Label' },
    { title: 'Branding', subtitle: '' },
  ];

  const CustomWhyChooseData = [
    {
      icon: creativity ,
      title: "Creativity",
      description:
        "Our team of graphic designers creates powerful visual experiences that engage your audience and strengthen your brand identity.",
    },
    {
      icon: customized,
      title: "Customized Solutions",
      description:
        "We recognize that every business is unique, which is why we provide personalized graphic design solutions that are tailored to your specific needs and brand identity.",
    },
    {
      icon: Strategic,
      title: "Strategic Approach",
      description:
        "We focus on results rather than just aesthetics in our graphic design process, taking a strategic approach where every design element is intentional and aligned with your business goals.",
    },
    {
      icon: timely,
      title: "Timely Delivery",
      description:
        "We prioritize delivering high-quality graphic designs on time by implementing efficient project management processes. Trust us to meet deadlines consistently without compromising on quality.",
    },
    {
      icon: client,
      title: "Client Satisfaction",
      description:
        "Your satisfaction is our top priority. We define success not only by the quality of our designs but by the overall success of the project. We go the extra mile for every client to ensure they are delighted with the outcome.",
    },
    {
      icon: proven,
      title: "Proven Track Record",
      description:
        "Trust MindSees for outstanding graphic design services that surpass expectations, backed by years of industry experience and a proven track record of successful projects.",
    },

  ];
  const SolutionData = [
    {
      icon: GBusiness,
      title: "Business Card Design",
      description:
        "We create professionally designed business cards that showcase your brand identity and leave a lasting impression on potential clients and partners.",
    },
    {
      icon: GPostcard ,
      title: "Postcard, Flyer or Print",
      description:
        "Elevate your marketing with our eye-catching postcards, flyers, and printed materials designed to capture attention, deliver your message clearly, and engage your audience.",
    },
    {
      icon: poster,
      title: "Poster Design",
      description:
        "Promote your events, products, or services with our captivating posters, designed to grab attention and clearly communicate key information.",
    },
    {
      icon: GBrochure,
      title: "Brochure",
      description:
        "Enhance your brand presence with our expertly crafted brochures that engage audiences, tell your brand story, and highlight your key features.",
    },
    {
      icon: Gclothing ,
      title: "Clothing & Apparel",
      description:
        "Enhance your style and brand presence with our custom-designed apparel, crafted to showcase your unique identity and leave a lasting impression wherever you go.",
    },

  ];
  return (
    <div>
      <ServicesCustomBanner
        heading={"Graphic Designing"}
        description={
          "Connect with talented designers who can elevate the professional look and feel of your business. Join us on a transformative journey to bring your vision to life in a compelling way."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={bannerImage}
      />
      <FeatureList features={features} />


      <CustomSolutionCard
        heading="Our Wide Range of Graphic Design Solutions"
        subHeading="Maximize your online potential with our customized SEO and marketing services. Boost your brand visibility and drive targeted traffic to achieve digital success."
        Solution={SolutionData}
      />

      <section className="py-16 text-center bg-white">
        <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our Graphic Design Process</h2>
        <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54] px-2">
          MindSees positions your firm as a key partner in shaping your branding solutions. From start to finish, we ensure that you and your brand remain our top priority.
        </p>

        <div className="relative flex justify-center gap-10 flex-wrap">
          <div className="flex justify-center gap-6 sm:gap-13 relative w-full">

            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Tell us your requirement</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[72%] after:left-[89%] after:rounded-sm after:-translate-x-1/2 after:w-3 after:h-35 after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Finalize your design</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] "
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#023047] flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Continue working together</span>
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
                  <span className="font-bold text-[9px] sm:text-sm text-black">Work with the best designers</span>
                </div>
              </div>
            </div>
            <div
              className="z-10 relative flex flex-col items-center after:content-[''] after:absolute after:top-[-134%] sm:after:top-[-90%] after:left-[80%] after:-translate-x-1/2 after:w-3 after:h-34 after:rounded-sm after:bg-gradient-to-b after:from-[#023047] after:to-[#0575ad]"
            >
              <div className="z-10 w-22 h-22 sm:w-32 sm:h-32 border-10 rounded-full border-[#0575ad]  flex items-center justify-center text-center text-black shadow-md">
                <div className="flex flex-col items-center justify-center">
                  <Info className="mb-1" />
                  <span className="font-bold text-[9px] sm:text-sm text-black">Analyze & Evaluate</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CustomServiceDetail
        heading={"Graphic Design Services by Top Designers"}
        description={
          "Partner with MindSees designers with confidence. Our highly skilled and experienced professionals have worked with numerous companies to bring their visions to life. With a sharp eye for detail and a passion for excellence, they infuse creativity and innovation into every project."
        }
        buttonText="Book Consultation"
        buttonLink="/contact-us"
        image={graphic}

      />
      <Clientsline />


      <CustomWhyChoose
        heading={"Why should you choose MindSees for Graphic Designing"}
        CustomWhyChoose={CustomWhyChooseData}
      />
      <TechnologyGrid technologies={technologies} />

      <FaqAccordion faqs={faqs} />
      <Stories />
      <LastBusinessesSection />


    </div>
  )
}
export default Graphic;
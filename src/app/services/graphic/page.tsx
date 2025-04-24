"use client"
import React from "react"
import { Info } from "lucide-react";
import ServicesCustomBanner from "../components/servicesCustomBanner";
import bannerImage from "@/app/services/graphic/image/graphicBanner.png"
import { FeatureList } from "../components/FeatureList";
import CustomSolutionCard from "../components/customSolutionCard";
import LastBusinessesSection from "@/app/Lastbusinesses/page";
import Stories from "@/app/Stories/page";
import Clientsline from "@/app/clientsline/page";
import CustomServiceDetail from "../components/customServiceDetail";
import CustomWhyChoose from "../components/customWhyChooseSection";
import { TechnologyGrid } from "../components/customTechnologiesSection";
import { FaqAccordion } from "../components/custonFAQ";

const Graphic=()=>{

  
    const faqs = [
        {
          question: "What graphic design services do you offer?",
          answer: "We offer a wide range of graphic design services, including logo design, branding, marketing materials (such as brochures, flyers, and posters), social media graphics, and more. Our team of experienced designers can handle various design needs to help elevate your brand identity and visual presence.",
        },
        {
          question: "What is your design process like?",
          answer: "Our design process typically begins with an initial consultation to understand your design requirements, brand identity, and objectives. We then proceed with concept development, where we present you with design mockups or concepts for feedback and revisions. Once the design is finalized, we proceed with the implementation phase, where we prepare the final deliverables for your approval.",
        },
        {
          question: "Can I request revisions to the initial design concepts?",
          answer: "Yes, we value your feedback and offer revision rounds to ensure the final design aligns perfectly with your vision. Our designers work closely with you to make adjustments until you are completely satisfied with the result.",
        },
        {
          question: "Can I provide input or feedback during the design process?",
          answer: "Absolutely! We encourage client involvement and feedback throughout the design process to ensure that the final deliverables meet your expectations and vision. Your input is valuable to us, and we take it into account at every stage of the project to ensure your satisfaction.",
        },
      
      ];

    const technologies = [
        { name: "Adobe Creative Cloud", icon: "https://kavelogics.com/services/graphic/tech/acc.svg" },
        { name: "Canva", icon: "https://kavelogics.com/services/graphic/tech/canva.svg"},
        { name: "Sketch", icon: "https://kavelogics.com/services/graphic/tech/sketch.svg"},
        { name: "Affinity Designer", icon: "https://kavelogics.com/services/graphic/tech/ad.svg" },
        { name: "CorelDraw", icon: "https://kavelogics.com/services/graphic/tech/cd.svg" },
        { name: "GIMP", icon: "https://kavelogics.com/services/graphic/tech/gimp.svg  "},
        { name: "PIXLR", icon: "https://kavelogics.com/services/graphic/tech/pixlr.svg"},
        { name: "Adobe Spark", icon: "https://kavelogics.com/services/graphic/tech/as.svg"},
        { name: "Vectr", icon: "https://kavelogics.com/services/graphic/tech/vectr.svg" },
      ];

       const features = [
    { title: 'Logo Designing', subtitle: '' },
    { title: 'Posters &', subtitle: 'Advertising' },
    { title: 'Packaging &', subtitle: 'Label' },
    { title: 'Branding', subtitle: '' },
  ];

  const CustomWhyChooseData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Creativity",
      description:
        "Our team of graphic designers doesn't just create designs, they craft visual experiences that resonate with your audience and elevate your brand.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Customized Solutions",
      description:
        "We understand that every business is unique, which is why we offer customized graphic design solutions tailored to your specific needs and brand identity.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Strategic Approach",
      description:
        "We prioritize results over aesthetics in our graphic design process, adopting a strategic approach. Each design element is purposeful and aligned with your business objectives.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Timely Delivery",
      description:
        "We prioritize meeting deadlines with high-quality graphic designs through efficient project management processes. Trust us to deliver on time, every time, without sacrificing quality.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Client Satisfaction",
      description:
        "Your satisfaction is our goal. We measure success not just by design quality, but by project success. We go above and beyond for every client to ensure they're thrilled with the result.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Proven Track Record",
      description:
        "Trust Kavelogics for exceptional graphic design services that exceed expectations, backed by years of industry experience and a proven portfolio of successful projects.",
    },
    
  ];
  const SolutionData = [
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Business Card Design",
      description:
        "We make a lasting impression with professionally designed business cards that reflect your brand identity and leave a memorable impact on potential clients and partners.",
    },
    {
      icon: "https://kavelogics.com/about/centricity.svg",
      title: "Postcard, Flyer or Print",
      description:
        "Enhance your marketing with our captivating postcards, flyers, and printed materials crafted to grab attention, communicate effectively, and engage your audience.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Poster Design",
      description:
        "Elevate your events, products, or services with our captivating posters! Our striking visuals effortlessly grab attention & can convey key information.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Brochure",
      description:
        "Elevate your brand presence with our meticulously designed brochures that captivate audiences, conveying your brand narrative and showcasing standout features.",
    },
    {
      icon: "https://kavelogics.com/about/integrity.svg",
      title: "Clothing & Apparel",
      description:
        "Elevate your style and brand presence with our custom-designed apparel that reflects your unique brand identity, making a lasting impression wherever you go.",
    },
    
  ];
    return(
        <div>
            <ServicesCustomBanner
             heading={"Graphic Designing"}
             description={
               "Connect with creative designers who can enhance the professional appearance and feel of your business. Join us on a transformative journey to turn your vision into a captivating reality."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image={bannerImage}
            />
            <FeatureList features={features}/>
            

            <CustomSolutionCard 
      heading="Our Diverse Graphic Design Solutions" 
      subHeading="Unlock the full potential of your online presence with our tailored SEO & Marketing services. Elevate your brand visibility and drive targeted traffic to maximize your digital success."
      Solution={SolutionData} 
    />

            <section className="py-16 text-center bg-white">
      <h2 className="text-5xl font-bold text-[#013a54] mb-4">Our Graphic Design Process</h2>
      <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-[1.3] text-[#013a54]">
      Kavelogics makes your firm a vital partner in the designing of your branding offerings. From the start to the finish, we make sure that you and your brand are our only focus.
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
             heading={"Graphic Design Service From \nBest Designers"}
             description={
               "Work with Kavelogics’ designers with confidence. All of our designers are highly skilled and experienced professionals that have collaborated with numerous companies to realize their visions. With a keen eye for detail and a commitment to excellence, they bring creativity and innovation to every project."
             }
             buttonText="Book Consultation"
             buttonLink="/contact-us"
             image="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/bd8f9a8f-98d5-4c6a-3ee5-1e88e3189800/w=1920,q=75"
           
             />
            <Clientsline/>
            
  
            <CustomWhyChoose 
      heading={"Why should you choose MindSees for Graphic Designing"}
      CustomWhyChoose={CustomWhyChooseData} 
    />
    <TechnologyGrid technologies={technologies} />

    <FaqAccordion faqs={faqs} />
            <Stories/>
            <LastBusinessesSection/>


        </div>
    )
}
export default Graphic ;
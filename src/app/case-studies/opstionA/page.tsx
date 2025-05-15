"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import caseStudy from "@/app/case-studies/opstionA/image/CaseStudyImage.svg"
import caseStudy1 from "@/app/case-studies/opstionA/image/case-study.gif"
import caseStudy2 from "@/app/case-studies/opstionA/image/case-study2.gif"
import caseStudy3 from "@/app/case-studies/opstionA/image/case-study3.gif"
import { ArrowRight } from 'lucide-react';
import LastBusinessesSection from "@/app/Lastbusinesses/page";

const CaseStudy = () => {
  const CaseStudyData = [
    {
      image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/8b2819ae-4071-46ae-fb62-ec094913f000/w=640,q=75",
      title: "Streamlining Software Solutions: Option A",
      description: "Option A empowers founders, employees, and entrepreneurs to boost monthly revenue. It helps businesses start, grow, and scale by focusing on revenue growth and operations.",
    },
    {
      image: "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/849b4d4d-3c52-42b1-ae33-b12149e71700/w=640,q=75",
      title: "Streamlining Global Payments: Introducing PayMe",
      description: "PayMe is a user-friendly mobile app designed for global payments, facilitating seamless bill submission via mobile devices worldwide.",
    },
  ]


  const features = [
    {
      id: "01",
      title: "Figma to Webflow Workflow",
      description:
        "Designed the entire website in Figma, creating a seamless UI/UX flow, and translated the design into a fully functional Webflow site.",
      position: "top-0 left-0",
    },
    {
      id: "02",
      title: "Responsive Design Implementation",
      description:
        "Ensured the website was fully responsive across various devices, optimizing layouts and elements for mobile, tablet, and desktop views.",
      position: "top-0 right-0",
    },
    {
      id: "03",
      title: "Custom Animations & Interactions",
      description:
        "Developed custom animations and interactions in Webflow to enhance user experience, including smooth transitions, hover effects, and scroll-based animations.",
      position: "bottom-0 left-0",
    },
    {
      id: "04",
      title: "Modular and Scalable Development",
      description:
        "Built a modular Webflow structure to allow easy content updates, scalable service sections, and plan comparison modules without compromising the design integrity.",
      position: "bottom-0 right-0",
    },
  ];
  return (
    <div>
      <div className="bg-[#0f3b50] pt-26 pb-40">
        <div className='max-w-7xl mx-auto'>
          <div className="spacing-secton flex flex-col md:flex-row items-center justify-between gap-12 px-4">
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='flex items-center'>
                <div className="text-white text-center md:text-left">
                  <Image
                    src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/46c0a9de-fca2-40a2-3a55-1b0299daa000/w=1080,q=75"
                    alt="casestudy Section"
                    width={180}
                    height={150}
                    className="object-contain h-[80px] "
                  />
                  <p className="text-[18px] mt-6 " style={{ lineHeight: "28px" }}>
                    We transform your business ideas into tangible software solutions. We are top tech experts who help transform business concepts into real-world software solutions.
                  </p>

                </div>
              </div>
              <div className="flex justify-end">
                <Image
                  src={caseStudy}
                  alt="About Section"
                  width={500}
                  height={300}
                  className="w-full object-cover "
                />
              </div>

            </div>


          </div>
        </div>
      </div>
      <div className="spacing-secton -mt-20 flex flex-col md:flex-row rounded-lg overflow-hidden w-full">
        <div className="flex bg-[#d4f0ff] md:rounded-l-xl w-full pr-5 pt-7 pb-5 pt-5 gap-8">

          <div className="flex justify-around w-[40%]">
            <div className="sm:pl-8">

              <h2 className="text-xl font-bold mb-2">Industry</h2>
              <p className="text-[14px] text-gray-800">Business</p>
            </div>
            <div className="h-26 w-[1px] bg-[#bac8d0] "></div>
          </div>


          <div className="-pl-5">
            <h2 className="text-xl font-bold mb-2">Services</h2>
            <ul className="text-base text-gray-800">
              <li className="text-[14px]">Website Design</li>
              <li className="text-[14px]">UI/UX Design</li>
              <li className="text-[14px]">Website Development</li>
              <li className="text-[14px]">QA</li>
              <li className="text-[14px]">Graphic Designing</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#00d084] md:rounded-r-xl text-white flex flex-col justify-center items-start md:items-center px-6 py-8 md:w-1/3">
          <h2 className="text-xl font-bold mb-2">Have an Idea?</h2>
          <Link href="/contact-us">
          <button className="flex items-center cursor-pointer gap-2 font-medium hover:underline">
            Talk to our experts <ArrowRight className="w-5 h-5" />
          </button>
          </Link>

        </div>

      </div>

      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 spacing-secton pt-30'>
          <div className="lg:col-span-2">
            <div className="text-4xl text-black font-bold">Project Scope &<br /> Requirements</div>
            <div className="text-[20px] max-w-2xl mt-5">Opstion A empowers founders, employees, and entrepreneurs to boost monthly revenue. Leveraging our expertise with Fortune 500 processes and hypergrowth startups, we focus on revenue generation and efficient money management. At Kavelogics, we partner closely with Opstion A to tailor strategies, streamline operations, and offer expert guidance for sustainable growth and scalability.</div>
            <div className="mt-5 text-[19px]">Requirements of the project were:</div>
            <div className="flex pt-4 pb-2">
              <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Development of a user-friendly website</div>
            </div>
            <div className="flex pt-1 pb-2">
              <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Ensure robust security and data protection measures.</div>
            </div>
            <div className="flex pt-1 pb-2">
              <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Optimize scalability and performance for future growth.</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src={caseStudy1} alt="" height={35} width={35} className="pr-2 h-[300] w-full object-cover" />
          </div>
        </div>

      </div>
      <div>
        <div className='flex flex-col-reverse sm:flex-row spacing-secton pt-30 gap-8'>
          <div className="flex justify-center items-center sm:w-[70%] md:w-[80%] lg:w-[45%]" >
            <Image src={caseStudy2} alt="" height={35} width={35} className="pr-2 h-full w-full object-cover" />
          </div>
          <div className="">
            <div className="text-4xl text-black font-bold">Design & Implementation</div>
            <div className="text-[20px] max-w-2xl mt-5">Opstion A empowers founders, employees, and entrepreneurs to boost monthly revenue. Leveraging our expertise with Fortune 500 processes and hypergrowth startups, we focus on revenue generation and efficient money management. At Kavelogics, we partner closely with Opstion A to tailor strategies, streamline operations, and offer expert guidance for sustainable growth and scalability.</div>
            <div className="mt-5 text-[19px]">Requirements of the project were:</div>
            <div className="flex pt-4 pb-2">
              <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Development of a user-friendly website</div>
            </div>
            <div className="flex pt-1 pb-2">
              <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Ensure robust security and data protection measures.</div>
            </div>
            <div className="flex pt-1 pb-2">
              <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Optimize scalability and performance for future growth.</div>
            </div>
          </div>

        </div>

      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 spacing-secton pt-30 pb-24'>
          <div className="lg:col-span-2">
            <div className="text-4xl text-black font-bold">Challenges Faced</div>
            <div className="text-[20px] max-w-2xl mt-5">During the development and implementation of Opstion As website, Kavelogics faced numerous challenges that demanded innovative solutions and collaborative efforts. Overcoming these obstacles was essential to delivering a final product that met Opstion As high standards, ensuring a seamless, secure, and user-friendly experience.</div>
            <div className="mt-5 text-[19px]">During this project, we faced following challenges:</div>
            <div className="flex pt-4 pb-2 max-w-2xl">
              <Image src="https://kavelogics.com/case-studies/list-challenges.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Integrating complex security measures while maintaining seamless user experience.</div>
            </div>
            <div className="flex pt-1 pb-2 max-w-2xl">
              <Image src="https://kavelogics.com/case-studies/list-challenges.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Optimizing scalability to handle future growth effectively.</div>
            </div>
            <div className="flex pt-1 pb-2 max-w-2xl">
              <Image src="https://kavelogics.com/case-studies/list-challenges.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Refining UX/UI design to meet diverse user needs and preferences.</div>
            </div>
            <div className="flex pt-1 pb-2 max-w-2xl">
              <Image src="https://kavelogics.com/case-studies/list-challenges.svg" alt="" height={35} width={35} className="pr-2" />
              <div className="text-[18px]">Collaborative problem-solving and iterative testing to overcome challenges.</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src={caseStudy3} alt="" height={35} width={35} className="pr-2 h-[300] w-full object-cover" />
          </div>
        </div>

      </div>
      <div className="relative max-w-5xl mx-auto md:h-[800px] flex flex-col-reverse md:flex-row items-center justify-center px-4">
        {features.map((feature, index) => {
          const positionClass =
            index === 0
              ? "md:top-16 left-0"
              : index === 1
                ? "md:top-16 md:right-4"
                : index === 2
                  ? "md:bottom-19 left-0"
                  : "md:bottom-19 right-0";
          const positionId =
            index === 0
              ? "md:md:-top-17 left-0"
              : index === 1
                ? "md:-top-17 right-0"
                : index === 2
                  ? "md:-top-17  left-0"
                  : "md:-top-17  right-0";

          return (
            <div
              key={feature.id}
              className={`relative md:absolute ${positionClass} max-w-xs bg-purple-100 p-6 md:h-[200px] shadow-lg m-4`}
            >
              <div className={`md:absolute ${positionId} text-[60px] font-bold text-purple-200 z-0`}>
                {feature.id}
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            </div>
          );
        })}

        {/* Central Image */}
        <div className="md:w-[500px]  object-cover overflow-hidden">
          <Image
            src={caseStudy} 
            alt="Mockup"
            className=" object-cover"
          />
        </div>
      </div>
      <div className="relative bg-[#d6f1ff] mb-20 mx-auto my-6 rounded-[20px] md:rounded-r-full md:rounded-l-full py-10 px-3 w-[320px] md:self-center md:w-[620px] lg:w-[650px]  lg:px-12 lg:py-16">
        <Image src="https://kavelogics.com/case-studies/quotation.svg" alt="" height={85} width={85} className="absolute -top-2 left-1 w-[45px] h-[45px] lg:w-[85px] lg:h-[85px] lg:-top-8" />
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <p className="text-center xl:text-xl leading-tight">We are thrilled with Kavelogics results. Their expertise in website development has enhanced our operational efficiency and user experience. Highly recommend.</p>
          <p className="text-kavelogics-primary xl:text-xl font-bold text-center">Jonathan Roberts, Co-Founder</p>
        </div>
        <Image src="https://kavelogics.com/case-studies/quotation.svg" alt="" height={85} width={85} className="absolute -bottom-4 right-1 scale-x-[-1] w-[45px] h-[45px] lg:w-[85px] lg:h-[85px]" />
        <Image src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/dfff5a3f-e899-438f-a825-4ae7f519c000/w=96,q=75" alt="" height={65} width={65} className="absolute w-[35px] h-[35px] -bottom-[22px] left-[50%] transform -translate-x-1/2 border border-custom-blue rounded-full lg:w-[65px] lg:h-[65px] lg:-bottom-[30px]" />
      </div>
      <div className="pherosection-main-container spacing-secton">
        <div className="pherosection-second-container ">
          <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-900 mb-6 mt-26">Discover some of our recent projects</h1>
          <p className="text-[18px] text-center mx-auto text-gray-900 mb-10 max-w-3xl">
            MindSees empowers a diverse range of global clients to adopt advanced technology and elevate their customer experiences significantly.
          </p>

          <div className="inner-mian-container-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {CaseStudyData?.map((item, i) => (
              <div className="first-container rounded-lg overflow-hidden group " key={i}>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={item?.image}
                    alt="Case Study A"
                    width={640}
                    height={400}
                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pt-6 bg-white rounded-b-2xl px-1 pb-2">
                  <h2 className="text-md font-semibold text-gray-900 mb-2">
                    {item?.title}
                  </h2>
                  <p className="text-gray-900 text-sm">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      <LastBusinessesSection />
    </div>


  )
}
export default CaseStudy;
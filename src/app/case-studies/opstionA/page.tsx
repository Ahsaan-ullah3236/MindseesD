"use client"
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import caseStudy from "@/app/case-studies/opstionA/image/CaseStudyImage.svg"
import { ArrowRight } from 'lucide-react';
import imageAnimation from "@/app/case-studies/opstionA/image/imageAnimation.png" 

const CaseStudy=()=>{
    return(
        <div>
             <div className="bg-[#0f3b50] pt-26 pb-40">
                <div className='max-w-7xl mx-auto'>
                <div className="spacing-secton flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex items-center'>
                        <div className="text-white text-center md:text-left">
                        <Image
                            src={caseStudy}
                            alt="About Section"
                            width={150}
                            height={100}
                            className="object-cover h-[80px] "
                        />
                        <p className="text-[18px] mt-10" style={{lineHeight:"28px"}}>
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
      {/* Left Side */}
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

      {/* Right Side */}
      <div className="bg-[#00d084] md:rounded-r-xl text-white flex flex-col justify-center items-start md:items-center px-6 py-8 md:w-1/3">
        <h2 className="text-xl font-bold mb-2">Have an Idea?</h2>
        <button className="flex items-center gap-2 font-medium hover:underline">
          Talk to our experts <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      
    </div> 
      
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 spacing-secton pt-30'>
          <div className="col-span-2">
            <div className="text-4xl text-black font-bold">Project Scope &<br/> Requirements</div>
            <div className="text-[20px] max-w-2xl mt-5">Opstion A empowers founders, employees, and entrepreneurs to boost monthly revenue. Leveraging our expertise with Fortune 500 processes and hypergrowth startups, we focus on revenue generation and efficient money management. At Kavelogics, we partner closely with Opstion A to tailor strategies, streamline operations, and offer expert guidance for sustainable growth and scalability.</div>
          <div className="mt-5 text-[19px]">Requirements of the project were:</div>
          <div className="flex pt-4 pb-2">
            <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Development of a user-friendly website</div>
          </div>
          <div className="flex pt-1 pb-2">
            <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Ensure robust security and data protection measures.</div>
          </div>
          <div className="flex pt-1 pb-2">
            <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Optimize scalability and performance for future growth.</div>
          </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src={imageAnimation}  alt="" height={35} width={35} className="pr-2 h-[300] w-[300] object-cover"/>
          </div>
        </div>
        
      </div> 
    <div>
        <div className='flex flex-col-reverse sm:flex-row spacing-secton pt-30'>
        <div className="flex justify-center items-center sm:w-[45%]" >
            <Image src={imageAnimation}  alt="" height={35} width={35} className="pr-2 h-[300] w-[300] object-cover"/>
          </div>
          <div className="">
            <div className="text-4xl text-black font-bold">Design & Implementation</div>
            <div className="text-[20px] max-w-2xl mt-5">Opstion A empowers founders, employees, and entrepreneurs to boost monthly revenue. Leveraging our expertise with Fortune 500 processes and hypergrowth startups, we focus on revenue generation and efficient money management. At Kavelogics, we partner closely with Opstion A to tailor strategies, streamline operations, and offer expert guidance for sustainable growth and scalability.</div>
          <div className="mt-5 text-[19px]">Requirements of the project were:</div>
          <div className="flex pt-4 pb-2">
            <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Development of a user-friendly website</div>
          </div>
          <div className="flex pt-1 pb-2">
            <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Ensure robust security and data protection measures.</div>
          </div>
          <div className="flex pt-1 pb-2">
            <Image src="https://kavelogics.com/case-studies/list-icon.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Optimize scalability and performance for future growth.</div>
          </div>
          </div>
         
        </div>
        
      </div> 
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 spacing-secton pt-30 pb-24'>
          <div className="col-span-2">
            <div className="text-4xl text-black font-bold">Challenges Faced</div>
            <div className="text-[20px] max-w-2xl mt-5">During the development and implementation of Opstion A's website, Kavelogics faced numerous challenges that demanded innovative solutions and collaborative efforts. Overcoming these obstacles was essential to delivering a final product that met Opstion A's high standards, ensuring a seamless, secure, and user-friendly experience.</div>
          <div className="mt-5 text-[19px]">During this project, we faced following challenges:</div>
          <div className="flex pt-4 pb-2 max-w-2xl">
            <Image src="https://kavelogics.com/case-studies/list-challenges.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Integrating complex security measures while maintaining seamless user experience.</div>
          </div>
          <div className="flex pt-1 pb-2 max-w-2xl">
            <Image src="https://kavelogics.com/case-studies/list-challenges.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Optimizing scalability to handle future growth effectively.</div>
          </div>
          <div className="flex pt-1 pb-2 max-w-2xl">
            <Image src="https://kavelogics.com/case-studies/list-challenges.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Refining UX/UI design to meet diverse user needs and preferences.</div>
          </div>
          <div className="flex pt-1 pb-2 max-w-2xl">
            <Image src="https://kavelogics.com/case-studies/list-challenges.svg" alt="" height={35} width={35} className="pr-2"/>
            <div className="text-[18px]">Collaborative problem-solving and iterative testing to overcome challenges.</div>
          </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src={imageAnimation}  alt="" height={35} width={35} className="pr-2 h-[300] w-[300] object-cover"/>
          </div>
        </div>
        
      </div> 
        </div>
        

    )
}
export default CaseStudy;
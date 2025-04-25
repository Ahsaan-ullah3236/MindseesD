"use client"
import React from "react";
import Image from "next/image";
import { Linkedin,Facebook,Instagram,X ,Youtube  } from 'lucide-react';
import LahoreOffice from "@/app/globalPresance/image/LahoreOffice.svg"
import USAOffice from "@/app/globalPresance/image/USAOffice.svg"

const GlobalPressance=()=>{
    return(
        <div className="spacing-secton max-w-7xl mx-auto p-6 mt-16 pb-20">
        <div className="pt-8 pb-16">
                <h1 className="text-5xl font-bold text-gray-800 text-center mb-3">Our Global Presence</h1>
                <p className="text-black-200 text-[17px] text-center">
                We provide customized software solutions to clients around the world, designed to meet their unique needs.
                </p>
              </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-8 ">
             
    
              <div className="pt-6">
                <h2 className="font-semibold text-black-700 mb-2" style={{fontSize:"15px"}}>We Are Just An Email Away!</h2>
                <a href="mailto:info@kavelogies.com" className=" text-blue-400 hover:text-blue-500" style={{fontSize:"11px"}}>
                  info@mindsees.com
                </a>
                <h2 className="font-semibold text-black-700 mb-4 mt-5" style={{fontSize:"15px"}}>Stay Connected!</h2>
                <div className="flex space-x-5 -mt-1">
                  <span className="text-black-500 h-4 w-4"><Linkedin/></span>
                  <span className="text-black-500 h-4 w-4"><Youtube /></span>
                  <span className="text-black-500 h-4 w-4"><Facebook/></span>
                  <span className="text-black-500 h-4 w-4"><Instagram /></span>
                  <span className="text-black-500 "><X className="w-6 " /></span>
                </div>
              </div>
    
              
            </div>
    
           
            <div className="lg:pl-8 -pt-6 lg:pt-0">
                <Image src={LahoreOffice} alt="lahore-office" height={80} width={150} />
              <h2 className="font-semibold text-black-700 mt-2"  style={{fontSize:"15px"}}>Lahore Office</h2>
              <address className="text-black-600  font-semibold not-italic"  style={{fontSize:"15px"}}>
                MindSees PVT LTD
              </address>
                <a href="https://www.google.com/maps/place/MindSees/@31.4642669,74.2988289,17z/data=!3m1!4b1!4m6!3m5!1s0x8562bef8b6b348af:0x2228a06e52354095!8m2!3d31.4642624!4d74.3014038!16s%2Fg%2F11mcwzy2ny?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target="_blank"
            rel="noopener noreferrer">
              <div  className="text-black-600 mt-1" style={{fontSize:"11px"}}>
    
              📍 30-B, Malik Tufail Rd, Block B1 Block A 1 Phase 1 Johar Town, Lahore, 54770, Pakistan
              </div>
    
    
                </a>
              
            </div>
    
            <div className="lg:pl-8 pt-6 lg:pt-0">
                <Image src={USAOffice} alt="USA-office" height={80} width={150} />
              <h2 className="font-semibold text-black-700 mt-2" style={{fontSize:"15px"}}>USA Office</h2>
              <address className="text-black-600 font-semibold not-italic" style={{fontSize:"15px"}}>
                MindSees LLC
              </address>
              <a href="https://www.google.com/maps/place/MindSees/@31.4642669,74.2988289,17z/data=!3m1!4b1!4m6!3m5!1s0x8562bef8b6b348af:0x2228a06e52354095!8m2!3d31.4642624!4d74.3014038!16s%2Fg%2F11mcwzy2ny?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target="_blank"
            rel="noopener noreferrer">
              <div  className="text-black-600 mt-1" style={{fontSize:"11px"}}>
    
              📍 30-B, Malik Tufail Rd, Block B1 Block A 1 Phase 1 Johar Town, Lahore, 54770, Pakistan
              </div>
    
    
                </a>
            </div>
          </div>
        </div>
    )
}
export default GlobalPressance;
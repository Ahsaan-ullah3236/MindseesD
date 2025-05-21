"use client";
import Image from "next/image";
import React, { useState } from "react";
import reactIcon from "@/app/Innovation/image/frontend/react.svg"
import VueIcon from "@/app/Innovation/image/frontend/Vue.svg"
import JavaScriptIcon from "@/app/Innovation/image/frontend/JavaScript.svg"
import TypeScriptIcon from "@/app/Innovation/image/frontend/TypeScript.svg"
import AndroidIcon from "@/app/Innovation/image/frontend/Android.svg"
import ReactnativeIcon from "@/app/Innovation/image/frontend/React Native.svg"
import FlutterIcon from "@/app/Innovation/image/frontend/Flutter.svg"
import IOsIcon from "@/app/Innovation/image/frontend/iOS.svg"
import ElectronIcon from "@/app/Innovation/image/frontend/Electron.svg"
import AngularIcon from "@/app/Innovation/image/frontend/Angular.svg"
import WordpressIcon from "@/app/Innovation/image/frontend/Wordpress.svg"
import NextIcon from "@/app/Innovation/image/frontend/Next.js.svg"
import DjangoIcon from "@/app/Innovation/image/frontend/Django.svg"
import SvelteIcon from "@/app/Innovation/image/frontend/Svelte.svg"
import FlaskIcon from "@/app/Innovation/image/frontend/Flask.svg"
import LaravelIcon from "@/app/Innovation/image/backend/Laravel.svg"
import NodeIcon from "@/app/Innovation/image/backend/Node Js.svg"
import ExpressIcon from "@/app/Innovation/image/backend/Xpress.js.svg"
import PythonIcon from "@/app/Innovation/image/backend/Python.svg"
import FastapiIcon from "@/app/Innovation/image/backend/Fastapi.svg"
import JavaIcon from "@/app/Innovation/image/backend/Java.svg"
import SpringbootIcon from "@/app/Innovation/image/backend/Spring Boot.svg"
import RailsIcon from "@/app/Innovation/image/backend/Rails.svg"
import PhpIcon from "@/app/Innovation/image/backend/PHP.svg"
import GoLangIcon from "@/app/Innovation/image/backend/Go Lang.svg"
import FireBAseIcon from "@/app/Innovation/image/backend/Firebase.svg"
import SailsIcon from "@/app/Innovation/image/backend/Sails.js.svg"
import SymfonyIcon from "@/app/Innovation/image/backend/Symfony.svg"
import GrailsIcon from "@/app/Innovation/image/backend/Grails.svg"
import HapiIcon from "@/app/Innovation/image/backend/Hapi.js.svg"
import BitbucketIcon from "@/app/Innovation/image/devops/Bitbucket.svg"
import AWSIcon from "@/app/Innovation/image/devops/AWS.svg"
import JenkinsIcon from "@/app/Innovation/image/devops/Jenkins.svg"
import PuppetIcon from "@/app/Innovation/image/devops/Puppet.svg"
import DockerIcon from "@/app/Innovation/image/devops/Docker.svg"
import GithubIcon from "@/app/Innovation/image/devops/GitHub.svg"
import KubernetesIcon from "@/app/Innovation/image/devops/Kubernetes.svg"
import GitLabIcon from "@/app/Innovation/image/devops/GitLab.svg"
import BambooIcon from "@/app/Innovation/image/devops/Bamboo.svg"
import NewRelicIcon from "@/app/Innovation/image/devops/New Relic.svg"
import ELKStackIcon from "@/app/Innovation/image/devops/ELK Stack.svg"
import GoogleIcon from "@/app/Innovation/image/devops/Google Cloud.svg"
import TravisIcon from "@/app/Innovation/image/devops/TravisCI.svg"
import circleIcon from "@/app/Innovation/image/devops/CircleCI.svg"
import chefIcon from "@/app/Innovation/image/devops/chef.svg"

const technologies = {
  Frontend: [
    { name: "React", icon: reactIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Android", icon: AndroidIcon },
    { name: "React-native", icon: ReactnativeIcon },
    { name: "Flutter", icon: FlutterIcon },
    { name: "IOs", icon: IOsIcon },
    { name: "Electron", icon: ElectronIcon },
    { name: "Angular.js", icon: AngularIcon },
    { name: "Wordpress.js", icon: WordpressIcon },
    { name: "Next", icon: NextIcon },
    { name: "Vue", icon: VueIcon },
    { name: "Django", icon: DjangoIcon },
    { name: "Svelte", icon: SvelteIcon },
    { name: "Flask", icon: FlaskIcon },
  ],
  Backend: [
    { name: "Laravel", icon: LaravelIcon },
    { name: "Node", icon: NodeIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Fastapi", icon: FastapiIcon },
    { name: "Java", icon: JavaIcon },
    { name: "Springboot", icon: SpringbootIcon },
    { name: "Rails", icon: RailsIcon },
    { name: "Php", icon: PhpIcon },
    { name: "Go Lang", icon: GoLangIcon },
    { name: "FireBAse", icon: FireBAseIcon },
    { name: "Sails Js", icon: SailsIcon },
    { name: "Symfony", icon: SymfonyIcon },
    { name: "Grails", icon: GrailsIcon },
    { name: "Hapi.js", icon: HapiIcon },
  ],
  DevOps: [
    { name: "Bitbucket", icon: BitbucketIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "Jenkins", icon: JenkinsIcon },
    { name: "Puppet", icon: PuppetIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Github", icon: GithubIcon },
    { name: "Kubernetes", icon: KubernetesIcon },
    { name: "GitLab", icon: GitLabIcon },
    { name: "Bamboo", icon: BambooIcon },
    { name: "NewRelic", icon: NewRelicIcon },
    { name: "ELK Stack", icon: ELKStackIcon },
    { name: "Google ", icon: GoogleIcon },
    { name: "Travis", icon: TravisIcon },
    { name: "CircleCI", icon: circleIcon },
    { name: "Chef ", icon: chefIcon },
  ],
};

// Automatically infer valid tab names
const buttonTabs = Object.keys(technologies) as (keyof typeof technologies)[];

export default function Innovation() {
  const [activeTab, setActiveTab] = useState<keyof typeof technologies>("Frontend");

  const selectedTechs = technologies[activeTab];
  const rows = [];

  for (let i = 0; i < selectedTechs.length; i += 5) {
    rows.push(selectedTechs.slice(i, i + 5));
  }

  return (
    <section className="min-h-screen flex justify-center items-center bg-white px-4 sm:px-6 py-6 md:py-12">
      <div className="w-full ">
        {/* Heading */}
        <div className='text-center text-3xl sm:text-4xl font-semibold sm:text-bold mt-10 md:mt-20'>
          Technologies We Use for Innovation
        </div>
        <p className='text-center mt-7 mb-22 text-xl '>
          Here are the latest tools we assess to craft the most effective IT solutions for you!

        </p>

        {/* Tabs and Rows */}
        <div className="bg-[#d6f1ff] rounded-lg max-w-4xl mx-auto pt-12 pb-16 px-4 lg:px-20 mb-20">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#c0edf2] p-1 rounded-full border-2 border-[#00d280] inline-flex w-full justify-around">
              {buttonTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 lg:px-21 py-2 cursor-pointer rounded-full text-sm md:text-lg font-medium transition-all duration-300 ${activeTab === tab
                      ? "bg-[#00d280] text-white"
                      : "text-black"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Rows */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 w-full"
              >
                {row.map((tech, index) => (
                  <div
                    key={`${rowIndex}-${index}`}
                    className="flex flex-col  mt-4 items-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 max-w-[120px] text-center"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mb-3 h-10 w-10 sm:mb-4 object-contain"
                    />
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

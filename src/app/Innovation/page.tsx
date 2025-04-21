"use client";
import Image from "next/image";
import React, { useState } from "react";

const technologies = {
  Frontend: [
    { name: "React", icon: "https://kavelogics.com/landing/technologies/react.svg" },
    { name: "JavaScript", icon: "https://kavelogics.com/landing/technologies/js.svg" },
    { name: "TypeScript", icon: "https://kavelogics.com/landing/technologies/ts.svg" },
    { name: "Android", icon: "https://kavelogics.com/landing/technologies/android.svg" },
    { name: "React-native", icon: "https://kavelogics.com/landing/technologies/react-native.svg" },
    { name: "Flutter", icon: "https://kavelogics.com/landing/technologies/flutter.svg" },
    { name: "IOs", icon: "https://kavelogics.com/landing/technologies/ios.svg" },
    { name: "Electron", icon: "https://kavelogics.com/landing/technologies/electron.svg" },
    { name: "Angular.js", icon: "https://kavelogics.com/landing/technologies/angular.svg" },
    { name: "Wordpress.js", icon: "https://kavelogics.com/landing/technologies/wordpress.svg" },
    { name: "Next", icon: "https://kavelogics.com/landing/technologies/next.svg" },
    { name: "Django", icon: "https://kavelogics.com/landing/technologies/django.svg" },
    { name: "Svelte", icon: "https://kavelogics.com/landing/technologies/svelte.svg" },
    { name: "Flask", icon: "https://kavelogics.com/landing/technologies/flask.svg" },
    { name: "Next", icon: "https://kavelogics.com/landing/technologies/next.svg" },
  ],
  Backend: [
    { name: "Laravel", icon: "https://kavelogics.com/landing/technologies/laravel.svg" },
    { name: "Node", icon: "https://kavelogics.com/landing/technologies/node.svg" },
    { name: "Express", icon: "https://kavelogics.com/landing/technologies/express.svg" },
    { name: "Python", icon: "https://kavelogics.com/landing/technologies/python.svg" },
    { name: "Fastapi", icon: "https://kavelogics.com/landing/technologies/fastapi.svg" },
    { name: "Java", icon: "https://kavelogics.com/landing/technologies/java.svg" },
    { name: "Springboot", icon: "https://kavelogics.com/landing/technologies/spring.svg" },
    { name: "Rails", icon: "https://kavelogics.com/landing/technologies/rails.svg" },
    { name: "Php", icon: "https://kavelogics.com/landing/technologies/php.svg" },
    { name: "Go Lang", icon: "https://kavelogics.com/landing/technologies/go.svg" },
    { name: "FireBAse", icon: "https://kavelogics.com/landing/technologies/firebase.svg" },
    { name: "Sails Js", icon: "https://kavelogics.com/landing/technologies/sails.svg" },
    { name: "Symfony", icon: "https://kavelogics.com/landing/technologies/symfony.svg" },
    { name: "Grails", icon: "https://kavelogics.com/landing/technologies/grails.svg" },
    { name: "Hapi.js", icon: "https://kavelogics.com/landing/technologies/hapi.svg" },
  ],
  DevOps: [
    { name: "Bitbucket", icon: "https://kavelogics.com/landing/technologies/bitbucket.svg" },
    { name: "AWS", icon: "https://kavelogics.com/landing/technologies/aws.svg" },
    { name: "Jenkins", icon: "https://kavelogics.com/landing/technologies/jenkins.svg" },
    { name: "Puppet", icon: "https://kavelogics.com/landing/technologies/puppet.svg" },
    { name: "Docker", icon: "https://kavelogics.com/landing/technologies/docker.svg" },
    { name: "Github", icon: "https://kavelogics.com/landing/technologies/github.svg" },
    { name: "Kubernetes", icon: "https://kavelogics.com/landing/technologies/kubernetes.svg" },
    { name: "Chef", icon: "https://kavelogics.com/landing/technologies/chef.svg" },
    { name: "GitLab", icon: "https://kavelogics.com/landing/technologies/gitlab.svg" },
    { name: "Bamboo", icon: "https://kavelogics.com/landing/technologies/bamboo.svg" },
    { name: "NewRelic", icon: "https://kavelogics.com/landing/technologies/newrelic.svg" },
    { name: "Grafana", icon: "https://kavelogics.com/landing/technologies/elastic.svg" },
    { name: "ELK Stack", icon: "https://kavelogics.com/landing/technologies/circle.svg" },
    { name: "Google ", icon: "https://kavelogics.com/landing/technologies/google-cloud.svg" },
    { name: "Travis", icon: "https://kavelogics.com/landing/technologies/travis.svg" },
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
      <div className="w-full  max-w-7xl">
        {/* Heading */}
        <div className='text-center text-4xl font-bold mt-10 md:mt-20'>
            Technologies We Use for Innovation
            </div>
            <p className='text-center mt-7 mb-22 text-xl '>
            The following are the most recent tools we evaluate while creating the best IT solutions for you!

            </p>

        {/* Tabs and Rows */}
        <div className="bg-[#d6f1ff] rounded-lg max-w-4xl mx-auto p-6 px-4 lg:px-20 mb-20">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#c0edf2] p-1 rounded-full border-2 border-[#00d280] inline-flex w-full justify-around">
              {buttonTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 lg:px-21 py-2 rounded-full text-sm md:text-lg font-medium transition-all duration-300 ${
                    activeTab === tab
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
                    className="flex flex-col items-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 max-w-[120px] text-center"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="mb-3 sm:mb-4 object-contain"
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

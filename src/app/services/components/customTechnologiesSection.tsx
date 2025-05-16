// components/TechnologyGrid.tsx
"use client"
import Image from "next/image";
import Link from "next/link";
import bgoverlay from "@/app/services/ai/image/Background.svg"


interface Technology {
  name: string;
  icon: string;
}

interface TechnologyGridProps {
  title?: string;
  technologies: Technology[];
  bgColor?: string;
  textColor?: string;
}

export const TechnologyGrid: React.FC<TechnologyGridProps> = ({
  title = "Technologies We Work With",
  technologies,
  bgColor = "bg-black",
  textColor = "text-white",
}) => {
  return (
    <div>

    
    <div className={`${bgColor} ${textColor} pt-16 pb-85`}>
      <div className="max-w-4xl mx-auto px-4 pt-4 text-center">
        <h2 className="text-4xl font-bold mb-18">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col mb-10 items-center justify-center space-y-3"
            >
              <div className="w-16 h-16 relative flex justify-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  height={50}
                  width={50}
                  className="object-contain"
                />
              </div>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="relative">
    <Image
          src={bgoverlay}
          alt="Blog illustration"
          
          


          className="object-cover -mt-28 w-full h-[360] rounded-lg md:max-w-5xl 2xl:max-w-7xl mx-auto"
        />
<div className="flex justify-center items-center itemButton ">
<Link href="/contact-us">
<button className="bg-[#00d280] cursor-pointer text-white font-medium text-sm md:text-lg py-4 px-4 rounded-md transition-colors duration-300">
  Chat with Experts
</button>
</Link>
</div>
</div>
    </div>
  );
};

// components/BenefitsSection.tsx
"use client"
import Image from "next/image";

type CustomWhyChoose = {
  title: string;
  description: string;
  icon: string;
};

type SolutionSectionProps = {
  heading: string;
  CustomWhyChoose: CustomWhyChoose[];
};

export default function CustomWhyChoose({ heading, CustomWhyChoose }: SolutionSectionProps) {
  return (
    <div className="spacing-secton pb-20 max-w-7xl mx-auto ">
      <div className="text-[42px] text-[#013a54] max-w-2xl mx-auto font-bold text-center mb-20"style={{lineHeight:"50px"}}>{heading}<span className="ml-2 text-[#00d280]" >?</span></div>
     
      <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {CustomWhyChoose.map((item, index) => (
          <div key={index} className="value-card mx-auto p-2 mb-13 bg-[#d6f1ff] pb-12 pt-5 rounded-md hover:border-2 hover:border-[#013a54]">
            <div>
            <div className="h-16 w-16 bg-white mx-auto -mt-13 rounded-full border-2 border-gray-300 flex justify-center items-center">
            <Image
              src={item?.icon}
              width={35}
              height={35}
              alt={`${item?.title} Icon`}
              className=""
            />
            </div>
           
            <h2 className="text-xl text-[#013a54] text-center font-bold mt-1">{item.title}</h2>
            <p className="text-[16px] font-normal text-[#013a54] text-center mt-1" style={{lineHeight:"20px"}}>{item.description}</p>
          </div>
          </div>
        ))}
      </div>
      

    </div>
  );
}

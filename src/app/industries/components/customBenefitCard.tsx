// components/BenefitsSection.tsx
"use client"
import Image from "next/image";

type Benefit = {
  title: string;
  description: string;
  icon: string;
};

type BenefitsSectionProps = {
  heading: string;
  benefits: Benefit[];
};

export default function BenefitsCard({ heading, benefits }: BenefitsSectionProps) {
  return (
    <div className="spacing-secton bg-[#d6f1ff]  -mt-[120px] py-16">
      <div className="text-3xl sm:text-5xl font-semibold sm:text-bold mb-16  text-center"style={{lineHeight:"42px"}}>{heading}</div>
      <div className="three-divs  grid grid-cols-1 md:grid-cols-3 gap-5">
        {benefits.map((benefit, index) => (
          <div key={index} className="value-card p-6 bg-[#ffffff] pb-18 pt-5 hover:shadow-lg">
            <Image
              src={benefit.icon}
              width={40}
              height={40}
              alt={`${benefit.title} Icon`}
              className="mx-auto"
            />
            <h2 className="text-xl text-black-600 text-center font-semibold mt-4">{benefit.title}</h2>
            <p className="text-md text-black-600 text-center mt-7">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

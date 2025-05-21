"use client"
// components/CustomValue.tsx
import Image from "next/image";

interface ValueCard {
  iconUrl: string;
  title: string;
  description: string;
}

interface CustomValueProps {
  heading: string;
  subheading: string;
  values: ValueCard[];
}

const CustomValue: React.FC<CustomValueProps> = ({ heading, subheading, values }) => {
  return (
    <div className="bg-[#023047]">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto py-16">
        <div className="text-center text-white text-3xl sm:text-5xl font-semibold sm:text-bold">{heading}</div>
        <div className="text-lg text-white text-center mt-4">{subheading}</div>
        <div className="three-divs grid grid-cols-1 md:grid-cols-3 gap-8 mt-18">
          {values.map((item, index) => (
            <div key={index} className="value-card p-6  pt-5">
              <div className="flex justify-center items-center">
                <div className="h-16 w-16 rounded-md bg-[#00d28033] flex justify-center items-center">
                  <Image
                    src={item.iconUrl}
                    width={40}
                    height={40}
                    alt={`${item.title} Icon`}
                    className="h-auto w-10"
                  />
                </div>
              </div>
              <h2 className="text-xl text-[#00d280] text-center font-semibold mt-6">{item.title}</h2>
              <p className="text-[15px] text-white text-center mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomValue;

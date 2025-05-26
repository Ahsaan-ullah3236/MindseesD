// components/CustomBanner.tsx
"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CustomBannerProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: StaticImageData;
}

const CustomBanner: React.FC<CustomBannerProps> = ({
  heading,
  description,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <div className="py-10 sm:py-20 bg-[#f6fcff]  mx-auto spacing-secton">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div>
          <div className="text-3xl sm:text-5xl font-semibold sm:text-bold mb-4">
            <span className="relative whitespace-pre-line">{heading}</span>
          </div>

          <p className="text-lg md:text-xl mt-2 md:mt-9 text-black">{description}</p>

          <Link href={buttonLink}>
            <button className="bg-[#00d280] mt-12 cursor-pointer text-white font-medium text-sm md:text-lg py-4 px-4 rounded-md transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Image src={image} alt="Illustration" width={400} height={400} className="h-[300px] w-[300] mt-5" />
        </div>
      </div>
    </div>
  );
};

export default CustomBanner;

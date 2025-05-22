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

const ServicesCustomBanner: React.FC<CustomBannerProps> = ({
  heading,
  description,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <div className="py-10 sm:py-20 bg-[#012f47] bg-cover bg-right spacing-secton">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8 text-sm">
        <div className="">
          <div className="text-3xl sm:text-5xl font-semibold sm:text-bold mb-4">
            <span className="relative whitespace-pre-line text-white">{heading}</span>
          </div>

          <p className="text-lg mt-2 md:mt-9 text-white">{description}</p>

          <Link href={buttonLink}>
            <button className="bg-[#00d280] mt-16 cursor-pointer text-white font-medium text-sm md:text-lg py-4 px-4 rounded-md transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Image src={image} alt="Illustration" width={400} height={400} className="h-[300px] object-contain mt-5" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCustomBanner;

// components/CustomBanner.tsx
"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CustomBannerProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string| StaticImageData;
}

const CustomServiceDetail: React.FC<CustomBannerProps> = ({
  heading,
  description,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <div className="py-20 spacing-secton mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div>
          <div className="text-5xl font-bold mb-4">
            <span className="relative whitespace-pre-line text-[#013a54]">{heading}</span>
          </div>

          <p className="text-[17px] mt-2 md:mt-9 text-[#013a54]">{description}</p>

        </div>

        <div className="flex justify-center md:justify-end">
          <Image src={image} alt="Illustration" width={400} height={400} className="h-[300px] w-[80vw] md:w-[35vw] object-contain mt-5" />
        </div>
      </div>
        <div className="flex justify-center w-full">
      <Link href={buttonLink}>
            <button className="bg-[#00d280] mt-22 mb-14 cursor-pointer text-white font-medium text-sm md:text-lg py-4 px-4 rounded-md transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
      </div>
    </div>
  );
};

export default CustomServiceDetail;

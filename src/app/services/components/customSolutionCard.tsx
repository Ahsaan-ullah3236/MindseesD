// // components/BenefitsSection.tsx
// "use client"
// import Image from "next/image";
// import Link from "next/link";

// type Solution = {
//   title: string;
//   description: string;
//   icon: string;
// };

// type SolutionSectionProps = {
//   heading: string;
//   subHeading:string;
//   Solution: Solution[];
// };

// export default function CustomSolutionCard({ heading,subHeading, Solution }: SolutionSectionProps) {
//   return (
//     <div className="spacing-secton mx-auto py-16">
//       <div className="text-[38px] text-[#013a54]  font-bold text-center"style={{lineHeight:"42px"}}>{heading}</div>
//       <div className="text-[18px]  text-[#013a54] max-w-3xl mx-auto  mb-22 mt-8 text-center"style={{lineHeight:"22px"}}>{subHeading}</div>
     
//       <div className="three-divs grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-5 ">
//         {Solution.map((Solution, index) => (
//           <div key={index} className="value-card mx-auto p-6 bg-[#d6f1ff] pb-8 pt-5 rounded-md hover:shadow-lg">
//             <Image
//               src={Solution.icon}
//               width={40}
//               height={40}
//               alt={`${Solution.title} Icon`}
//               className="mx-auto mt-5"
//             />
//             <h2 className="text-xl text-[#013a54] text-center font-bold mt-6">{Solution.title}</h2>
//             <p className="text-[16px] font-normal text-[#013a54] text-center mt-6" style={{lineHeight:"20px"}}>{Solution.description}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center ">
//       <Link href="/contact-us">
//             <button className="bg-[#00d280] mt-16 cursor-pointer text-white font-medium text-sm md:text-lg py-4 px-4 rounded-md transition-colors duration-300">
//               Talk to our Experts
//             </button>
//           </Link>
//       </div>

//     </div>
//   );
// }
// components/BenefitsSection.tsx
"use client"
import Image from "next/image";
import Link from "next/link";

type Solution = {
  title: string;
  description: string;
  icon: string;
};

type SolutionSectionProps = {
  heading: string;
  subHeading: string;
  Solution: Solution[];
};

export default function CustomSolutionCard({ heading, subHeading, Solution }: SolutionSectionProps) {
  return (
    <div className="spacing-secton mx-auto py-16 px-4">
      <div className="text-3xl sm:text-5xl font-semibold sm:text-bold text-[#013a54]  text-center" style={{ lineHeight: "42px" }}>
        {heading}
      </div>
      <div className="text-[18px] text-[#013a54] max-w-3xl mx-auto mt-8 text-center" style={{ lineHeight: "22px" }}>
        {subHeading}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {Solution.map((solution, index) => (
          <div
            key={index}
            style={{ flex: "0 0 auto" }}
            className="w-full sm:w-[48%] md:w-[48%] lg:w-[30%] xl:w-[30%] 2xl:w-[23%] p-6 bg-[#d6f1ff] pb-8 pt-5 rounded-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={solution.icon}
              width={40}
              height={40}
              alt={`${solution.title} Icon`}
              className="mx-auto mt-5"
            />
            <h2 className="text-xl text-[#013a54] text-center font-bold mt-6">{solution.title}</h2>
            <p className="text-[16px] font-normal text-[#013a54] text-center mt-6" style={{ lineHeight: "20px" }}>
              {solution.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link href="/contact-us">
          <button className="bg-[#00d280] cursor-pointer text-white font-medium text-sm md:text-lg py-4 px-6 rounded-md transition-colors duration-300">
            Talk to our Experts
          </button>
        </Link>
      </div>
    </div>
  );
}

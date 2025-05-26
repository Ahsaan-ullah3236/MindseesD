'use client';
import React from "react";

import CountUp from 'react-countup';

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
  { label: 'Happy Clients', value: 80, suffix: '+' },
  { label: 'On-Time Delivery', value: 100, suffix: '%' },
  { label: 'Projects Delivered', value: 65 },
];

export default function Clientsline() {
  return (
    <div className="mx-auto -mt-6 sm:-mt-0  ">
    <div className="bg-gradient-to-r from-[#002D47] via-[#0072B5] to-[#002D47] text-white py-10 mb-30 md:mb-30 ">
      <div className="spacing-secton px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-lg md:text-3xl font-bold text-green-400">
              <CountUp end={stat.value} duration={2} /> {stat.suffix}
            </h2>
            <p className="mt-2 text-sm md:text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


// function Clientsline() {
//   return (
//     <div className="w-full mt-12 py-10 px-4 sm:px-6 bg-[#002f46] overflow-hidden mb-12">
//       <div className="flex justify-center flex-wrap gap-6">
//         {[
//           { value: "100%", label: "Clients Satisfaction" },
//           { value: "80+", label: "Happy Clients" },
//           { value: "100%", label: "On Time Delivery" },
//           { value: "65", label: "Projects Delivered" },
//         ].map((item, idx) => (
//           <div
//             key={idx}
//             className="text-center px-6 sm:px-12 md:px-20 lg:px-32 py-2 flex-1 min-w-[150px] lg:w-1/4"
//           >
//             <span className="text-[#00D280] font-bold text-2xl sm:text-3xl md:text-4xl block mb-1 py-4">
//               {item.value}
//             </span>
//             <p className="text-white font-bold text-sm sm:text-base">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



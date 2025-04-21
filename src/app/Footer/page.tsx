// 'use client';
// import React from 'react';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-[#002f46] text-white py-16">
//       <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

//           {/* Column 1: Logo and Company Info */}
//           <div className="md:col-span-5 space-y-4 text-white">
//           {/* Logo */}
//            <div>
//            <Image
//       src="https://kavelogics.com/kavelogics-white-logo.svg"
//       alt="Kavelogics Logo"
//       width={180}
//       height={60}
//       className="mb-4"
//     />
//     <p className="text-base leading-relaxed">
//       Kavelogics is a leading IT solutions provider, offering services ranging from web development to digital marketing.
//     </p>
//   </div>

//   {/* Address */}
//   <div className="space-y-2 mt-4">
//     <p className="flex items-start text-sm md:text-base">
//       <Image
//         src="https://kavelogics.com/icons/location.svg"
//         alt="Location Icon"
//         width={20}
//         height={20}
//         className="mr-2 mt-1"
//       />
//       1st Floor, 45-F Commercial Area, Punjab Cooperative Housing Society, Lahore, Pakistan
//     </p>

//     <p className="flex items-center text-sm md:text-base">
//       <Image
//         src="https://kavelogics.com/icons/phone.svg"
//         alt="Phone Icon"
//         width={20}
//         height={20}
//         className="mr-2"
//       />
//       +92 325 8290490
//     </p>

//     <p className="flex items-center text-sm md:text-base">
//       <Image
//         src="https://kavelogics.com/icons/email.svg"
//         alt="Email Icon"
//         width={20}
//         height={20}
//         className="mr-2"
//       />
//       info@keylogics.com
//     </p>
//   </div>

//   {/* Social Icons */}
//   <div className="flex items-center space-x-4 mt-6">
//     {[
//       { href: "#", src: "https://kavelogics.com/v1.svg", alt: "Facebook" },
//       { href: "#", src: "https://kavelogics.com/v3.svg", alt: "Instagram" },
//       { href: "#", src: "https://kavelogics.com/linkedin.svg", alt: "LinkedIn" },
//       { href: "#", src: "https://kavelogics.com/v2-new.svg", alt: "Twitter" },
//       { href: "#", src: "https://kavelogics.com/yt.svg", alt: "YouTube" },
//     ].map((icon, idx) => (
//       <a key={idx} href={icon.href} className="hover:scale-110 transition-transform duration-200">
//         <Image src={icon.src} alt={icon.alt} width={20} height={20} />
//       </a>
//          ))}
//      </div>
//        </div>


//           {/* Column 2: Services */}
//           <div className="md:col-span-2">
//             <h3 className="text-2xl font-semibold mb-6">Services</h3>
//             <ul className="space-y-4">
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">AI Development</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">UI/UX Design</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Mobile App Development</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Website Development</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">SEO</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Graphic Designing</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">SaaS Based Websites</a></li>
//             </ul>
//           </div>

//           {/* Column 3: Industries */}
//           <div className="md:col-span-2">
//             <h3 className="text-2xl font-semibold mb-6">Industries</h3>
//             <ul className="space-y-4">
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Health</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">EdTech</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">FinTech</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Business</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Communication</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">E-commerce</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Entertainment</a></li>
//             </ul>
//           </div>

//           {/* Column 4: Company */}
//           <div className="md:col-span-3">
//             <h3 className="text-2xl font-semibold mb-6">Company</h3>
//             <ul className="space-y-4 ">
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Careers</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Our Works</a></li>
//               <li><a href="#" className="hover:text-[#00D280] transition-colors">Contact Us</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Line under main footer content */}
//         <div className="border-t my-10"></div>

//         {/* Footer Bottom */}
//         <div className="">
//           <div className="flex flex-col sm:flex-row justify-between items-center text-semibold text-white">
//             <div className="space-x-4">
//               <a href="#" className="hover:text-[#00D280] transition-colors">Privacy Policy</a>
//               <span>|</span>
//               <a href="#" className="hover:text-[#00D280] transition-colors">Terms Condition</a>
//               <span>|</span>
//               <a href="#" className="hover:text-[#00D280] transition-colors">Terms of Service</a>
//             </div>
//             <p className="mb-2 sm:mb-0">&copy; 2025 Kavelogics. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  // FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#003345] text-white py-12'>
    <div className="spacing-secton ">

      <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        <div className='col-span-2'>
          <h2 className="text-3xl font-semibold mb-4">MindSees</h2>
          <p className="flex items-start gap-2 mb-2 text-lg">
            <FaMapMarkerAlt className="mt-1 " />
            30-B Malik Tufail Rd, Block B1 Block A 1 Phase 1 Johar Town, Lahore, 54770
          </p>
          <p className="flex items-center gap-2 mb-2 text-lg mt-4">
            <FaPhone /> +92 3047755843
          </p>
          <p className="flex items-center gap-2 text-lg mt-4" >
            <FaEnvelope /> info@mindsees.com
          </p>
          <div className="flex items-center gap-4 mt-4 text-xl mt-10">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li>AI Development</li>
            <li>UI/UX Designing</li>
            <li>Mobile App Development</li>
            <li>Website Development</li>
            <li>SEO</li>
            <li>Graphic Designing</li>
            <li>SaaS Based Website Development</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Case Studies</h3>
          <ul className="space-y-2">
            <li>Option A Website</li>
            <li>Wellness Website</li>
            <li>SMPL Dashboard</li>
            <li>Priority Financials</li>
            <li>PayMe App</li>
            <li>Life Up Top Website</li>
            <li>Appreciate Website</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Industries</h3>
          <ul className="space-y-2">
            <li>Health</li>
            <li>EdTech</li>
            <li>FinTech</li>
            <li>E-Commerce</li>
            <li>Business</li>
            <li>Communication</li>
            <li>Entertainment</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Our Work</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      </div>

      <div className="border-t border-white mt-12 pt-4 flex flex-col md:flex-row justify-between items-center text-sm spacing-secton ">
        <div className="flex gap-4 mb-4 md:mb-0">
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Terms & Conditions</span>
        </div>
        <p>© 2025 MindSees. All rights reserved.</p>
      </div>
    </footer>
  );
}

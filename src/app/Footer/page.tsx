
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#003345] text-white py-12'>
    <div className="spacing-secton  max-w-7xl mx-auto ">

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


      <div className="border-t border-white mt-12 pt-4  text-sm  ">
        <div className='flex flex-col md:flex-row justify-between items-center spacing-secton max-w-7xl mx-auto'>
        <div className="flex gap-4 mb-4 md:mb-0 ">
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Terms & Conditions</span>
        </div>
        <p>© 2025 MindSees. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}

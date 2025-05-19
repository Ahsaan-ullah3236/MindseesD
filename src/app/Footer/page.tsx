
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
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#003345] text-white py-12'>
    <div className="spacing-secton   mx-auto ">

        <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
          <div className='col-span-2'>
            <h2 className="text-3xl font-semibold mb-4">MindSees</h2>
            {/* <p className="flex items-start gap-2 mb-2 text-lg">
            <FaMapMarkerAlt className="mt-1 " /> */}
            <a href="https://www.google.com/maps/place/MindSees/@31.4642669,74.2988289,17z/data=!3m1!4b1!4m6!3m5!1s0x8562bef8b6b348af:0x2228a06e52354095!8m2!3d31.4642624!4d74.3014038!16s%2Fg%2F11mcwzy2ny?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" target="_blank"
              rel="noopener noreferrer">
              <div className="text-[17px] mt-1 flex" >

                <span className="mr-1"><FaMapMarkerAlt className="h-6 mt-1 w-6 " /></span> 30-B, Malik Tufail Rd, Block B1 Block A 1 Phase 1 Johar Town, Lahore, 54770, Pakistan
              </div>


            </a>
            {/* 30-B Malik Tufail Rd, Block B1 Block A 1 Phase 1 Johar Town, Lahore, 54770
          </p> */}
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
            <ul className="space-y-2 ">
              <li>
                <Link href="/services/ai" className='cursior pointer hover:underline' >AI Development</Link>
              </li>
              <li>
                <Link href="/services/uiux"  className='cursior pointer hover:underline'>UI/UX Designing</Link>
              </li>
              <li>
                <Link href="/services/mobile"  className='cursior pointer hover:underline'>Mobile App Development</Link>
              </li>
              <li>
                <Link href="/services/website"  className='cursior pointer hover:underline'>Website Development</Link>
              </li>
              <li>
                <Link href="/services/seo"  className='cursior pointer hover:underline'>SEO</Link>
              </li>
              <li>
                <Link href="/services/graphic"  className='cursior pointer hover:underline'>Graphic Designing</Link>
              </li>
              <li>
                <Link href="/services/saas"  className='cursior pointer hover:underline'>SaaS Based Website Development</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Case Studies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/case-studies/opstionA"  className='cursior pointer hover:underline'>Option A Website</Link>
              </li>
              <li>
                <Link href="/case-studies/opstionA"  className='cursior pointer hover:underline'>Wellness Website</Link>
              </li>
              <li>
                <Link href="/case-studies/opstionA"  className='cursior pointer hover:underline'>SMPL Dashboard</Link>
              </li>
              <li>
                <Link href="/case-studies/opstionA"  className='cursior pointer hover:underline'>Priority Financials</Link>
              </li>
              <li>
                <Link href="/case-studies/opstionA"  className='cursior pointer hover:underline'>PayMe App</Link>
              </li>
              <li>
                <Link href="/case-studies/opstionA"  className='cursior pointer hover:underline'>Life Up Top Website</Link>
              </li>
              <li>
                <Link href="/case-studies/opstionA"  className='cursior pointer hover:underline'>Appreciate Website</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/health"  className='cursior pointer hover:underline'> Health </Link></li>
              <li><Link href="/industries/edtech"  className='cursior pointer hover:underline'> EdTech </Link></li>
              <li><Link href="/industries/fintech"  className='cursior pointer hover:underline'> FinTech </Link></li>
              <li><Link href="/industries/ecommerce"  className='cursior pointer hover:underline'>E-Commerce </Link></li>
              <li><Link href="/industries/business"  className='cursior pointer hover:underline'>Business </Link></li>
              <li><Link href="/industries/communication"  className='cursior pointer hover:underline'>Communication </Link></li>
              <li><Link href="/industries/entertainment"  className='cursior pointer hover:underline'>Entertainment </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about"  className='cursior pointer hover:underline'> About  </Link></li>
              <li><Link href="/creers"  className='cursior pointer hover:underline'> Careers  </Link></li>
              <li><Link href="/portfolio"  className='cursior pointer hover:underline'> Our Work  </Link></li>
              <li><Link href="/contact-us"  className='cursior pointer hover:underline'> Contact Us  </Link></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="border-t border-white mt-12 pt-4  text-sm  ">
        <div className='flex flex-col md:flex-row justify-between items-center spacing-secton mx-auto'>
        <div className="flex gap-4 mb-4 md:mb-0 ">
         <Link href="/privacy-policy" className="cursor-pointer"> Privacy policies</Link>
          <Link href="/cookie" className="cursor-pointer"> Cookie policies</Link>
          <Link href="/terms" className="cursor-pointer"> Terms & Condition</Link>
        </div>
        <p>© 2025 MindSees. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}

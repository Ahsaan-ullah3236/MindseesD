"use client"
import React,{useState} from "react"
import { UploadCloud,MoveRight  } from "lucide-react";
import { StepperApply } from "./component/Stepper";

const Apply =()=>{

  const [currentStep] = useState(0);
  // const [currentStep, setCurrentStep] = useState(0);

 
  //    const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   cnic: '',
  //   country: '',
  //   city: '',
  //   zip: '',
  //   phone: '',
  //   address: '',
  //   gender: '',
  //   dob: '',
  //   github: '',
  //   linkedin: '',
  //   resume: null,
  // });

  // const handleChange = (e: any) => {
  //   const { name, value, files } = e.target;
  //   if (name === 'resume') {
  //     setFormData({ ...formData, [name]: files[0] });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // Add validation or API call here
  // };
    return(
        <div className="py-12 md:py-22 spacing-secton">
            <div className="text-[#005078] text-2xl sm:text-4xl font-semibold sm:text-bold">Social Media Management Internship Leading to Job</div>
        <div className="max-w-3xl mx-auto">
      <StepperApply currentStep={currentStep} />

    
    </div>
        <form
      // onSubmit={handleSubmit}
      className="px-6 md:px-20 py-14 bg-[#d6f1ff] rounded-md mt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
        {/* First Name */}
        <div>
          <label className="block font-medium text-[18px] mb-2  ">First Name *</label>
          <input
            type="text"
            name="firstName"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">Last Name *</label>
          <input
            type="text"
            name="lastName"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">Email *</label>
          <input
            type="email"
            name="email"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* CNIC */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">CNIC *</label>
          <input
            type="text"
            name="cnic"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">Country *</label>
          <input
            type="text"
            name="country"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* City */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">City *</label>
          <input
            type="text"
            name="city"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* Zip */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">Zip Code *</label>
          <input
            type="text"
            name="zip"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* Address (Full width) */}
        <div className="md:col-span-2">
          <label className="block font-medium text-[18px] mb-2 ">Address *</label>
          <textarea
            name="address"
            // onChange={handleChange}
            rows={8}
            placeholder="eg. House number 55 Street Number 04, Lahore"
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          ></textarea>
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">Gender *</label>
          <select
            name="gender"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          >
            <option value="">Not Specified</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* DOB */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">Date of Birth *</label>
          <input
            type="date"
            name="dob"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* GitHub */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">GitHub/Portfolio Link *</label>
          <input
            type="url"
            name="github"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block font-medium text-[18px] mb-2 ">LinkedIn *</label>
          <input
            type="url"
            name="linkedin"
            // onChange={handleChange}
            className="w-full border-1 border-black bg-white rounded-lg px-3 py-3 mb-9"
          />
        </div>
      </div>

      {/* Resume Upload */}
       <label
      htmlFor="resume"
      className="mt-6 border-2 border-dashed max-w-3xl mx-auto border-[#00d280] bg-[#00d28033] p-6 rounded-md text-center cursor-pointer block"
    >
      <div className="flex flex-col items-center justify-center h-[130px]">
        <UploadCloud className="w-10 h-10 " />
        <p className="text-lg mt-2 text-black">
          Upload your resume
        </p>
        <p className="text-sm mt-1 text-gray-600">
          Selected file must be PDF, file size no more than 10MB
        </p>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        id="resume"
        name="resume"
        // onChange={handleChange}
        className="hidden "
        accept=".pdf,.doc,.docx"
      />
    </label>
   
      {/* Submit Button */}
    
    </form>
      <div className="mt-24 flex items-center text-center justify-center">
        <button
          type="submit"
          className="h-14 flex items-center text-center justify-center rounded-md text-[18px] text-white bg-[#00d280] w-26 font-semibold "
        >
          Next <MoveRight className="ml-2"/>
        </button>
      </div>
    </div>
    )
}
export default Apply;
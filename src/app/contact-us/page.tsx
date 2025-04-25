"use client"
import React,{ useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Stepper from "./stepper";
import GlobalPressance from "../globalPresance/page";
import DropdownMultiSelect from "./multipleSelect";
import SingleSelectDropdown from "./SingleSelectDropdown";


export default function ContactPage() {

  type ServiceItem = {
    id: string;
    label: string;
    checked: boolean;
  };
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);

  const services: ServiceItem[] = [
    { id: 'ui-ux', label: 'UI/UX Design', checked: false },
    { id: 'mobile-app', label: 'Mobile App Development', checked: false },
    { id: 'website', label: 'Website Development', checked: false },
    { id: 'graphic', label: 'Graphic Design', checked: false },
    { id: 'marketing', label: 'Online Marketing', checked: false },
    { id: 'saas', label: 'SaaS based E-Commerce Website Development', checked: false },
    { id: 'other', label: 'Other', checked: false },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState<{id: string, label: string} | null>(null);

  const industry = [
    { id: 'health', label: 'Health' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'edtech', label: 'EdTech' },
    { id: 'communication', label: 'Communication' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'e-Commerce', label: 'E-Commerce' },
    { id: 'business', label: 'Business' },
    { id: 'Retail', label: 'Retail' },
    { id: 'other', label: 'Other' },
  ];

    const steps = [
        {
          id: 1,
          title: "We begin by employing a Non-Disclosure Agreement (NDA) to guarantee the protection of your ideas.",
          description: "",
          completed: true,
          active: false,
        },
        {
          id: 2,
          title: "Our team will conduct an analysis of your needs and specifications.",
          description: "",
          completed: true,
          active: false,
        },
        {
          id: 3,
          title: "You will receive a comprehensive project overview.",
          description: "",
          completed: true,
          active: false,
        },
        {
          id: 4,
          title: "We turn your project ideas into reality, allowing you to concentrate on expanding your business.",
          description: "",
          completed: true,
          active: false,
        },
      ];
    
      type FormDataType = {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        service: string;
        industry: string;
        description: string;
        attachFile: File | null;
        agreeTerms: boolean;
        sendNDA: boolean;
      };

      const [formData, setFormData] = useState<FormDataType>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        industry: "",
        description: "",
        attachFile: null,
        agreeTerms: false,
        sendNDA: false,
      });

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, attachFile: e.target.files[0] });
    }
  };

  const handleCheckbox = (name: string) => {
    setFormData((prev) => ({ ...prev, [name]: !prev[name as keyof typeof formData] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div >
    <div className="h-[400px] bg-[#023047] px-4 py-12 spacing-secton">
        <div className="text-2xl md:text-5xl font-bold text-center mt-8 mb-20 ">
            <span className="text-white">Schedule A </span>
            <span className="text-[#00d280]">Free Consultation</span>
        </div>
      
    </div>
    <div className="spacing-secton max-w-7xl mx-auto -mt-50">

    <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-8 py-12 w-full flex flex-col-reverse  sm:grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl md:text-5xl font-bold">Contact Us</h2>
          <p className="text-md text-black mb-4">Feel free to reach out, and we will be happy to promptly discuss your project with you.</p>

          <div className="block sm:grid grid-cols-2 gap-4">
            <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <Input name="lastName" placeholder="Last Name"  className="mt-4 sm:mt-0" value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="block sm:grid grid-cols-2 gap-4">
            <Input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <Input name="email" placeholder="Email" className="mt-4 sm:mt-0"  value={formData.email} onChange={handleChange} />
          </div>

          <DropdownMultiSelect
        options={services}
        onChange={(selected) => setSelectedServices(selected)}
        placeholder="Select services you want"
      />
      {selectedServices&& ""}
      

      <SingleSelectDropdown
        options={industry}
        selectedOption={selectedIndustry}
        onChange={(option) => setSelectedIndustry(option)}
        placeholder="Select your industry"
      />
      
    

          <Textarea name="description" placeholder="Write your project description here..." className="h-40" value={formData.description} onChange={handleChange} />

          <div className="flex items-center justify-end text-gray-500  gap-2">
          <label className="cursor-pointer flex items-center justify-end gap-2 text-xs">
    <input
      type="file"
      accept=".pdf,.txt,.docx"
      onChange={handleFileChange}
      className="hidden"
    />
    <span>Attach File (pdf, txt or docx)</span>
  </label>
  
            {/* <input type="file"  accept=".pdf,.txt,.docx" onChange={handleFileChange} className="cursor-pointer" />
            <span className="text-xs">Attach File (pdf, txt or docx)</span> */}
          </div> 

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm text-gray-500 ">
              <Checkbox checked={formData.agreeTerms} onCheckedChange={() => handleCheckbox("agreeTerms")} />
              I agree to the terms and conditions
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-500 ">
              <Checkbox checked={formData.sendNDA} onCheckedChange={() => handleCheckbox("sendNDA")} />
              Send me an NDA
            </label>
          </div>
          <div className="w-full flex justify-end items-end mb-3">

          <Button type="submit" className="bg-[#00d280] hover:bg-green-400 text-white w-30 py-6 ">Submit Request</Button>
          </div>
        </form>

          <div className="flex items-center justify-center">
        <div className="bg-gradient-to-b from-[#036087] min-h-[450px] to-[#002D46] text-white rounded-xl p-2 sm:p-6 space-y-6 ">
          <h3 className="text-xl md:text-3xl font-bold text-center mt-6">Whats Next?</h3>
          <div className=" text-sm">
          <Stepper steps={steps}/>
          </div>

         </div>
        </div>
      </div>
    </div>

<GlobalPressance/>

   
    </div>

  );
}

"use client"
import emailjs from "emailjs-com";
import{Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import{Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"

import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9480136388",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ashrithshetty260@gmail.com ",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ashrithlshetty@gmail.com ",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kateel ,Mangalore 574150",
  },
];
import {motion} from "framer-motion"
import { useState } from "react"
const Contact = () => {

  
  const [formData, setFormData] = useState({
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_6yvfcjp', 'template_s99d606', formData, '-qM_gXSV86PcNT0yq')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                I am available for freelance work. Connect with me through the
                form or contact me directly
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Select name="service" onChange={handleChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    {/* <SelectItem value="cst">Web Development</SelectItem> */}
                    
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Type Your message here." onChange={handleChange}/>
            <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
           <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return(
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
            })}
           </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact
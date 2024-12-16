"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs} from "react-icons/fa"
import { SiTailwindcss,SiExpress,SiDjango,SiMongodb,SiMysql } from "react-icons/si";


const about = {
  title: "About me",
  desc: "I am a full stack web developer with a passion for building beautiful and user-friendly websites. I have experience working with both front-end and back-end technologies and I am always eager to learn new things.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ashrith Shetty",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9480136388",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ years",
    },
    {
      fieldName: "Email",
      fieldValue: "ashrithshetty260@gmail.com",
    },
    {
      fieldName: "Place",
      fieldValue: "Mangalore, Karnataka",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avialable",
    },
  ],
};

const experience = {
  icon: "/resume/badge.svg",
  title: "My experience",
  description:
    "I have worked on a variety of projects ranging from simple static websites to complex web applications. I have experience working with both front-end and back-end technologies and I am always eager to learn new things.",
  items: [
    {
      company: "Exelon Circuits Pvt Ltd",
      position: "FrontEnd Developer",
      duration: "May-Aug 2024",
    },
    {
      company: "St.Joseph's Engineering College",
      position: "Summer Internship",
      duration: "Nov-Dec 2023",
    },
  ],
};

const education = {
  icon: "/resume/badge.svg",
  title: "My education",
  description:
    "I have a Master's degree in Computer Application from St.Joseph's Engineering College. I have a strong foundation in computer science and I am always eager to learn new things.",
  items: [
    {
      institution: "St.Joseph's Engineering College",
      degree: "Master's of Computer Application",
      duration: "Oct2022 -Sept 2024",
    },
    {
      institution: "Vijaya College Mulki",
      degree: "Bachelor of Science",
      duration: "June 2019 - Sept 2022",
    },
    {
      institution: "SDPT PU College Kateel",
      degree: "Pre University",
      duration: "June 2017 - May 2019",
    },
    {
      institution: "SDPT High School Kateel",
      degree: "High School",
      duration: "June 2007 - May 2017",
    },
  ],
};

const skills={
  title:"My skills",
  description:"I have experience working with a variety of technologies and frameworks. Here are some of the technologies that I am proficient in:",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"HTML 5",

    },
    {
      icon:<FaCss3/>,
      name:"CSS 3",
    },
    {
      icon:<FaJs/>,
      name:"JavaScript",
    },
    {
      icon:<FaReact/>,
      name:"React.Js",
    },
    {
      icon:<SiTailwindcss/>,
      name:"Tailwind CSS",
    },
    {
      icon:<FaNodeJs/>,
      name:"Node.js",
    },
    {
      icon:<SiExpress />,
      name:"Express.js",
    },
    {
      icon:<SiDjango />,
      name:"Django",
    },
    {
      icon:<SiMongodb />,
      name:"MongoDB",
    },
    {
      icon:<SiMysql />,
      name:"MySQL",
    }
  ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import{motion} from 'framer-motion'



const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-g-[80vh] flex items-center justify-center py-12 xl:py-0
  "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] texxt-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px text-white/60 mx-auto xl:mx-0]">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] texxt-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px text-white/60 mx-auto xl:mx-0]">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return(
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitialize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                        </TooltipProvider></li>
                        );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
<div className="flex flex-col gap-[30px]">
  <h3 className="text-4xl font-bold">{about.title}</h3>
  <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</h3>
  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
    {about.info.map((item,index)=>{
      return(
        <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
          <span>{item.fieldName}</span>
          <span>{item.fieldValue}</span>
        </li>
      );

    })}
  </ul>
</div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume
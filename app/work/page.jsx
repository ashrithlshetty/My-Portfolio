"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Appointment Management System",
    title: "Appointment Management System",
    description:
      "Worked on a Doctor's Appointment System that enables users to book slots and manage appointments.Focused on front-end development using React to create an intuitive and responsive user interface.Aimed to streamline the appointment booking process, reducing booking time by 25%, and enhancing the overall user experience.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/proj1.png",

    live: "https://appointment-mu.vercel.app/",
    github: "https://github.com/ashrithlshetty/Healthcare-Appointment",
  },

  {
    num: "02",
    category: "Family Fund Tracker",
    title: "Payment Managment System",
    description:
      "I developed a web application , which can manage the Payment made by the users. I used Node.Js , Express.Js for backend and MongoDb a NOSQL database to store the details and EJS , a Template Engine for Frontend , which is a server side rendering technology to generate Dynamic web pages. It has the functionalities like get the pending status , generate bills , generate Excel sheet , and CRUD operation",
    stack: [
      {
        name: "EJS",
      },
      {
        name: "Passport.js",
      },
      {
        name: "JWT",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/Maanila.png",

    live: "",
    github: "https://github.com/ashrithlshetty/Maanila",
  },

  {
    num: "03",
    category: "EduTracker",
    title: "EduTrack",
    description:
      "In my School Management System project, I implemented an automated certificate generation process, reducing manual effort and improving efficiency. Google OAuth was integrated for secure and seamless authentication. I used Cloudinary for file storage, enabling efficient management of images and documents. The system featured dynamic EJS pages like Admin, Student, and Staff Dashboards, streamlining school operations.",
    stack: [
      {
        name: "EJS",
      },
      {
        name: "Node.js",
      },
      {
        name: "Google OAuth",
      },
      {
        name: "Cloudinary",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/SMS.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setproject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name},{index !== project.stack.length - 1 && ""}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div realtive w-full h-full>
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

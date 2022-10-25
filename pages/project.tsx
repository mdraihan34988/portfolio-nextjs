import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import { AnimatePresence } from "framer-motion";
import AnimatedDiv from "../components/FramerMotion/AnimatedDiv";
import { FadeContainer } from 'components/FramerMotion/FramerMotionVariants';
import Projects from 'components/Projects';

export default function Project() {
  const projectsProfesional = [
    {
      id: 1,
      name: "US Immigration Visa File Website",
      coverURL: "/fVbFbqw.png",
      description:
        "This is a US immigration application filing guided website.",
      githubURL: "",
      previewURL: "https://www.filemyvisa.com/",
      tools: ["nextjs", "reactjs","nodejs","mssql","docker","google cloud run"],
      pinned: false,
    },
    {
      id: 2,
      name: "Admin Panel to manage US Immigration Website",
      coverURL: "/4dZRefD.png",
      description:
        "An admin panel to manage US immigration website.",
      githubURL: "",
      previewURL: "https://admin.filemyvisa.com/",
      tools: ["reactjs","nodejs","mssql","docker","google cloud run"],
      pinned: false,
    },
    {
      id: 3,
      name: "NVR Demo",
      coverURL: "/SbpkJpF.png",
      description:
        "A demo application which can translated into any language and an nvr application fill up online and get the pdf fill with information.",
      githubURL: "",
      previewURL: "https://nvr.linereflection.com/",
      tools: ["reactjs", "nodejs"],
      pinned: false,
    },
    {
      id: 4,
      name: "Fundrising Application",
      coverURL: "/bDQJuhI.png",
      description:
        "A fundraising application where a person can raise funds for his/her concerns and a person can donate which concerns touch him/her most.",
      githubURL: "",
      previewURL: "https://www.peakfund.net/",
      tools: ["python"],
      pinned: false,
    },
    {
      id: 5,
      name: "Pharmacy & Healthcare Platform",
      coverURL: "/bDQJuhI.png",
      description:
        "Work on a online pharmacy and healthcare platform. Where any person can order medicine",
      githubURL: "",
      previewURL: "https://www.epharma.com.bd/",
      tools: ["php","laravel"],
      pinned: false,
    }
  ];
  const projectsPersonal = [
    {
      id: 1,
      name: "Ecommerce Application",
      coverURL: "/fVbFbqw.png",
      description:
        "Working on front end of an ecommerce application",
      githubURL: "",
      previewURL: "https://suchishoili.vercel.app/",
      tools: ["nextjs"],
      pinned: false,
    },
    {
      id: 2,
      name: "Project management application",
      coverURL: "/fVbFbqw.png",
      description:
        "A simple project management application with drag and drop project status.",
      githubURL: "https://github.com/mdraihan34988/project-manager-redux",
      previewURL: "https://project-tracker-app.netlify.app/",
      tools: ["reactjs","redux toolkit","rtk query","cache-control","react dnd","tailwind css","router dom v6","json server"],
      pinned: false,
    },
    {
      id: 3,
      name: "Chatting application",
      coverURL: "/fVbFbqw.png",
      description:
        "A real-time chatting application where anyone can communicate in real-time experience",
      githubURL: "https://github.com/mdraihan34988/chatting-application",
      previewURL: "https://chat-app-redux.netlify.app/",
      tools: ["reactjs","redux toolkit","rtk query","socket.io","cache-control","tailwind css","router dom v6","json server"],
      pinned: false,
    },
    {
      id: 4,
      name: "Expense Tracker",
      coverURL: "/4dZRefD.png",
      description:
        "Expense tarcker application for track the expenses.",
      githubURL: "https://github.com/mdraihan34988/expanse-tracker-redux",
      previewURL: "https://expense-track-redux.netlify.app/s",
      tools: ["reactjs","redux toolkit","rtk query","cache-control","tailwind css","router dom v6","json server"],
      pinned: false,
    },
    {
      id: 5,
      name: "Todo application",
      coverURL: "/SbpkJpF.png",
      description:
        "Simple todo application to track the todos.",
      githubURL: "https://github.com/mdraihan34988/rtk-query-todo-application",
      previewURL: "https://todo-rtk-redux.netlify.app/",
      tools: ["reactjs","redux toolkit","rtk query","cache-control","tailwind css","json server"],
      pinned: false,
    },
    {
      id: 6,
      name: "Video Gallery",
      coverURL: "/bDQJuhI.png",
      description:
        "A simple video gallery application.",
      githubURL: "https://github.com/mdraihan34988/video-gallery-redux",
      previewURL: "https://video-site-redux.netlify.app/",
      tools: ["reactjs","redux",,"tailwind css","json server"],
      pinned: false,
    },
    {
      id: 7,
      name: "Blog Site",
      coverURL: "/bDQJuhI.png",
      description:
        "A simple blog site application.",
      githubURL: "https://github.com/mdraihan34988/redux-blog-site",
      previewURL: "https://blog-site-redux.netlify.app/",
      tools: ["reactjs","redux toolkit",,"tailwind css","json server"],
      pinned: false,
    },
    {
      id: 8,
      name: "Shopping Cart Application",
      coverURL: "/bDQJuhI.png",
      description:
        "A simple shopping cart application.",
      githubURL: "https://github.com/mdraihan34988/shopping-cart-application",
      previewURL: "https://blog-site-redux.netlify.app/",
      tools: ["reactjs","redux",,"tailwind css","json server"],
      pinned: false,
    },
    {
      id: 9,
      name: "CLI CV",
      coverURL: "/bDQJuhI.png",
      description:
        "A command line cv application.",
      githubURL: "https://github.com/mdraihan34988/cli-cv",
      previewURL: "",
      tools: ["nodejs"],
      pinned: false,
    },
    {
      id: 10,
      name: "React Custome Build",
      coverURL: "/bDQJuhI.png",
      description:
        "A simple experiment to react custom build.",
      githubURL: "https://github.com/mdraihan34988/react_custom_build",
      previewURL: "https://manual-react-build.netlify.app/",
      tools: ["nodejs"],
      pinned: false,
    },
    {
      id: 11,
      name: "Covid-19 counter application",
      coverURL: "/bDQJuhI.png",
      description:
        "A simple covid-19 case counter application.",
      githubURL: "https://github.com/mdraihan34988/COVID-19-Application",
      previewURL: "https://counter-covid-19.netlify.app/",
      tools: ["angularjs"],
      pinned: false,
    },
    {
      id: 12,
      name: "Inventory management system.",
      coverURL: "/bDQJuhI.png",
      description:
        "A full stack inventory management application for my asp.net course at my university.",
      githubURL: "https://github.com/mdraihan34988/FullStack_IMS",
      previewURL: "",
      tools: ["asp.net","web api 2","entity framework(code first)","generic repository pattern", "Rest API", "HATEOAS","html","css","jquery","ajax","bootstrap 4","mssql"],
      pinned: false,
    }
  ];
  return (
    <Container title="Project – Raihanul Islam">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full pt-4">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className=" font-bold text-xl md:text-xl tracking-tight text-black dark:text-white">Professional Projects</h3>
                <p className=" font-bold text-black dark:text-white p-2">I works on 5 projects in my 2 years of professional career.</p>
                <AnimatedDiv
                    variants={FadeContainer}
                    className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
                    style=""
                    infinity=""
                  >
                    <AnimatePresence>
                      {projectsProfesional &&
                        projectsProfesional.map((project, index) => {
                          if (project.name === "" && project.githubURL === "")
                            return null;
                          return <Projects key={index} project={project} />;
                        })}
                    </AnimatePresence>
                  </AnimatedDiv>
                  <h3 className="mt-8 font-bold text-xl md:text-xl tracking-tight text-black dark:text-white">Personal Projects</h3>
                <p className=" font-bold text-black dark:text-white p-2">I have some personal projects. Some of them are small, some of them I prepare for my university assignments, some of them are freelancing and some of them are prepared for experimental purposes.</p>
                <AnimatedDiv
                    variants={FadeContainer}
                    className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
                    style=""
                    infinity=""
                  >
                    <AnimatePresence>
                      {projectsPersonal &&
                        projectsPersonal.map((project, index) => {
                          if (project.name === "" && project.githubURL === "")
                            return null;
                          return <Projects key={index} project={project} />;
                        })}
                    </AnimatePresence>
                  </AnimatedDiv>
            </div>
        </div>
    </Container>
  );
}

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
      id: 11,
      name: "Nomadiccare",
      coverURL: "/assets/ncare.png",
      description:
        "A connected healthcare SaaS platform serving clinicians, care teams, and patients across Australia. Delivered as a cross-platform suite: React.js care team portal (care plan management, patient health task tracking, provider directory, HealthEngine appointment booking, telehealth video & chat, health notes, document workflows, Google Drive integration, progress & badges, Stripe subscription billing, SMS/OTP notifications, fall prevention, admin management); native iOS app (Swift) and Android app (Kotlin v1.2.0) for patients (health monitoring tasks — blood pressure, blood glucose, BMI, sleep, steps, weight, calories, pain level — progress tracking, gamified badges, telehealth chat via Firebase RTDB, care buddy, referrals, onboarding); Firebase Cloud Functions backend (Node.js, australia-southeast1) with 14 API domains covering auth, health task completion, Stripe billing, SMS/OTP, fall prevention, video/telehealth, webhooks, and Firestore scheduled triggers. Applied AI-augmented development with Claude Code and Maestro for automated mobile E2E testing.",
      githubURL: "",
      previewURL: "https://nomadiccare.com.au/",
      tools: ["remote","reactjs","swift","kotlin","firebase","firestore","nodejs","stripe","healthengine","claude code","maestro"],
      pinned: false,
    },
    {
      id: 5,
      name: "Pharmacy & Healthcare Platform",
      coverURL: "/assets/epharma.png",
      description:
        "Online pharmacy and healthcare ordering platform with product catalog, medicine ordering workflows, customer management, and Laravel/MySQL backend development.",
      githubURL: "",
      previewURL: "https://www.epharma.com.bd/",
      tools: ["laravel","mysql"],
      pinned: false,
    },
    {
      id: 30,
      name: "CodersTrust JobReady",
      coverURL: "/assets/jobready.png",
      description:
        "AI-augmented DevOps for a workforce development SaaS platform serving 270,000+ learners in Bangladesh. Led the full migration from AWS EKS to Vultr Kubernetes (VKE), reducing cloud costs by 93.5% (~$37,260/year saved). Applied Claude, Codex, and K8sGPT for infrastructure analysis, load testing (250+ VU with k6), performance optimisation, and operational decisions across Moodle LMS, WordPress+WooCommerce, Mautic CRM, Flux GitOps, Terraform IaC, Cloudflare WAF, Prometheus, and Grafana observability.",
      githubURL: "",
      previewURL: "https://www.jobready.global/",
      tools: ["kubernetes","argocd","terraform","docker","cloudflare","k6","prometheus","grafana","claude","codex","k8sgpt"],
      pinned: false,
    },
    {
      id: 11,
      name: "ORSFX",
      coverURL: "/assets/orsfx.png",
      description:
        "Trading CRM and monitoring platform integrated with MetaTrader 5 for managing users, reporting, and operational trading workflows.",
      githubURL: "",
      previewURL: "https://www.orsfx.com/",
      tools: ["reactjs","mssql","ASP.NET Core (C#)"],
      pinned: false,
    },
    {
      id: 10,
      name: "Employee Recognition.",
      coverURL: "/assets/loopstar.png",
      description:
        "Employee recognition and engagement platform built with Angular and Spring Boot, using Redis, Kafka, PostgreSQL, Docker, and AWS-ready service architecture.",
      githubURL: "",
      previewURL: "https://loopstar.netlify.app/signin",
      tools: ["angular", "spring boot","redis","kafka","postgresql","docker","aws"],
      pinned: false,
    },
    {
      id: 6,
      name: "Online learning platform.",
      coverURL: "/assets/twtor.png",
      description:
        "Learning management platform for online courses, class management, content delivery, and learner engagement using Next.js, React, Laravel, and MSSQL.",
      githubURL: "",
      previewURL: "https://twtor.xyz/",
      tools: ["nextjs", "reactjs","laravel","mssql","docker","google cloud run"],
      pinned: false,
    },
    
    {
      id: 7,
      name: "Admin Panel to manage Twtor",
      coverURL: "/assets/twtor_admin.png",
      description:
        "Administrative dashboard for managing the Twtor learning platform, including content, users, courses, and operational workflows.",
      githubURL: "",
      previewURL: "https://admin.twtor.xyz/",
      tools: ["reactjs","laravel","mssql","docker","google cloud run"],
      pinned: false,
    },
    {
      id: 8,
      name: "Truehealthbooster",
      coverURL: "/assets/truhealthbooster.png",
      description:
        "eCommerce platform for natural supplements with product catalog, checkout workflows, admin management, and Laravel/MySQL implementation.",
      githubURL: "",
      previewURL: "https://truehealthbooster.com/",
      tools: ["laravel","mysql"],
      pinned: false,
    },
    
    {
      id: 1,
      name: "US Immigration Visa File Website",
      coverURL: "/assets/filemyvisa.png",
      description:
        "Guided US immigration filing website with step-by-step application flows, user data collection, document workflows, and scalable Next.js/Node.js architecture.",
      githubURL: "",
      previewURL: "https://www.filemyvisa.com/",
      tools: ["nextjs", "reactjs","nodejs","mssql","docker","google cloud run"],
      pinned: false,
    },
    {
      id: 2,
      name: "Admin Panel to manage US Immigration Website",
      coverURL: "/assets/adminfilemyvisa.png",
      description:
        "Admin portal for managing immigration applications, customer records, review workflows, and operational data for the FileMyVisa platform.",
      githubURL: "",
      previewURL: "https://admin.filemyvisa.com/",
      tools: ["reactjs","nodejs","mssql","docker","google cloud run"],
      pinned: false,
    },
    // {
    //   id: 3,
    //   name: "NVR Demo",
    //   coverURL: "/SbpkJpF.png",
    //   description:
    //     "A demo application which can translated into any language and an nvr application fill up online and get the pdf fill with information.",
    //   githubURL: "",
    //   previewURL: "https://nvr.linereflection.com/",
    //   tools: ["reactjs", "nodejs"],
    //   pinned: false,
    // },
    {
      id: 20,
      name: "Global Technologies Website",
      coverURL: "/assets/global-gr.png",
      description:
        "Corporate website for a Japanese client, developed with responsive HTML, Tailwind CSS, and JavaScript for a clean business presentation.",
      githubURL: "",
      previewURL: "https://global-gr.jp/",
      tools: ["html","tailwind css","javascript"],
      pinned: false,
    },
    {
      id: 4,
      name: "Fundrising Application",
      coverURL: "/assets/peakfund.png",
      description:
        "Fundraising application where users can create campaigns, raise funds for causes, and receive donations from supporters through a focused giving workflow.",
      githubURL: "",
      previewURL: "https://www.peakfund.net/",
      tools: ["python"],
      pinned: false,
    },
    
  ];
  const projectsPersonal = [
    {
      id: 1,
      name: "Ecommerce Application",
      coverURL: "/assets/schuchishoili.png",
      description:
        "Frontend implementation for an eCommerce application with product browsing, responsive UI, and Next.js-based customer shopping flows.",
      githubURL: "",
      previewURL: "https://suchishoili.vercel.app/",
      tools: ["nextjs"],
      pinned: false,
    },
    {
      id: 2,
      name: "Project management application",
      coverURL: "/assets/projectmanagement.png",
      description:
        "Project management application with drag-and-drop task status, Redux Toolkit state management, RTK Query data flows, and a responsive Tailwind interface.",
      githubURL: "https://github.com/mdraihan34988/project-manager-redux",
      previewURL: "https://project-tracker-app.netlify.app/",
      tools: ["reactjs","redux toolkit","rtk query","cache-control","react dnd","tailwind css","router dom v6","json server"],
      pinned: false,
    },
    {
      id: 3,
      name: "Chatting application",
      coverURL: "/assets/chat.png",
      description:
        "Real-time chat application using React, Redux Toolkit, RTK Query, Socket.IO, routing, caching, and responsive Tailwind CSS layouts.",
      githubURL: "https://github.com/mdraihan34988/chatting-application",
      previewURL: "https://chat-app-redux.netlify.app/",
      tools: ["reactjs","redux toolkit","rtk query","socket.io","cache-control","tailwind css","router dom v6","json server"],
      pinned: false,
    },
    {
      id: 4,
      name: "Expense Tracker",
      coverURL: "/assets/expensetracker.png",
      description:
        "Expense tracker for recording, categorizing, and monitoring spending with React, Redux Toolkit, RTK Query, and a clean dashboard interface.",
      githubURL: "https://github.com/mdraihan34988/expanse-tracker-redux",
      previewURL: "https://expense-track-redux.netlify.app/",
      tools: ["reactjs","redux toolkit","rtk query","cache-control","tailwind css","router dom v6","json server"],
      pinned: false,
    },
    {
      id: 5,
      name: "Todo application",
      coverURL: "/assets/todo.png",
      description:
        "Task management application for creating, updating, filtering, and tracking todos with Redux Toolkit, RTK Query, and Tailwind CSS.",
      githubURL: "https://github.com/mdraihan34988/rtk-query-todo-application",
      previewURL: "https://todo-rtk-redux.netlify.app/",
      tools: ["reactjs","redux toolkit","rtk query","cache-control","tailwind css","json server"],
      pinned: false,
    },
    {
      id: 6,
      name: "Video Gallery",
      coverURL: "/assets/videogallery.png",
      description:
        "Video gallery application with structured video browsing, Redux state management, Tailwind UI, and JSON-server backed demo data.",
      githubURL: "https://github.com/mdraihan34988/video-gallery-redux",
      previewURL: "https://video-site-redux.netlify.app/",
      tools: ["reactjs","redux",,"tailwind css","json server"],
      pinned: false,
    },
    {
      id: 7,
      name: "Blog Site",
      coverURL: "/assets/blog.png",
      description:
        "Blog application with post listing, detail pages, Redux Toolkit state management, Tailwind styling, and JSON-server demo backend.",
      githubURL: "https://github.com/mdraihan34988/redux-blog-site",
      previewURL: "https://blog-site-redux.netlify.app/",
      tools: ["reactjs","redux toolkit","tailwind css","json server"],
      pinned: false,
    },
    {
      id: 8,
      name: "Shopping Cart Application",
      coverURL: "/assets/cart.png",
      description:
        "Shopping cart application with product selection, cart state, quantity updates, price calculation, and Redux-powered frontend workflows.",
      githubURL: "https://github.com/mdraihan34988/shopping-cart-application",
      previewURL: "https://shoppingcart-reactredux.netlify.app/",
      tools: ["reactjs","redux",,"tailwind css","json server"],
      pinned: false,
    },
    {
      id: 9,
      name: "CLI CV",
      coverURL: "/assets/clicv.png",
      description:
        "Command-line resume application built with Node.js to present professional profile information directly in the terminal.",
      githubURL: "https://github.com/mdraihan34988/cli-cv",
      previewURL: "",
      tools: ["nodejs"],
      pinned: false,
    },
    {
      id: 12,
      name: "Inventory management system.",
      coverURL: "/assets/ims.png",
      description:
        "Full-stack inventory management system built with ASP.NET Web API, Entity Framework, repository pattern, REST API, HATEOAS, jQuery, Bootstrap, and MSSQL.",
      githubURL: "https://github.com/mdraihan34988/FullStack_IMS",
      previewURL: "",
      tools: ["asp.net","web api 2","entity framework(code first)","generic repository pattern", "Rest API", "HATEOAS","html","css","jquery","ajax","bootstrap 4","mssql"],
      pinned: false,
    } ,{
      id: 11,
      name: "Covid-19 counter application",
      coverURL: "/assets/covidcal.png",
      description:
        "COVID-19 case counter application built with AngularJS to display pandemic data in a lightweight tracking interface.",
      githubURL: "https://github.com/mdraihan34988/COVID-19-Application",
      previewURL: "https://counter-covid-19.netlify.app/",
      tools: ["angularjs"],
      pinned: false,
    },
    {
      id: 10,
      name: "React Custome Build",
      coverURL: "/assets/custom.png",
      description:
        "React custom build experiment exploring manual bundling concepts, React setup internals, and JavaScript tooling fundamentals.",
      githubURL: "https://github.com/mdraihan34988/react_custom_build",
      previewURL: "https://manual-react-build.netlify.app/",
      tools: ["nodejs"],
      pinned: false,
    }
  ];
  return (
    <Container
      title="Projects – Md. Raihanul Islam | Full Stack, SaaS, Healthcare, eCommerce"
      description="Explore professional and personal projects by Md. Raihanul Islam, including healthcare platforms, SaaS applications, eCommerce systems, CRM tools, LMS products, admin dashboards, React apps, Next.js projects, Node.js APIs, Laravel systems, and Spring Boot applications."
    >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full pt-4">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className=" font-bold text-xl md:text-xl tracking-tight text-black dark:text-white">Professional Projects</h3>
                <p className="max-w-3xl font-bold text-black dark:text-white py-2">I have worked on {projectsProfesional.length} professional projects across healthcare, SaaS, eCommerce, CRM, LMS, finance, trading, admin dashboards, payment workflows, and business operations.</p>
                <AnimatedDiv
                    variants={FadeContainer}
                    className="grid w-full grid-cols-1 gap-6"
                    style=""
                    infinity=""
                  >
                    <AnimatePresence>
                      {projectsProfesional &&
                        projectsProfesional.map((project, index) => {
                          if (project.name === "" && project.githubURL === "")
                            return null;
                          return <Projects key={index} project={{ ...project, category: "Professional project" }} />;
                        })}
                    </AnimatePresence>
                  </AnimatedDiv>
                  <h3 className="mt-8 font-bold text-xl md:text-xl tracking-tight text-black dark:text-white">Personal Projects</h3>
                <p className="max-w-3xl font-bold text-black dark:text-white py-2">My personal projects cover React, Redux Toolkit, RTK Query, Socket.IO, AngularJS, ASP.NET, Node.js, Tailwind CSS, and full-stack learning experiments that strengthened my frontend, backend, API, and state-management skills.</p>
                <AnimatedDiv
                    variants={FadeContainer}
                    className="grid w-full grid-cols-1 gap-6"
                    style=""
                    infinity=""
                  >
                    <AnimatePresence>
                      {projectsPersonal &&
                        projectsPersonal.map((project, index) => {
                          if (project.name === "" && project.githubURL === "")
                            return null;
                          return <Projects key={index} project={{ ...project, category: "Personal project" }} />;
                        })}
                    </AnimatePresence>
                  </AnimatedDiv>
            </div>
        </div>
    </Container>
  );
}

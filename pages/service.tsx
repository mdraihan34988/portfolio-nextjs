import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import PostCard from 'components/PostCard';

import { FaCloud, FaPaintBrush } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

export default function Service() {
  return (
    <Container title="Experience – Raihanul Islam">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full pt-4">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className="mb-4 font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Service</h3>
                <div className="flex gap-6 flex-col md:flex-row">
                    <PostCard
                        title="Back End Development (API)"
                        slug="projects"
                        gradient="from-[#D8B4FE] to-[#818CF8]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can build Web site application by using <b>nodeJS, asp.net(c#), php</b> for back end (API)." }}></div>}
                        icon = {<FaCode className="h-9 w-9"/>}
                    />
                    <PostCard
                        title="Front End Development"
                        slug="projects"
                        gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can build Web site application by using <b>reactJS, nextJS, php</b> for back end." }}></div>}
                        icon = {<FaPaintBrush className="h-9 w-9"/>}
                    />
                      
                    {/* <PostCard
                        title="Past, Present, and Future of React State Management"
                        slug="react-state-management"
                        gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                        text = "I can build Web application by using NODE js for back end"
                    /> */}
                </div>
                <div className="flex gap-6 flex-col md:flex-row pt-4">
                     <PostCard
                        title="Desktop Application Development"
                        slug="projects"
                        gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can build Desktop based software by using <b>c#</b> with UI" }}></div>}
                        icon = {<FaDesktop className="h-9 w-9"/>}
                    />
                    <PostCard
                        title="Website Design"
                        slug="projects"
                        gradient="from-[#D8B4FE] to-[#818CF8]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can build responsive website UI using <b>html, css, tailwind css, bootstrap</b> with UI" }}></div>}
                        icon = {<FaMobile className="h-9 w-9"/>}
                    />
                    
                      
                    {/* <PostCard
                        title="Past, Present, and Future of React State Management"
                        slug="react-state-management"
                        gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                        text = "I can build Web application by using NODE js for back end"
                    /> */}
                </div>
                <div className="flex gap-6 flex-col md:flex-row pt-4">
                <PostCard
                        title="Headless CMS"
                        slug="projects"
                        gradient="from-[#D8B4FE] to-[#818CF8]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can build application using Headless CMS <b>Strapi</b> " }}></div>}
                        icon = {<FaCode className="h-9 w-9"/>}
                    />
                    
                    <PostCard
                        title="Wordpress Application"
                        slug="projects"
                        gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can customize a wordpress theme and also design from scratch" }}></div>}
                        icon = {<FaWordpress className="h-9 w-9"/>}
                    />
                   
                      
                    {/* <PostCard
                        title="Past, Present, and Future of React State Management"
                        slug="react-state-management"
                        gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                        text = "I can build Web application by using NODE js for back end"
                    /> */}
                </div>
                <div className="flex gap-6 flex-col md:flex-row pt-4">
                <PostCard
                        title="Google Cloud Run and Storage"
                        slug="projects"
                        gradient="from-[#D8B4FE] to-[#818CF8]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can deploy reactjs, nextjs and nodejs application into google cloud run and stored application files into cloud storage" }}></div>}
                        icon = {<FaCloud className="h-9 w-9"/>}
                    />
                    
                    <PostCard
                        title="Docker Container"
                        slug="projects"
                        gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can dockerize reactjs, nextjs, php and nodejs application and deploy the dockerize container into cloud run." }}></div>}
                        icon = {<FaServer className="h-9 w-9"/>}
                    />
                   
                      
                    {/* <PostCard
                        title="Past, Present, and Future of React State Management"
                        slug="react-state-management"
                        gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                        text = "I can build Web application by using NODE js for back end"
                    /> */}
                </div>

                <div className="flex gap-6 flex-col md:flex-row pt-4">
                <PostCard
                        title="Mobile Application"
                        slug="projects"
                        gradient="from-[#D8B4FE] to-[#818CF8]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can develop mobile application using react native." }}></div>}
                        icon = {<FaMobile className="h-9 w-9"/>}
                    />
                    
                    <PostCard
                        title="MSSQL MYSQL MongoDB"
                        slug="projects"
                        gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                        text = {<div dangerouslySetInnerHTML={{ __html: "I can use mssql, mysql or mongodb for develop any application." }}></div>}
                        icon = {<FaServer className="h-9 w-9"/>}
                    />
                   
                      
                    {/* <PostCard
                        title="Past, Present, and Future of React State Management"
                        slug="react-state-management"
                        gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                        text = "I can build Web application by using NODE js for back end"
                    /> */}
                </div>

            </div>
        </div>
    </Container>
  );
}

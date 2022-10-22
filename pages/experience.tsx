import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';

export default function Experience() {
  return (
    <Container title="Experience – Raihanul Islam">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full pt-4">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className=" font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Work Experience</h3>
                <div className="flex flex-col w-full p-2 transform hover:scale-[1.01] transition-all">
                <div className="metric-card bg-white dark:bg-gray-900  text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full shadow-xl">
                <div
                    className=
                    'transform hover:scale-[1.01]  md:w-1/4 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'
                >
                    <div className="flex bg-white dark:bg-gray-900 rounded-lg justify-center">
                        2021 - Present
                    </div>
                </div>
                    <h2 className="font-bold mt-2"><Link href="https://linereflection.com/"><a target="_blank"><span className="hover:bg-gray-200 dark:hover:bg-gray-800" style={{color:'blue'}}>Associate Software Engineer (Line Reflection LTD)</span></a></Link></h2>
                        <span>
                            I am working as a software engineer at Line Reflection LTD. After joining Line Reflection LTD, I work with a lot of technologies here. Here my key role is to develop application -
                            <ul className="px-8 list-disc">
                                    <li>Backend: <span className="font-bold"> nodeJS, laravel </span></li>
                                    <li>Frontend:<span className="font-bold"> reactJS, nextJS </span></li>
                                    <li>Database:<span className="font-bold"> MSSQL, MSSQL </span></li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col w-full p-2 transform hover:scale-[1.01] transition-all">
                <div className="metric-card bg-white dark:bg-gray-900  text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full shadow-xl">
                <div
                    className=
                    'transform hover:scale-[1.01]  md:w-1/4 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'
                >
                    <div className="flex bg-white dark:bg-gray-900 rounded-lg justify-center">
                        2020 - 2021 
                    </div>
                </div>
                    <h2 className="font-bold mt-2"><Link href="https://www.aiub.edu/"><a target="_blank"><span className="hover:bg-gray-200 dark:hover:bg-gray-800" style={{color:'blue'}}>Teaching Assistant (American International University-Bangladesh (AIUB))</span></a></Link></h2>
                        <p>
                        I was working as a teaching assistant at American International University-Bangladesh (2020-2021 Fall Semester). During this period of time, I have appointed a teaching assistant for Web Technologies and C# courses. Here my task was to assist the teacher to prepare documentation, demo projects, and slides and also help the student's course topics.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full p-2 transform hover:scale-[1.01] transition-all">
                <div className="metric-card bg-white dark:bg-gray-900  text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full shadow-xl">
                <div
                    className=
                    'transform hover:scale-[1.01]  md:w-1/4 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'
                >
                    <div className="flex bg-white dark:bg-gray-900 rounded-lg justify-center">
                        2019 - 2021 
                    </div>
                </div>
                    <h2 className="font-bold mt-2"><Link href="https://www.aiub.edu/"><a target="_blank"><span className="hover:bg-gray-200 dark:hover:bg-gray-800" style={{color:'blue'}}>Genaral Member (Aiub Computer Club (ACC))</span></a></Link></h2>
                        <p>
                        During this period I attend a lot of volunteer work like cs fest, gaming fest, seminar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
}

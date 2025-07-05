import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import { MdOutlineLink } from 'react-icons/md';

export default function Education() {
  return (
    <Container title="Education – Raihanul Islam">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full pt-4">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className=" font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Education</h3>
                <div className="flex flex-col w-full p-2 transform hover:scale-[1.01] transition-all ">
                <div className="metric-card bg-white dark:bg-gray-900  text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full shadow-xl">
                <div
                    className=
                    'transform hover:scale-[1.01]  md:w-1/4 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'
                >
                    <div className="flex bg-white dark:bg-gray-900 rounded-lg justify-center">
                        2017 - 2021
                    </div>
                </div>
                    <h2 className="font-bold mt-2"><Link href="https://www.aiub.edu/"><a target="_blank"><span className="hover:bg-gray-200 dark:hover:bg-gray-800" style={{color:'blue'}}>American International University-Bangladesh (AIUB)</span></a></Link></h2>
                    <ul className="px-8 list-disc">
                        <li><span className="font-bold">Bachelor of Science </span> in Computer Science and Engineering</li>
                        <li>
                            <span className='flex items-center gap-1.5'>
                                <span className="font-bold">CGPA: </span>3.99 (Scale of 4.00)
                            
                                <Link target="_blank" href={"https://drive.google.com/file/d/1WhhhojIyD00yvsM7STNcfNzR6TNMbvKB/view?usp=sharing"} passHref>
                                <a
                                    title="View Certificate"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={"https://drive.google.com/file/d/1WhhhojIyD00yvsM7STNcfNzR6TNMbvKB/view"}
                                    className="text-gray-500 hover:text-black dark:hover:text-white"
                                >
                                    <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                                </a>
                                </Link>
                            </span>
                        </li>
                        <li><span className="font-bold">Awards: </span>
                        <Link href={"https://drive.google.com/file/d/134CeYSip9xAbblZ2lYfqW40yW8jKX_6w/view?usp=sharing"} target="_blank" className="cursor-pointer text-gray-500 hover:text-black dark:hover:text-white" passHref>
                        Summa Cum Laude
                        </Link>, <Link href={"https://drive.google.com/file/d/1eVGm_7XB6WDGLBgC7CEb6vQd8ZXBH1Df/view?usp=sharing"} target="_blank" className="cursor-pointer text-gray-500 hover:text-black dark:hover:text-white" passHref>Dean's Award Fall 2018-2019</Link>, <Link href={"https://drive.google.com/file/d/1Woqqf4nYCTQybLgJl_WuiPfQWWTMUnOt/view?usp=sharing"} target="_blank" className="cursor-pointer text-gray-500 hover:text-black dark:hover:text-white" passHref>Dean's Award Spring 2018-2019</Link> </li>
                    </ul>
                    </div>
                </div>
                <div className="flex flex-col w-full p-2 transform hover:scale-[1.01] transition-all">
                <div className="metric-card bg-white dark:bg-gray-900  text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full shadow-xl">
                <div
                    className=
                    'transform hover:scale-[1.01]  md:w-1/4 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
                >
                    <div className="flex bg-white dark:bg-gray-900 rounded-lg justify-center">
                        2014- 2016
                    </div>
                </div>
                    <h2 className="font-bold mt-2"><Link href="https://cambrian.edu.bd/metropolitan/"><a target="_blank"><span className="hover:bg-gray-200 dark:hover:bg-gray-800" style={{color:'blue'}}>Metropolitan School & College</span></a></Link></h2>
                    <ul className="px-8 list-disc">
                        <li>Higher Secondary School Certificate <span className="font-bold">(HSC)</span> </li>
                        <li><span className="font-bold">Group: </span>Science</li>
                        <li>    
                            <span className='flex items-center gap-1.5'>
                                <span className="font-bold">CGPA: </span>5.00 (Scale of 5.00)
                            
                                <Link href={"https://drive.google.com/file/d/1OBJqogVBL4kLggNRW4aWBMvXRi_GirsB/view?usp=sharing"} passHref>
                                <a
                                    title="View Certificate"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={"https://drive.google.com/file/d/1WhhhojIyD00yvsM7STNcfNzR6TNMbvKB/view"}
                                    className="text-gray-500 hover:text-black dark:hover:text-white"
                                >
                                    <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                                </a>
                                </Link>
                            </span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="flex flex-col w-full p-2 transform hover:scale-[1.01] transition-all">
                <div className="metric-card bg-white dark:bg-gray-900  text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-72 w-full shadow-xl">
                <div
                    className=
                    'transform hover:scale-[1.01]  md:w-1/4 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'
                >
                    <div className="flex bg-white dark:bg-gray-900 rounded-lg justify-center">
                        2012- 2014
                    </div>
                </div>
                    <h2 className="font-bold mt-2"><Link href="https://cambrian.edu.bd/metropolitan/"><a target="_blank">
                    <span className="hover:bg-gray-200 dark:hover:bg-gray-800" style={{color:'blue'}}>Adarsha School Narayanganj</span></a></Link></h2>
                    <ul className="px-8 list-disc">
                        <li>Secondary School Certificate <span className="font-bold">(SSC)</span></li>
                        <li><span className="font-bold">Group: </span>Science</li>
                        <li>
                             <span className='flex items-center gap-1.5'>
                                <span className="font-bold">CGPA: </span>4.56 (Scale of 5.00)
                            
                                <Link href={"https://drive.google.com/file/d/1OBJqogVBL4kLggNRW4aWBMvXRi_GirsB/view?usp=sharing"} passHref>
                                <a
                                    title="View Certificate"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={"https://drive.google.com/file/d/1RpEXN0bhjcFdmPAp1YzGlnbu2mszNUpS/view?usp=sharing"}
                                    className="text-gray-500 hover:text-black dark:hover:text-white"
                                >
                                    <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                                </a>
                                </Link>
                            </span>
                        </li>
                    </ul>
                    </div>
                    
                </div>
                {/* <h3 className=" font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Certificates</h3> */}
            </div>
        </div>
    </Container>
  );
}

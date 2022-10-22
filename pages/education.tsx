import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';

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
                        <li><span className="font-bold">BSc. </span> in Computer Science and Engineering</li>
                        <li><span className="font-bold">CGPA: </span>3.99 (Scale of 4.00)</li>
                        <li><span className="font-bold">Awards: </span>Summa Cum Laude, Dean's Award </li>
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
                        <li><span className="font-bold">CGPA: </span>5.00 (Scale of 5.00)</li>
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
                        <li><span className="font-bold">CGPA: </span>4.56 (Scale of 5.00)</li>
                    </ul>
                    </div>
                </div>
                {/* <h3 className=" font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Certificates</h3> */}
            </div>
        </div>
    </Container>
  );
}

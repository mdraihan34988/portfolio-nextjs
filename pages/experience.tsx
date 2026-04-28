import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';

export default function Experience() {
  return (
    <Container
        title="Experience – Md. Raihanul Islam | Lead Software Engineer"
        description="Professional experience of Md. Raihanul Islam, Lead Software Engineer at Line Reflection LTD and Senior Software Engineer at Nomadiccare Remote, specializing in full-stack web applications, healthcare platforms, SaaS, eCommerce, CRM, LMS, and scalable backend systems."
    >
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full pt-4">
            <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h3 className=" font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Work Experience</h3>
                <div className="flex flex-col w-full py-3 transition-all">
                <div className="metric-card portfolio-card p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                <Link href="https://linereflection.com/" passHref>
                    <a target="_blank" rel="noopener noreferrer" className="company-badge mb-0 max-w-[calc(100%-140px)] sm:max-w-[360px]">
                        <Image
                            alt="Line Reflection LTD logo"
                            height={34}
                            width={34}
                            src="/assets/line-reflection-mark.png"
                            className="object-contain"
                        />
                        <span>Line Reflection LTD</span>
                    </a>
                </Link>
                <div
                    className=
                    'w-[128px] shrink-0 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8] sm:w-[170px]'
                >
                    <div className="flex min-h-[40px] items-center bg-white dark:bg-gray-900 rounded-lg justify-center text-sm font-semibold sm:text-base">
                        2021 - Present
                    </div>
                </div>
                </div>
                    <h2 className="font-bold mt-5 text-lg"><Link href="https://linereflection.com/"><a target="_blank" rel="noopener noreferrer" className="portfolio-link">Lead Software Engineer (Line Reflection LTD)</a></Link></h2>
                        <div className="mt-2 leading-7 text-gray-700 dark:text-gray-200">
                            I currently work as Lead Software Engineer at Line Reflection LTD, building and maintaining production applications across healthcare, SaaS, CRM, eCommerce, LMS, finance, and payment-focused systems. My responsibilities include solution architecture, frontend implementation, backend API development, database design, code review, technical planning, deployment support, and delivery coordination -
                            <ul className="mt-2 px-6 list-disc">
                                    <li>Backend: <span className="font-bold"> Node.js, Laravel, Spring Boot </span></li>
                                    <li>Frontend:<span className="font-bold"> React.js, Next.js </span></li>
                                    <li>Database:<span className="font-bold"> MySQL, MSSQL, PostgreSQL </span></li>
                                    <li>Delivery:<span className="font-bold"> Docker, AWS, Google Cloud Run, CI/CD workflows </span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full py-3 transition-all">
                <div className="metric-card portfolio-card p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                <Link href="https://nomadiccare.com.au/" passHref>
                    <a target="_blank" rel="noopener noreferrer" className="company-badge mb-0 max-w-[calc(100%-140px)] sm:max-w-[360px]">
                        <Image
                            alt="Nomadiccare logo"
                            height={34}
                            width={34}
                            src="/assets/nomadiccare-mark.png"
                            className="object-contain"
                        />
                        <span>Nomadiccare</span>
                    </a>
                </Link>
                <div
                    className=
                    'w-[128px] shrink-0 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] sm:w-[170px]'
                >
                    <div className="flex min-h-[40px] items-center bg-white dark:bg-gray-900 rounded-lg justify-center text-sm font-semibold sm:text-base">
                        Current
                    </div>
                </div>
                </div>
                    <h2 className="font-bold mt-5 text-lg"><Link href="https://nomadiccare.com.au/"><a target="_blank" rel="noopener noreferrer" className="portfolio-link">Senior Software Engineer - Remote (Nomadiccare)</a></Link></h2>
                        <div className="mt-2 leading-7 text-gray-700 dark:text-gray-200">
                            I currently work remotely with Nomadiccare on digital healthcare products that help clinicians coordinate care plans, improve patient engagement, and deliver connected care experiences across web and mobile applications.
                            <ul className="mt-2 px-6 list-disc">
                                    <li>Frontend:<span className="font-bold"> React.js, responsive healthcare UI workflows </span></li>
                                    <li>Mobile:<span className="font-bold"> Swift iOS, Kotlin Android </span></li>
                                    <li>Platform:<span className="font-bold"> Firebase, care plan management, patient engagement </span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full py-3 transition-all">
                <div className="metric-card portfolio-card p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                <Link href="https://www.aiub.edu/" passHref>
                    <a target="_blank" rel="noopener noreferrer" className="company-badge mb-0 max-w-[calc(100%-140px)] sm:max-w-[360px]">
                        <Image
                            alt="American International University-Bangladesh logo"
                            height={34}
                            width={34}
                            src="/assets/aiub-logo.svg"
                            className="object-contain"
                        />
                        <span>AIUB</span>
                    </a>
                </Link>
                <div
                    className=
                    'w-[128px] shrink-0 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8] sm:w-[170px]'
                >
                    <div className="flex min-h-[40px] items-center bg-white dark:bg-gray-900 rounded-lg justify-center text-sm font-semibold sm:text-base">
                        2020 - 2021 
                    </div>
                </div>
                </div>
                    <h2 className="font-bold mt-5 text-lg"><Link href="https://www.aiub.edu/"><a target="_blank" rel="noopener noreferrer" className="portfolio-link">Teaching Assistant (American International University-Bangladesh)</a></Link></h2>
                        <p className="mt-2 leading-7 text-gray-700 dark:text-gray-200">
                        I worked as a Teaching Assistant at American International University-Bangladesh for Web Technologies and C# courses. I supported course delivery by preparing documentation, demo projects, slides, and hands-on guidance for students learning programming and web development fundamentals.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full py-3 transition-all">
                <div className="metric-card portfolio-card p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                <Link href="https://www.aiub.edu/" passHref>
                    <a target="_blank" rel="noopener noreferrer" className="company-badge mb-0 max-w-[calc(100%-140px)] sm:max-w-[360px]">
                        <Image
                            alt="American International University-Bangladesh logo"
                            height={34}
                            width={34}
                            src="/assets/aiub-logo.svg"
                            className="object-contain"
                        />
                        <span>AIUB Computer Club</span>
                    </a>
                </Link>
                <div
                    className=
                    'w-[128px] shrink-0 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] sm:w-[170px]'
                >
                    <div className="flex min-h-[40px] items-center bg-white dark:bg-gray-900 rounded-lg justify-center text-sm font-semibold sm:text-base">
                        2019 - 2021 
                    </div>
                </div>
                </div>
                    <h2 className="font-bold mt-5 text-lg"><Link href="https://www.aiub.edu/"><a target="_blank" rel="noopener noreferrer" className="portfolio-link">General Member (AIUB Computer Club)</a></Link></h2>
                        <p className="mt-2 leading-7 text-gray-700 dark:text-gray-200">
                        I contributed to university technology events, seminars, programming activities, and student community work through AIUB Computer Club.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
}

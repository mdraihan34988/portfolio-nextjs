import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import { MdOutlineLink } from 'react-icons/md';

export default function Education() {
  const educationItems = [
    {
      name: 'AIUB',
      title: 'American International University-Bangladesh (AIUB)',
      href: 'https://www.aiub.edu/',
      logo: '/assets/aiub-logo.svg',
      timeframe: '2017 - 2021',
      gradient: 'from-[#D8B4FE] to-[#818CF8]',
      details: (
        <ul className="mt-3 px-6 list-disc leading-7 text-gray-700 dark:text-gray-200">
          <li><span className="font-bold">Bachelor of Science</span> in Computer Science and Engineering</li>
          <li>
            <span className="inline-flex flex-wrap items-center gap-1.5">
              <span className="font-bold">CGPA:</span> 3.99 (Scale of 4.00)
              <Link href="https://drive.google.com/file/d/1WhhhojIyD00yvsM7STNcfNzR6TNMbvKB/view?usp=sharing" passHref>
                <a
                  title="View Certificate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black dark:hover:text-white"
                >
                  <MdOutlineLink className="w-5 h-5 hover:scale-110 active:scale-90 transition-all" />
                </a>
              </Link>
            </span>
          </li>
          <li>
            <span className="font-bold">Awards: </span>
            <Link href="https://drive.google.com/file/d/134CeYSip9xAbblZ2lYfqW40yW8jKX_6w/view?usp=sharing" passHref>
              <a target="_blank" rel="noopener noreferrer" className="portfolio-link">Summa Cum Laude</a>
            </Link>
            {', '}
            <Link href="https://drive.google.com/file/d/1eVGm_7XB6WDGLBgC7CEb6vQd8ZXBH1Df/view?usp=sharing" passHref>
              <a target="_blank" rel="noopener noreferrer" className="portfolio-link">Dean&apos;s Award Fall 2018-2019</a>
            </Link>
            {', '}
            <Link href="https://drive.google.com/file/d/1Woqqf4nYCTQybLgJl_WuiPfQWWTMUnOt/view?usp=sharing" passHref>
              <a target="_blank" rel="noopener noreferrer" className="portfolio-link">Dean&apos;s Award Spring 2018-2019</a>
            </Link>
          </li>
        </ul>
      )
    },
    {
      name: 'MSC',
      title: 'Metropolitan School & College',
      href: 'https://metropolitan.edu.bd/',
      logo: '/assets/metropolitan-logo.jpg',
      timeframe: '2014 - 2016',
      gradient: 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
      details: (
        <ul className="mt-3 px-6 list-disc leading-7 text-gray-700 dark:text-gray-200">
          <li>Higher Secondary School Certificate <span className="font-bold">(HSC)</span></li>
          <li><span className="font-bold">Group:</span> Science</li>
          <li>
            <span className="inline-flex flex-wrap items-center gap-1.5">
              <span className="font-bold">CGPA:</span> 5.00 (Scale of 5.00)
              <Link href="https://drive.google.com/file/d/1OBJqogVBL4kLggNRW4aWBMvXRi_GirsB/view?usp=sharing" passHref>
                <a
                  title="View Certificate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black dark:hover:text-white"
                >
                  <MdOutlineLink className="w-5 h-5 hover:scale-110 active:scale-90 transition-all" />
                </a>
              </Link>
            </span>
          </li>
        </ul>
      )
    },
    {
      name: 'ASN',
      title: 'Adarsha School Narayanganj',
      href: 'https://adarshaschool.edu.bd/',
      logo: '/assets/adarsha-logo.jpg',
      timeframe: '2012 - 2014',
      gradient: 'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
      details: (
        <ul className="mt-3 px-6 list-disc leading-7 text-gray-700 dark:text-gray-200">
          <li>Secondary School Certificate <span className="font-bold">(SSC)</span></li>
          <li><span className="font-bold">Group:</span> Science</li>
          <li>
            <span className="inline-flex flex-wrap items-center gap-1.5">
              <span className="font-bold">CGPA:</span> 4.56 (Scale of 5.00)
              <Link href="https://drive.google.com/file/d/1RpEXN0bhjcFdmPAp1YzGlnbu2mszNUpS/view?usp=sharing" passHref>
                <a
                  title="View Certificate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black dark:hover:text-white"
                >
                  <MdOutlineLink className="w-5 h-5 hover:scale-110 active:scale-90 transition-all" />
                </a>
              </Link>
            </span>
          </li>
        </ul>
      )
    }
  ];

  return (
    <Container title="Education – Raihanul Islam">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full pt-4">
        <div className="section-title flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h3 className="font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">Education</h3>
          {educationItems.map((item) => (
            <div className="flex flex-col w-full py-3 transition-all" key={item.title}>
              <div className="metric-card portfolio-card p-5 md:p-6">
                <div className="flex items-start justify-between gap-3">
                  {item.href ? (
                    <Link href={item.href} passHref>
                      <a target="_blank" rel="noopener noreferrer" className="company-badge mb-0 max-w-[calc(100%-140px)] sm:max-w-[360px]">
                        {item.logo ? (
                          <Image
                            alt={`${item.title} logo`}
                            height={34}
                            width={34}
                            src={item.logo}
                            className="object-contain"
                          />
                        ) : (
                          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                            {item.name}
                          </span>
                        )}
                        <span>{item.name}</span>
                      </a>
                    </Link>
                  ) : (
                    <div className="company-badge mb-0 max-w-[calc(100%-140px)] sm:max-w-[360px]">
                      <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                        {item.name}
                      </span>
                      <span>{item.name}</span>
                    </div>
                  )}
                  <div className={`w-[128px] shrink-0 transition-all rounded-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r p-1 ${item.gradient} sm:w-[170px]`}>
                    <div className="flex min-h-[40px] items-center bg-white dark:bg-gray-900 rounded-lg justify-center text-sm font-semibold sm:text-base">
                      {item.timeframe}
                    </div>
                  </div>
                </div>

                <h2 className="font-bold mt-5 text-lg">
                  {item.href ? (
                    <Link href={item.href}>
                      <a target="_blank" rel="noopener noreferrer" className="portfolio-link">{item.title}</a>
                    </Link>
                  ) : (
                    <span className="text-gray-900 dark:text-gray-100">{item.title}</span>
                  )}
                </h2>
                {item.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

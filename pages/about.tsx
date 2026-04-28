import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';
import moment from 'moment';

export default function About() {
  return (
    <Container
      title="About Md. Raihanul Islam – Full Stack Software Engineer"
      description="Learn about Md. Raihanul Islam, a Lead Software Engineer and Senior Software Engineer Remote with experience in React, Next.js, Node.js, Laravel, Spring Boot, healthcare software, SaaS, eCommerce, CRM, LMS, and payment integrations."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full pt-4">
        <h1 className="font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark px-6">
          <h3>Job Title</h3>
          <p>Md. Raihanul Islam, Lead Software Engineer at <b><Link target="_blank" href={"https://linereflection.com/"} passHref className='cursor-pointer'>Line Reflection LTD</Link></b> and Senior Software Engineer at <b><Link target="_blank" href={"https://nomadiccare.com.au/"} passHref className='cursor-pointer'>Nomadiccare</Link></b> Remote</p>
          <h3>Bio</h3>
          <p>I am a full-stack software engineer focused on building scalable, maintainable, and user-friendly business applications. I have {moment().diff(moment("2021-06-01"), 'years')} years of professional industry experience and {moment().diff(moment("2019-06-01"), 'years')} years of hands-on software development experience across React, Next.js, Node.js, Laravel, Spring Boot, MySQL, MSSQL, Firebase, Docker, and cloud deployment workflows.</p>
          <p>At Line Reflection LTD, I lead full-stack development for production applications across SaaS, eCommerce, CRM, LMS, finance, healthcare, and payment-enabled platforms. At Nomadiccare, I work remotely as a Senior Software Engineer on connected healthcare products that help clinicians and care teams manage digital care plans, patient engagement, and mobile-first care workflows.</p>
          <h3>Core Skillset</h3>
          <p>React.js, Next.js, JavaScript, TypeScript, Node.js, Express.js, Laravel, PHP, Spring Boot, REST API, MySQL, MSSQL, PostgreSQL, Firebase, Redis, Kafka, Docker, AWS, Google Cloud Run, Tailwind CSS, Bootstrap, Git, payment gateway integration, healthcare workflow development, SaaS architecture, eCommerce platforms, CRM systems, LMS products, and admin dashboards.</p>
          {/* <h3>Education</h3>
          <ul>
            <li>
              Graduated from <b>American International University-Bangladesh (AIUB)</b> with a <b>B.Sc in
              Computer Science and Engineering (2017-2021)</b>
            </li>
            <li>
              Higher Secondary School Certificate (HSC) from <b>Metropolitan College</b> with <b>Science Background (2014-2016)</b>
            </li>
            <li>
              Secondary School Certificate (SSC) from <b>Adarsha School Narayanganj</b> with a <b>Science Background (2012-2014)</b>
            </li>
          </ul> */}
          {/* <h2>Headshots</h2> */}
          {/* <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Raihanul Islam headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Raihanul Islam headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div> */}
          
          {/* <h2>Contact Me</h2>
          <ul>
            <li>
              Phone: +880-17800-34452
            </li>
            <li>
              Email: <a href="mailto:mdraihanulislam716@gmail.com">mdraihanulislam716@gmail.com</a>
            </li>
          </ul> */}
          <h3>Personal Information</h3>
          <ul className="flex gap-6 flex-col md:flex-row about-ul ">
            <li className=" w-full md:w-1/2"><span className="font-bold">Work : </span>Lead Software Engineer</li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Freelance : </span>Available</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row about-ul">
            <li className=" w-full md:w-1/2"><span className="font-bold">Birthday : </span>27 January 1998 </li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Age : </span>{moment().diff('1998-01-27', 'years')}</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row about-ul">
            <li className=" w-full md:w-1/2"><span className="font-bold">City : </span>Dhaka</li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Country : </span>Bangladesh</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row about-ul">
            <li className=" w-full md:w-1/2"><span className="font-bold">Height : </span>5<sup>'</sup>4<sup>"</sup></li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Weight : </span>72kg</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row about-ul">
            <li className=" w-full md:w-1/2"><span className="font-bold">Blood Group : </span>O<sup>+</sup></li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Religion : </span>Islam</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row about-ul">
            <li className=" w-full md:w-1/2"><span className="font-bold">Gender : </span>Male</li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Language : </span>Bangla, English</li>
          </ul>
          {/* <ul className="flex gap-6 flex-col md:flex-row">
            <li className=" w-full"><span className="font-bold">Degree : </span>BSc. in Computer Science and Engineering</li>
          </ul> */}
          
        </div>
      </div>
    </Container>
  );
}

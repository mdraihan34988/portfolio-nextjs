import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';
import moment from 'moment';

export default function About() {
  return (
    <Container title="About – Raihanul Islam">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-xl md:text-3xl tracking-tight text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark px-6">
          <h2>Job Title</h2>
          <p>Md. Raihanul Islam, Associate Software Engineer at <b>Line Reflection LTD</b></p>
          <h3>Bio</h3>
          <p>I have 2 years of industrial experience. In this period of time I am working with reactjs, nodejs stack. I am working myself to gain that knowledge as much as I can.</p>
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
          <ul className="flex gap-6 flex-col md:flex-row">
            <li className=" w-full md:w-1/2"><span className="font-bold">Work : </span>Full Stack Developer</li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Freelance : </span>Available</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row">
            <li className=" w-full md:w-1/2"><span className="font-bold">Birthday : </span>27 January 1998 </li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Age : </span>{moment().diff('1998-01-27', 'years')}</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row">
            <li className=" w-full md:w-1/2"><span className="font-bold">City : </span>Dhaka</li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Country : </span>Bangladesh</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row">
            <li className=" w-full md:w-1/2"><span className="font-bold">Gender : </span>Male</li>
            <li className=" w-full md:w-1/2"><span className="font-bold">Language : </span>Bangla, English</li>
          </ul>
          <ul className="flex gap-6 flex-col md:flex-row">
            <li className=" w-full"><span className="font-bold">Degree : </span>BSc. in Computer Science and Engineering</li>
          </ul>
          
        </div>
      </div>
    </Container>
  );
}

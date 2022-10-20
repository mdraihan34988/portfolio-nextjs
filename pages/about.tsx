import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Raihanul Islam">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark px-6">
          <h2>Job Title</h2>
          <p>Md. Raihanul Islam, Associate Software Engineer at <b>Line Reflection LTD</b></p>
          <h3>Bio</h3>
          <p>I have 2 years of industrial experience. In this period of time I am working with reactjs, nodejs stack. I am working myself to gain that knowledge as much as I can.</p>
          <h3>Education</h3>
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
          </ul>
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
        </div>
      </div>
    </Container>
  );
}

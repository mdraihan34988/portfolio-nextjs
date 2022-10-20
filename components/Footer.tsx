import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      {/* <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-8 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About Me
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Contact Me
            </a>
          </Link>
        </div>
      
        
        
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.facebook.com/raihanulmd/">

            Facebook
          </ExternalLink>
          <ExternalLink href="https://github.com/mdraihan34988">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/mdraihanulislam/">
            Linkdin
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
         
          <ul>
           <li className="text-gray-500 hover:text-gray-600 transition">Address : Dhaka, Bangladesh</li>
          </ul>
          <ul>
            <li className="text-gray-500 hover:text-gray-600 transition">Phone : +880-17800-34452</li>
          </ul>
          <Link href="mailto:mdraihanulislam716@gmail.com">
            <a className="text-gray-500 hover:text-gray-600 transition">mdraihanulislam716@gmail.com</a>
          </Link>
        </div>
      </div> */}
      <div className="w-full flex justify-center">
        <h6 className="content-center tracking-tight text-black dark:text-white ">Copyright © 2021 <span style={{fontWeight: 'bold'}}>Md Raihanul Islam</span> </h6>
      </div>
    </footer>
  );
}

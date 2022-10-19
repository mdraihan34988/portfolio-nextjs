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
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-8 sm:grid-cols-3">
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
          {/* <svg
              className="w-6 h-6 text-blue-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg> */}
            Facebook
          </ExternalLink>
          <ExternalLink href="https://github.com/mdraihan34988">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/mdraihanulislam/">
            Linkdin
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          {/* <a target="_blank" href="https://www.facebook.com/raihanulmd/">
            <svg
              className="w-6 h-6 text-blue-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a> */}
          <ul>
           <li className="text-gray-500 hover:text-gray-600 transition">Address : Dhaka, Bangladesh</li>
          </ul>
          <ul>
            <li className="text-gray-500 hover:text-gray-600 transition">Phone : +880-17800-34452</li>
          </ul>
          <Link href="mailto:mdraihanulislam716@gmail.com">
            <a className="text-gray-500 hover:text-gray-600 transition">mdraihanulislam716@gmail.com</a>
          </Link>
          {/* <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Guestbook
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link> */}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h6 className="content-center tracking-tight text-black dark:text-white ">Copyright © 2021 <span style={{fontWeight: 'bold'}}>Md Raihanul Islam</span> All rights reserved.</h6>
      </div>
    </footer>
  );
}

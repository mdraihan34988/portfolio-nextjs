import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import Image from 'next/image';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const navRef = useRef(null);
  const control = useAnimation();

  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current.classList.add(
        ...[
          "shadow-xl",
          "backdrop-blur-xl",
          "bg-gray",
          "dark:bg-darkSecondary",
        ]
      );

      control.start("visible");
    } else {
      navRef.current.classList.remove(
        ...[
          "shadow-xl",
          "backdrop-blur-xl",
          "bg-gray",
          "dark:bg-darkSecondary",
        ]
      );
      control.start("hidden");
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener("scroll", addShadowToNavbar);
    return () => {
      window.removeEventListener("scroll", addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Md. Raihanul Islam – Lead Software Engineer | Full Stack Developer',
    description: `Md. Raihanul Islam is a Lead Software Engineer and Senior Software Engineer specializing in React, Next.js, Node.js, Laravel, Spring Boot, healthcare platforms, SaaS, eCommerce, CRM, LMS, and scalable full-stack web applications.`,
    image: 'https://mdraihan.netlify.app/avatar.jpg',
    keywords:
      'Md Raihanul Islam, Raihanul Islam, Lead Software Engineer, Senior Software Engineer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, Laravel Developer, Spring Boot Developer, JavaScript Developer, TypeScript Developer, Healthcare Software Engineer, SaaS Developer, Dhaka Bangladesh Software Engineer',
    type: 'website',
    ...customMeta
  };
  const siteUrl = `https://mdraihan.netlify.app${router.asPath}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Md. Raihanul Islam',
    url: 'https://mdraihan.netlify.app',
    image: meta.image,
    jobTitle: ['Lead Software Engineer', 'Senior Software Engineer', 'Full Stack Developer'],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Line Reflection LTD',
        url: 'https://linereflection.com/'
      },
      {
        '@type': 'Organization',
        name: 'Nomadiccare',
        url: 'https://nomadiccare.com.au/'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh'
    },
    sameAs: [
      'https://www.linkedin.com/in/mdraihanulislam/',
      'https://github.com/mdraihan34988'
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'Laravel',
      'Spring Boot',
      'MySQL',
      'MSSQL',
      'Firebase',
      'Healthcare Software',
      'SaaS',
      'eCommerce',
      'CRM',
      'Learning Management Systems'
    ]
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content="Md. Raihanul Islam" />
        <meta property="og:url" content={siteUrl} />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Raihanul Islam" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8 sticky top-0 z-30" ref={navRef}>
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-4  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          {/* <a href="#skip" className="skip-nav">
            Skip to content
          </a> */}
          <div className="ml-[-0.60rem]" >
            <MobileMenu />
            <NavItem href="/" text="Home" />
            
            {/* <NavItem href="/guestbook" text="Guestbook" /> */}
            <NavItem href="/about" text="About" />
            <NavItem href="/education" text="Education" />
            {/* <NavItem href="/blog" text="Blog" /> */}
            <NavItem href="/experience" text="Experience" />
            <NavItem href="/service" text="Service" />
            <NavItem href="/project" text="Projects" />
            <NavItem href="/contact" text="Contact" />

          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}

import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
      <NextNProgress/>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

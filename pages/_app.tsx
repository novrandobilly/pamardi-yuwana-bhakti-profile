import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageContextProvider } from '../intl/LanguageProvider';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import Layout from '../components/Layout';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <LanguageContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageContextProvider>
    </SessionProvider>
  );
}

export default MyApp;

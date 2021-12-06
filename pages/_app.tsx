import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageContextProvider } from '../intl/LanguageProvider';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContextProvider>
  );
}

export default MyApp;

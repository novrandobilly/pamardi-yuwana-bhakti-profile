import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageContextProvider } from '../intl/LanguageProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <Component {...pageProps} />
    </LanguageContextProvider>
  );
}

export default MyApp;

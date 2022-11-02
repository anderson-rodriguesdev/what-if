import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { globalStyles } from '../styles/global';
globalStyles();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

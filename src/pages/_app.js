// pages/_app.js
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import NetflixLoader from '../../components/NetflixLoader';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        setTimeout(() => {
          preloader.classList.add('hidden');
          setIsLoading(false);
        }, 1500);
      } else {
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <NetflixLoader />
    </>
  );
}

export default MyApp;

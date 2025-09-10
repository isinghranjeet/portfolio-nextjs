// pages/_app.js
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preloader logic - only run on client side
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
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <Layout>
      {isLoading && (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      )}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
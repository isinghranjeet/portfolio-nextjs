import Header from './Header';

import Footer from './Footer';
import BackToTop from './BackToTop';
import WhatsAppIcon from './WhatsAppIcon';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>{children}</main>
     
      <BackToTop />
      <WhatsAppIcon />
        <Footer /> 

    </div>
  );
};

export default Layout;


// import Header from './Header';
// import Footer from './Footer';
// import BackToTop from './BackToTop';

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//       <BackToTop />
//     </>
//   );
// };

// export default Layout;
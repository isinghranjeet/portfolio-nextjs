import Head from 'next/head';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ranjeet Singh | Web Developer Portfolio</title>
        <meta name="description" content="Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
     
      
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />

    </div>
  );
}
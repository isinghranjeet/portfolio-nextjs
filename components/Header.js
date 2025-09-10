import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="logo">R<span>S</span></Link>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="#home" onClick={closeMenu}>Home</Link></li>
            <li><Link href="#about" onClick={closeMenu}>About</Link></li>
            <li><Link href="#experience" onClick={closeMenu}>Experience</Link></li>
            <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link href="#testimonials" onClick={closeMenu}>Testimonials</Link></li>
            <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <div 
            className="menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
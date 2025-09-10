const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <a href="#" className="footer-logo">Ranjeet Singh</a>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer-social">
            <a href="https://github.com/isinghranjeet"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ranjeet-kumar-37016128b/"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="copyright">&copy; 2025 Ranjeet Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
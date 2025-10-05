// Basic usage
const Header = () => {
  const { isScrolled, scrollDirection } = useScroll({ threshold: 50 });
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      {/* Header content */}
    </header>
  );
};

// Advanced usage with progress tracking
const ProgressIndicator = () => {
  const { scrollProgress, isScrolling } = useScroll({
    enableProgressTracking: true,
    debounceScrollEnd: true
  });

  return (
    <div className={`progress-bar ${isScrolling ? 'visible' : ''}`}>
      <div 
        className="progress-fill" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

// Using scroll methods
const Navigation = () => {
  const { scrollToElement, scrollToTop } = useScroll();

  return (
    <nav>
      <button onClick={() => scrollToTop()}>Top</button>
      <button onClick={() => scrollToElement('about', 100)}>About</button>
      <button onClick={() => scrollToElement('contact')}>Contact</button>
    </nav>
  );
};

// Using scroll spy
const TableOfContents = () => {
  const sections = ['intro', 'about', 'projects', 'contact'];
  const activeSection = useScrollSpy(sections);

  return (
    <div className="toc">
      {sections.map(section => (
        <a
          key={section}
          href={`#${section}`}
          className={activeSection === section ? 'active' : ''}
        >
          {section}
        </a>
      ))}
    </div>
  );
};
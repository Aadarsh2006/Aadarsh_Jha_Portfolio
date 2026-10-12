
import './Navbar.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        AJ<span>.</span>
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="/resume/Aadarsh_Jha_CV_Updated.pdf"
        className="navbar-resume"
        target="_blank"
        rel="noreferrer"
      >
        Resume <span>↗</span>
      </a>
    </header>
  );
}

export default Navbar;

const navLinks = [
  { name: "Home", section: "hero" },
  { name: "Work", section: "work" },
  { name: "About", section: "about" },
  { name: "Contact", section: "contact", special: true },
];

import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav>
      <ul className="flex items-center justify-center gap-6 container mx-auto mt-[20px]">
        {navLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => scrollToSection(link.section)}
              className={`nav-links cursor-pointer ${
                link.special
                  ? "bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

import { useState, useEffect } from "react";

const navbarItems = ["Home", "Features", "About", "Contact"];

export default function Navbar({ targetRef }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const targetPosition = targetRef.current.getBoundingClientRect().top;
        setIsScrolled(targetPosition <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "-translate-y-full"
          : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <h1 className="text-2xl font-bold">
          <a href="#">Heartify</a>
        </h1>
        <ul className="hidden md:flex space-x-6 text-lg">
          {navbarItems.map((item, index) => (
            <li key={`navbar-${index}`}>
              <a href="#" className="hover:text-[#d01760] hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

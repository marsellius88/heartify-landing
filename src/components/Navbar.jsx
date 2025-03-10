import { useState, useEffect } from "react";

const navbarItems = ["Home", "About", "Services", "Contact"];

export default function Navbar({ targetRef }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    <>
      {/* Navbar */}
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

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 text-lg">
            {navbarItems.map((item, index) => (
              <li key={`navbar-${index}`}>
                <a href="#" className="hover:text-[#d01760] hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden focus:outline-none cursor-pointer"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-4 text-lg">
          {/* Close button */}
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="self-end focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Drawer items */}
          {navbarItems.map((item, index) => (
            <button
              key={`drawer-${index}`}
              className="w-full bg-gray-200 rounded px-3 py-2 text-left text-gray-800 hover:text-[#d01760] font-bold cursor-pointer"
              onClick={() => setIsDrawerOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Background overlay when drawer open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
}

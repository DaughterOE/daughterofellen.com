import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/doe-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Tende by DOE", path: "/tende" },
  { label: "Projects", path: "/projects" },
  { label: "Events", path: "/events" },
  { label: "Media", path: "/media" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("doe-theme") === "dark";
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("doe-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-nav ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Daughter of Ellen"
            className={`transition-all duration-300 dark:brightness-0 dark:invert ${scrolled ? "h-10" : "h-14"}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`underline-sweep font-body text-sm tracking-wide transition-colors duration-200 hover:text-secondary ${
                location.pathname === link.path
                  ? "text-secondary font-semibold"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-muted"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/partner"
            className="hidden animate-float rounded-full border-2 border-secondary bg-secondary px-5 py-2 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:shadow-lg md:inline-block"
          >
            Partner With Us
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-base transition-colors ${
                  location.pathname === link.path
                    ? "text-secondary font-semibold"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/partner"
              className="mt-2 rounded-full border-2 border-secondary bg-secondary px-5 py-2.5 text-center font-body text-sm font-semibold text-secondary-foreground"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
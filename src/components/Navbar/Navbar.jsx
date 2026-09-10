import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="
          fixed
          left-1/2
          top-4
          z-50
          w-[92%]
          max-w-6xl
          -translate-x-1/2
          rounded-full
          border
          border-white/15
          bg-white/[0.08]
          px-3
          py-2
          shadow-[0_8px_35px_rgba(0,0,0,0.25)]
          backdrop-blur-3xl
          backdrop-saturate-150
          ring-1
          ring-inset
          ring-white/5
        "
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="
              flex
              shrink-0
              items-center
              gap-2
              rounded-full
              px-2
              py-1
            "
          >
            <img
              src={logo}
              alt="Canien Tech"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-white/10 text-cyan-300"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Login */}
          <Link
            to="/login"
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-cyan-300/20
              bg-cyan-400/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-300/35
              hover:bg-cyan-400/20
              hover:text-white
              lg:flex
            "
          >
            {/* User icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path
                d="M5.5 19c.8-3.2 3-5 6.5-5s5.7 1.8 6.5 5"
                strokeLinecap="round"
              />
            </svg>

            Employee Login
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-white/80
              transition-all
              duration-300
              hover:bg-white/10
              hover:text-white
              lg:hidden
            "
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden
            ${
              menuOpen
                ? "max-h-[500px] pt-3 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-black/20
              p-2
              backdrop-blur-2xl
            "
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                    block
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-white/10 text-cyan-300"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={closeMenu}
              className="
                mt-1
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-cyan-300/20
                bg-cyan-400/10
                px-4
                py-3
                text-sm
                font-medium
                text-cyan-300
                transition-all
                duration-300
                hover:bg-cyan-400/20
                hover:text-white
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path
                  d="M5.5 19c.8-3.2 3-5 6.5-5s5.7 1.8 6.5 5"
                  strokeLinecap="round"
                />
              </svg>

              Employee Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
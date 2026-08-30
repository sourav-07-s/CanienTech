import { Link  } from "react-router-dom";
import logo from "../../assets/logo.webp";


const Navbar = () => {
  return (
    <nav
      className="
    fixed
    left-1/2
    top-4
    z-50

    w-[90%]
    max-w-6xl
    -translate-x-1/2

    rounded-full

    border
    border-white/10

    bg-white/4.5

    px-4
    py-2

    shadow-[0_10px_40px_rgba(0,0,0,0.35)]

    backdrop-blur-2xl
    backdrop-saturate-150

    ring-1
    ring-inset
    ring-white/5

    transition-all
    duration-300

    hover:border-white/15
    hover:bg-white/6
  "
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="h-15 w-15 overflow-hidden rounded-xl">
            <img
              src={logo}
              alt="Canien Tech Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-white">Canien Tech</h1>

            <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              Digital Solutions
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          <NavLink to="/services">What We Do</NavLink>

          <NavLink to="/about">Who We Are</NavLink>

          <NavLink to="/insights">Insights</NavLink>

          <NavLink to="/careers">Careers</NavLink>

          {/* Divider */}
          <div className="mx-3 h-7 w-px bg-white/10" />

          {/* Login */}

          <Link
            to="/login"
            className="
    flex items-center gap-2
    rounded-full
    px-4 py-2
    text-sm font-medium
    text-white/70
    transition-all
    hover:bg-white/8
    hover:text-white
  "
          >
            {/* User Icon */}
            <span
              className="
      flex h-7 w-7
      items-center justify-center
      rounded-full
      border border-white/10
      bg-white/6
      transition-all
      group-hover:border-cyan-300/30
      group-hover:bg-cyan-400/10
    "
            >
              <svg
                className="h-4 w-4 text-white/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path
                  d="M5 20c.8-3.5 3.2-5.5 7-5.5s6.2 2 7 5.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Employee Login
          </Link>
          {/* Contact */}
          <Link
            to="/contact"
            className="
              ml-2
              rounded-4xl
              border border-cyan-300/90
              bg-cyan-400/20
              px-6 py-3
              text-sm font-semibold
              text-white
              transition
              hover:bg-cyan-400/35
              hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="
        group
        relative
        rounded-xl
        px-4 py-3
        text-sm font-medium
        text-white/70
        transition
        hover:text-white
      "
    >
      {children}

      <span
        className="
          absolute
          bottom-1
          left-1/2
          h-0.5
          w-0
          -translate-x-1/2
          rounded-full
          bg-cyan-300
          shadow-[0_0_10px_rgba(103,232,249,0.8)]
          transition-all
          duration-300
          group-hover:w-1/2
        "
      />
    </Link>
  );
};

export default Navbar;

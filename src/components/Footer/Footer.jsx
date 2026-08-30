import { Link } from "react-router-dom";

import logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="group flex items-center gap-3">
              <div className="h-15 w-15 overflow-hidden rounded-xl">
                <img
                  src={logo}
                  alt="Canien Tech Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">
                  Canien Tech
                </h2>

                <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
                  Digital Solutions
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/45">
              Building modern digital experiences and technology solutions that
              help businesses grow.
            </p>

            {/* Social Links */}

            <div className="mt-6 flex gap-3">
              <SocialIcon label="in">LinkedIn</SocialIcon>

              <SocialIcon label="GH">GitHub</SocialIcon>

              <SocialIcon label="X">X</SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Company</h3>

            <div className="space-y-3">
              <FooterLink to="/about">Who We Are</FooterLink>

              <FooterLink to="/insights">Insights</FooterLink>

              <FooterLink to="/careers">Careers</FooterLink>

              <FooterLink to="/contact">Contact</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Services</h3>

            <div className="space-y-3">
              <FooterLink to="/services">Cloud Solutions</FooterLink>

              <FooterLink to="/services">Software Development</FooterLink>

              <FooterLink to="/services">Digital Marketing</FooterLink>

              <FooterLink to="/services">Cybersecurity</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:hello@canientech.com"
                className="
                  block
                  text-sm
                  text-white/45
                  transition
                  hover:text-cyan-300
                "
              >
                hello@canientech.com
              </a>

              <p className="text-sm leading-6 text-white/45">India</p>
            </div>

            {/* Contact Button */}

            <Link
              to="/contact"
              className="
                mt-6
                inline-flex
                rounded-full
                border border-cyan-300/20
                bg-cyan-400/10
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition-all
                hover:border-cyan-300/40
                hover:bg-cyan-400/20
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              "
            >
              Let's Talk →
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            text-sm
            text-white/35

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>© {new Date().getFullYear()} Canien Tech. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white/70">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white/70">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =========================================
   FOOTER LINK
========================================= */

const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="
        block
        text-sm
        text-white/45
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-cyan-300
      "
    >
      {children}
    </Link>
  );
};

/* =========================================
   SOCIAL ICON
========================================= */

const SocialIcon = ({ label, children }) => {
  return (
    <a
      href="#"
      aria-label={children}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center

        rounded-full

        border
        border-white/10

        bg-white/4

        text-[10px]
        font-semibold
        text-white/50

        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-cyan-300/20
        hover:bg-cyan-400/10
        hover:text-cyan-300
      "
    >
      {label}
    </a>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import logo from "@/assets/doe-logo.png";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Mission", path: "/mission" },
  { label: "Vision", path: "/vision" },
  { label: "Our Pillars", path: "/pillars" },
  { label: "Tende by DOE", path: "/tende" },
  { label: "Access Fund", path: "/access-fund" },
  { label: "Projects", path: "/projects" },
  { label: "Abuja Declaration", path: "/abuja-declaration" },
  { label: "Our Founder", path: "/founder" },
  { label: "In the Media", path: "/media" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Partners", path: "/partner" },
  { label: "Community", path: "https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW", external: true },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card section-padding">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 md:grid-cols-4">
        {/* Logo and Tagline */}
        <div className="md:col-span-1">
          <img src={logo} alt="Daughter of Ellen" className="mb-4 h-16 dark:brightness-0 dark:invert" />
          <p className="text-sm font-heading italic text-foreground">Celebrating Every Child's Brilliance.</p>
          <p className="mt-1 text-xs text-muted-foreground">An initiative of the Evon Anthony Brand</p>
          {/* Social Media Icons */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/_daughterofellen"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCIh1_524EWN_IfS-M5yO0Vw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: "#FF0000" }}
              aria-label="YouTube"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: "#25D366" }}
              aria-label="WhatsApp Community"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.594 5.392l-.999 3.648 3.748-.99zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">Navigate</h4>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {footerLinks.map((l) =>
              (l as any).external ? (
                <a
                  key={l.path}
                  href={l.path}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                >
                  {l.label}
                </a>
              ) : (
                <Link key={l.path} to={l.path} className="text-sm text-muted-foreground transition-colors hover:text-secondary">
                  {l.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:info@daughterofellen.org" className="transition-colors hover:text-secondary">
              info@daughterofellen.org
            </a>
            <a href="https://www.daughterofellen.org" target="_blank" rel="noreferrer" className="transition-colors hover:text-secondary">
              www.daughterofellen.org
            </a>
            <a href="https://www.evonanthony.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-secondary">
              www.evonanthony.com
            </a>
            <span>Abuja, Nigeria</span>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-8 text-center space-y-2">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Daughter of Ellen Support and Empowerment Initiative. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          daughterofellen.org &middot; partnership@daughterofellen.org
        </p>
        <p className="text-xs text-muted-foreground">
          Tende by DOE &middot; A branch of Daughter of Ellen Support and Empowerment Initiative
        </p>
        <p className="mt-4 text-xs font-heading italic text-muted-foreground">
          Every child's uniqueness is a gift, not a limitation.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

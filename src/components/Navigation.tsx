import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  { href: "#research", label: "Research", id: "research" },
  { href: "#publications", label: "Publications", id: "publications" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#stack", label: "Stack", id: "stack" },
  { href: "#contact", label: "Contact", id: "contact" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link ${active ? "text-accent" : "text-muted hover:text-zinc-200"} ${className}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </a>
  );
}

export default function Navigation() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-base/85 backdrop-blur-xl supports-[backdrop-filter]:bg-base/70">
      <nav
        className="mx-auto flex max-w-site items-center justify-between px-6 py-3.5 lg:px-8"
        aria-label="Main"
      >
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          onClick={closeMenu}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 font-mono text-xs font-medium text-accent">
            KA
          </span>
          <span className="hidden text-sm font-medium text-zinc-100 sm:inline">
            Kunal Agrawal
          </span>
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} active={active === link.id} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-border bg-base/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "visible max-h-[24rem] opacity-100" : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-site flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                active={active === link.id}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-2.5 text-sm hover:bg-elevated"
              />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

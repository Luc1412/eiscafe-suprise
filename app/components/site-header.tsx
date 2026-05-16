import { Phone } from "lucide-react";

const navItems = [
  ["Über uns", "/#ueber-uns"],
  ["Angebote", "/#angebote"],
  ["Öffnungszeiten", "/#oeffnungszeiten"],
  ["Kontakt", "/#kontakt"],
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/35 bg-[#fffafc]/90 backdrop-blur-md">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
        <a href="/#start" className="flex items-center gap-3" aria-label="Zur Startseite">
          <span className="grid size-10 place-items-center rounded-full bg-[#AE3460] text-lg font-black text-white shadow-sm">
            S
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg font-bold text-[#201513]">
              Eiscafé Surprise
            </span>
            <span className="block text-xs font-semibold text-[#AE3460]">
              Berlin-Weißensee
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-sm font-bold text-[#3b2a27] transition hover:bg-[#F6E6EB] hover:text-[#201513]"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="tel:+49309251265"
          className="inline-flex items-center gap-2 rounded-full bg-[#201513] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#AE3460]"
        >
          <Phone aria-hidden="true" className="size-4" />
          Anrufen
        </a>
      </nav>
    </header>
  );
}

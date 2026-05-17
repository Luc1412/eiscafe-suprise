import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="bg-[#201513] py-8 text-white">
      <div className="section-shell flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Eis-Café Surprise. Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap items-center gap-5">
          <SocialLinks
            iconOnly
            className="flex items-center gap-2"
            linkClassName="grid size-8 place-items-center rounded-full border border-white/25 text-white transition hover:border-[#f8bbd0] hover:text-[#f8bbd0]"
          />
          <nav
            className="flex flex-wrap items-center gap-5"
            aria-label="Rechtliches und Seitenanfang"
          >
            <Link href="/impressum" className="hover:text-[#f8bbd0]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[#f8bbd0]">
              Datenschutz
            </Link>
            <Link
              href="/#start"
              className="grid size-8 place-items-center rounded-full border border-white/25 text-white transition hover:border-[#f8bbd0] hover:text-[#f8bbd0]"
              aria-label="Nach oben"
              title="Nach oben"
            >
              <ArrowUp aria-hidden="true" className="size-4" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

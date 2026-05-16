import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#201513] py-8 text-white">
      <div className="section-shell flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Eiscafé Surprise. Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/impressum" className="hover:text-[#f8bbd0]">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-[#f8bbd0]">
            Datenschutz
          </Link>
          <Link href="/#start" className="hover:text-[#f8bbd0]">
            Nach oben
          </Link>
        </div>
      </div>
    </footer>
  );
}

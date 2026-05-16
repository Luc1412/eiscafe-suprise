export function SiteFooter() {
  return (
    <footer className="bg-[#201513] py-8 text-white">
      <div className="section-shell flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Eiscafé Surprise. Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/impressum" className="hover:text-[#f8bbd0]">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-[#f8bbd0]">
            Datenschutz
          </a>
          <a href="/#start" className="hover:text-[#f8bbd0]">
            Nach oben
          </a>
        </div>
      </div>
    </footer>
  );
}

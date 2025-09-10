import { NAV } from "../common";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#intro" className="font-serif text-xl tracking-wide">
          <img
            src="/milu-logo.jpeg"
            alt="MiLu Weddings"
            className="inline rounded-full h-8 w-8 mr-2 -mt-1"
          />
          <span className="font-bold">MiLu</span> In Tuscany
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="md:inline-flex hidden rounded-2xl px-4 py-2 bg-zinc-900 text-white text-sm hover:bg-black transition"
        >
          Free Consultation
        </a>
      </div>
    </header>
  );
}

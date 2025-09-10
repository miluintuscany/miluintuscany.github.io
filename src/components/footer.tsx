import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground-400">
          © {new Date().getFullYear()} MiLu In Tuscany — All rights reserved
        </p>
        <div className="flex md:gap-7 gap-4 flex-wrap text-sm mt-2">
          <div className="flex items-center gap-2">
            <Phone width={16} height={16} />
            <a href="tel:+393662550421">+39 366 255 0421</a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram width={16} height={16} />
            <a href="https://instagram.com/miluintuscanyevents">
              @miluintuscanyevents
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail width={16} height={16} />
            <a href="mailto:events@miluintuscany.com">
              events@miluintuscany.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

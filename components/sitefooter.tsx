import Link from "next/link";
import Container from "./container";
import { siteConfig } from "../lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-sky-950 text-white">
      <Container>
        <div className="py-14">
          <div className="grid gap-10 md:grid-cols-4">
            
            {/* About */}
            <div>
              <h3 className="text-base font-semibold">
                {siteConfig.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {siteConfig.motto}
              </p>
              <p className="mt-3 text-sm text-white/70">
                {siteConfig.addressLine}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="hover:text-white">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="hover:text-white">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Admissions Info */}
            <div>
              <h3 className="text-base font-semibold">Admissions</h3>
              <p className="mt-4 text-sm text-white/80">
                Admissions are currently{" "}
                <span className="font-semibold text-amber-400">OPEN</span>.
              </p>
              <p className="mt-2 text-sm text-white/70">
                Visit the admissions page for requirements and application details.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-semibold">Contact Us</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>Phone: {siteConfig.phoneDisplay}</li>
                <li>Email: {siteConfig.email}</li>
              </ul>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/80 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
            </p>

            <p className="font-medium text-amber-400">
              Powered by IME Solutions
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

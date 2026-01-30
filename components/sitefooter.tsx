import Container from "./container";
import { siteConfig } from "../lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="py-10 text-sm text-gray-600">
          {/* School name */}
          <p className="font-medium text-gray-800">
            {siteConfig.name}
          </p>

          {/* Motto */}
          <p className="mt-1">
            {siteConfig.motto}
          </p>

          {/* Address */}
          <p className="mt-2">
            {siteConfig.addressLine}
          </p>

          {/* Contact */}
          <p className="mt-1">
            Phone: {siteConfig.phoneDisplay} · Email: {siteConfig.email}
          </p>

          {/* Copyright */}
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

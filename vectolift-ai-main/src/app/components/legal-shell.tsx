import type { ReactNode } from "react";
import Illustration from "../svgs/svg-illustration";
import Illustration4 from "../svgs/svg-illustration4";
import SocialLinks from "./social-links";

type LegalShellProps = {
  children: ReactNode;
};

export default function LegalShell({ children }: LegalShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-color-001 text-color-002 [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif]">
      <header className="sticky top-0 z-50 bg-color-001/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 w-full max-w-324 items-center justify-between px-18 max-lg:px-5">
          <a className="flex items-center gap-3.5" href="/" aria-label="Vectolift home">
            <Illustration cid="legal-logo" />
            <span className="text-[1.75rem] font-extrabold leading-none text-color-002 max-lg:text-[1.35rem]">
              vectolift
            </span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium max-md:gap-3">
            <a className="hover:text-primary" href="/#technology">Technology</a>
            <a className="hover:text-primary" href="/#benefits">Benefits</a>
            <a className="hover:text-primary" href="/faq">FAQ</a>
            <a className="hover:text-primary" href="/blog">Blog</a>
            <a className="rounded-lg bg-primary px-4 py-2 text-color-003 hover:opacity-90" href="/#hero">
              Contact Us
            </a>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-color-002 text-color-001">
        <div className="mx-auto flex w-full max-w-288 flex-col gap-8 px-8 py-12">
          <div className="flex items-start justify-between gap-8 max-md:flex-col">
            <Illustration4 cid="legal-footer-logo" />
            <div className="grid grid-cols-3 gap-12 text-xs font-medium leading-3 max-md:grid-cols-1 max-md:gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-primary uppercase tracking-[1.2px]">Company</p>
                <a className="hover:text-primary" href="/#customers">Customers</a>
                <a className="hover:text-primary" href="mailto:vectolift@gmail.com">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-primary uppercase tracking-[1.2px]">Resources</p>
                <a className="hover:text-primary" href="/blog">Blog</a>
                <a className="hover:text-primary" href="/privacy">Privacy Policy</a>
                <a className="hover:text-primary" href="/faq">FAQ</a>
                <a className="hover:text-primary" href="/terms-and-conditions">Terms and Conditions</a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-primary uppercase tracking-[1.2px]">Social</p>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 border-t border-white/10 pt-6 text-xs font-medium max-md:flex-col max-md:items-start">
            <p>2026 Vectolift. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-primary" href="/privacy">Privacy Policy</a>
              <a className="hover:text-primary" href="/terms-and-conditions">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

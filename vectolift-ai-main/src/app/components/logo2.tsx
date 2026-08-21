import type { ReactNode } from "react";
export type Logo2Data = {
  ariaLabel: string;
  href: string;
  height: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, cids }: { d: Logo2Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="block text-color-001 cursor-pointer hover:border-clr-14 hover:text-clr-14 hover:outline-clr-14 hover:[text-decoration-color:var(--clr-14)]" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener noreferrer" target="_blank">
      <svg data-cid={cids[1]} className="w-4 h-4 block overflow-hidden align-middle focus:outline-clr-16 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height={d.height} role="presentation" viewBox={d.viewBox} width="16" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
    </a>
  );
}

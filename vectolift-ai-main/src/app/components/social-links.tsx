"use client";

import type { ReactNode } from "react";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/vectolift",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/vectolift",
    icon: <path d="M14 8.5h3V5h-3c-3.1 0-5 1.9-5 5v2H6v3.5h3V22h4v-6.5h3.1l.7-3.5H13v-2c0-.9.4-1.5 1-1.5Z" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917231820067",
    icon: (
      <>
        <path d="M12 3.2A8.7 8.7 0 0 0 4.4 16l-1 4.1 4.2-1a8.7 8.7 0 1 0 4.4-15.9Z" />
        <path d="M8.9 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.1.7l-.5.6c.8 1.3 1.8 2.3 3.1 3.1l.6-.5c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.1.5-1.7.5-2.9 0-7.4-4.4-7.4-7.4 0-.6.2-1.2.5-1.7Z" />
      </>
    ),
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          aria-label={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-color-001 transition-colors hover:border-primary hover:text-primary"
          href={link.href}
          rel="noopener noreferrer"
          target="_blank"
          title={link.label}
        >
          <svg
            aria-hidden="true"
            className="h-4.5 w-4.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            {link.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}

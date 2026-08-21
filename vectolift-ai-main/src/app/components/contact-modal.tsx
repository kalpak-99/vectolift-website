"use client";

import { useEffect, useRef, useState } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

async function detectCountry() {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 1800);

  try {
    const response = await fetch("https://ipapi.co/json/", {
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) return "Unknown";

    const data = await response.json();
    return typeof data?.country_name === "string" && data.country_name.trim()
      ? data.country_name.trim()
      : "Unknown";
  } catch {
    return "Unknown";
  } finally {
    window.clearTimeout(timeout);
  }
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setError("");
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[200] m-auto w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-0 text-slate-900 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.18),0_0_1px_rgba(0,0,0,0.1)] backdrop:bg-slate-900/40 backdrop:backdrop-blur-md open:flex open:flex-col"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/60 px-6 py-4.5 rounded-t-2xl">
        <h2 className="text-xl font-bold text-slate-900 [font-family:avantt,_'avantt_Fallback',_system-ui,_sans-serif] tracking-tight">
          Reserve Your AI Agent
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-slate-200/60 hover:text-slate-700"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <form
        className="flex flex-col gap-4.5 px-6 py-6 bg-white rounded-b-2xl"
        onSubmit={async (e) => {
          e.preventDefault();
          setStatus("sending");
          setError("");

          const form = e.currentTarget;
          const formData = new FormData(form);

          try {
            const country = await detectCountry();
            const response = await fetch("/api/leads", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.get("name"),
                business: formData.get("business"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                country,
              }),
            });

            const result = await response.json().catch(() => ({}));
            if (!response.ok) throw new Error(result.error || "The request could not be sent.");

            setStatus("sent");
            form.reset();
          } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "The request could not be sent.");
          }
        }}
      >
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Name</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Business</span>
          <input
            type="text"
            name="business"
            required
            placeholder="Your business name"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Phone</span>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+1 (555) 000-0000"
            className="rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 flex h-11 items-center justify-center rounded-xl bg-primary text-sm font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-400 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Reserve Agent"}
        </button>
        {status === "sent" ? (
          <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
            Request sent. We will contact you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700">{error}</p>
        ) : null}
      </form>
    </dialog>
  );
}

import fs from "node:fs";
import path from "node:path";
import LegalShell from "../components/legal-shell";

export const metadata = {
  title: "Terms and Conditions - Vectolift",
  description: "Vectolift terms and conditions.",
};

export default function TermsAndConditionsPage() {
  const termsPath = path.join(process.cwd(), "src", "app", "legal-content", "terms-and-conditions.txt");
  const terms = fs.readFileSync(termsPath, "utf8");

  return (
    <LegalShell>
      <section className="px-18 py-20 max-lg:px-6">
        <article className="mx-auto max-w-232 rounded-lg border border-black/10 bg-white p-10 shadow-sm max-md:p-6">
          <pre className="whitespace-pre-wrap break-words text-[0.95rem] leading-7 text-slate-700 [font-family:Arial,_sans-serif]">
            {terms}
          </pre>
        </article>
      </section>
    </LegalShell>
  );
}

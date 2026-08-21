import LegalShell from "../components/legal-shell";

const faqs = [
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist is a virtual phone agent that answers calls around the clock, understands natural speech, books appointments, qualifies leads, and routes urgent requests without sending callers to voicemail.",
  },
  {
    question: "How does Vectolift's AI calling agent work?",
    answer:
      "When a customer calls your business, Vectolift answers quickly, understands the caller's intent through conversation, takes the next action, and can send structured call details into your calendar or CRM.",
  },
  {
    question: "How much does it cost compared with a human receptionist?",
    answer:
      "A full-time receptionist can cost tens of thousands per year and usually covers only business hours. Vectolift is designed to cover calls 24/7 at a lower operating cost while helping recover revenue from missed calls.",
  },
  {
    question: "Can Vectolift replace a human receptionist?",
    answer:
      "For many small and medium businesses, Vectolift can handle the everyday reception work: answering calls, booking appointments, qualifying leads, updating records, and handing off complex or urgent calls to a person.",
  },
  {
    question: "What happens when calls are missed?",
    answer:
      "Missed calls often become missed jobs, especially in service businesses where customers call the next available provider. Vectolift helps prevent that loss by answering instantly, including after hours and during busy periods.",
  },
  {
    question: "Does Vectolift work for small businesses?",
    answer:
      "Yes. Vectolift is built for home-service and trades businesses such as plumbing, electrical, HVAC, cleaning, landscaping, and repair teams that rely on phone calls to win work.",
  },
  {
    question: "Which CRM platforms can Vectolift integrate with?",
    answer:
      "Vectolift can connect call transcripts, booking information, and action items with platforms such as Salesforce, HubSpot, and custom CRM systems, depending on the setup required for your business.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Vectolift offers a 7-day trial so businesses can test call answering, lead capture, appointment booking, and CRM workflows before committing.",
  },
];

export const metadata = {
  title: "FAQ - Vectolift",
  description: "Answers to common questions about Vectolift's AI receptionist and calling agent.",
};

export default function FAQPage() {
  return (
    <LegalShell>
      <section className="px-18 py-20 max-lg:px-6">
        <div className="mx-auto max-w-232">
          <p className="text-sm font-semibold uppercase tracking-[1.2px] text-primary">FAQ</p>
          <h1 className="mt-4 text-[4rem] font-semibold leading-[1.05] tracking-[-2px] max-md:text-[2.5rem]">
            AI Receptionist FAQ
          </h1>
          <p className="mt-5 max-w-176 text-lg leading-7 text-color-002/75">
            Everything you need to know about AI receptionists, AI calling agents, and how Vectolift works for service businesses.
          </p>
          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-black/10 bg-white p-6 shadow-sm open:border-primary/40"
              >
                <summary className="cursor-pointer list-none text-xl font-semibold tracking-[-0.3px] marker:hidden">
                  <span className="flex items-center justify-between gap-6">
                    {faq.question}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </LegalShell>
  );
}

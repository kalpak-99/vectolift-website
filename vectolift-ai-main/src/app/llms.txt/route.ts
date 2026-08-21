export const dynamic = "force-static";

const llmsText = `# Vectolift: AI Receptionist for Service Businesses

> Vectolift is an AI receptionist service for home service and trade businesses. It answers calls 24/7, captures lead details, detects urgent requests, books appointments, and helps teams recover revenue that would otherwise be lost to missed calls and voicemails.

## Core Features

- 24/7 AI call answering for busy or after-hours phone traffic
- Natural voice conversations designed for customer-facing reception
- Lead capture for name, business, email, phone, service need, and location
- Appointment booking support for service businesses
- Emergency detection and escalation for urgent jobs
- Missed call revenue calculator
- Contact form that can forward reservation requests to Telegram
- Privacy and terms pages for website visitors

## Pages

- [Home](/): Vectolift overview, benefits, customer examples, and contact call-to-action
- [Calculator](/calculator): Interactive missed-call revenue calculator
- [FAQ](/faq): Common questions about Vectolift and AI receptionists
- [Blog](/blog): AI receptionist insights and guides for trade businesses
- [Missed Calls Cost Plumbers](/blog/missed-calls-cost-plumbers): How Australian plumbing businesses lose $45,000+ per year to missed calls
- [AI Receptionist Guide](/blog/ai-receptionist-guide): How voice AI answers calls and books jobs 24/7
- [AI Receptionist ROI](/blog/ai-receptionist-roi-growth): 5 ways AI receptionists help home service businesses scale
- [Privacy Policy](/privacy): Website and service privacy information
- [Terms and Conditions](/terms-and-conditions): Legal terms for using Vectolift

## Best For

- Plumbing, electrical, HVAC, cleaning, pest control, landscaping, and repair businesses
- Teams that receive calls while technicians are on-site or unavailable
- Businesses that want after-hours answering without hiring a full-time receptionist
- Operators who need more calls answered, more leads captured, and more jobs booked

## Contact

Use the Contact Us buttons on the website to reserve an AI agent or send an inquiry.`;

export function GET() {
  return new Response(llmsText, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

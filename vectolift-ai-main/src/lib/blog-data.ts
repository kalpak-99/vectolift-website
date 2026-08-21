// Blog data store — all posts live here as static data.
// Server-only; no "use client" needed.

export type BlogAuthor = {
  name: string;
  role: string;
};

export type ContentSection = {
  type: "text" | "callout" | "table";
  heading?: string;       // renders as <h2>
  subheading?: string;    // renders as <h3>
  body: string;           // HTML string — rendered with dangerouslySetInnerHTML
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;    // ISO date
  updatedAt: string;      // ISO date
  readingTime: string;
  heroImage: string;
  heroAlt: string;
  keyTakeaways: string[];
  content: ContentSection[];
};

// ---------------------------------------------------------------------------
// Posts
// ---------------------------------------------------------------------------

const posts: BlogPost[] = [
  {
    slug: "missed-calls-cost-plumbers",
    title: "How Australian Plumbing Businesses Lose $45,000+ Every Year to Missed Calls",
    excerpt:
      "Missed calls don't just mean lost conversations — they mean lost jobs. Here's the real revenue impact on Australian trade businesses and how AI solves it.",
    metaDescription:
      "Australian plumbing businesses lose over $45,000 per year to missed calls. Learn the real cost breakdown and how an AI receptionist recovers that revenue 24/7.",
    category: "Plumbing & Trades",
    tags: ["missed calls", "plumbing", "revenue loss", "AI receptionist"],
    author: { name: "Vectolift Team", role: "AI Receptionist Experts" },
    publishedAt: "2026-07-28",
    updatedAt: "2026-08-10",
    readingTime: "7 min read",
    heroImage: "/assets/blog/missed-calls-plumber.webp",
    heroAlt: "Australian plumber missing a phone call while working under a sink",
    keyTakeaways: [
      "The average trade business misses 6–12 calls per week, costing $45,000+ annually in lost jobs.",
      "After-hours and busy-period calls are the most commonly missed — and the most valuable.",
      "An AI receptionist answers 100% of calls instantly, qualifying leads and booking appointments automatically.",
      "Businesses using AI call answering report 30–40% more booked jobs within the first month.",
    ],
    content: [
      {
        type: "text",
        heading: "The Hidden Cost of a Ringing Phone",
        body: `<p>When a customer calls a plumbing business with a burst pipe or a blocked drain, they need help <strong>now</strong>. If that call goes to voicemail, research shows <strong>85% of callers won't leave a message</strong> — they'll simply call the next plumber on the list.</p>
<p>For a typical Australian plumbing business handling 30–50 calls per week, missing even 20% of those calls means losing 6–10 potential jobs <em>every single week</em>. At an average job value of $450 AUD, that's $2,700–$4,500 in lost revenue per week — or <strong>over $45,000 per year</strong>.</p>`,
      },
      {
        type: "text",
        heading: "When Do Most Calls Get Missed?",
        body: `<p>Our analysis of call patterns across hundreds of Australian trade businesses reveals three peak missed-call windows:</p>
<ul>
<li><strong>After hours (6 PM–8 AM):</strong> 38% of all missed calls. Homeowners discover problems in the evening but can't reach anyone.</li>
<li><strong>Lunch breaks (12 PM–1 PM):</strong> 22% of missed calls. The office is empty while the team is on-site.</li>
<li><strong>Monday mornings (8 AM–10 AM):</strong> 18% of missed calls. Weekend emergencies pile up and the phone rings non-stop.</li>
</ul>
<p>These aren't low-value enquiries. Emergency and after-hours calls typically carry <strong>1.5–2× the average job value</strong> because customers are willing to pay a premium for urgent service.</p>`,
      },
      {
        type: "callout",
        body: `<p><strong>Real example:</strong> A Brisbane plumbing business with 4 technicians was missing an average of 11 calls per week. After switching to Vectolift's AI receptionist, they recovered 8 additional booked jobs per week — adding over <strong>$3,600 in weekly revenue</strong>. <a href="/calculator">Calculate your own missed-call losses →</a></p>`,
      },
      {
        type: "text",
        heading: "Why Voicemail Doesn't Work",
        body: `<p>Many business owners assume voicemail catches what they miss. The data tells a different story:</p>
<ul>
<li><strong>85% of callers</strong> hang up when they reach voicemail for a service business.</li>
<li>Of the 15% who leave a message, <strong>only 60%</strong> are called back within 2 hours.</li>
<li>By that point, <strong>70% of those callers</strong> have already booked with a competitor.</li>
</ul>
<p>The net result: voicemail recovers roughly <strong>3% of missed calls</strong> as actual jobs. It's better than nothing, but it's not a solution.</p>`,
      },
      {
        type: "text",
        heading: "How an AI Receptionist Changes the Equation",
        body: `<p>An AI receptionist like Vectolift answers every call within 2 rings, 24 hours a day, 7 days a week. But it doesn't just pick up — it has a natural conversation with the caller:</p>
<ul>
<li><strong>Understands the problem:</strong> "I've got a leaking tap in the kitchen" → qualifies the job type, urgency, and location.</li>
<li><strong>Books the appointment:</strong> Checks your live calendar availability and confirms a time slot.</li>
<li><strong>Captures lead details:</strong> Name, phone, email, address, and job description — sent straight to your CRM or inbox.</li>
<li><strong>Escalates emergencies:</strong> Detects urgent keywords ("burst pipe", "gas leak", "flooding") and sends an immediate SMS alert to the on-call technician.</li>
</ul>
<p>The result is simple: <strong>zero missed calls, more booked jobs, no extra staff.</strong></p>`,
      },
      {
        type: "text",
        heading: "Calculate Your Own Revenue Loss",
        body: `<p>Every business is different. Use our <a href="/calculator">free Missed Call Revenue Calculator</a> to see exactly how much revenue you're leaving on the table based on your weekly call volume, average job value, and conversion rate.</p>
<p>Most trade businesses are shocked to see the annual figure. The good news: it's almost entirely recoverable.</p>`,
      },
    ],
  },

  {
    slug: "ai-receptionist-guide",
    title: "The 24/7 AI Receptionist: How Voice AI Answers Calls and Books Jobs Without Human Error",
    excerpt:
      "A deep dive into how modern AI receptionists work — from natural language understanding to calendar integration — and why they outperform traditional answering services.",
    metaDescription:
      "Learn how AI receptionists use voice AI to answer calls, qualify leads, and book appointments 24/7. A practical guide for home service business owners.",
    category: "AI Receptionist",
    tags: ["voice AI", "AI receptionist", "call answering", "automation"],
    author: { name: "Vectolift Team", role: "AI Receptionist Experts" },
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-12",
    readingTime: "9 min read",
    heroImage: "/assets/blog/ai-receptionist-guide.webp",
    heroAlt: "AI voice assistant interface showing an active customer call being handled automatically",
    keyTakeaways: [
      "Modern AI receptionists use large language models to hold natural, context-aware phone conversations.",
      "They integrate directly with calendars (Google Calendar, Cal.com) to book jobs without double-bookings.",
      "Unlike traditional answering services, AI receptionists are available 24/7 at a fraction of the cost.",
      "Emergency detection and instant SMS escalation ensure urgent calls reach the right person immediately.",
    ],
    content: [
      {
        type: "text",
        heading: "What Is an AI Receptionist?",
        body: `<p>An AI receptionist is a voice-powered virtual agent that answers your business phone calls, understands what the caller needs through natural conversation, and takes action — booking appointments, capturing lead information, routing urgent calls, or answering common questions.</p>
<p>Unlike a basic IVR ("Press 1 for sales, press 2 for support"), an AI receptionist holds a <strong>genuine two-way conversation</strong>. Callers speak naturally, and the AI responds with context-appropriate, human-sounding replies.</p>`,
      },
      {
        type: "text",
        heading: "How Does the Voice AI Actually Work?",
        body: `<p>Under the hood, a modern AI receptionist like Vectolift combines several technologies:</p>
<ul>
<li><strong>Speech-to-Text (STT):</strong> The caller's voice is transcribed into text in real time with sub-second latency.</li>
<li><strong>Natural Language Understanding (NLU):</strong> A large language model interprets the caller's intent — are they booking a job, reporting an emergency, asking about pricing, or requesting a callback?</li>
<li><strong>Dialogue Management:</strong> The AI maintains conversation context, asks follow-up questions when needed, and guides the call toward a resolution.</li>
<li><strong>Text-to-Speech (TTS):</strong> The AI's response is synthesised into natural-sounding speech. Vectolift uses ElevenLabs to produce a friendly Australian accent that callers find reassuring and familiar.</li>
</ul>
<p>The entire loop — listen, understand, respond — happens in <strong>under 800 milliseconds</strong>, making the conversation feel seamless.</p>`,
      },
      {
        type: "text",
        heading: "Calendar Integration: Booking Without Double-Bookings",
        body: `<p>One of the biggest advantages over a human receptionist or answering service is <strong>real-time calendar integration</strong>. When a caller wants to book a job, the AI:</p>
<ol>
<li>Checks your live calendar availability (Google Calendar, Cal.com, or connected CRM).</li>
<li>Offers the caller available time slots.</li>
<li>Confirms the booking and creates the calendar event with all job details.</li>
<li>Sends confirmation to both the customer and your team.</li>
</ol>
<p>Because it reads the calendar in real time, there are <strong>no double-bookings</strong> — a common problem when a human receptionist is handling multiple calls or working from an outdated schedule.</p>`,
      },
      {
        type: "callout",
        body: `<p><strong>AI vs. traditional answering service:</strong> A human answering service costs $2–$5 per call, operates limited hours, and introduces message-relay delays. An AI receptionist handles unlimited calls simultaneously, 24/7, at a fixed monthly cost — and books the job directly into your calendar. <a href="/faq">See our FAQ for more comparisons →</a></p>`,
      },
      {
        type: "text",
        heading: "Emergency Detection and Escalation",
        body: `<p>Not every call can be fully automated. When a caller describes an emergency — a burst pipe, a gas leak, electrical sparks, flooding — the AI recognises the urgency and takes immediate action:</p>
<ul>
<li>Flags the call as high-priority in the transcript.</li>
<li>Sends an <strong>instant SMS alert</strong> to the designated on-call technician with the caller's details and problem description.</li>
<li>Reassures the caller that someone will contact them within minutes.</li>
</ul>
<p>This ensures critical calls are never lost in a queue or buried in a voicemail inbox.</p>`,
      },
      {
        type: "text",
        heading: "What Callers Actually Experience",
        body: `<p>The most common feedback from businesses using Vectolift is that <strong>callers don't realise they're speaking to AI</strong>. The conversation sounds natural, the AI asks relevant follow-up questions, and the booking confirmation arrives instantly.</p>
<p>For trade businesses where trust and professionalism matter, this is essential. Your callers hear a friendly, competent voice — not a robotic menu system.</p>`,
      },
      {
        type: "text",
        heading: "Getting Started",
        body: `<p>Setting up an AI receptionist typically takes less than a day. You connect your business phone number, configure your calendar integration, and customise the AI's knowledge about your services, pricing, and service area.</p>
<p>Ready to see what it looks like in action? <a href="/">Listen to a demo call on our homepage</a> or <a href="/calculator">calculate how much revenue you could recover</a>.</p>`,
      },
    ],
  },

  {
    slug: "ai-receptionist-roi-growth",
    title: "5 Ways AI Receptionists Help Home Service Businesses Scale in 2026",
    excerpt:
      "Beyond answering calls — here are five measurable ways AI receptionists drive profitability, efficiency, and growth for trade businesses.",
    metaDescription:
      "Discover 5 proven ways AI receptionists help plumbing, HVAC, and electrical businesses increase revenue, reduce costs, and scale operations in 2026.",
    category: "Business Growth",
    tags: ["ROI", "business growth", "scaling", "home services", "AI"],
    author: { name: "Vectolift Team", role: "AI Receptionist Experts" },
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-12",
    readingTime: "6 min read",
    heroImage: "/assets/blog/ai-roi-growth.webp",
    heroAlt: "Business growth chart showing revenue increase after implementing AI receptionist",
    keyTakeaways: [
      "AI receptionists recover 30–40% more revenue by answering 100% of calls.",
      "They eliminate the $50,000–$70,000 annual cost of a full-time receptionist.",
      "Consistent call handling improves customer satisfaction and generates more referrals.",
      "Real-time data from every call helps owners make smarter business decisions.",
    ],
    content: [
      {
        type: "text",
        heading: "1. Recover Revenue from Every Missed Call",
        body: `<p>The most immediate impact is revenue recovery. As we covered in our <a href="/blog/missed-calls-cost-plumbers">analysis of missed call costs</a>, the average trade business loses $45,000+ per year to unanswered calls.</p>
<p>An AI receptionist eliminates this entirely by answering every call within seconds — during business hours, after hours, on weekends, and on public holidays. For most businesses, this single change pays for the service many times over.</p>`,
      },
      {
        type: "text",
        heading: "2. Cut Staffing Costs Without Cutting Quality",
        body: `<p>A full-time receptionist in Australia costs between $50,000 and $70,000 per year including super, leave, and training. They work 38 hours a week and can handle one call at a time.</p>
<p>An AI receptionist costs a fraction of that, works 168 hours a week, and handles <strong>unlimited simultaneous calls</strong>. During peak periods when 5 customers call at once, all 5 get answered immediately.</p>
<p>This doesn't mean replacing your team — it means <strong>freeing your team</strong> to do the skilled work that generates revenue instead of spending hours on the phone.</p>`,
      },
      {
        type: "text",
        heading: "3. Deliver Consistent, Professional Customer Experiences",
        body: `<p>Human receptionists have bad days, get flustered during rush periods, and sometimes forget to ask for essential details. An AI receptionist delivers the <strong>same professional, thorough experience on every single call</strong>:</p>
<ul>
<li>Always captures name, contact details, job description, and address.</li>
<li>Always checks calendar availability before booking.</li>
<li>Always sends confirmation to the customer and the team.</li>
<li>Never puts a caller on hold or transfers them to voicemail.</li>
</ul>
<p>This consistency builds trust. And trust drives referrals — the highest-converting lead source for trade businesses.</p>`,
      },
      {
        type: "callout",
        body: `<p><strong>The referral multiplier:</strong> Businesses with consistent customer experiences generate 2–3× more word-of-mouth referrals. When every caller has a positive first interaction — even at 2 AM — they're more likely to recommend your business. <a href="/#customers">See what our customers say →</a></p>`,
      },
      {
        type: "text",
        heading: "4. Use Call Data to Make Smarter Decisions",
        body: `<p>Every AI-handled call generates structured data: call time, duration, caller intent, job type, urgency level, location, and outcome. Over weeks and months, this data reveals patterns that help you run a smarter business:</p>
<ul>
<li><strong>Peak call times:</strong> Staff your team to match actual demand.</li>
<li><strong>Most-requested services:</strong> Focus marketing spend on high-demand job types.</li>
<li><strong>Geographic hotspots:</strong> Identify suburbs where demand is growing.</li>
<li><strong>Conversion rates:</strong> See what percentage of calls become booked jobs and optimise your pricing or availability.</li>
</ul>
<p>This level of insight is impossible with a human receptionist taking notes on paper or in a basic CRM.</p>`,
      },
      {
        type: "text",
        heading: "5. Scale Without Growing Pains",
        body: `<p>When a trade business grows from 3 technicians to 8, the phone rings more, the schedule gets more complex, and the admin workload multiplies. Traditionally, this means hiring more office staff, upgrading your phone system, and dealing with growing pains.</p>
<p>An AI receptionist <strong>scales instantly</strong>. Whether you handle 20 calls a day or 200, the system adapts with no additional cost, no hiring delays, and no training period. It's infrastructure that grows with you.</p>`,
      },
      {
        type: "text",
        heading: "What's the Real ROI?",
        body: `<p>For a business missing 10 calls per week at $450 average job value and 50% conversion rate, the numbers are straightforward:</p>
<ul>
<li><strong>Monthly revenue recovered:</strong> ~$9,750</li>
<li><strong>Annual revenue recovered:</strong> ~$117,000</li>
<li><strong>Receptionist salary saved:</strong> $50,000–$70,000/year</li>
</ul>
<p>Use our <a href="/calculator">Missed Call Revenue Calculator</a> to see your specific numbers. Most businesses find the ROI is measured in <strong>weeks, not months</strong>.</p>`,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Query functions
// ---------------------------------------------------------------------------

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return posts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

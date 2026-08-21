import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  country?: string;
};

const requiredFields: Array<keyof LeadPayload> = ["name", "business", "email", "phone"];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getHeaderCountry(request: Request) {
  const headers = request.headers;
  return (
    headers.get("x-vercel-ip-country") ||
    headers.get("cf-ipcountry") ||
    headers.get("cloudfront-viewer-country") ||
    ""
  ).trim();
}

function countryNameFromCode(code: string) {
  if (!code || code.toUpperCase() === "XX") return "";

  try {
    const displayNames = new Intl.DisplayNames(["en"], { type: "region" });
    return displayNames.of(code.toUpperCase()) || code.toUpperCase();
  } catch {
    return code.toUpperCase();
  }
}

function getRequestIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") || "";
  const firstForwardedIp = forwardedFor.split(",")[0]?.trim();

  return (
    firstForwardedIp ||
    request.headers.get("x-real-ip") ||
    request.headers.get("client-ip") ||
    ""
  ).trim();
}

function isPublicIp(ip: string) {
  if (!ip || ip === "::1" || ip.startsWith("127.") || ip.startsWith("10.") || ip.startsWith("192.168.")) {
    return false;
  }

  const parts = ip.split(".").map((part) => Number(part));
  if (parts.length === 4 && parts.every((part) => Number.isInteger(part))) {
    return !(parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31);
  }

  return !ip.toLowerCase().startsWith("fc") && !ip.toLowerCase().startsWith("fd") && !ip.toLowerCase().startsWith("fe80");
}

async function resolveCountry(request: Request) {
  const headerCountry = countryNameFromCode(getHeaderCountry(request));
  if (headerCountry) return headerCountry;

  const ip = getRequestIp(request);
  if (!isPublicIp(ip)) return "Unknown";

  try {
    const response = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      cache: "no-store",
      signal: AbortSignal.timeout(1500),
    });
    if (!response.ok) return "Unknown";

    const data = await response.json();
    return clean(data?.country_name) || countryNameFromCode(clean(data?.country_code)) || "Unknown";
  } catch {
    return "Unknown";
  }
}

async function resolveChatId(token: string) {
  if (process.env.TELEGRAM_CHAT_ID) return process.env.TELEGRAM_CHAT_ID;

  let response: Response;
  try {
    response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`, {
      cache: "no-store",
    });
  } catch {
    throw new Error("Telegram is blocked from this local server. Restart localhost with network access.");
  }

  if (!response.ok) return "";

  const data = await response.json();
  const updates = Array.isArray(data?.result) ? data.result : [];
  const latestChat = updates
    .map((update) => update?.message?.chat?.id ?? update?.channel_post?.chat?.id)
    .filter(Boolean)
    .at(-1);

  return latestChat ? String(latestChat) : "";
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Telegram bot token is not configured." }, { status: 500 });
  }

  const payload = (await request.json()) as LeadPayload;
  const lead = {
    name: clean(payload.name),
    business: clean(payload.business),
    email: clean(payload.email),
    phone: clean(payload.phone),
  };

  const missing = requiredFields.filter((field) => !lead[field]);
  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
  }

  let chatId = "";
  try {
    chatId = await resolveChatId(token);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Telegram connection failed." },
      { status: 502 },
    );
  }
  if (!chatId) {
    return NextResponse.json(
      {
        error:
          "Telegram chat is not connected yet. Send /start to the bot, then submit again, or set TELEGRAM_CHAT_ID.",
      },
      { status: 500 },
    );
  }

  const submitted = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: process.env.LEAD_TIME_ZONE || "Asia/Kolkata",
  }).format(new Date());
  const country = clean(payload.country) || (await resolveCountry(request));

  const text = [
    "\u{1F680} <b>New Reservation Request</b>",
    "",
    `\u{1F464} <b>Name:</b> ${escapeHtml(lead.name)}`,
    `\u{1F3E2} <b>Business:</b> ${escapeHtml(lead.business)}`,
    `\u{1F4E7} <b>Email:</b> ${escapeHtml(lead.email)}`,
    `\u{1F4F1} <b>Phone:</b> ${escapeHtml(lead.phone)}`,
    `\u{1F30D} <b>Country:</b> ${escapeHtml(country)}`,
    "",
    `\u{23F0} <b>Submitted:</b> ${escapeHtml(submitted)}`,
  ].join("\n");

  let response: Response;
  try {
    response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        parse_mode: "HTML",
        text,
      }),
    });
  } catch {
    return NextResponse.json(
      { error: "Telegram is blocked from this local server. Restart localhost with network access." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    return NextResponse.json({ error: "Telegram could not send the lead." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  if (!API_KEY || !LIST_ID) {
    console.error("Missing MAILCHIMP_API_KEY or MAILCHIMP_LIST_ID env vars");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  // Mailchimp API keys end with -usXX where XX is the data center
  const DC = API_KEY.split("-").pop();
  const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    if (data.title === "Member Exists") {
      return NextResponse.json({ error: "Already subscribed" }, { status: 400 });
    }
    console.error("Mailchimp error:", data);
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

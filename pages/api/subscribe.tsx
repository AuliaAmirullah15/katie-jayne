import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "nodejs",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, merge0 } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const data = new URLSearchParams({ EMAIL: email, MERGE0: merge0 });

  const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60000); // 60s timeout

  try {
    const response = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (response.ok) {
      return res.status(200).json({ message: "Subscription successful" });
    } else {
      const errorText = await response.text();
      return res.status(400).json({ error: errorText });
    }
  } catch (error) {
    console.error("Mailchimp request failed:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// pages/api/subscribe.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { u, id, email, merge0 } = req.body;

  // Check if all required parameters are provided
  if (!email || !u || !id) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  // Prepare the data to send to Mailchimp in x-www-form-urlencoded format
  const data = new URLSearchParams({
    EMAIL: email,
    MERGE0: merge0, // Add any other merge fields you need here
  });

  try {
    const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${u}&id=${id}`;

    // Send the request to Mailchimp
    const response = await fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(), // Correct format for Mailchimp
    });

    // If Mailchimp responds successfully
    if (response.ok) {
      return res.status(200).json({ message: "Subscription successful" });
    } else {
      const errorText = await response.text();
      return res.status(400).json({ error: errorText });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

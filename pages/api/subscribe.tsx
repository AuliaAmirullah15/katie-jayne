import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { u, id, email, merge0 } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const data = new URLSearchParams({
    EMAIL: email,
    MERGE0: merge0,
  });

  try {
    const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${u}&id=${id}`;

    const response = await fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });

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

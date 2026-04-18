import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  try {
    const entries = await client.getEntries({
      content_type: "mainApplication",
      limit: 1,
      include: 2,
    });

    const fields = entries.items[0]?.fields;
    if (!fields) return res.status(404).json({ error: "No data found" });

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
    res.status(200).json(fields);
  } catch (err) {
    console.error("Contentful error:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

export default function handler(req, res) {
  res.status(200).json({
    spaceId: process.env.CONTENTFUL_SPACE_ID ? "EXISTS" : "MISSING",
    token: process.env.CONTENTFUL_ACCESS_TOKEN ? "EXISTS" : "MISSING",
    cwd: process.cwd(),
  });
}
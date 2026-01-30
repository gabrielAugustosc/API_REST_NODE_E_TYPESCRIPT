import { server } from "./server/Server";
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Adapt Express to Vercel serverless
export default function handler(req: VercelRequest, res: VercelResponse) {
  server(req, res);
}

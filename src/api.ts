import { serverReady } from "./server/Server";
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Adapt Express to Vercel serverless
export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const server = await serverReady;
        server(req, res);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao preparar o servidor.' });
    }
}

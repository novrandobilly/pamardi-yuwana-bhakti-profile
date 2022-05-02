// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    let client = await connectToDatabase();
    const db = client.db();

    try {
      const applicants = await db.collection('applicants').find().toArray();
      client.close();
      res.status(200).json(applicants);
    } catch (error) {
      client.close();
      res.status(500).json({ error });
    }
  }
}

import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/db';
import { hash } from 'bcryptjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { adminId, adminPassword, adminRole } = req.body;
    let client = await connectToDatabase();
    const db = client.db();

    try {
      const existingAdmin = await db.collection('admins').findOne({
        adminId: adminId,
      });
      if (existingAdmin) {
        res.status(400).json({
          message: 'Admin already exists',
        });
        return;
      }
      const hashedPassword = await hash(adminPassword, 12);
      const registerResult = await db.collection('admins').insertOne({
        adminId,
        adminPassword: hashedPassword,
        adminRole,
        createdAt: new Date(),
      });
      res.status(201).json({ message: 'Admin created' });
    } catch (err) {
      res.status(401).json({ error: 'Cannot create admin' });
    }
  }
};

export default handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { studentName, gender, dateOfBirth, schoolOrigin, guardianName, guardianPhone, guardianEmail } = req.body;
    let client = await connectToDatabase();
    const db = client.db();
    const applicantData = {
      studentName,
      gender,
      dateOfBirth,
      schoolOrigin,
      guardianName,
      guardianPhone,
      guardianEmail,
      dateCreated: new Date(),
    };

    try {
      const response = await db.collection('applicants').insertOne(applicantData);
      client.close();
      res.status(200).json({ message: 'Applicant data successfully submitted', response });
    } catch (err) {
      console.log(err);
      client.close();
      res.status(500).json({ message: 'Error submitting applicant data', err });
    }
  }
}

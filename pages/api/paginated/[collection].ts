// pages/api/crud/[collection].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@storage/config';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { collection: collectionName } = req.query;
  const dataCollection = collection(db, collectionName as string);

  if (req.method === 'GET') {
    try {
      // Pagination parameters
      const page = parseInt(req.query.page as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 10;

      // Calculate the starting index for pagination
      const startIndex = (page - 1) * pageSize;

      // Fetch paginated data from Firestore
      const querySnapshot = await getDocs(dataCollection);
      const totalDocs = querySnapshot.docs.length;
      const paginatedData = querySnapshot.docs
        .slice(startIndex, startIndex + pageSize)
        .map((doc) => ({ id: doc.id, ...doc.data() }));

      // Calculate hasNext and hasPrevious indicators
      const hasNext = startIndex + pageSize < totalDocs;
      const hasPrevious = startIndex > 0;

      res.status(200).json({
        data: paginatedData,
        page,
        pageSize,
        totalPages: Math.ceil(totalDocs / pageSize),
        totalDocs,
        hasNext,
        hasPrevious,
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

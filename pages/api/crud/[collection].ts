// pages/api/crud/[collection].ts
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@storage/config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  DocumentData,
} from "firebase/firestore";

interface Data {
  id: string;
  name: string;
  email: string;
  // Add other fields as needed
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    Data[] | { id: string; name: string; email: string } | { message: string }
  >
) {
  const { collection: collectionName } = req.query;

  const dataCollection = collection(db, collectionName as string);

  if (req.method === "GET") {
    // Read all documents from the specified collection
    const data: Data[] = [];
    const querySnapshot = await getDocs(dataCollection);
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() } as Data);
    });
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    // Create a new document in the specified collection
    const { name, email } = req.body;
    const newDocRef = await addDoc(dataCollection, { name, email });
    res.status(201).json({ id: newDocRef.id, name, email });
  }

  if (req.method === "DELETE") {
    // Delete a document from the specified collection
    const { id } = req.query;
    await deleteDoc(doc(dataCollection, id as string));
    res.status(200).json({ message: "Document deleted successfully" });
  }

  if (req.method === "PUT") {
    // Update a document in the specified collection
    const { id } = req.query;
    const { name, email } = req.body;
    await updateDoc(doc(dataCollection, id as string), { name, email });
    res.status(200).json({ message: "Document updated successfully" });
  }
}

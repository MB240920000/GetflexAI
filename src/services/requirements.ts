import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Requirements } from '../types/forms';

export async function saveRequirements(data: Omit<Requirements, 'createdAt'>) {
  try {
    const docRef = await addDoc(collection(db, 'requirements'), {
      ...data,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving requirements:', error);
    throw error;
  }
}
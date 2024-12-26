import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { BusinessInfo } from '../types/forms';

export async function saveBusinessInfo(data: Omit<BusinessInfo, 'createdAt'>) {
  try {
    const docRef = await addDoc(collection(db, 'business_info'), {
      ...data,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving business info:', error);
    throw error;
  }
}
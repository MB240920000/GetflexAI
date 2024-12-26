import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { SupportTicket } from '../types/forms';

export async function saveSupportTicket(data: Omit<SupportTicket, 'status' | 'createdAt'>) {
  try {
    const docRef = await addDoc(collection(db, 'support_tickets'), {
      ...data,
      status: 'new',
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving support ticket:', error);
    throw error;
  }
}
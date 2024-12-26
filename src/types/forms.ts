export interface BusinessInfo {
  businessName: string;
  industry: string;
  size: string;
  website?: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface Requirements {
  features: string[];
  challenges: string;
  expectedOutcome: string;
  createdAt: Date;
}

export interface SupportTicket {
  name: string;
  email: string;
  subject: string;
  description: string;
  status: 'new' | 'in-progress' | 'resolved';
  createdAt: Date;
}
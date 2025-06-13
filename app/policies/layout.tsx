import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Policies | Shri Manjunath School of Nursing, Vaduj',
  description: 'Important policies for Shri Manjunath School of Nursing, Vaduj',
};

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4">
      
      {children}
    </div>
  );
} 
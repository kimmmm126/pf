import type { Metadata } from 'next';

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div id='root'>{children}</div>;
}

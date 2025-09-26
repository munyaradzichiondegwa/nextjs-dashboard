import '@/app/ui/global.css';  
import { inter } from '@/app/ui/fonts';
import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen">
          {/* Sidebar */}
          <SideNav />
          {/* Main content */}
          <main className="flex-grow overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

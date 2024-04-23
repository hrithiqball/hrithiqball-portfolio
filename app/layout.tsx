import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from 'sonner';
import NavigationBar from '@/components/navigation-bar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harith Iqbal',
  description: 'Portfolio of Harith Iqbal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex h-screen" suppressHydrationWarning>
      <body className={cn(inter.className, 'flex flex-1 flex-col')}>
        <Providers>
          <div className="fixed top-0 z-50 w-full">
            <NavigationBar />
          </div>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

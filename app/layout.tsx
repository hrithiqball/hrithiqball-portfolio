import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from 'sonner';
import NavigationBar from '@/components/navigation-bar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <NavigationBar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

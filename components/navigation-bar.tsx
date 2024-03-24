'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, MailIcon, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/use-mounted';
import { Skeleton } from './ui/skeleton';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function NavigationBar() {
  const pathname = usePathname();
  const mounted = useMounted();

  const { theme, setTheme } = useTheme();

  function handleThemeChange() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  if (!mounted) return <NavigationBarSkeleton />;

  return (
    <div className="flex items-center justify-between p-4">
      <div className="size-6 rounded-full bg-indigo-400"></div>
      <div className="flex items-center space-x-4">
        <Link
          href="/"
          className={cn(pathname === '/' && 'font-bold text-indigo-500')}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={cn(pathname === '/blog' && 'font-bold text-indigo-500')}
        >
          Blog
        </Link>
        <Link
          href="/project"
          className={cn(pathname === '/project' && 'font-bold text-indigo-500')}
        >
          Projects
        </Link>
        <Link
          href="/tutorial"
          className={cn(
            pathname === '/tutorial' && 'font-bold text-indigo-500',
          )}
        >
          Tutorial
        </Link>
      </div>
      <div className="flex">
        <Button size="icon" variant="ghost" onClick={handleThemeChange}>
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </Button>
        <Link href="https://www.linkedin.com/in/hrithiqball/" target="_blank">
          <Button size="icon" variant="ghost">
            <Linkedin size={18} />
          </Button>
        </Link>
        <Link href="https://github.com/hrithiqball" target="_blank">
          <Button size="icon" variant="ghost">
            <Github size={18} />
          </Button>
        </Link>
        <Link href="mailto:hrithiqball@gmail.com">
          <Button size="icon" variant="ghost">
            <MailIcon size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function NavigationBarSkeleton() {
  return (
    <div className="flex items-center justify-between p-4">
      <Skeleton className="h-8 w-8 rounded-xl" />
      <div className="flex items-center space-x-4">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-20" />
      </div>
      <div className="flex">
        <Skeleton className="h-8 w-8 rounded-xl" />
        <Skeleton className="h-8 w-8 rounded-xl" />
      </div>
    </div>
  );
}

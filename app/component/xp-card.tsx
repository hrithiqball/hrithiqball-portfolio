'use client';

import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import XpIcon from './xp-icon';

const MotoGP = localFont({
  src: '../../public/font/MotoGPDisplay-Bold.woff2',
});

type XpCardProps = {
  xp: {
    id: number;
    title: string;
    icon: string;
    unlocked: boolean;
    description: string;
    skills: string[];
  };
};

export default function XpCard({ xp }: XpCardProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="prose max-h-40 min-h-40 rounded border border-blue-500 p-4">
          <h2 className={cn('text-white dark:text-gray-300', MotoGP.className)}>
            {xp.title}
          </h2>
          <XpIcon icon={xp.icon} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{xp.title}</DialogTitle>
        <DialogDescription>{xp.description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

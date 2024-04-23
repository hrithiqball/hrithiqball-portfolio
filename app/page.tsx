import { cn } from '@/lib/utils';
import json from '@/public/xp.json';
import localFont from 'next/font/local';
import XpCard from './component/xp-card';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const MotoGP = localFont({
  src: '../public/font/MotoGPDisplay-Bold.woff2',
});

export default function page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="relative flex h-[70vh] w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-background dark:bg-grid-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"></div>
        <p className="relative z-20 bg-gradient-to-b from-blue-200 to-indigo-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Harith Iqbal
        </p>
      </div>
      <div className="relative h-11 w-full overflow-hidden">
        <div className="animate-slide absolute inset-0 flex">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-32 w-32 flex-shrink-0 flex-grow-0 bg-blue-500"
            >
              hye
              <GitHubLogoIcon />
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-[70vh] w-full flex-col">
        <h1 className={cn('px-4 text-2xl', MotoGP.className)}>XP</h1>
        <div className="grid grid-cols-4 p-4">
          {json.map(xp => (
            <XpCard key={xp.id} xp={xp} />
          ))}
        </div>
      </div>
      <div className="flex h-[70vh] w-full flex-col bg-blue-200">
        <h1 className={cn('px-4 text-2xl', MotoGP.className)}>XP</h1>
        <div className="grid grid-cols-4 p-4">
          {json.map(xp => (
            <XpCard key={xp.id} xp={xp} />
          ))}
        </div>
      </div>
      <div className="flex h-[70vh] w-full flex-col bg-red-400">
        <h1 className={cn('px-4 text-2xl', MotoGP.className)}>XP</h1>
        <div className="grid grid-cols-4 p-4">
          {json.map(xp => (
            <XpCard key={xp.id} xp={xp} />
          ))}
        </div>
      </div>
    </div>
  );
}

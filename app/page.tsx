import { cn } from '@/lib/utils';
import json from '@/public/xp.json';
import localFont from 'next/font/local';
import XpCard from './component/xp-card';
import InfiniteScroll from './component/infinite-scroll';

const MotoGP = localFont({
  src: '../public/font/MotoGPDisplay-Bold.woff2',
});

export default function page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="relative flex h-[70vh] w-full flex-col items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-background dark:bg-grid-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"></div>
        <h1
          className={cn(
            'relative z-20 bg-gradient-to-b from-blue-100 to-indigo-700 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl',
            MotoGP.className,
          )}
        >
          Harith Iqbal
        </h1>
        <div className="prose px-8 text-center dark:text-gray-200 sm:px-0">
          <p>
            a developer who program for a living and as hobby for my free time
            (yes i enjoyed it)
          </p>
          <p>
            playing video games, building computer and photography are some of
            the things that I enjoyed
          </p>
          <p>
            started programming during my enrollment in university and started
            my career as a <i>Software Engineer</i> since 2022
          </p>
        </div>
      </div>
      <InfiniteScroll />
      <div className="flex h-[70vh] w-full flex-col bg-blue-300 dark:bg-blue-950">
        <h1 className={cn('px-4 text-2xl', MotoGP.className)}>Experience</h1>
        <div className="grid grid-cols-4 gap-4 p-4">
          {json.map(xp => (
            <XpCard key={xp.id} xp={xp} />
          ))}
        </div>
      </div>
      <div className="flex h-[70vh] w-full flex-col bg-blue-200">
        <h1 className={cn('px-4 text-2xl', MotoGP.className)}>Career</h1>
        <div className="grid grid-cols-4 p-4">
          {json.map(xp => (
            <XpCard key={xp.id} xp={xp} />
          ))}
        </div>
      </div>
      <div className="flex h-[70vh] w-full flex-col bg-red-400">
        <h1 className={cn('px-4 text-2xl', MotoGP.className)}>Education</h1>
        <div className="grid grid-cols-4 p-4">
          {json.map(xp => (
            <XpCard key={xp.id} xp={xp} />
          ))}
        </div>
      </div>
    </div>
  );
}

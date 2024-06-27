import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import CareerTree from './components/career-tree';
import TechStacks from './components/tech-stacks';

const MotoGP = localFont({
  src: '../public/font/MotoGPDisplay-Bold.woff2',
});

export default function page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-8 pb-8">
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
      <TechStacks />
      <CareerTree />
    </div>
  );
}

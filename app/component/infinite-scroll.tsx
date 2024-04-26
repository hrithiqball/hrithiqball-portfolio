'use client';

import { animate, useMotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';

export default function InfiniteScroll() {
  const images = [
    'dotnet',
    'nodejs',
    'laravel',
    'nextjs',
    'angular',
    'react',
    'expo',
    'javascript',
    'typescript',
    'csharp',
    'php',
    'python',
    'java',
    'cpp',
  ];

  const [ref, { width }] = useMeasure();
  const xTransition = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -width / 2 - images.length;

    const controls = animate(xTransition, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTransition, width, images.length]);

  return (
    <div className="h-[150px] py-8">
      <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        style={{ x: xTransition }}
      >
        {[...images, ...images].map((image, index) => (
          <Card image={image} key={index} />
        ))}
      </motion.div>
    </div>
  );
}

function Card({ image }: { image: string }) {
  return (
    <div className="relative flex size-[70px] items-center justify-start overflow-hidden rounded-xl border border-solid border-indigo-200 dark:border-none dark:bg-slate-800 sm:size-[100px]">
      <Image
        src={`/image/${image}.png`}
        alt="image"
        width={80}
        height={80}
        className="flex flex-1 items-center justify-center p-4"
      />
    </div>
  );
}

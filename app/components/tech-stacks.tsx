/* eslint-disable @next/next/no-img-element */
'use client';

import Marquee from '@/components/magicui/marquee';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export default function TechStacks() {
  const techStacks = [
    { name: 'Dotnet', description: 'MVC, Web API', img: '/image/dotnet.png' },
    {
      name: 'Nodejs',
      description: 'Server-side JavaScript runtime',
      img: '/image/nodejs.png',
    },
    {
      name: 'Laravel',
      description: 'PHP Framework for Web Artisans',
      img: '/image/laravel.png',
    },
    {
      name: 'Nextjs',
      description: 'React Framework for Production',
      img: '/image/nextjs.png',
    },
    {
      name: 'Angular',
      description: 'Platform for building mobile and desktop web applications',
      img: '/image/angular.png',
    },
    {
      name: 'React',
      description: 'JavaScript library for building user interfaces',
      img: '/image/react.png',
    },
    {
      name: 'Expo',
      description: 'Framework and platform for universal React applications',
      img: '/image/expo.png',
    },
  ];

  const languages = [
    {
      name: 'Javascript',
      description: 'High-level, often just-in-time compiled language',
      img: '/image/javascript.png',
    },
    {
      name: 'Typescript',
      description:
        'Strongly typed programming language that builds on JavaScript',
      img: '/image/typescript.png',
    },
    {
      name: 'C#',
      description: 'Modern, object-oriented programming language',
      img: '/image/csharp.png',
    },
    {
      name: 'Php',
      description: 'Popular general-purpose scripting language',
      img: '/image/php.png',
    },
    {
      name: 'Python',
      description:
        'Interpreted, high-level, general-purpose programming language',
      img: '/image/python.png',
    },
    {
      name: 'Java',
      description: 'Class-based, object-oriented programming language',
      img: '/image/java.png',
    },
    {
      name: 'C++',
      description:
        'General-purpose programming language created as an extension of C',
      img: '/image/cpp.png',
    },
  ];

  return (
    <Card className="max-w-[40ch] sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-2xl">
      <CardHeader>
        <CardTitle>Tech Stacks</CardTitle>
        <CardDescription>
          merely tools that helped me to get the shit done
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:30s]">
            {techStacks.map(stack => (
              <TechStackCard key={stack.name} {...stack} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {languages.map(lang => (
              <TechStackCard key={lang.name} {...lang} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </CardContent>
    </Card>
  );
}

const TechStackCard = ({
  img,
  name,
  description,
}: {
  img: string;
  name: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-28 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex min-h-14 flex-row items-center justify-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <img
                className="size-8 object-contain"
                width="32"
                height="32"
                alt=""
                src={img}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {name} - {description}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </figure>
  );
};

/* eslint-disable @next/next/no-img-element */
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function CareerTree() {
  return (
    <Card className="min-w-[40ch] max-w-[40ch] sm:min-w-[768px] sm:max-w-screen-md md:min-w-[1024px] md:max-w-screen-lg lg:min-w-[1536px] lg:max-w-screen-2xl">
      <CardHeader>
        <CardTitle>Career</CardTitle>
        <CardDescription>
          the journey of my career as a corporate slave
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative flex flex-col items-center">
          <div>
            <Badge>2022</Badge>
          </div>
          <div className="relative flex h-32 w-[1px] bg-foreground">
            <div className="absolute left-1/2 top-[75%] flex size-4 -translate-x-1/2 transform">
              <div className="min-h-4 min-w-4 rounded-full bg-yellow-500"></div>
              <div className="ml-8 flex min-w-56 flex-col text-sm">
                <span className="underline underline-offset-4">
                  Software (Application) Intern
                </span>
                <div className="mt-2 flex min-w-72">
                  <img
                    src="/image/recogine.png"
                    alt="Recogine Technology Sdn. Bhd."
                    width={48}
                    height={48}
                    className="object-contain dark:bg-foreground"
                  />
                  <div className="ml-2 flex flex-col">
                    <span>Recogine Technology Sdn. Bhd.</span>
                    <span>September</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>test</span>
                  <span>test</span>
                  <span>test</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Badge>2023</Badge>
          </div>
          <div className="relative flex h-32 w-[1px] bg-foreground">
            <div className="absolute top-0 flex translate-x-[-97.5%] transform items-center">
              <div className="flex">
                <div className="mr-8 flex min-w-56 flex-col text-right text-sm">
                  <span className="underline underline-offset-4">
                    Software Engineer
                  </span>
                  <div className="mt-2 flex min-w-72 justify-end">
                    <div className="mr-2 flex flex-col">
                      <span>Recogine Technology Sdn. Bhd.</span>
                      <span>January</span>
                    </div>
                    <img
                      src="/image/recogine.png"
                      alt="Recogine Technology Sdn. Bhd."
                      width={48}
                      height={48}
                      className="object-contain dark:bg-foreground"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>test</span>
                    <span>test</span>
                    <span>test</span>
                  </div>
                </div>
                <div>
                  <div className="min-h-4 min-w-4 rounded-full bg-orange-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Badge>2024</Badge>
          </div>
          <div className="relative flex h-32 w-[1px] bg-foreground">
            <div className="absolute left-1/2 top-[45%] flex size-4 -translate-x-1/2 transform">
              <div className="min-h-4 min-w-4 rounded-full bg-blue-500"></div>
              <div className="ml-8 flex min-w-56 flex-col text-sm">
                <span className="underline underline-offset-4">
                  Software Developer
                </span>
                <div className="mt-2 flex min-w-72">
                  <img
                    src="/image/swift.png"
                    alt="Recogine Technology Sdn. Bhd."
                    width={48}
                    height={48}
                    className="object-contain dark:bg-foreground"
                  />
                  <div className="ml-2 flex flex-col">
                    <span>Swift Haulage Berhad</span>
                    <span>June</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>test</span>
                  <span>test</span>
                  <span>test</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <Badge>Present</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

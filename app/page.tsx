export default function page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="relative flex h-full w-full flex-1 items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-background dark:bg-grid-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"></div>
        <p className="relative z-20 bg-gradient-to-b from-blue-200 to-indigo-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Harith Iqbal
        </p>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {/* <h1 className="text-7xl">
        My name is{' '}
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
          Harith Iqbal
        </span>
      </h1> */}
      <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] dark:bg-background relative flex h-full w-full flex-1 items-center justify-center bg-white">
        <div className="dark:bg-background pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="relative z-20 bg-gradient-to-b from-blue-200 to-indigo-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Harith Iqbal
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Lesson 28 Assignment
        </h1>
        <p className="mt-6 italic text-md text-zinc-600 dark:text-zinc-400 max-w-md">
          Thomas Edison – “Many of life’s failures are people who did not realize how close they were to success when they gave up.”
        </p>
      </main>
    </div>
  );
}
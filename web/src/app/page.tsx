import Image from "next/image";

import icon from "public/SimpleList.svg";
import product from "public/product-image.png";
import apple from "public/apple.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 bg-orange-50">
      <div className="z-10 w-full flex max-w-6xl items-center justify-between font-mono text-sm">
        <div className="flex gap-3 items-center justify-center">
          <Image
            src={icon}
            alt="SimpleList Logo"
            className="shadow-md rounded-lg h-10 w-10"
          />
          <p className="text-xl font-sans text-zinc-900 font-bold">
            SimpleList
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-32 flex flex-col gap-12">
        <h1 className="text-zinc-900 font-extrabold text-7xl">
          Effortlessly manage
          <br />
          your tasks.
        </h1>
        <div className="flex">
          <a
            className="p-4 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 duration-150 font-sans text-orange-50 text-lg font-semibold"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={apple}
              alt="Apple Logo"
              className="h-4 w-4 invert opacity-90"
            />
            Download for Mac
          </a>
        </div>
      </div>

      <div className="flex flex-col mt-32 items-center">
        <p className="text-zinc-400 font-medium">
          Built exclusively for MacOS. Native and fast.
        </p>
        <Image
          src={product}
          alt="Product Image MacOS Desktop"
          className="mt-4 rounded-[32px] w-full max-w-5xl"
          priority
        />
      </div>

      <div className="flex mt-32 items-center">
        <p className="mt-4 text-red-400 font-medium">
          Source code on GitHub. Built by Cauã Adomaitis.
        </p>
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}

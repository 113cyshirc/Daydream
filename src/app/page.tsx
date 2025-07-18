import Image from "next/image";
import { NSTC } from "./ui/fonts";
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
    return (
        <div className={`${NSTC.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="w-full h-[85vh] flex flex-col gap-[32px] row-start-0 items-center sm:items-start">
                    <h1 className="text-blue-600 xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl">Daydream 白日夢</h1>
                    <h2 className="mt-5 text-yellow-700 ml-auto mr-auto xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg">9/27 ~ 9/28 @Google台灣(101大樓)</h2>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex ml-auto mr-auto size-10 animate-bounce items-center justify-center rounded-full bg-blue-500 p-2 ring-1 ring-gray-900/5">
                        <ArrowDownIcon className="text-white"></ArrowDownIcon>
                    </div>
                </div>

            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    <Image aria-hidden src="./file.svg" alt="File icon" width={16} height={16} />
                    Hack Club
                </a>
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    <Image aria-hidden src="./window.svg" alt="Window icon" width={16} height={16} />
                    Examples
                </a>
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    <Image aria-hidden src="./globe.svg" alt="Globe icon" width={16} height={16} />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}

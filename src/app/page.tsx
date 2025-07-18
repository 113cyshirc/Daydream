import Image from "next/image";
import { NSTC } from "./ui/fonts";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
    return (
        <div className={`${NSTC.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="w-full h-[85vh] flex flex-col gap-[32px] row-start-0 items-center">
                    <h1 className="text-blue-600 xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl">Daydream 白日夢</h1>
                    <h2 className="mt-5 text-yellow-700 ml-auto mr-auto xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg">9/27 ~ 9/28 @Google台灣(101大樓)</h2>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex ml-auto mr-auto size-10 animate-bounce items-center justify-center rounded-full bg-blue-500 p-2 ring-1 ring-gray-900/5">
                        <ArrowDownIcon className="text-white"></ArrowDownIcon>
                    </div>
                </div>
                <div className="pl-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-5 justify-around">
                        <div className="border-6 border-blue-600 rounded p-5 flex flex-col gap-5">
                            <h2 className="text-2xl text-center text-amber-700">發揮創意</h2>
                            <p>當然，如果你有想做什麼東西，我們這個活動就是為了幫你實現! 如果沒有想法也沒關係，我們會想辦法讓你做出你目前為止最滿意的作品! 欸? 有人提到可以凌晨3點寫程式嗎!?</p>
                            <Image aria-hidden src="./globe.svg" alt="Globe icon" width={100} height={100} />
                        </div>
                        <div className="border-6 border-blue-600 rounded p-5 flex flex-col gap-5">
                            <p className="text-2xl text-center text-amber-700">凌晨打code</p>
                            <p>我們會在活動中舉辦多場創作坊，在這裡，你可以學到許多又新、又好玩、又有趣的事物。</p>
                            <Image aria-hidden src="./globe.svg" alt="Globe icon" width={100} height={100} />
                        </div>
                        <div className="border-6 border-blue-600 rounded p-5 flex flex-col gap-5">
                            <p className="text-2xl text-center text-amber-700">做酷酷的專案</p>
                            <p>不用說也知道，很多人會參加這次活動，如果你想來認識一些志同道合的朋友，或找一些可以一起做專案的人，那麼來這裡就對了! 說不定還會認識未來的大佬喔!</p>
                            <Image aria-hidden src="./globe.svg" alt="Globe icon" width={100} height={100} />
                        </div>
                    </div>
                <div className="flex flex-col gap-[32px] justify-items-center items-start xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base">
                    <h1 className="text-yellow-700 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg">這是什麼活動?</h1>
                    <div className="pl-5 flex flex-col gap-5">
                        <p>
                            Daydream(白日夢)是一個由高中生主持的全球性的
                            <Link href="https://zh.wikipedia.org/zh-tw/%E9%BB%91%E5%AE%A2%E6%9D%BE" target="_blank" className="text-blue-600">
                                黑客松
                            </Link>
                            ，在這裡可以讓你盡情的發揮想像，實現你的白日夢!
                        </p>
                        <p>
                            這個活動是由
                            <Link href="https://www.hackclub.com/" target="_blank" className="text-blue-600">
                                Hack Club
                            </Link>
                            ，一個在美國的501(c)(3)非營利組織主辦，該組織旨在於推廣並支持世界各地超過50000名，有著自己想完成的作品的
                            <Link href="https://zh.wikipedia.org/zh-tw/%E5%88%9B%E5%AE%A2" target="_blank" className="text-blue-600">
                                maker
                            </Link>
                            。
                        </p>
                    </div>
                    <h1 className="text-yellow-700 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg">參加後可以幹嘛?</h1>
                    <div className="pl-5 grid md:grid-cols-2 grid-cols-1 w-full gap-5 justify-around">
                        <div>
                            <p className="text-center text-amber-700">發揮創意</p>
                            <p>當然，如果你有想做什麼東西，我們這個活動就是為了幫你實現! 如果沒有想法也沒關係，我們會想辦法讓你做出你目前為止最滿意的作品! 欸? 有人提到可以凌晨3點寫程式嗎!?</p>
                        </div>
                        <div>
                            <p className="text-center text-amber-700">學新事物</p>
                            <p>我們會在活動中舉辦多場創作坊，在這裡，你可以學到許多又新、又好玩、又有趣的事物。</p>
                        </div>
                        <div>
                            <p className="text-center text-amber-700">交新朋友</p>
                            <p>不用說也知道，很多人會參加這次活動，如果你想來認識一些志同道合的朋友，或找一些可以一起做專案的人，那麼來這裡就對了! 說不定還會認識未來的大佬喔!</p>
                        </div>
                        <div>
                            <p className="text-center text-amber-700">學習歷程?</p>
                            <p>最現實的學習歷程當然也可以寫這個活動，把你做的專案放上去給教授看，絕對會讓他跌破眼鏡!</p>
                        </div>
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

"use client"
import { ChevronRightIcon, GitHubLogoIcon, LayersIcon } from '@radix-ui/react-icons'
import { GeistMono } from 'geist/font/mono'
import { Button } from './ui/button'

export default function MainPage() {
    return (
        <div className="flex w-full h-[500px] justify-center items-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] border-solid border-b-2">
            <li className="list-none">
            <div className={GeistMono.className + " mx-10 text-xl transition-colors font-black flex justify-center items-center"}><LayersIcon className="mx-2"/> Satherua</div>
                <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight'>Powerful management platform. Built for productivity.</h1>
                <div className="text-center text-xl leading-7">Satherua is trusted by multiple companies and 50.000+ customers.</div>
                <div className="flex justify-center items-center my-3">
                    <Button className="mx-1">Learn more <ChevronRightIcon className="h-4 w-4" /></Button>
                    <Button variant="outline" className="mx-1">View on GitHub <GitHubLogoIcon className="h-4 w-4 ms-2" /></Button>
                </div>
            </li>
        </div>
    )
}
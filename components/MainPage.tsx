"use client"
import { ChevronRightIcon, GitHubLogoIcon, LayersIcon } from '@radix-ui/react-icons'
import { GeistMono } from 'geist/font/mono'
import { Button } from './ui/button'
import Link from 'next/link'
import { PrototypeBorder, PrototypeNavBar } from './PrototypeMainLayout'
import { CalendarDefault } from './calendar_default'
import { AvatarDemo } from './avatar_demo'
export default function MainPage() {
    return (
        <div className="main-page">
            <div className="flex w-full h-[500px] justify-center items-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]">
                <li className="list-none">
                    <div className={GeistMono.className + " mx-10 text-xl transition-colors font-black flex justify-center items-center"}><LayersIcon className="mx-2"/> Satherua</div>
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight'>Powerful management platform. Built for productivity.</h1>
                    <div className="text-center text-xl leading-7">Satherua is trusted by multiple companies and 50.000+ customers.</div>
                    <div className="flex justify-center items-center my-3">
                        <Button className="mx-1">Learn more <ChevronRightIcon className="h-4 w-4" /></Button>
                        <Link href="https://github.com/Yubikitasu/satherua-project" target="_blank">
                            <Button variant="outline" className="mx-1">View on GitHub <GitHubLogoIcon className="h-4 w-4 ms-2" /></Button>
                        </Link>
                    </div>
                </li>
            </div>
            {/* <div className="w-full h-[600px] flex justify-center items-center">
                <li className="list-none">
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight'>Satherua is a powerful and robust tool for managing your teams.</h1>
                    <div className="text-center text-xl leading-7">About 80% of teams prefer Satherua more than it's competitive products.</div>
                    <div className="flex justify-center items-center my-3">
                        <Button className="mx-1">See the statistics <ChevronRightIcon className="h-4 w-4" /></Button>
                        <Button className="mx-1">Talk to Customer Service <ChevronRightIcon className="h-4 w-4" /></Button>
                    </div>
                </li>
            </div> */}
            <div className="w-full">
                <div className="w-full grid h-[600px] grid-cols-2">
                    <div className="flex w-full h-full justify-center items-center p-24">
                        <li className="list-none">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">Bring your teams together.</h1>
                            <div className="w-[600px] my-3">At the heart of Satherua are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</div>
                            <Button>Learn more about Satherua workspace <ChevronRightIcon className="h-4 w-4" /></Button>
                        </li>
                    </div>
                    <div className="flex w-full h-full justify-center items-center py-2 ps-2 ">
                        <PrototypeBorder>
                            <PrototypeNavBar></PrototypeNavBar>

                            <div className="absolute grid grid-cols-[330px_auto] pt-14 top-0 left-0 w-full h-full border-solid border-e-2 shadow-lg">

                                <div className="relative top-0 p-6 left-0 h-full border-solid border-e-2 shadow-lg max-w-[330px]">
                                    <CalendarDefault></CalendarDefault>
                                    {/* Chats */}
                                    <div className="grid my-3 p-2 hover:bg-accent rounded grid-cols-[.20fr_.80fr] cursor-pointer">
                                        <div className="flex justify-center items-center">
                                            <AvatarDemo src="" fallback="FA"></AvatarDemo>
                                        </div>
                                        <div className="flex justify-start items-center">
                                            <li className="list-none">
                                                <div className="font-bold text-md leading-tight">Fred Albert</div>
                                                <div className="text-muted-foreground max-w-[270px] leading-tight text-sm line-clamp-1">Hey I got this project I need to finish it now.</div>
                                                <div className="text-muted-foreground max-w-[296px] leading-tight text-xs line-clamp-1">12 hours ago</div>
                                            </li>
                                        </div>
                                    </div>
                                    <div className="grid my-3 p-2 hover:bg-accent rounded grid-cols-[.20fr_.80fr] cursor-pointer">
                                        <div className="flex justify-center items-center">
                                            <AvatarDemo src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/001e683f452f183b3d9e9f4a4a3aac580bcd05f1_full.jpg" fallback="FA"></AvatarDemo>
                                        </div>
                                        <div className="flex justify-start items-center">
                                            <li className="list-none">
                                                <div className="font-bold text-md leading-tight">Eric Fatima</div>
                                                <div className="text-muted-foreground max-w-[270px] leading-tight text-sm line-clamp-1">The back-end have some problems back there. Can you go fix it?</div>
                                                <div className="text-muted-foreground max-w-[296px] leading-tight text-xs line-clamp-1">12 hours ago</div>
                                            </li>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            
                        </PrototypeBorder>
                    </div>
                </div>
            </div>
        </div>
    )
}
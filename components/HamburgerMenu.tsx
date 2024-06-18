"use client"

import * as React from "react"
import Link from "next/link"
import {
    AvatarIcon,
    CalendarIcon,
    CubeIcon,
    CursorArrowIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    GitHubLogoIcon,
    HamburgerMenuIcon,
    HomeIcon,
    MixIcon,
    PersonIcon,
    ReaderIcon,
    RocketIcon,
  } from "@radix-ui/react-icons"
   
  import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Button } from "./ui/button"
import { ArchiveIcon } from "lucide-react"

export function HamburgerMenu() {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <Button variant="ghost" onClick={() => setOpen((open) => !open)}>
            <HamburgerMenuIcon></HamburgerMenuIcon>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <Link href="/">
                        <CommandItem>
                            <HomeIcon className="mr-2 h-4 w-4" />
                            <span>Home</span>
                        </CommandItem>
                    </Link>
                    <Link href="/">
                        <CommandItem>
                            <RocketIcon className="mr-2 h-4 w-4" />
                            <span>Getting started</span>
                        </CommandItem>
                    </Link>
                    
                    <Link href="/">
                        <CommandItem>
                            <ArchiveIcon className="mr-2 h-4 w-4" />
                            <span>Products</span>
                        </CommandItem>
                    </Link>
                    
                    <Link href="/">
                        <CommandItem>
                            <MixIcon className="mr-2 h-4 w-4" />
                            <span>Pricing</span>
                        </CommandItem>
                    </Link>
                    
                    <CommandSeparator></CommandSeparator>
                    <Link href="/">
                        <CommandItem>
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                        </CommandItem>
                    </Link>
                    
                    <Link href="/">
                        <CommandItem>
                            <AvatarIcon className="mr-2 h-4 w-4" />
                            <span>Your Account</span>
                        </CommandItem>
                    </Link>
                    
                    <Link href="https://github.com/Yubikitasu/satherua-project" target="_blank">
                        <CommandItem>
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                            <span>View on Github</span>
                        </CommandItem>
                    </Link>
                    
                </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
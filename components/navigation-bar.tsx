"use client"

import * as React from "react"
import Link from "next/link"
import { GeistMono } from "geist/font/mono"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ChevronRightIcon, GitHubLogoIcon, HamburgerMenuIcon, HomeIcon, LayersIcon, MagnifyingGlassIcon, PersonIcon } from "@radix-ui/react-icons"
import { ModeToggle } from "./modetoggle"
import { Button } from "./ui/button"
import { HamburgerMenu } from "./HamburgerMenu"

export function NavigationBar() {
  return (
    <div className="sticky top-0 left-0 w-full h-14 flex items-center border-solid border-b-[.5px] shadow-sm bg-background z-20">
      <div className="absolute left-0 xl:ms-16"> 
        <NavigationBarMain></NavigationBarMain>
      </div>
      <div className="absolute right-0 xl:me-16 me-8">
        <NavigationBarFeatures></NavigationBarFeatures>
      </div>
    </div>
  )
}

export function NavigationBarMain() {
    return(
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <div className={GeistMono.className + " mx-10 transition-colors hover:font-black flex justify-center items-center font-bold"}><LayersIcon className="mx-2"/> Satherua</div>
              </NavigationMenuLink>
            </NavigationMenuItem> 
            <NavigationMenuItem className="text-muted-foreground leading-tight hidden pointer-events-none lg:inline-flex">
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                <div>Home</div>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-muted-foreground leading-tight hidden lg:inline-flex">Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a href="/" className="flex w-full h-full justify-start items-end bg-gradient-to-b from-muted/50 to-muted p-6 rounded no-underline outline-none focus:shadow-md transition-colors hover:bg-muted">
                      <li>
                      <div className={GeistMono.className + " text-lg font-medium"}><LayersIcon></LayersIcon> Satherua</div>
                      <p className="text-sm leading-tight text-muted-foreground">Leading solution for human resource management.</p>
                      </li>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/" title="Documentations">Install and use in the most convenient way.</ListItem>
                  <ListItem href="/" title="Updates">Check and update to the latest version.</ListItem>
                  <ListItem href="/" title="Frequently asked questions">Answer questions when using our services.</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-muted-foreground leading-tight hidden lg:inline-flex">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 lg:w-[700px] lg:grid-cols-[1fr_1fr]">
                  <ListItem title="Latest AI technology">Bring productivity towards management.</ListItem>
                  <ListItem title="Automatic timekeeping">Manage human resources in an orderly and clear manner.</ListItem>
                  <ListItem title="Analyze business sales">Helps businesses have a clearer view of company revenue.</ListItem>
                  <ListItem title="Low costs">Powerful operation, no hidden fees.</ListItem>
                  <li className="col-span-2">
                    <a href="/" className="flex w-full h-full justify-center items-center bg-gradient-to-b from-muted/50 to-muted p-6 rounded no-underline outline-none focus:shadow-md transition-colors hover:bg-muted">
                    <li>
                      <p className="text-lg">Faster management, with Satherua.</p>  
                      <p className="text-sm text-muted-foreground text-center">Increase productivity and creativity. Agile and stable.</p>
                    </li>
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-muted-foreground leading-tight hidden lg:inline-flex">
              <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 lg:w-[900px] lg:h-[500px] lg:grid-cols-[.75fr_.75fr_.75fr_.75fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a href="/" className="flex w-full h-full justify-start items-end bg-gradient-to-b from-muted/50 to-muted p-6 rounded no-underline outline-none focus:shadow-md transition-colors hover:bg-muted">
                      <li>
                      <div className={GeistMono.className + " text-lg font-medium"}><LayersIcon></LayersIcon> Satherua</div>
                      <div className="text-2xl font-bold">Basic</div>
                      <p className="text-sm leading-tight my-2 text-muted-foreground">Plans for small management.</p>
                      <div className="text-sm leading-tight text-muted-foreground mt-2">Starting at <div className="font-bold text-2xl text-primary flex justify-start items-end">4.99$<p className="text-sm leading-tight text-muted-foreground">/month*</p></div></div>
                      <Button className="mt-2">
                        Learn more
                        <ChevronRightIcon className="h-4 w-4" />
                      </Button>
                      </li>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a href="/" className="flex w-full h-full justify-start items-end bg-gradient-to-b from-muted/50 to-muted p-6 rounded no-underline outline-none focus:shadow-md transition-colors hover:bg-muted">
                      <li>
                      <div className={GeistMono.className + " text-lg font-medium"}><LayersIcon></LayersIcon> Satherua</div>
                      <div className="text-2xl font-bold">Pro</div>
                      <p className="text-sm leading-tight my-2 text-muted-foreground">Plans for medium management.</p>
                      <div className="text-sm leading-tight text-muted-foreground mt-2">Starting at <div className="font-bold text-2xl text-primary flex justify-start items-end">9.49$<p className="text-sm leading-tight text-muted-foreground">/month*</p></div></div>
                      <Button className="mt-2">
                        Learn more
                        <ChevronRightIcon className="h-4 w-4" />
                      </Button>
                      </li>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a href="/" className="flex w-full h-full justify-start items-end bg-gradient-to-b from-muted/50 to-muted p-6 rounded no-underline outline-none focus:shadow-md transition-colors hover:bg-muted border-double border-[0.5px] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                      <li>
                      <div className={GeistMono.className + " text-lg font-medium"}><LayersIcon></LayersIcon> Satherua</div>
                      <div className="text-2xl font-bold">Plus+</div>
                      <div className="text-sm font-bold">Recommended</div>
                      <p className="text-sm leading-tight my-2 text-muted-foreground">Plans for all-sized management.</p>
                      <div className="text-sm leading-tight text-muted-foreground mt-2">Starting at <div className="font-bold text-2xl text-primary flex justify-start items-end">14.99$<p className="text-sm leading-tight text-muted-foreground">/month*</p></div></div>
                      <Button className="mt-2">
                        Learn more
                        <ChevronRightIcon className="h-4 w-4" />
                      </Button>
                      </li>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a href="/" className="flex w-full h-full justify-start items-end bg-gradient-to-b from-muted/50 to-muted p-6 rounded no-underline outline-none focus:shadow-md transition-colors hover:bg-muted">
                      <li>
                      <div className={GeistMono.className + " text-lg font-medium"}><LayersIcon></LayersIcon> Satherua</div>
                      <div className="text-2xl font-bold">Premium</div>
                      <p className="text-sm leading-tight my-2 text-muted-foreground">Plans for large management.</p>
                      <div className="text-sm leading-tight text-muted-foreground mt-2">Starting at <div className="font-bold text-2xl text-primary flex justify-start items-end">19.99$<p className="text-sm leading-tight text-muted-foreground">/month*</p></div></div>
                      <Button className="mt-2">
                        Learn more
                        <ChevronRightIcon className="h-4 w-4" />
                      </Button>
                      </li>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-muted-foreground leading-tight hidden lg:inline-flex">
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle() + " border-solid border-[1px]"}>
                Request a Live Demo
              </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    )
}

export function NavigationBarFeatures() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="lg:inline-flex hidden">
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            <MagnifyingGlassIcon />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="lg:inline-flex hidden">
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            <PersonIcon />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="lg:inline-flex hidden">
          <NavigationMenuLink href="https://github.com/Yubikitasu/satherua-project" target="_blank" className={navigationMenuTriggerStyle()}>
            <GitHubLogoIcon />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem className="lg:hidden">
          <HamburgerMenu></HamburgerMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
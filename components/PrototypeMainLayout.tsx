import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import React, { ReactNode } from "react";

interface Props {
    children_navbar: ReactNode;
}

const PrototypeBorder = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({children,}) => {
  return (
    <div className="w-full h-full relative rounded border-solid border-s-2 border-t-2 border-b-2 bg-background shadow-2xl overflow-hidden">
        {children}
    </div>
  )
})
PrototypeBorder.displayName = "PrototypeBorder"

export function PrototypeNavBar() {
    return (
        <div className="relative top-0 left-0 w-full h-14 flex items-center border-solid border-b-[.5px] shadow-sm bg-background z-10">
            <div className="absolute left-0 mx-2">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className="text-muted-foreground leading-tight hover:cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dashboard</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-muted-foreground leading-tight hover:cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Mail</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-muted-foreground leading-tight hover:cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Chat</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-muted-foreground leading-tight hover:cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Tasks</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-muted-foreground leading-tight hover:cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Authentication</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-muted-foreground leading-tight hover:cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Music</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-muted-foreground leading-tight hover:cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle() + "border-solid border-[.5px]"}>Talk to Manager</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
            <div className="absolute right-0 mx-2">
            </div>
        </div>
    )
}

export {
    PrototypeBorder,
}
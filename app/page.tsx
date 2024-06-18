"use client"

import MainPage from "@/components/MainPage";
import { NavigationBar, NavigationBarFeatures, NavigationBarMain } from "@/components/navigation-bar";


import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <MainPage />
    </main>
  );
}

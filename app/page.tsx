"use client"

import MainPage from "@/components/MainPage";
import { NavigationBarFeatures, NavigationBarMain } from "@/components/navigation-bar";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 left-0 w-full h-14 flex items-center border-solid border-b-[.5px] shadow-sm bg-background">
        <div className="absolute left-0 mx-2"> 
          <NavigationBarMain></NavigationBarMain>
        </div>
        <div className="absolute right-0 mx-2">
          <NavigationBarFeatures></NavigationBarFeatures>
        </div>
      </div>
      <MainPage />
    </main>
  );
}

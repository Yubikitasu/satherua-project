"use client"

import MainPage from "@/components/MainPage";
import { NavigationBar, NavigationBarFeatures, NavigationBarMain } from "@/components/navigation-bar";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <MainPage />
    </main>
  );
}

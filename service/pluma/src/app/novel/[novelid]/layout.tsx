import { Metadata } from "next";
import React from "react";
import NavBar from "@/components/edit/NavBar";

export const metadata: Metadata = {
  title: "Detail",
  description: "Generated by create next app",
};

export default function NovelDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <header className="bg-blackAlpha-300 h-10 w-full">
        <div />
      </header>
      <div className="flex h-screen w-full">
        <NavBar />
        <div className="bg-blackAlpha-900 h-full w-[200px]" />
        {children}
      </div>
    </main>
  );
}

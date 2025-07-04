"use client";
import { ThemeToggle } from "@/components/shared/ToggleTheme";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`relative 
      bg-card
         dark:bg-gradient-to-b dark:from-[#04131D] dark:to-[#04131D]
        max-h-svh w-full overflow-y-hidden`}
    >
      <Image
        src="/dark-bg.svg"
        alt="Background"
        fill
        className="object-cover hidden  dark:block  opacity-30 object-center"
        priority
      />
      <Image
        src="/mobile-top-bg.svg"
        alt="Background"
        width={300}
        height={300}
        className="object-contain  w-full dark:hidden    absolute top-0  object-top"
        priority
      />
      <Image
        src="/mobile-bg.svg"
        alt="Background"
        width={300}
        height={300}
        className="object-contain dark:sm:hidden w-full hidden dark:block   absolute bottom-0  object-bottom"
        priority
      />
      {children}
      <div className="absolute xl:w-56 left-1/2 transform -translate-x-1/2 md:left-4 md:transform-none bottom-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Layout;

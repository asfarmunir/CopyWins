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
     
        bg-gradient-to-b from-[#78A4FE] to-white dark:bg-gradient-to-b dark:from-[#04131D] dark:to-[#04131D]
        max-h-svh w-full overflow-y-hidden`}
    >
      <Image
        src="/dark-bg.svg"
        alt="Background"
        fill
        className="object-cover hidden dark:block  opacity-30 object-center"
        priority
      />
      <Image
        src="/mobile-bg.svg"
        alt="Background"
        width={300}
        height={300}
        className="object-contain sm:hidden w-full absolute bottom-0  object-bpttom"
        priority
      />
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:left-4 md:transform-none bottom-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Layout;

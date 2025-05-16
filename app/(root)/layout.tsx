// import Footer from "@/components/shared/footer";
// import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main
      className={`h-svh flex overflow-y-hidden bg-background gap-2 2xl:gap-2.5 3xl:gap-3  p-2 2xl:p-2.5 3xl:p-3 `}
    >
      <Sidebar />
      <main className="flex relative flex-col  items-start overflow-hidden  max-h-screen  w-full">
        <section className="  h-full w-full relative">{children}</section>
      </main>
    </main>
  );
};

export default Layout;

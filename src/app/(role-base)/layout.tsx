import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import { F_logo, IconLogo } from "@/lib/assets/icons";
import { ChildProp } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DashboardLayout({ children }: ChildProp) {
  return (
    <main className="flex w-full overflow-y-scroll gap-2 h-screen p-4">
      <div className="flex-col  max-w-[50px] lg:max-w-max  w-max sm:w-max md:w-[8%] lg:w-max  rounded-xl flex">
        <div className="flex  items-center justify-center w-full  flex-1">
          <Link
            href={"/"}
            className=" flex gap-2 items-center justify-center lg:justify-start "
          >
            <F_logo classname="hidden lg:block text-[90px] h-[50px]  text-indigo-500" />
            <IconLogo classname="block text-5xl   text-indigo-500 lg:hidden" />
          </Link>
        </div>
        <div className="  h-full p-4">
          <Menu />
        </div>
      </div>
      <div className="flex-col w-5/6 flex-1   md:w-[92%] lg:w-5/6   rounded-xl md:p-4 flex overflow-y-scroll">
        <Nav />
        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;

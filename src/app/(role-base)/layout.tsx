import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import { ChildProp } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DashboardLayout({ children }: ChildProp) {
  return (
    <main className="flex w-full overflow-y-scroll gap-2 h-screen p-4">
      <div className="flex-col w-max sm:w-max md:w-[8%] lg:w-max  rounded-xl p-4 flex">
        <Link
          href={"/"}
          className=" flex gap-2 items-center justify-center lg:justify-start "
        >
          <Image src={"/logo.png"} width={24} height={24} alt="assigna" />
          <span className="hidden lg:block">Assigna</span>
        </Link>
        <Menu />
      </div>
      <div className="flex-col w-5/6 md:w-[92%] lg:w-5/6   rounded-xl p-4 flex overflow-y-scroll">
        <Nav />
        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;

import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <nav className="w-full flex items-center justify-end md:justify-between">
      {/* Search component */}
      <div className=" gap-2 border-[1px] border-gray-400 px-4 text-gray-600 py-2  rounded-full hidden md:flex items-center  justify-between">
        <Search className=" w-3 h-3" />
        <input
          type="text"
          className=" focus:outline-none placeholder:text-xs text-xs  placeholder:text-gray-600  bg-transparent  w-5/6 "
          placeholder="Search..."
        />
      </div>

      {/* Usernavigations */}
      <div className="flex  items-center ">
        <div className="flex cursor-pointer p-4 bg-white rounded-full">
          <Image src={"/message.png"} width={24} height={24} alt="message" />
        </div>
        <div className="flex relative cursor-pointer p-4 bg-white rounded-full">
          <div className="absolute bg-red-200 text-red-500 w-5 h-5 top-0 right-1 rounded-full flex items-center justify-center">
            <span className=" leading-3 text-xs ">1</span>
          </div>
          <Image
            src={"/announcement.png"}
            width={24}
            height={24}
            alt="message"
          />
        </div>
        <div className="flex mx-4 flex-col">
          <span className="text-xs font-semibold ">Ajmaljs</span>
          <span className="text-[10px] text-right">Admin</span>
        </div>
        <div className="flex mx-4 cursor-pointer  bg-white overflow-clip rounded-full">
          <Image
            src={"/avatar.png"}
            className="w-7 h-7"
            width={24}
            height={24}
            alt="message"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;

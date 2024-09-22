import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl odd:bg-white even:text-white odd:text-main even:bg-main p-2 flex-1 min-w-max ">
      <div className="flex justify-between  items-center">
        <span className="rounded-md odd:bg-main text-white p-[4px]  text-[7px] flex items-center justify-center">
          20/09/24
        </span>
        <Link href={"#"}>
          {" "}
          <MoreHorizontal className="w-4 h-4" />
        </Link>
      </div>
      <h1 className="text-xs font-semibold my-2">1,493</h1>
      <h3 className="text-[10px]">{type}s</h3>
    </div>
  );
};

export default DashCard;

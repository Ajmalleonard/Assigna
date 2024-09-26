"use client";
import { MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/lib/data";
import { usePathname } from "next/navigation";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
interface Event {
  id: number;
  title: string;
  time: string;
  descriptions: string;
}

function CalendarView() {
  const [value, onChange] = useState<Value>(new Date());
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);

  const toggleEvents = () => setShowAllEvents(!showAllEvents);
  const toggleAnnouncements = () =>
    setShowAllAnnouncements(!showAllAnnouncements);

  const pathname = usePathname().split("/")[1];

  const renderItems = (items: Event[], showAll: boolean) => {
    const displayItems = showAll ? items : items.slice(0, 3);
    return displayItems.map((item) => (
      <div key={item.id} className="w-full bg-white p-4 rounded-xl mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-sm">{item.title}</h1>
          <span className="text-gray-500 text-xs">{item.time}</span>
        </div>
        <hr className="border-t odd:border-main even:border-main my-2" />
        <span className="text-[10px] leading-[8px]">
          {item.descriptions.substring(0, 150)}...
        </span>
      </div>
    ));
  };

  return (
    <div className="w-full h-full  p-4 overflow-y-scroll">
      {pathname !== "teacher" && (
        <>
          {" "}
          <h3 className="text-sm font-semibold">Calendar</h3>
          <Calendar onChange={onChange} />
        </>
      )}

      <div className="flex flex-col gap-2 my-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold">Events</h3>
          <span className="text-[9px] cursor-pointer" onClick={toggleEvents}>
            {showAllEvents ? "Show Less" : "View All"}
          </span>
        </div>
        {renderItems(events, showAllEvents)}
      </div>

      <div className="flex flex-col gap-2 my-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold">Announcements</h3>
          <span
            className="text-xs cursor-pointer"
            onClick={toggleAnnouncements}
          >
            {showAllAnnouncements ? "Show Less" : "View All"}
          </span>
        </div>
        {renderItems(events, showAllAnnouncements)}
      </div>
    </div>
  );
}

export default CalendarView;

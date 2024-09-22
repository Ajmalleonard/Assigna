"use client";
import CalendarView from "@/components/Events/MainCal";
import DashCard from "@/components/DashCard";
import Finance from "@/components/charts/Finance";
import Students from "@/components/charts/Students";
import { MoreHorizontal } from "lucide-react";
import React from "react";

function Admin() {
  return (
    <section className="flex flex-col bg-lightBg gap-8  w-full md:flex-row">
      {/* Left Side */}
      <div className="flex w-full flex-col lg:w-2/3">
        <div className="flex w-full justify-between gap-3 flex-wrap   p-4">
          {" "}
          <DashCard type="Parent" />
          <DashCard type="Student" />
          <DashCard type="Teacher" />
          <DashCard type="Staff" />
        </div>
        <div className="flex flex-col">
          {/* Table */}
          <div className="flex flex-col  md:flex-row">
            <Students />
          </div>
          {/* Bottom */}
          <Finance />
        </div>
      </div>
      {/* Right Side */}

      <div className="flex w-full  flex-col lg:w-1/3">
        <CalendarView />
      </div>
    </section>
  );
}

export default Admin;

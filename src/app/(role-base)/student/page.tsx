import Events from "@/components/Calenders/BigCalender";
import CalendarView from "@/components/Events/MainCal";
import React from "react";

function Student() {
  return (
    <section className="flex flex-col gap-4  xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="bg-white rounded-md h-full ">
          <h4 className="text-lg font-normal mb-2">Schedule (A4)</h4>
          <hr className="my-4" />
          <Events />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex flex-col w-full xl:w-1/3 ">
        <CalendarView />
      </div>
    </section>
  );
}

export default Student;

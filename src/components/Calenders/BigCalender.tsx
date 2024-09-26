"use client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, View, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

export default function Event() {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const onViewChange = (nextView: View) => setView(nextView);
  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: 900 }}
        onView={onViewChange}
        className="h-1/2"
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 17, 0, 0)}
      />
    </div>
  );
}

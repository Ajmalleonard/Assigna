import { MoreHorizontal } from "lucide-react";
import { IoIosMan, IoIosWoman } from "react-icons/io";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const attendanceData = [
  { name: "Mon", present: 40, absent: 24 },
  { name: "Tue", present: 45, absent: 28 },
  { name: "Wed", present: 42, absent: 30 },
  { name: "Thu", present: 48, absent: 32 },
  { name: "Fri", present: 50, absent: 34 },
];

const studentData = [
  { name: "Boys", value: 453, fill: "#171275  " },
  { name: "Girls", value: 432, fill: "#8C94DCFF  " },
  { name: "Total", value: 1000, fill: "#5124E6" },
];

function Students() {
  return (
    <div className="w-full  max-h-max h-full p-4 flex flex-col lg:flex-row gap-4">
      <div
        style={{ fontSize: "10px" }}
        className="flex flex-col h-full  min-h-[380px] justify-between bg-white rounded-2xl p-4 w-full lg:w-2/3"
      >
        <div className="flex text-black items-center justify-between">
          <h3>Attendance</h3>
          <MoreHorizontal
            className="text-fadeDark cursor-pointer"
            width={20}
            height={20}
          />
        </div>
        <div style={{ fontSize: "10px" }} className="w-full mt-5   h-full ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={attendanceData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis axisLine={false} dataKey="name" />
              <YAxis axisLine={false} />
              <Tooltip
                contentStyle={{
                  display: "flex",
                  gap: "20px",
                  justifyItems: "center",
                  background: "white",
                  padding: "5px",
                  borderRadius: "10px",
                  color: "black",
                  fontSize: "10px",
                }}
              />
              <Legend />
              <Bar
                barSize={20}
                radius={[10, 10, 0, 0]}
                dataKey="present"
                fill="#5124E6"
              />
              <Bar
                barSize={20}
                radius={[10, 10, 0, 0]}
                dataKey="absent"
                fill="#8C94DCFF  "
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div
        style={{ fontSize: "10px" }}
        className="flex flex-col min-h-[300px] h-full max-h-max  bg-white rounded-2xl p-4 w-full lg:w-1/3"
      >
        <div className="flex text-black items-center justify-between">
          <h3>Students</h3>
          <MoreHorizontal
            className="text-fadeDark cursor-pointer"
            width={20}
            height={20}
          />
        </div>
        <div style={{ fontSize: "10px" }} className="w-full  h-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={25}
              data={studentData}
            >
              <RadialBar
                background
                dataKey="value"
                label={{
                  position: "insideStart",
                  fill: "#fff",
                  fontSize: 6,
                }}
                cornerRadius={2}
                isAnimationActive
              />
              <Legend
                style={{
                  fontSize: "8px",
                }}
              />

              <Tooltip
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div
                        className={`custom-tooltip px-2 py-1 text-[10px] text-white rounded-xl ${
                          (data.name === "Boys" && "bg-[#171275]") ||
                          (data.name === "Girls" && "bg-[#8C94DCFF]") ||
                          (data.name === "Total" && "bg-main ")
                        }`}
                      >
                        <p className="label">{`${data.name} : ${data.value}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Students;

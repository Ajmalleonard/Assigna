import { MoreHorizontal } from "lucide-react";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    inc: 4000,
    exp: 2400,
  },
  {
    name: "Feb",
    inc: 3000,
    exp: 1398,
  },
  {
    name: "Mar",
    inc: 2000,
    exp: 9800,
  },
  {
    name: "Apr",
    inc: 2780,
    exp: 3908,
  },
  {
    name: "May",
    inc: 1890,
    exp: 4800,
  },
  {
    name: "Jun",
    inc: 2390,
    exp: 3800,
  },
  {
    name: "Jul",
    inc: 9490,
    exp: 4300,
  },
  {
    name: "Aug",
    inc: 3490,
    exp: 4300,
  },
  {
    name: "Sep",
    inc: 3490,
    exp: 4300,
  },
  {
    name: "Oct",
    inc: 3490,
    exp: 4700,
  },
  {
    name: "Nov",
    inc: 6490,
    exp: 4300,
  },
  {
    name: "Dec",
    inc: 3490,
    exp: 4300,
  },
];

const Finance = () => {
  return (
    <div className="w-full  h-full max-h-[300px]  p-4">
      {" "}
      <div className="flex flex-col h-full min-h-max flex-1  justify-between bg-white  rounded-2xl p-4 w-full ">
        <div
          style={{ fontSize: "10px" }}
          className="flex my-4 text-black items-center justify-between"
        >
          <h3>Attendance</h3>
          <MoreHorizontal
            className="text-fadeDark cursor-pointer"
            width={20}
            height={20}
          />
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis tick={{ fontSize: 9 }} axisLine={false} dataKey="name" />
            <YAxis tick={{ fontSize: 9 }} axisLine={false} />
            <Tooltip
              contentStyle={{
                display: "flex",
                gap: "10px",
                justifyItems: "center",
                background: "white",
                padding: "5px",
                borderRadius: "10px",
                boxShadow: "initial",
                border: "0.2px solid blue ",
                color: "black",
                fontSize: "9px",
              }}
            />
            <Legend
              style={{
                fontSize: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="exp"
              stroke="#FF0E0EFF"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="inc" stroke="#0216ACFF" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Finance;

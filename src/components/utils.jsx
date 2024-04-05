import React from "react";
import ExamImg from "../assets/images/query.jpeg";
import { Link } from "react-router-dom";
export function Exam(props) {
  return (
    <>
      <div className="border border-slate-300 rounded-md overflow-hidden shadow-sm">
        <div className="min-h-45 flex items-center justify-center overflow-hidden bg-[#ecf5fe]">
          <img className="w-2/3" src={ExamImg} alt="" />
        </div>
        <div className="p-4">
          <table className="text-sm text-left">
            <tr>
              <th>Subject</th>
              <th>:</th>
              <td>{props.title}</td>
            </tr>
            <tr>
              <th>Date</th>
              <th>:</th>
              <td>{props.date}</td>
            </tr>
            <tr>
              <th>Time</th>
              <th>:</th>
              <td>{props.time}</td>
            </tr>
            <tr>
              <th>Duration</th>
              <th>:</th>
              <td>{props.duration}</td>
            </tr>
          </table>
          <div className="flex justify-end">
            <Link
              className="text-xs p-1 bg-blue-800 text-white rounded-md"
              to={props.link}
            >
              Start Exam
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function Grid_3({ children }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        {children}
      </div>
    </>
  );
}

export function SidebarLink(props) {
  return (
    <>
      <li className="my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950">
        <Link
          className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2 max-md:text-sm text-nowrap"
          to={props.to}
        >
          {props.icon}
          {props.name}
        </Link>
      </li>
    </>
  );
}

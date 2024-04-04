import React from "react";
import { Link } from "react-router-dom";
import {BsCardList,BsCardText, BsGear,BsPersonVcard,BsPersonPlus,BsTelephone,BsBackspace} from 'react-icons/bs'

function Sidebar()
{
    return (
        <>
        <div className="shadow-xl min-h-screen w-72 flex flex-col items-center py-8">
            <div className="rounded-full w-32 h-32 bg-blue-100 ring-8">
                <img src="" alt="" />
            </div>
            <div className="p-2 mt-8">
                <ul className="grid">
                    <li className="w-full my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2"><BsCardText />Exam</Link></li>
                    <li className="w-full my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2"><BsCardList />Exam History</Link></li>
                    <li className="w-full my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2"><BsGear />Settings</Link></li>
                    <li className="w-full my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2" to='/teacherrequest'><BsPersonVcard />Teacher Requests</Link></li>
                    <li className="w-full my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2" to='/studentRequest'><BsPersonPlus />Student Requests</Link></li>
                    <li className="w-full my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2"><BsTelephone />Contact Us</Link></li>
                    <li className="w-full my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2"><BsBackspace />Logout</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Sidebar
import React from "react";
import { Link } from "react-router-dom";
import {BsCardList,BsCardText, BsGear,BsPersonVcard,BsPersonPlus,BsTelephone,BsBackspace} from 'react-icons/bs'

function Sidebar()
{
    return (
        <>
        <div className="shadow-xl min-h-screen max-md:min-h-min w-72 flex flex-col items-center py-8  max-md:w-full">
            <div className="rounded-full w-32 h-32 bg-blue-100 ring-8">
                <img src="" alt="" />
            </div>
            <div className="p-2 mt-8">
                <ul className="grid max-md:flex max-md:flex-wrap max-md:justify-center max-md:gap-2">
                    <li className="my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2 max-md:text-sm text-nowrap"><BsCardText />Exam</Link></li>
                    <li className="my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2 max-md:text-sm text-nowrap"><BsCardList />Exam History</Link></li>
                    <li className="my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2 max-md:text-sm text-nowrap"><BsGear />Settings</Link></li>
                    <li className="my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2 max-md:text-sm text-nowrap" to='/teacherrequest'><BsPersonVcard />Teacher Requests</Link></li>
                    <li className="my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2 max-md:text-sm text-nowrap" to='/studentRequest'><BsPersonPlus />Student Requests</Link></li>
                    <li className="my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2 max-md:text-sm text-nowrap"><BsTelephone />Contact Us</Link></li>
                    <li className="my-[.2em] transition-all relative after:content after:absolute after:duration-200 after:w-0 hover:after:w-full after:h-1 after:bg-blue-950"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500 items-center gap-2 max-md:text-sm text-nowrap"><BsBackspace />Logout</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Sidebar
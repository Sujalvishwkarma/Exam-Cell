import React from "react";
import { Link } from "react-router-dom";
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
                    <li className="w-full my-[.2em] relative after:content after:absolute duration-200 hover:after:w-5 after:h-1 after:bg-black"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500">Exam</Link></li>
                    <li className="w-full my-[.2em] relative after:content after:absolute duration-200 hover:after:w-full after:h-1 after:bg-black"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500">Exam History</Link></li>
                    <li className="w-full my-[.2em] relative after:content after:absolute duration-200 hover:after:w-full after:h-1 after:bg-black"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500">Settings</Link></li>
                    <li className="w-full my-[.2em] relative after:content after:absolute duration-200 hover:after:w-full after:h-1 after:bg-black"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500" to='/teacherrequest'>Teacher Requests</Link></li>
                    <li className="w-full my-[.2em] relative after:content after:absolute duration-200 hover:after:w-full after:h-1 after:bg-black"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500" to='/studentRequest'>Student Requests</Link></li>
                    <li className="w-full my-[.2em] relative after:content after:absolute duration-200 hover:after:w-full after:h-1 after:bg-black"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500">Contact Us</Link></li>
                    <li className="w-full my-[.2em] relative after:content after:absolute duration-200 hover:after:w-full after:h-1 after:bg-black"><Link className="p-1 px-3 flex rounded-sm hover:text-white hover:bg-blue-500">Logout</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Sidebar
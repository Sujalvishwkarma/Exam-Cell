import React from "react";
import { Link } from "react-router-dom";

function Topbar()
{
    return (
        <>
        <div className="py-2 px-8 bg-slate-800">
            <div className="text-xs text-white">
                <p>India's No. 01 Exam Plateform</p>
            </div>
        </div>
        </>
    )
}

function Navbar()
{
    return (
        <>
        <div className="flex justify-between items-center py-3 px-8 border-b max-md:flex-col text-nowrap">
            <div className="text-2xl font-bold">Examination Cell</div>
            <ul className="flex items-center max-md:mt-3 max-md:text-xs">
                <li className="p-1"><Link className="p-2 transition duration-300 bg-blue-800 hover:bg-slate-800  font-semibold rounded-lg text-white " to=''>Create Exam</Link></li>
                <li className="p-1"><Link className="p-2 transition duration-300 bg-blue-800 hover:bg-slate-800 font-semibold rounded-lg text-white " to=''>Join Exam</Link></li>
               <li className="max-md:hidden"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </li>
                <li className="p-1 flex flex-col items-center">
                    <p className="text-xs">Already Processed ?</p>
                    <div className="flex">
                        <Link className="text-sm mt-1 rounded-lg py-1 px-2 bg-slate-800 text-white" to='/login'>Login</Link>
                    </div>
                    </li>
            </ul>
        </div>
        </>
    )
}
function Header()
{
    return (
        <>
        <Topbar/>
        <Navbar/>
        </>
    )
}

export default Header 
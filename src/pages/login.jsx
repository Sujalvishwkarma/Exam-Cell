import React from "react";
import LoginImg from '../assets/images/login.jpeg'
import { Link } from "react-router-dom";
import { BsPeople, BsKey } from "react-icons/bs";
function LoginPage()
{
    return (
        <>
        <div className="min-h-screen flex max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:gap-3">
            <div className="w-1/3 border max-md:border-0 flex justify-center items-center max-md:w-full flex-col">
                <div className="shadow p-5 ">
                    <h1 className="text-lg font-bold">Log In</h1>
                    <form action="" className="w-full">
                       <div className="flex items-center relative mt-4">
                        <BsPeople className="absolute left-2"/>
                        <input type="text" className="py-2 px-8 bg-slate-100 rounded-md" placeholder="Username" />
                       </div>
                       <div className="flex items-center relative mt-4">
                        <BsKey className="absolute left-2"/>
                        <input type="text" className="py-2 px-8 bg-slate-100 rounded-md" placeholder="Password" />
                       </div>
                       <div className="text-center mt-8">
                       <Link className="p-2 bg-blue-900 w-full text-white rounded-lg" to='/dashboard'>Login</Link>
                       </div>
                    </form>
                </div>
                    <p className="mt-5">Go to <Link to='/' className="text-blue-800 font-bold">Home</Link></p>
            </div>
            <div className="w-2/3 max-md:flex">
                <img className="h-full max-md:h-auto" src={LoginImg} alt="" />
            </div>
        </div>
        
        </>
    )
}

export default LoginPage 
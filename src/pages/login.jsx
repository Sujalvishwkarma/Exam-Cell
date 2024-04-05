import React from "react";
import LoginImg from '../assets/images/login.jpeg'
import { Link } from "react-router-dom";
import { BsPeople, BsKey } from "react-icons/bs";
function LoginPage()
{
    return (
        <>
        <div className="min-h-screen flex max-md:flex-col max-md:items-center max-md:gap-3">
            <div className="w-1/3 border flex justify-center items-center max-md:w-full">
                <div className="border p-5">
                    <h1 className="text-lg">Log In</h1>
                    <form action="">
                       <div className="flex items-center relative mt-4">
                        <BsPeople className="absolute left-2"/>
                        <input type="text" className="py-2 px-8 bg-slate-100 rounded-md" placeholder="Username" />
                       </div>
                       <div className="flex items-center relative mt-4">
                        <BsKey className="absolute left-2"/>
                        <input type="text" className="py-2 px-8 bg-slate-100 rounded-md" placeholder="Password" />
                       </div>
                       <Link className="py-2 text-center w-full" to='/dashboard'>Login</Link>
                    </form>
                </div>
            </div>
            <div className="w-2/3 max-md:w-2/3 max-md:flex max-md:border max-md:mt-10 ">
                <img className="h-full" src={LoginImg} alt="" />
            </div>
        </div>
        
        </>
    )
}

export default LoginPage 
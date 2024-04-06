import React from "react";
import SignupImg from '../assets/images/signup.png'
import { Link } from "react-router-dom";
import { BsPeople, BsKey , BsMailbox , BsHouse} from "react-icons/bs";
function SignupPage()
{
    return (
        <> 
        <div className="min-h-screen flex max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-3">
        <div className="w-2/3 max-md:flex flex items-center bg-[#f5f2f5]">
                <img className="w-full max-md:h-auto" src={SignupImg} alt="" />
            </div>
            <div className="w-1/3 border max-md:border-0 flex justify-center items-center max-md:w-full bg-white">
                <div className="shadow p-5 ">
                    <h1 className="text-lg font-bold">Register</h1>
                    <form action="" className="w-full">
                       <div className="flex items-center relative mt-4">
                        <BsHouse className="absolute left-2"/>
                        <input type="number" className="py-2 px-8 bg-slate-100 rounded-md" placeholder="Exam Room" />
                       </div>
                       <div className="flex items-center relative mt-4">
                        <BsPeople className="absolute left-2"/>
                        <input type="text" className="py-2 px-8 bg-slate-100 rounded-md" placeholder="Full Name" />
                       </div>
                       <div className="flex items-center relative mt-4">
                        <BsKey className="absolute left-2"/>
                        <select name="" className="py-2 px-8 bg-slate-100 rounded-md w-full" placeholder='Role' id="">
                            <option value="" selected unselectable="">Role</option>
                            <option value="">Admin</option>
                            <option value="">Teacher</option>
                            <option value="">Student</option>
                        </select>
                       </div>
                       <div className="flex items-center relative mt-4">
                        <BsMailbox className="absolute left-2"/>
                        <input type="email" className="py-2 px-8 bg-slate-100 rounded-md" placeholder="Email" />
                       </div>
                       <div className="text-center flex mt-8 w-full">
                       <Link className="p-2 bg-blue-900 w-full text-white rounded-lg" to='/dashboard'>SignUp</Link>
                       </div>
                    </form>
                    <p className="mt-5">Go to <Link to='/' className="text-blue-800 font-bold">Home</Link></p>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default SignupPage 
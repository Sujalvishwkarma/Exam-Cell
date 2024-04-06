import React from "react";

function Profile()
{
    return (
        <>
        <div className="p-10">
            <div className="h-44 border border-gray-400 bg-[url('https://www.gla.ac.in/images/university-sketch.webp')] bg-cover rounded-lg relative">
                <div className="absolute -bottom-1/3 left-10 flex items-center gap-10">
                    <img className="w-36 h-36 rounded-full border border-gray-400" src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif" alt="" />
                    <div className="border border-gray-400 bg-white p-3 rounded-xl flex flex-col gap-0">
                     <h2 className="text-2xl">
                        UserName
                     </h2>
                     <p className="text-xs">Role : Admin</p>
                        </div>
                </div>
            </div>
            <div className="py-16 px-5">
                <form action="" className="grid grid-cols-2 gap-3 p-5">
                    <div className="border flex flex-col p-2">
                        <label htmlFor="" className="text-sm">Full Name</label>
                        <input type="text" className="border py-2 px-5" />
                    </div>
                    <div className="border flex flex-col p-2">
                        <label htmlFor="" className="text-sm">Full Name</label>
                        <input type="text" className="border py-2 px-5" />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Profile
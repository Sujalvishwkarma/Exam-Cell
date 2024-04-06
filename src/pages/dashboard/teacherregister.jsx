import React from "react";

function TeacherRegister()
{
    return (
        <>
        <div className="p-5">
            <h1 className="text-2xl">Teacher Registration</h1>
            <form action="" className="grid grid-cols-2 mt-5">
                <div className="flex flex-col border p-2">
                    <label htmlFor="">Name</label>
                    <input type="text" className="py-2 px-3 border" />
                </div>
                <div className="flex flex-col border p-2">
                    <label htmlFor="">Email</label>
                    <input type="text" className="py-2 px-3 border" />
                </div>
                <button type="submit" className="py-2 px-3 mt-5 border bg-blue-700">Send Invitation</button>
            </form>
        </div>
        </>
    )
}

export default TeacherRegister
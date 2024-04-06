import React from "react";

function CreateExam()
{
    return (
        <>
        <div className="flex min-h-96 max-md:flex-col-reverse">
        <div className="p-5 w-2/3 flex flex-col justify-center max-md:w-full">
            <h1 className="text-2xl font-semibold text-center underline">Create Exam</h1>
            <form action="" className="grid grid-cols-2 py-5 gap-5">
                <div className="flex flex-col">
                    <label htmlFor="">Full Name</label>
                    <input type="text" className="py-2 px-3 border mt-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input type="email" className="py-2 px-3 border mt-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Phone</label>
                    <input type="tel" className="py-2 px-3 border mt-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Peoples</label>
                    <input type="number" className="py-2 px-3 border mt-2" />
                </div>

                <button type="submit" className="py-2 px-3 bg-blue-800 text-white">Create</button>
            </form>
        </div>


        <div className="flex items-center justify-center">
            <img src="https://cdn.dribbble.com/users/35253/screenshots/3984337/test_dribb.gif" alt="" />
        </div>
        </div>
        </>
    )
}
export default CreateExam
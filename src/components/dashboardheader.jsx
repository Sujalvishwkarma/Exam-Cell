import React from "react";

function DashboardHeader(props)
{
    return (
        <>
        <div className="py-4 px-8 flex items-center justify-between bg-blue-600 text-white max-md:flex-col">
            <div className="text-2xl">Examination Cell</div>
            <div className="">{!props.student?'Student Name':props.student}</div>
        </div>
        </>
    )
}
export default DashboardHeader
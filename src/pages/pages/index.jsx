import React from "react";
import { Link } from "react-router-dom";
import { Grid_2 } from "../../components/utils";
function Indexpage()
{
    return (
        <>
       <Grid_2>
        <>
        <div className="flex items-center p-5">
            <div className="">
                <h1 className="text-6xl max-md:text-5xl font-bold text-blue-900">Plan in Seconds , Not weekends.</h1>
                <h4 className="mt-3 text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Repellat consequatur adipisci, consectetur sit alias provident dolore consequuntur sunt deleniti
                 repellendus.</h4>
                <div className="flex p-3 gap-5 max-md:text-sm">
                    <Link className="p-2 bg-blue-900 text-white rounded-lg">Let's Create Exam</Link>
                    <Link className="p-2 bg-blue-900 text-white rounded-lg">Learn More</Link>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <img src="https://static.dribbble.com/users/35253/screenshots/3984334/ideate_dribb.gif" alt="" />
        </div>
        </>
       </Grid_2>
        </>
    )
}

export default Indexpage
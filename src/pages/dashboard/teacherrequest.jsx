import React from "react";
import '../../assets/css/table.css'
import { Link } from "react-router-dom";
function TeacherRequest()
{
    return (
        <>
        <div className="p-5">
            <div className="flex justify-between">
                <div className="font-bold text-xl">Teacher's Requests</div>
                <div className="flex gap-3 p-2">
                    <Link className="py-1 px-2 border rounded text-white bg-green-800 ">Accept All</Link> |
                    <Link className="py-1 px-2 border rounded text-white bg-red-800">Reject All</Link>
                </div>
                </div>
            <div className="p-5 bg-slate-100 border mt-2">
                <table>
                    <tr>
                        <th>Sr No.</th>
                        <th>Student Name</th>
                        <th>Email Address</th>
                        <th colSpan='2'>Action</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Jiyanshu Sharma</td>
                        <td>Jiyanshu123@gmail.com</td>
                        <td>
                            <Link>Approve</Link>
                            <Link>Reject</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Jiyanshu Sharma</td>
                        <td>Jiyanshu123@gmail.com</td>
                        <td>
                            <Link>Approve</Link>
                            <Link>Reject</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Anjali Vishwakarma</td>
                        <td>anjali123@gmail.com</td>
                        <td>
                            <Link>Approve</Link>
                            <Link>Reject</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Jiyanshu Sharma</td>
                        <td>Jiyanshu123@gmail.com</td>
                        <td>
                            <Link>Approve</Link>
                            <Link>Reject</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Jiyanshu Sharma</td>
                        <td>Jiyanshu123@gmail.com</td>
                        <td>
                            <Link>Approve</Link>
                            <Link>Reject</Link>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    )
}
export default TeacherRequest
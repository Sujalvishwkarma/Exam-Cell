import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram , BsWhatsapp } from "react-icons/bs";
function ContactPage()
{
    return (
        <>
        <div className="p-5 border bg-slate-50 max-md:overflow-scroll">
            <h1 className="text-2xl my-4 font-semibold underline">Exam Coordinators</h1>
            <table className="w-full text-left overflow-scroll max-md:text-sm">
                <tr className="bg-blue-800 text-white">
                    <th className="px-2 border">Sr.</th>
                    <th className="px-2 border">Name</th>
                    <th className="px-2 border">Email</th>
                    <th className="px-2 border">Phone</th>
                    <th className="px-2 border">Social</th>
                </tr>
                <tr className="border">
                    <td className="p-2">01.</td>
                    <td className="p-2">Jiyanshu Sharma</td>
                    <td className="p-2">Jiyanshu@gmail.com</td>
                    <td className="p-2">1234567890</td>
                    <td className="flex justify-center items-center gap-3 p-2">
                        <Link to=''><BsLinkedin/></Link>
                        <Link to=''><BsInstagram/></Link>
                        <Link to=''><BsWhatsapp/></Link>
                    </td>
                </tr>
                <tr className="border">
                    <td className="p-2">02.</td>
                    <td className="p-2">Shagun Gupta</td>
                    <td className="p-2">Shagun@gmail.com</td>
                    <td className="p-2">1234567890</td>
                    <td className="flex justify-center items-center gap-3 p-2">
                        <Link to=''><BsLinkedin/></Link>
                        <Link to=''><BsInstagram/></Link>
                        <Link to=''><BsWhatsapp/></Link>
                    </td>
                </tr>
            </table>
        </div>

        <div className="p-5 border mt-5 bg-slate-50 max-md:overflow-scroll">
            <h1 className="text-2xl my-4 font-semibold underline">Developers</h1>
            <table className="w-full text-left overflow-scroll max-md:text-sm">
                <tr className="bg-blue-800 text-white">
                    <th className="px-2 border">Sr.</th>
                    <th className="px-2 border">Name</th>
                    <th className="px-2 border">Email</th>
                    <th className="px-2 border">Phone</th>
                    <th className="px-2 border">Social</th>
                </tr>
                <tr className="border">
                    <td className="p-2">01.</td>
                    <td className="p-2">Jiyanshu Sharma</td>
                    <td className="p-2">Jiyanshu@gmail.com</td>
                    <td className="p-2">1234567890</td>
                    <td className="flex justify-center items-center gap-3 p-2">
                        <Link to=''><BsLinkedin/></Link>
                        <Link to=''><BsInstagram/></Link>
                        <Link to=''><BsWhatsapp/></Link>
                    </td>
                </tr>
                <tr className="border">
                    <td className="p-2">02.</td>
                    <td className="p-2">Shagun Gupta</td>
                    <td className="p-2">Shagun@gmail.com</td>
                    <td className="p-2">1234567890</td>
                    <td className="flex justify-center items-center gap-3 p-2">
                        <Link to=''><BsLinkedin/></Link>
                        <Link to=''><BsInstagram/></Link>
                        <Link to=''><BsWhatsapp/></Link>
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default ContactPage
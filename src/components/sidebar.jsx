import React from "react";
import {BsCardList,BsCardText, BsGear,BsPersonVcard,BsPersonPlus,BsTelephone,BsBackspace} from 'react-icons/bs'
import { SidebarLink } from "./utils";

function Sidebar()
{
    return (
        <>
        <div className="shadow-2xl min-h-screen max-md:min-h-min w-72 flex flex-col items-center py-8  max-md:w-full">
            <div className="rounded-full w-32 h-32 bg-blue-100 ring-8">
                <img src="" alt="" />
            </div>
            <div className="p-2 mt-8">
                <ul className="grid max-md:flex max-md:flex-wrap max-md:justify-center max-md:gap-2">
                    <SidebarLink  name='Exam' to='/' icon={<BsCardText/>} />
                    <SidebarLink  name='Exam History' to='/examhistory' icon={<BsCardList/>} />
                    <SidebarLink  name='Teacher Requests' to='/teacherrequest' icon={<BsPersonVcard/>} />
                    <SidebarLink  name='Student Requests' to='/studentrequest' icon={<BsPersonPlus/>} />
                    <SidebarLink  name='Contact Us' to='/contact' icon={<BsTelephone/>} />
                    <SidebarLink  name='Settings' to='/settings' icon={<BsGear/>} />
                    <SidebarLink  name='Logout' to='/logout' icon={<BsBackspace/>} />
                </ul>
            </div>
        </div>
        </>
    )
}
export default Sidebar
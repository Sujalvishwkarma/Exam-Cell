import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from '../components/dashboardsidebar'
import Header from "../components/dashboardheader";

function DashboardLayout() {
    return (
        <>
            <main className="flex max-md:flex-col">
                <Sidebar role='' />
                <div className="w-full">
                    <Header student="" />
                    <div className="p-5">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}
export default DashboardLayout
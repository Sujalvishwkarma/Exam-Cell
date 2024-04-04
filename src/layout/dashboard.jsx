import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from '../components/sidebar'
import Header from "../components/header";

function DashboardLayout() {
    return (
        <>
            <main className="flex">
                <Sidebar />
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
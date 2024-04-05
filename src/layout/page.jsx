import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function PageLayout() {
    return (
        <>
       <Header/>
       <main className="p-5">
       <Outlet/>
       </main>
       <Footer/>
        </>
    )
}
export default PageLayout
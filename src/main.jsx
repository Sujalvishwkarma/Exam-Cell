import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import DashboardLayout from "./layout/dashboard";
import PageLayout from "./layout/page";
import Home from "./pages/dashboard/Home";
import TeacherRequest from "./pages/dashboard/TeacherRequest";
import TeacherRegister from "./pages/dashboard/teacherregister";
import StudentRequest from "./pages/dashboard/StudentRequests";
import StudentRegister from "./pages/dashboard/studentregister";
import Settings from "./pages/dashboard/Settings";
import Logout from "./pages/dashboard/Logout";
import Contact from "./pages/dashboard/Contact";
import ExamHistory from "./pages/dashboard/examhistory";
import Profile from "./pages/dashboard/profile";
import Indexpage from "./pages/pages/index";
import LoginPage from "./pages/login";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PageLayout />}>
          <Route path="/" index element={<Indexpage />} />
        </Route>
        
        <Route path="/login" index element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" index element={<Home />} />
          <Route path="/dashboard/examhistory" element={<ExamHistory />} />
          <Route path="/dashboard/teacherrequests" element={<TeacherRequest />}/>
          <Route path="/dashboard/studentRequests" element={<StudentRequest />}/>
          <Route path="/dashboard/studentRegister" element={<StudentRegister />}/>
          <Route path="/dashboard/teacherRegister" element={<TeacherRegister />}/>
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/contact" element={<Contact />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

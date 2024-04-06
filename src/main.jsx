import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import DashboardLayout from "./layout/dashboard";
import PageLayout from "./layout/page";
import Home from "./pages/dashboard/Home";
import TeacherRequest from "./pages/dashboard/teacherrequest";
import TeacherRegister from "./pages/dashboard/teacherregister";
import StudentRequest from "./pages/dashboard/studentrequests";
import StudentRegister from "./pages/dashboard/studentregister";
import Settings from "./pages/dashboard/settings";
import Logout from "./pages/dashboard/logout";
import Contact from "./pages/dashboard/contact";
import ExamHistory from "./pages/dashboard/examhistory";
import Profile from "./pages/dashboard/profile";
import Indexpage from "./pages/pages/index";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import CreateExam from "./pages/pages/createexam";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PageLayout />}>
          <Route path="/" index element={<Indexpage />} />
          <Route path="/createexam" element={<CreateExam />} />
        </Route>
        
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/signup" index element={<SignupPage />} />

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

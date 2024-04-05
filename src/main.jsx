import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './assets/css/index.css'
import DashboardLayout from './layout/dashboard'
import Home from './pages/dashboard/home'
import TeacherRequest from './pages/dashboard/teacherrequest'
import StudentRequest from './pages/dashboard/studentrequest'
import Settings from './pages/dashboard/settings'
import Logout from './pages/dashboard/logout'
import Contact from './pages/dashboard/contact'
import ExamHistory from './pages/dashboard/examhistory'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/examhistory" element={<ExamHistory />} />
          <Route path="/teacherrequest" element={<TeacherRequest />} />
          <Route path="/studentRequest" element={<StudentRequest />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)

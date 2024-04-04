import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/index.css'
import DashboardLayout from './layout/dashboard'
import Home from './pages/dashboard/home'
import TeacherRequest from './pages/dashboard/teacherrequest'
import StudentRequest from './pages/dashboard/studentrequest'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/teacherrequest" element={<TeacherRequest />} />
          <Route path="/studentRequest" element={<StudentRequest />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)

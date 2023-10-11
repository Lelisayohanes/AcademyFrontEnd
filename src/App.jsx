import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CoursesPage from './pages/CoursesPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import ProfilePage from './pages/ProfilePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/students" element={<StudentPage />} />
          <Route path="/teachers" element={<TeacherPage />} />
          <Route path="/portifolio" element={<CoursesPage />} />
          <Route path="/schedules" element={<CoursesPage />} />
          <Route path="/setting" element={<CoursesPage />} />
          <Route path="/help" element={<CoursesPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







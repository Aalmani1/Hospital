import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/patient/SignUp/SignUp';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Login from './pages/Login/Login';
import PatientHome from './pages/patient/Home/Home'
import DoctorHome from './pages/doctor/Home/Home'
import AdminHome from './pages/admin/Home'


function App() {

  const [userOpj , setUserOpj]=useState(null);
  return (
    <div >

<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login setUserOpj={setUserOpj} />} />
        {!userOpj && <Route path="*" element={<Navigate to="/login" replace />} />} {/* Use Navigate inside Route */}

        {userOpj && userOpj.role === "patient" && (
          <Route path="/patient" element={<PatientHome setUserOpj={setUserOpj} userOpj={userOpj} />} />
        )}
        {userOpj && userOpj.role === "doctor" && (
          <Route path="/doctor" element={<DoctorHome setUserOpj={setUserOpj} userOpj={userOpj} />} />
        )}
        {userOpj && userOpj.role === "admin" && (
          <Route path="/admin" element={<AdminHome />} />
        )}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

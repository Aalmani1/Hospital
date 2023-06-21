import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/patient/SignUp/SignUp';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Login from './pages/Login/Login';
import PatientHome from './pages/patient/Home/Home'
import DoctorHome from './pages/doctor/Home/Home'
import AdminHome from './pages/admin/Home'
function App() {
  const [userOpj , setUserOpj]=useState();
  return (
    <div >

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login setUserOpj={setUserOpj}/>} />
        <Route path="/patient" element={<PatientHome setUserOpj={setUserOpj} />} />
        <Route path="/doctor" element={<DoctorHome setUserOpj={setUserOpj}/>} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/patient/SignUp/SignUp';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Login from './pages/Login/Login';
import PatientHome from './pages/patient/Home/Home'
import DoctorHome from './pages/doctor/Home/Home'
function App() {
  return (
    <div >

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient/home" element={<PatientHome />} />
        <Route path="/doctor/home" element={<DoctorHome />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

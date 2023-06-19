import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/patient/SignUp/SignUp';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Login from './pages/Login/Login';
import PatientHome from './pages/patient/Home/Home'
import BookAppointmet from './pages/patient/BookAppointment/BookAppointment';

function App() {
  return (
    <div >

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient/home" element={<PatientHome />} />
        {/* <Route path="/patient/bookAppointment" element={<BookAppointmet />} /> */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

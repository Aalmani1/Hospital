import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/patient/SignUp/SignUp';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Login from './pages/Login/Login';

function App() {
  return (
    <div >

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

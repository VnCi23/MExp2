import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GradePortal from './pages/GradePortal';
import Main from './pages/main';  
import Team from './pages/team'; 

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/grade-portal" element={<GradePortal />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </Router>
    );
};

export default App;

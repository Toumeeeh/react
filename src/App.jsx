import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/LoginPage/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/AboutUs/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AddMoney from './Pages/AddMoney/AddMoney';
import FirebaseTokenHandler from './components/FirebaseTokenHandler.jsx';

function App() {
    // Initialize AOS (Animate On Scroll) library
    AOS.init();

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/homePage' element={<HomePage />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/wallet' element={<AddMoney />} />
                <Route path='/firebase-token' element={<FirebaseTokenHandler />} /> {/* New route for Firebase token handler */}
            </Routes>
        </div>
    );
}

export default App;

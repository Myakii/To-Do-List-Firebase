import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Auth from './Auth';
import './css/Footer.css';
import Footer from './components/Footer'

function App() {
  return (
    <Auth>
      <div className='App'>
        <Navigation />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/connexion" element={<Login />} />

        </Routes>
        <Footer/>
      </div>
    </Auth>
  );
}

export default App;

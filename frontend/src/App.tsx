import './App.css'
import { Navbar } from './components/Navbar.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Classes from './pages/Classes';
import Clubs from './pages/Clubs';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

import './App.css'
import { Navbar } from './components/Navbar.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

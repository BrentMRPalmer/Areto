import "./App.css";
import { Navbar } from "./components/Navbar.tsx";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext.tsx";
import PrivateRoute from "./router/route";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Clubs from "./pages/Clubs";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";

function App() {
  return (
    <AuthProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;

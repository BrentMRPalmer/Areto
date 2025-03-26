import "./App.css";
import { Navbar } from "./components/Navbar.tsx";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext.tsx";
import PrivateRoute from "./router/route";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import ClassInfo from "./pages/ClassInfo";
import Groups from "./pages/Groups.tsx";
import PoolPage from "./pages/Pool.tsx";
import Clubs from "./pages/Clubs";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Quiz from "./pages/Quiz";

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
            <Route path="/classes/:courseId" element={<ClassInfo />} />
            <Route path="/groups/:courseId/:sectionId" element={<Groups />} />
            <Route
              path="/pool/:courseId/:sectionId/:poolId"
              element={<PoolPage />}
            />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;

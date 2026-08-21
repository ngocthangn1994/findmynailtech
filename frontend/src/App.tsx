import HomePage from "./pages/HomePage/HomePage";
import ForNailTech from "./pages/HomePage/pages/ForNailTech/ForNailTech";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutUs from "./pages/HomePage/pages/AboutUs/AboutUs";
import Profile from "./pages/Profiles/Profile";
import HowItWorks from "./pages/HomePage/pages/HowItWorks/HowItWorks";
import Login from "./pages/Auth/LoginPage/Login";
import Register from "./pages/Auth/RegisterPage/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/fornailtechs" element={<ForNailTech />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

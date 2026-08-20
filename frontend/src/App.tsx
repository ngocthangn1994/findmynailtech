import HomePage from "./pages/HomePage/HomePage";
import ForNailTech from "./pages/HomePage/pages/ForNailTech/ForNailTech";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutUs from "./pages/HomePage/pages/AboutUs/AboutUs";
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
      </BrowserRouter>
    </>
  );
}

export default App;

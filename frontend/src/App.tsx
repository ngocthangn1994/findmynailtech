import HomePage from "./pages/HomePage/HomePage";
import ForNailTech from "./pages/HomePage/pages/ForNailTech/ForNailTech";
import { BrowserRouter, Routes, Route } from "react-router";
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
      </BrowserRouter>
    </>
  );
}

export default App;

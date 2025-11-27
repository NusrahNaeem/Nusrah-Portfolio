import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";       // correct, because Home.jsx uses "export const"
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter basename="/Nusrah-Portfolio">
      <Toaster />
      <Routes>
        {/* ✅ Fix here */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

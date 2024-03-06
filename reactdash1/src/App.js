import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

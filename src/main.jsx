import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Rag from "./pages/Rag.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/rag" replace />} />
      <Route path="/rag" element={<Rag />} />
    </Routes>
  </BrowserRouter>
);
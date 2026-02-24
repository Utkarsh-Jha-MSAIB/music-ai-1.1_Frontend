import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// If your file is named RAG.jsx (all caps) keep it exactly:
import RAG from "./pages/Rag.jsx";

// If it's named Rag.jsx instead, use:
// import Rag from "./pages/Rag.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Rag />
  </StrictMode>
);
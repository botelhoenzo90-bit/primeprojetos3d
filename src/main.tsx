import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { startMetaPixel } from "./lib/meta-pixel";

startMetaPixel();
const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);

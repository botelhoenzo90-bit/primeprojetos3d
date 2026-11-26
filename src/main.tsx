import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { startMetaPixel } from "./lib/meta-pixel";
import { startCaktoTracker } from "./lib/cakto-tracker";
import { startClarity } from "./lib/clarity";

startMetaPixel();
startCaktoTracker();
startClarity();
const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);

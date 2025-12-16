import { App } from "@/App";
import "@/index.css";
import { launchI18n } from "@/utils/i18n";
import { createRoot } from "react-dom/client";

launchI18n();

createRoot(document.getElementById("root")!).render(<App />);

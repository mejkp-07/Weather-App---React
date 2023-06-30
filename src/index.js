import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import WeatherAPPProvider from "./Context/Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <WeatherAPPProvider>
      <App />
    </WeatherAPPProvider>
  </StrictMode>
);

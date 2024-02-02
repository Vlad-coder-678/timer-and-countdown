// external imports
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// internal imports
import App from "./app";
import GlobalStyles from "./assets/styles/global.styles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App/>
    <GlobalStyles/>
  </StrictMode>,
);

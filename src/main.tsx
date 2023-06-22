import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@contexts/AuthContext.tsx";
import { CustomThemeProvider } from "@contexts/CustomThemeContext.tsx";

import App from "./App.tsx";
import "./index.css";

import { makeServer } from "./backend/server.js";
makeServer();

// import { startMockServer } from "../server";
// startMockServer();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

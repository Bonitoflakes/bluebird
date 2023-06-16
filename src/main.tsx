import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext.tsx";
import App from "./App.tsx";
import "./index.css";
import { CustomThemeProvider } from "./contexts/CustomThemeContext.tsx";

import { startMockServer } from "../server";

// Start the mock server
startMockServer();

import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <AuthProvider>
          <App />
          <UserList />
        </AuthProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

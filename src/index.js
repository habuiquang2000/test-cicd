import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Admin from "./components/Admin";
import User from "./components/User";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="admin" element={<Admin />}></Route>
          <Route path="user" element={<User />}></Route>
          <Route index element={<Home />}></Route>
        </Route>
        {/*
          <Route path="admin" element={<Admin />}></Route>
          <Route path="user" element={<User />}></Route>
        */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

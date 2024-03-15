import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styled/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./App/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

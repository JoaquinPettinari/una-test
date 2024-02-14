import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.tsx";
import AnalyzePage from "./components/AnalyzePage/AnalyzePage.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "analizar",
    element: <AnalyzePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

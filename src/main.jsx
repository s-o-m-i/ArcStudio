import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Layout from "./Layout/Layout.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Download from "./components/Download/Download.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HeroSection /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "pricing", element: <Pricing /> },
      { path: "download", element: <Download/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

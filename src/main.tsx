import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import JediSithPage from "./pages/JediSithPage.tsx";
import LostWay from "./pages/LostWay.tsx";
import MasterPage from "./pages/MasterPage.tsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LoginPage />} />
      <Route path="/jediSithPage" element={<JediSithPage />} />
      <Route path="/jediSithPage/:id" element={<MasterPage />} />
      <Route path="*" element={<LostWay />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

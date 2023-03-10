import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import TheExperience from "./Pages/TheExperience";
import SectorMap from "./Pages/SectorMap";
import Info from "./Pages/Info";
import TicketForm from "./Pages/Ticket/Form";
import ThemeProvider from "./contexts/context";
import TicketPage from "./Pages/Ticket/TicketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aexperiencia", element: <TheExperience /> },
      { path: "/mapadesetores", element: <SectorMap /> },
      { path: "/informaçoes", element: <Info /> },
      { path: "/ingresso", element: <TicketForm /> },
      { path: "/ingressocomprado", element: <TicketPage/>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

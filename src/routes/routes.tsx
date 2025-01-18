import { App } from "@/App";

import { ErrorPage } from "@/pages/ErrorPage";

import { LandingPage } from "@/pages/LandingPage";
import { Login } from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

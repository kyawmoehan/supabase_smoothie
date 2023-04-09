import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import AppLayout from "./layouts/user/AppLayout";
import Home from "./pages/home";
import Create from "./pages/create";
import Smoothie from "./pages/smoothie";
import Login from "./pages/login";
import SuccessLogin from "./pages/login/success";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
      { path: "login", element: <Login /> },

      { path: "success", element: <SuccessLogin /> },
    ],
  },

  {
    path: "/smoothie",
    element: <AppLayout />,
    children: [{ path: ":id", element: <Smoothie /> }],
  },
];

export default routes;

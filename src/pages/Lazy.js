
import React from "react";

const Login = React.lazy(() => import("../apps/Auth/login/Login"));
const Main = React.lazy(() => import("../apps/Layout/Main/Main"));

export const AuthPages = {
  Login,
}

export const LayoutPages = {
  Main
}
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "./config/routesConfig";
import { Login } from "./containers/Login/Login";
import { Register } from "./containers/Register/Register";

const isLoggedIn = false;
export const App = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      {privateRoutes.map(({ path, element }) => {
        return (
          <Route
            key={path}
            path={path}
            element={isLoggedIn ? element : <Navigate to={"/login"} />}
          />
        );
      })}
    </Routes>
  );
};

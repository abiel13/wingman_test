import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home";
import Products from "./Products";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
      <Route index element={<Products />} />
      </Route>
    </Routes>
  );
};

export default Router;

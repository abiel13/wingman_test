import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "./home";
import Products from "./Products";
import { themeStore } from "@/store/theme.store";

const Router: React.FC = () => {
  const { theme } = themeStore();

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Products />} />
      </Route>
    </Routes>
  );
};

export default Router;

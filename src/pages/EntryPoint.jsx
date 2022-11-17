import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../components/GlobalStyles";
import { dark, light } from "../constants/theme";
import BlogDetails from "./BlogDetails";
import Home from "./Home";
import NotFound from "./NotFound";

const EntryPoint = () => {
  const { theme } = useSelector((state) => state.theme);

  const themeMode = theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default EntryPoint;

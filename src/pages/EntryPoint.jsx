import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { dark, light } from "../constants/theme";
import BlogDetails from "./BlogDetails";
import Home from "./Home";

const EntryPoint = () => {
  const { theme } = useSelector((state) => state.theme);

  const themeMode = theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
      </Routes>
    </ThemeProvider>
  );
};

export default EntryPoint;

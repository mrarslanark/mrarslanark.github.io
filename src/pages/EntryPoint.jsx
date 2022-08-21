import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Home from "./Home";

const EntryPoint = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogDetails />} />
    </Routes>
  );
};

export default EntryPoint;

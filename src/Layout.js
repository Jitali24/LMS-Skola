import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./Pages/Blogs/Blog";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default Layout;

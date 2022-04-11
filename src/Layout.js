import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./Pages/Blogs/Blog";
import Courses from "./Pages/Courses/Courses";

const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Layout;

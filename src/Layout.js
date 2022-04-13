import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./Pages/BlogsPage/BlogPage";
import Scroll from "./components/BackToTop/Scroll";
import Courses from "./Pages/Courses/Courses";

const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/courses/:id" element={<Courses />} />
        </Routes>
        <Scroll showBelow={250} />
        <Footer />
      </Router>
    </>
  );
};

export default Layout;

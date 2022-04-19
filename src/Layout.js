import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BlogPage from "./Pages/BlogsPage/BlogPage";
import BlogPage2 from "./Pages/BlogsPage2/BlogPage2";
import Scroll from "./components/BackToTop/Scroll";
import Courses from "./Pages/Courses/Courses";
import InstructorProfile from "./Pages/InstructorProfile/InstructorProfile";

import Contact from "./Pages/Contact/Contact";

const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/blog2/:id" element={<BlogPage2 />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/ip/:id" element={<InstructorProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Scroll showBelow={250} />
        <Footer />
      </Router>
    </>
  );
};

export default Layout;

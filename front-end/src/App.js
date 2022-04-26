import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbarhide from './components/NavbarHide/Navbarhide'
import Banner from './components/Banner/Banner'
import Cards from './components/BannerCards/Cards'
import FeatureCourses from './components/Features/FeatureCourses'
import Events from './components/UpcomingEvents/Events'
import Students from './components/StudentsCarousel/Students'
import Submenu from './components/BottomMenu/Submenu'
// import Scroll from "./components/BackToTop/Scroll";

// import Navbar from "./components/Navbar/Navbar";
import Demos from './components/Demos/Demos'
import Video from './components/Video/Video'
import Instructor from './components/InstructorCarousel/Instructor'
// import Footer from "./components/Footer/Footer";

function App({ setImg }) {
  const navigate = useNavigate()

  // Protect route
  const userLogin = useSelector((state) => state.userLogin)
  const { user } = userLogin

  useEffect(() => {
    if (!user || user === null || user === {}) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <Navbarhide />
      {/* <Navbar /> */}
      <Banner />
      <Cards />
      <FeatureCourses />
      <Video />
      <Events
        blogPageImg1='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/blog/attachment/20/lg-11.jpeg'
        blogPageTitle1='Discover Law - Get into the best UK law schools'
        blogPageTitle2='Lambeth Safeguarding: Understanding Contextual Harm'
        blogPageImg2='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/blog/attachment/19/lg-12.jpeg'
        setImg={setImg}
      />
      <Students />
      <Instructor />
      {/* <Footer /> */}
      <Submenu />
      {/* <Scroll showBelow={250} /> */}
      <Demos />
    </>
  )
}

export default App

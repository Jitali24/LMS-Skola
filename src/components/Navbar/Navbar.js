import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [flag, setFlag] = useState(false);
  const [clickUser, setUserClick] = useState(false);
  const [clickUserClose, setUserCloseClick] = useState(true);
  const [clickSearch, setSearchClick] = useState(false);
  const [clickMenuMb, setMenuMbClick] = useState(false);

  const { pathname } = useLocation();

  const handleUserClick = () => {
    setUserClick(true);
  };
  const handleUserCloseClick = () => {
    setUserCloseClick(false);
  };

  const handleSearchClick = () => {
    setSearchClick(!clickSearch);
  };
  const handleMenuMbClick = () => {
    setMenuMbClick(!clickMenuMb);
  };

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (navbar) {
      if (pathname !== "/blog" || pathname !== "/courses") {
        setFlag(true);
      } else {
        setFlag(false);
      }
    } else {
      if (pathname !== "/blog" || pathname !== "/courses") {
        setFlag(true);
      }
        if (pathname === "/"){
        setFlag(false);
      }
    }
    // else {
    //   setFlag(false);
    // }
  }, [navbar, pathname]);

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={flag ? "navbar-container" : "navbar-container active"}>
      <div className="navbar-logo">
        <a href="https://demo.createdbycocoon.com/moodle/skola/1">
          <svg
            width="177"
            height="73"
            viewBox="0 0 177 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.56 39.62L66.02 42.14C66.48 43.18 67.14 44.12 68 44.96C68.86 45.78 69.87 46.44 71.03 46.94C72.21 47.42 73.48 47.66 74.84 47.66C75.84 47.66 76.8 47.51 77.72 47.21C78.64 46.93 79.47 46.51 80.21 45.95C80.97 45.39 81.56 44.7 81.98 43.88C82.42 43.06 82.64 42.11 82.64 41.03C82.64 40.15 82.49 39.37 82.19 38.69C81.91 37.99 81.52 37.38 81.02 36.86C80.54 36.34 79.97 35.9 79.31 35.54C78.67 35.16 77.98 34.83 77.24 34.55C76.52 34.31 75.87 34.08 75.29 33.86C74.71 33.62 74.22 33.39 73.82 33.17C73.44 32.93 73.14 32.67 72.92 32.39C72.72 32.09 72.62 31.75 72.62 31.37C72.62 31.05 72.7 30.77 72.86 30.53C73.02 30.29 73.26 30.11 73.58 29.99C73.92 29.85 74.34 29.78 74.84 29.78C75.36 29.78 75.85 29.88 76.31 30.08C76.79 30.26 77.23 30.54 77.63 30.92C78.03 31.3 78.37 31.74 78.65 32.24L82.52 30.08C82.16 29.36 81.64 28.65 80.96 27.95C80.28 27.25 79.43 26.67 78.41 26.21C77.39 25.75 76.17 25.52 74.75 25.52C73.41 25.52 72.18 25.76 71.06 26.24C69.94 26.72 69.05 27.41 68.39 28.31C67.75 29.19 67.43 30.26 67.43 31.52C67.43 32.56 67.62 33.44 68 34.16C68.4 34.86 68.89 35.47 69.47 35.99C70.05 36.49 70.66 36.9 71.3 37.22C71.94 37.54 72.52 37.8 73.04 38C74.06 38.4 74.87 38.75 75.47 39.05C76.09 39.33 76.53 39.64 76.79 39.98C77.07 40.32 77.21 40.75 77.21 41.27C77.21 41.69 77.1 42.06 76.88 42.38C76.68 42.68 76.39 42.92 76.01 43.1C75.63 43.26 75.19 43.34 74.69 43.34C73.99 43.34 73.32 43.19 72.68 42.89C72.06 42.59 71.49 42.16 70.97 41.6C70.45 41.04 69.98 40.38 69.56 39.62ZM86.0293 26V47H91.2793V26H86.0293ZM98.3893 26L89.7793 35.99L98.6593 47H104.809L95.8393 35.84L104.359 26H98.3893ZM109.681 36.5C109.681 35.56 109.821 34.71 110.101 33.95C110.381 33.19 110.781 32.53 111.301 31.97C111.841 31.41 112.471 30.97 113.191 30.65C113.931 30.33 114.751 30.17 115.651 30.17C116.551 30.17 117.361 30.33 118.081 30.65C118.821 30.97 119.451 31.41 119.971 31.97C120.491 32.53 120.881 33.2 121.141 33.98C121.401 34.74 121.531 35.58 121.531 36.5C121.531 37.42 121.391 38.27 121.111 39.05C120.831 39.81 120.431 40.47 119.911 41.03C119.391 41.59 118.771 42.03 118.051 42.35C117.331 42.67 116.531 42.83 115.651 42.83C114.751 42.83 113.931 42.67 113.191 42.35C112.471 42.03 111.841 41.59 111.301 41.03C110.781 40.47 110.381 39.8 110.101 39.02C109.821 38.24 109.681 37.4 109.681 36.5ZM104.341 36.5C104.341 38.12 104.611 39.61 105.151 40.97C105.691 42.33 106.471 43.51 107.491 44.51C108.511 45.51 109.711 46.29 111.091 46.85C112.471 47.39 113.991 47.66 115.651 47.66C117.291 47.66 118.791 47.39 120.151 46.85C121.531 46.29 122.731 45.51 123.751 44.51C124.771 43.51 125.561 42.33 126.121 40.97C126.681 39.61 126.961 38.12 126.961 36.5C126.961 34.88 126.671 33.4 126.091 32.06C125.511 30.7 124.711 29.53 123.691 28.55C122.691 27.57 121.501 26.82 120.121 26.3C118.761 25.78 117.271 25.52 115.651 25.52C114.031 25.52 112.531 25.78 111.151 26.3C109.771 26.82 108.571 27.57 107.551 28.55C106.531 29.53 105.741 30.7 105.181 32.06C104.621 33.4 104.341 34.88 104.341 36.5ZM130.18 26V47H143.68V42.62H135.22V26H130.18ZM150.238 42.95H161.338L160.978 39.08H150.568L150.238 42.95ZM155.758 33.74L158.698 40.49L158.488 41.84L160.978 47H166.768L155.758 24.68L144.688 47H150.418L152.998 41.66L152.788 40.49L155.758 33.74Z"
              fill="#090761"
            ></path>
            <g>
              <path
                d="M29.8203 68.629L27.564 72.7421L25.3127 68.6392C26.0445 68.72 26.7763 68.7756 27.503 68.7756C28.2653 68.7756 29.0478 68.72 29.8203 68.629ZM36.1318 57.1437L30.8773 66.7089C30.6893 66.7443 30.4911 66.7746 30.303 66.7999C29.368 66.9363 28.4177 67.0222 27.4979 67.0222C26.5781 67.0222 25.6227 66.9363 24.6877 66.7999C24.5454 66.7797 24.4031 66.7494 24.2557 66.7291L19.0063 57.169C19.2959 57.2044 19.5907 57.2246 19.921 57.2246C22.1773 57.2246 23.3766 56.2948 24.5657 55.3601C25.3737 54.7385 26.1817 54.1069 27.4877 54.1069C28.7938 54.1069 29.5967 54.7385 30.4098 55.3601C31.5989 56.2948 32.7982 57.2246 35.0545 57.2246C35.4458 57.2246 35.7964 57.1993 36.1318 57.1437Z"
                fill="#FFC78B"
              ></path>
              <path
                d="M27.5022 22.4604H27.487C21.3685 22.4655 15.8091 24.9566 11.7792 28.9636C7.76463 32.9604 5.26948 38.4732 5.25932 44.5468V44.5822V44.5973C5.2644 50.676 7.76971 56.2089 11.7996 60.2159C14.315 62.7121 17.4301 64.617 20.9061 65.6983L17.7452 59.7965C16.6323 59.0891 15.6007 58.2705 14.6708 57.3459C11.3828 54.0817 9.33998 49.5643 9.3349 44.5973V44.5822V44.5468C9.33998 39.5848 11.3879 35.0776 14.6657 31.8134C17.9485 28.5442 22.4865 26.5129 27.487 26.5129H27.5022H27.5378C32.5179 26.518 37.0458 28.5492 40.3286 31.8134H40.3388C43.6267 35.0776 45.6645 39.5949 45.6695 44.567V44.5822V44.6175C45.6594 49.5745 43.6267 54.0766 40.3388 57.3459C39.4901 58.1897 38.5551 58.9426 37.554 59.6096L34.3423 65.6175C37.7217 64.5261 40.7656 62.6464 43.2252 60.2008C47.2449 56.2039 49.74 50.6861 49.7451 44.6226V44.5872V44.5721C49.74 38.4883 47.2398 32.9604 43.21 28.9535L43.215 28.9484C39.1954 24.9515 33.641 22.4756 27.5378 22.4655"
                fill="#FFC78B"
              ></path>
              <path
                d="M37.9608 23.0919C30.9836 19.4992 24.0215 19.7115 17.0341 23.0919C17.0341 19.7266 17.0341 16.5332 17.0341 13.1578C22.0701 7.22063 33.3466 7.49854 37.9608 13.1578C37.9608 15.9622 37.9608 20.2824 37.9608 23.0919ZM44.3384 15.8409V14.3604V7.10947V6.01298C44.3384 5.67444 44.0844 5.38642 43.7439 5.346L38.6418 4.70428L27.5025 0L0 11.6116L15.2097 15.5327V12.9001L15.4181 12.3342C15.9212 11.738 16.5005 11.1821 17.1205 10.6819C20.012 8.35754 23.8945 7.2459 27.716 7.28127C31.5425 7.32169 35.3437 8.51924 38.0574 10.7931C38.6164 11.263 39.1347 11.7885 39.6022 12.3544L39.8004 12.9001V15.5327L42.9918 14.7091V15.8409C42.6818 16.0582 42.4734 16.4119 42.4734 16.8212C42.4734 17.2608 42.7174 17.6398 43.068 17.8469C42.8851 17.9379 42.7072 18.0642 42.5497 18.236L42.138 22.1015C42.5497 22.435 43.0832 22.6371 43.6626 22.6371C44.2419 22.6371 44.7704 22.435 45.1973 22.1015L44.7856 18.236C44.6281 18.0642 44.4502 17.9328 44.2673 17.8469C44.623 17.6398 44.8568 17.2608 44.8568 16.8212C44.8619 16.4119 44.6535 16.0532 44.3384 15.8409ZM55 11.6116L45.6953 7.68045V14.0067L55 11.6116Z"
                fill="#FFC78B"
              ></path>
              <path
                d="M18.2993 51.8784V24.5977H24.4432V50.8729C24.0315 51.1104 23.6555 51.3782 23.2794 51.651C22.5477 52.1765 21.8159 52.7071 20.6318 52.7071C19.6155 52.7071 18.9396 52.318 18.2993 51.8784ZM30.5515 52.2321V25.9569H36.6953V53.2377C36.0601 53.6773 35.3791 54.0714 34.3577 54.0714C33.1787 54.0714 32.447 53.5408 31.7152 53.0103C31.3391 52.7425 30.9682 52.4696 30.5515 52.2321Z"
                fill="#FFC78B"
              ></path>
            </g>
          </svg>
        </a>
      </div>
      {pathname === "/blog" || pathname === "/courses" ? (
        <>
          <div className="header__course">
            <a href="#" className="f-icon">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="17"
                viewBox="0 0 25 17"
                fill="none"
              >
                <rect width="25" height="1" fill="white"></rect>
                <rect y="8" width="15" height="1" fill="white"></rect>
                <rect y="16" width="20" height="1" fill="white"></rect>
              </svg>
              &nbsp; Courses
            </a>
            <div className="submenu-inner">
              <ul className="submenu">
                <li>
                  <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=3">
                    Design
                  </a>
                </li>
                <li>
                  <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=4">
                    Business
                  </a>
                </li>
                <li>
                  <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=5">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=6">
                    Personal Development
                  </a>
                </li>
                <li>
                  <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=7">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=8">
                    Audio + Music
                  </a>
                </li>
                <li>
                  <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=9">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=10">
                    Finance + Accounting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__search">
            <form
              className="f-form"
              action="https://demo.createdbycocoon.com/moodle/skola/1/search/index.php"
            >
              <span className="f-close d-none">
                <i className="fas fa-times"></i>
              </span>
              <input
                id="searchform_search"
                name="q"
                className="form-control"
                placeholder="What do you want to learn?"
                type="text"
                size="15"
              />
              <input type="hidden" name="context" value="146" />
              <span className="f-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g>
                    <path
                      d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
                      fill="#949DA6"
                    ></path>
                    <path
                      d="M19.762 18.6124L15.1007 13.9511C14.7831 13.6335 14.2687 13.6335 13.9511 13.9511C13.6335 14.2684 13.6335 14.7834 13.9511 15.1007L18.6124 19.762C18.7712 19.9208 18.9791 20.0002 19.1872 20.0002C19.395 20.0002 19.6032 19.9208 19.762 19.762C20.0796 19.4446 20.0796 18.9297 19.762 18.6124Z"
                      fill="#949DA6"
                    ></path>
                  </g>
                </svg>
              </span>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="navbar-icons">
        <div className="nav">
          <ul className="menu-list">
            <li className="image-menu">
              <a className="nav-link" href="/">
                Home <i className="fa-solid fa-angle-down"></i>
              </a>
              <div className="home-links">
                <div className="home-links-row">
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/01_home.jpg"
                      alt=""
                    />
                    <p>Home v1</p>
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=110&amp;ccn_style=2"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/02_home.jpg"
                      alt=""
                    />
                    Home v2
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=111&amp;ccn_style=33"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/03_home.jpg"
                      alt=""
                    />
                    Home v3
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=112&amp;ccn_style=4"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/04_home.jpg"
                      alt=""
                    />
                    Home v4
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=113&amp;ccn_style=5"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/05_home.jpg"
                      alt=""
                    />
                    Home v5
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=114&amp;ccn_style=6"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/06_home.jpg"
                      alt=""
                    />
                    Home v6
                  </a>
                </div>
                <div className="home-links-row">
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=115&amp;ccn_style=7"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/07_home.jpg"
                      alt=""
                    />
                    Home v7
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=116&amp;ccn_style=8"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/08_home.jpg"
                      alt=""
                    />
                    Home v8
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=117&amp;ccn_style=9"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/09_home.jpg"
                      alt=""
                    />
                    Home v9
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=118&amp;ccn_style=10"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/10_home.jpg"
                      alt=""
                    />
                    Home v10
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=119&amp;ccn_style=11"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/11_home.jpg"
                      alt=""
                    />
                    Home v11
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=120&amp;ccn_style=12"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/12_home.jpg"
                      alt=""
                    />
                    Home v12
                  </a>
                </div>
                <div className="home-links-row">
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=121&amp;ccn_style=13"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/13_home.jpg"
                      alt=""
                    />
                    Home v13
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=122&amp;ccn_style=14"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/14_home.jpg"
                      alt=""
                    />
                    Home v14
                  </a>
                  <a
                    href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=123&amp;ccn_style=15"
                    className="demo-card-caption"
                  >
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/home_screens/15_home.jpg"
                      alt=""
                    />
                    Home v15
                  </a>
                </div>
              </div>
            </li>
            <li className="courses-menu">
              <a className="" href="/">
                Courses <i className="fa-solid fa-angle-down"></i>
              </a>
              <div className="courses-links">
                <div className="courses-list">
                  <h3> Courses List</h3>
                  <ul>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=3">
                        Courses List v1
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=4">
                        Courses List v2
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=5">
                        Courses List v3
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=6">
                        Courses List v4
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=7">
                        Courses List v5
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/index.php?categoryid=8">
                        Courses List v6
                      </a>
                    </li>
                    <h3 id="ins"> Instructors</h3>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/local/cocoon_users">
                        Instructors List
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/user/profile.php?id=22">
                        Instructor Profile
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="courses-single">
                  <h3> Courses Single</h3>
                  <ul>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=11">
                        Course Single v1
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=10">
                        Course Single v2
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=9">
                        Course Single v3
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=8">
                        Course Single v4
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=7">
                        Course Single v5
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=146&amp;ccn_lesson_style=1">
                        Lesson Single v1
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=146&amp;ccn_lesson_style=2">
                        Lesson Single v2
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="other-courses">
                  <h3 className="item__title"> Other Course Pages</h3>
                  <ul>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=4">
                        Free Course
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=5">
                        Paid Course
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=11">
                        Topics Format
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=10">
                        Social Format
                      </a>
                    </li>
                    <li>
                      <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=9">
                        Weekly Format
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="events-menu">
              <a className="" href="/">
                Events <i className="fa-solid fa-angle-down"></i>
              </a>
              <div className="events-links">
                <ul className="events-list">
                  <li className="">
                    <a
                      className="ccn-menu-item"
                      href="https://demo.createdbycocoon.com/moodle/skola/1/local/cocoon_events"
                    >
                      Event List
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ccn-menu-item"
                      href="https://demo.createdbycocoon.com/moodle/skola/1/local/cocoon_events/view.php?id=1"
                    >
                      Event Single
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ccn-menu-item"
                      href="https://demo.createdbycocoon.com/moodle/skola/1/calendar/view.php"
                    >
                      Calendar Default
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ccn-menu-item"
                      href="https://demo.createdbycocoon.com/moodle/skola/1/calendar/view.php?view=month&amp;time=1575158400"
                    >
                      Calendar Month
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="ccn-menu-item"
                      href="https://demo.createdbycocoon.com/moodle/skola/1/calendar/view.php?view=day&amp;time=1577491200"
                    >
                      Calendar Day
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="pages-menu">
              <a href="/">
                Pages <i className="fa-solid fa-angle-down"></i>
              </a>
              <div className="pages-links">
                <ul className="pages-list">
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=124">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=125">
                      About Us v2
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=131">
                      Become an Instructor
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=130">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=126">
                      FAQ
                    </a>
                  </li>
                  <li className="pages-user-options">
                    <a className="" href="/" id="pages-user">
                      User
                      <i className="fas fa-chevron-right"></i>
                    </a>
                    <div className="pages-user-links">
                      <ul className="pages-user-list">
                        <li>
                          <a href="https://demo.createdbycocoon.com/moodle/skola/1/login/index.php">
                            Login
                          </a>
                        </li>
                        <li>
                          <a href="https://demo.createdbycocoon.com/moodle/skola/1/login/signup.php">
                            Register
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=140">
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/admin/tool/dataprivacy/summary.php">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=139">
                      Elements
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="blog-menu">
              <a href="/">
                Blog <i className="fa-solid fa-angle-down"></i>
              </a>
              <div className="blog-links">
                <ul className="blog-list">
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?ccn_blog_style=1">
                      Blog List
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?ccn_blog_style=2">
                      Blog List v2
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?ccn_blog_style=3">
                      Blog List v3
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?ccn_blog_style=4">
                      Blog List v4
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?entryid=2">
                      Blog Single
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-contact">
              <a
                className="ccn-menu-item"
                href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=138"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {pathname === "/" ? (
          <div className="header__searchMb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              onClick={handleSearchClick}
            >
              <g>
                <path
                  d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
                  fill="#949DA6"
                ></path>
                <path
                  d="M19.762 18.6124L15.1007 13.9511C14.7831 13.6335 14.2687 13.6335 13.9511 13.9511C13.6335 14.2684 13.6335 14.7834 13.9511 15.1007L18.6124 19.762C18.7712 19.9208 18.9791 20.0002 19.1872 20.0002C19.395 20.0002 19.6032 19.9208 19.762 19.762C20.0796 19.4446 20.0796 18.9297 19.762 18.6124Z"
                  fill="#949DA6"
                ></path>
              </g>
            </svg>
            <div
              className={
                clickSearch
                  ? "searchMobile mbCartFirst active"
                  : "searchMobile mbCartFirst"
              }
            >
              <div className="mbCartFirst__inner">
                <form
                  className="f-form"
                  action="https://demo.createdbycocoon.com/moodle/skola/1/search/index.php"
                >
                  <input
                    id="searchform_search"
                    name="q"
                    className="form-control"
                    placeholder="What do you want to learn?"
                    type="text"
                    size="15"
                  />
                  <input type="hidden" name="context" value="636" />
                  <span className="f-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
                          fill="#949DA6"
                        ></path>
                        <path
                          d="M19.762 18.6124L15.1007 13.9511C14.7831 13.6335 14.2687 13.6335 13.9511 13.9511C13.6335 14.2684 13.6335 14.7834 13.9511 15.1007L18.6124 19.762C18.7712 19.9208 18.9791 20.0002 19.1872 20.0002C19.395 20.0002 19.6032 19.9208 19.762 19.762C20.0796 19.4446 20.0796 18.9297 19.762 18.6124Z"
                          fill="#949DA6"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="header__user" onClick={handleUserClick}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2252 3.07776C15.3376 1.10744 12.7258 -0.00451546 9.99712 0.00050521C4.48284 -0.00644005 0.00695317 4.45815 7.91636e-06 9.97248C-0.00342287 12.6991 1.1084 15.3085 3.07726 17.1948C3.08299 17.2005 3.08512 17.2091 3.09082 17.2141C3.14864 17.2698 3.21148 17.317 3.27005 17.3705C3.43071 17.5133 3.59138 17.6611 3.76061 17.7989C3.85128 17.8704 3.94554 17.9417 4.03838 18.0074C4.19833 18.1267 4.35828 18.2459 4.52535 18.3559C4.6389 18.4273 4.756 18.4987 4.87236 18.5701C5.02658 18.663 5.18012 18.7565 5.33936 18.8414C5.47434 18.9129 5.61211 18.9742 5.74922 19.0392C5.89917 19.1106 6.04698 19.182 6.20049 19.2463C6.354 19.3105 6.50826 19.3605 6.6639 19.4162C6.81954 19.4719 6.9538 19.5233 7.10304 19.569C7.27157 19.6197 7.44436 19.659 7.61573 19.7011C7.75853 19.7361 7.89706 19.7761 8.04416 19.8047C8.24123 19.844 8.44117 19.8689 8.64112 19.8961C8.76467 19.9132 8.88534 19.9375 9.01027 19.9496C9.33732 19.9818 9.66718 19.9996 9.99992 19.9996C10.3327 19.9996 10.6626 19.9818 10.9896 19.9496C11.1146 19.9375 11.2352 19.9132 11.3587 19.8961C11.5587 19.8689 11.7586 19.844 11.9557 19.8047C12.0985 19.7761 12.2413 19.7332 12.3841 19.7011C12.5555 19.659 12.7283 19.6197 12.8968 19.569C13.046 19.5233 13.1903 19.4677 13.3359 19.4162C13.4816 19.3648 13.6473 19.3091 13.7994 19.2463C13.9514 19.1834 14.1007 19.1099 14.2506 19.0392C14.3877 18.9742 14.5256 18.9128 14.6605 18.8414C14.8197 18.7565 14.9732 18.6629 15.1275 18.5701C15.2439 18.4987 15.361 18.4337 15.4745 18.3559C15.6416 18.246 15.8016 18.1267 15.9615 18.0074C16.0543 17.936 16.1485 17.8717 16.2392 17.7989C16.4085 17.6633 16.5691 17.519 16.7298 17.3705C16.7883 17.317 16.8512 17.2699 16.909 17.2141C16.9147 17.2091 16.9169 17.2006 16.9226 17.1948C20.9046 13.38 21.04 7.05961 17.2252 3.07776ZM15.6203 16.4472C15.4904 16.5615 15.3561 16.67 15.2205 16.775C15.1405 16.8364 15.0605 16.8971 14.9784 16.9556C14.8491 17.0492 14.7178 17.1377 14.5842 17.2227C14.4871 17.2848 14.3879 17.3448 14.2879 17.4034C14.1622 17.4748 14.0344 17.5462 13.9051 17.6176C13.7909 17.6761 13.6745 17.7311 13.5574 17.7854C13.4403 17.8397 13.3111 17.8975 13.1847 17.9482C13.0583 17.9989 12.924 18.0467 12.7919 18.091C12.6713 18.1324 12.5506 18.1752 12.4285 18.2116C12.2857 18.2545 12.1364 18.2895 11.9886 18.3252C11.8729 18.3523 11.7587 18.383 11.6416 18.4059C11.4724 18.4387 11.2996 18.4616 11.1261 18.4851C11.0275 18.498 10.9297 18.5159 10.8304 18.5259C10.5562 18.5523 10.2784 18.568 9.99783 18.568C9.71722 18.568 9.43945 18.5523 9.16524 18.5259C9.066 18.5159 8.96818 18.498 8.8696 18.4851C8.6961 18.4616 8.5233 18.4387 8.35406 18.4059C8.23696 18.3831 8.1227 18.3524 8.00705 18.3252C7.85924 18.2895 7.71213 18.2538 7.5672 18.2116C7.44512 18.1752 7.32441 18.1324 7.20375 18.091C7.07166 18.0453 6.93953 17.9989 6.811 17.9482C6.68248 17.8975 6.5611 17.8418 6.43826 17.7854C6.31542 17.729 6.20476 17.6762 6.09054 17.6176C5.9613 17.5505 5.83348 17.4798 5.7078 17.4034C5.60784 17.3448 5.50856 17.2848 5.41145 17.2227C5.27794 17.1377 5.14653 17.0492 5.01729 16.9556C4.93516 16.8971 4.8552 16.8364 4.77521 16.775C4.63952 16.67 4.5053 16.5608 4.37535 16.4472C4.34393 16.4237 4.31536 16.3937 4.28469 16.3665C4.31661 13.9375 5.87708 11.7926 8.17843 11.0147C9.32912 11.5621 10.6651 11.5621 11.8158 11.0147C14.1171 11.7926 15.6776 13.9374 15.7096 16.3665C15.6796 16.3937 15.651 16.4208 15.6203 16.4472ZM7.50716 5.72566C8.2803 4.35067 10.0217 3.86278 11.3967 4.63592C12.7717 5.40906 13.2596 7.15044 12.4864 8.52544C12.2299 8.98165 11.8529 9.35862 11.3967 9.61517C11.3931 9.61517 11.3888 9.61517 11.3845 9.61944C11.1952 9.72483 10.9951 9.8096 10.7876 9.87223C10.7505 9.88294 10.7162 9.89721 10.6769 9.9065C10.6055 9.92507 10.5305 9.93792 10.457 9.95076C10.3185 9.97499 10.1784 9.98905 10.0378 9.99289H9.95641C9.81588 9.98905 9.67576 9.97499 9.53727 9.95076C9.46585 9.93792 9.39016 9.92507 9.31736 9.9065C9.2795 9.89721 9.24594 9.88294 9.2067 9.87223C8.99922 9.8096 8.79911 9.72487 8.60974 9.61944L8.5969 9.61517C7.2219 8.84203 6.73402 7.10065 7.50716 5.72566ZM16.9763 14.9506C16.518 12.8133 15.1107 11.0014 13.1532 10.0287C14.7534 8.28561 14.6375 5.57542 12.8944 3.97529C11.1514 2.37516 8.44117 2.49105 6.84104 4.2341C5.33677 5.87276 5.33677 8.39005 6.84104 10.0287C4.88361 11.0015 3.47624 12.8133 3.01802 14.9506C0.27991 11.0938 1.18681 5.7475 5.04365 3.00939C8.90048 0.271287 14.2467 1.17819 16.9848 5.03502C18.0141 6.48487 18.5666 8.21913 18.5658 9.9972C18.5658 11.7737 18.01 13.5057 16.9763 14.9506Z"
              fill="#949DA6"
            ></path>
          </svg>
          <div
            className={
              clickUser && clickUserClose
                ? "loginSignCard popupCard active"
                : "loginSignCard popupCard"
            }
          >
            <div className="bg"></div>
            <div className="popupCard__inner scrollfix-custom">
              <div
                className="loginSignCard-item active"
                id="loginSignCard-login"
              >
                <div className="loginSignCard-fix">
                  <div className="f-header">
                    <h2 className="f-header__title">
                      Log In to Your Skola Account!
                    </h2>
                    <span
                      className="f-header__close"
                      onClick={handleUserCloseClick}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </div>

                  <div className="f-content">
                    <div className="f-content__scroll">
                      <div className="login-wrap">
                        <form
                          className="__loginform form-wrap"
                          id="login"
                          method="post"
                          action="https://demo.createdbycocoon.com/moodle/skola/1/login/index.php"
                        >
                          <div className="form-item">
                            <label>Username</label>
                            <input
                              type="text"
                              name="username"
                              placeholder="Username"
                              id="login_username"
                              className="form-control"
                              value=""
                              autoComplete="username"
                            />
                          </div>
                          <div className="form-item">
                            <label>Password</label>
                            <input
                              type="password"
                              name="password"
                              id="login_password"
                              placeholder="Password"
                              className="form-control"
                              value=""
                              autoComplete="current-password"
                            />
                          </div>
                          <div className="form-forgot">
                            <label
                              className="checkbox-custom"
                              for="rememberusername"
                            >
                              <div className="f-textbox">
                                <span></span>
                                Remember username
                              </div>
                            </label>
                            <p className="f-text">
                              <a href="https://demo.createdbycocoon.com/moodle/skola/1/login/forgot_password.php">
                                Lost password?
                              </a>
                            </p>
                          </div>
                          <button type="submit" className="btn">
                            Log in
                          </button>
                          <input
                            type="hidden"
                            name="logintoken"
                            value="8n4arqGyuIPyYETfBPhb5cfay1PY3lUf"
                          />
                        </form>
                      </div>
                      <p className="btn-convert">
                        Don't have an account?
                        <a href="#loginSignCard-signup">Sign up</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="loginSignCard-item" id="loginSignCard-signup">
                <div className="loginSignCard-fix">
                  <div className="f-header">
                    <h2 className="f-header__title">
                      Sign Up and Start Learning!
                    </h2>
                    <span className="f-header__close">
                      <i className="ccn-flaticon-multiply"></i>
                    </span>
                  </div>
                  <div className="f-content">
                    <div className="f-content__scroll">
                      <form className="form-wrap">
                        <div className="form-item">
                          <label>Username</label>
                          <input
                            type="text"
                            placeholder="creativelayers"
                            name="name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-item">
                          <label>Email</label>
                          <input
                            type="email"
                            placeholder="creativelayers@gmail.com"
                            name="email"
                            className="form-control"
                          />
                        </div>
                        <div className="form-item">
                          <label>Password</label>
                          <input
                            type="password"
                            placeholder="**********"
                            name="password"
                            className="form-control"
                          />
                        </div>
                        <button type="submit" className="btn">
                          SIGN UP
                        </button>
                      </form>
                      <p className="btn-convert">
                        Don't have an account?
                        <a href="#loginSignCard-login">Log In</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__showMenuMb" onClick={handleMenuMbClick}>
          <div className="f-icon">
            <span></span>
          </div>
          <div
            className={
              clickMenuMb
                ? "header__menuMb mbCartFirst active"
                : "header__menuMb"
            }
          >
            <a href="/">
              Home<i className="fas fa-chevron-right"></i>
            </a>
            <a href="/">
              Courses<i className="fas fa-chevron-right"></i>
            </a>
            <a href="/">
              Events<i className="fas fa-chevron-right"></i>
            </a>
            <a href="/">
              Pages<i className="fas fa-chevron-right"></i>
            </a>
            <a href="/">
              Blog<i className="fas fa-chevron-right"></i>
            </a>
            <a href="https://demo.createdbycocoon.com/moodle/skola/1/mod/page/view.php?id=138">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

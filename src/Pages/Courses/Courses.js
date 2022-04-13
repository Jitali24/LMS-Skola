import React from "react";
import RelatedCourses from "./RelatedCourses";
import "./Courses.css";
import "../../components/Video/Video.css";

import { useParams } from "react-router-dom";
import CoursesData from "./CoursesData.json";

const Courses = () => {
  const { id } = useParams();

  const cData = CoursesData.filter(
    (courses) => courses.id.toString() === id.toString()
  );

  return (
    <div className="courses-container">
      <div className="courses-sections">
        <div className="courses-description">
          <div className="courses-title">
            <h1>{cData[0].title}</h1>
            {/* <i className="fa-solid fa-circle-heart"></i> */}
            <p>
              Master Figma app to get a job in UI Design, User Interface, User
              Experience design, Web Design & UX design.
            </p>
          </div>
          <div className="courses-author">
            <div className="courses-author-avatar">
              <span>
                <img src={cData[0].authorAvatar} alt=""></img>
              </span>
            </div>
            <div className="courses-author-info">
              <ul>
                <li>
                  <b>Created by</b>
                  <p>{cData[0].authorName}</p>
                </li>
                <li>
                  <b>Categories</b>
                  <p>Design</p>
                </li>
                <li>
                  <b>Review</b>
                  <div className="f-star">
                    <span>
                      <i className="fas fa-star"></i>{" "}
                      <i className="fas fa-star"></i>{" "}
                      <i className="fas fa-star"></i>{" "}
                      <i className="fas fa-star"></i>{" "}
                      <i className="fas fa-star"></i>
                    </span>
                    <p>5 (2+ reviews)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="courses-sidebar">
          <div className="courses-widgets">
            <div className="video-container">
              <div className="video-content">
                <a href="https://youtu.be/UdDwKI4DcGw">
                  <span className="video-btn">
                    <svg
                      width="26"
                      height="30"
                      viewBox="0 0 26 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.0075 11.5383L6.2887 0.616072C5.00679 -0.173129 3.45692 -0.205942 2.14272 0.528298C0.828517 1.26242 0.0439453 2.59959 0.0439453 4.10493V25.8498C0.0439453 28.126 1.87793 29.9877 4.13204 30C4.13819 30 4.14434 30 4.15038 30C4.8548 30 5.58886 29.7792 6.27447 29.3608C6.82601 29.0243 7.00033 28.3044 6.66382 27.7529C6.32732 27.2013 5.60732 27.0271 5.05595 27.3636C4.73526 27.5592 4.42208 27.6604 4.14464 27.6603C3.29415 27.6557 2.38354 26.9271 2.38354 25.8499V4.10498C2.38354 3.45922 2.7201 2.88576 3.28378 2.57082C3.84751 2.25588 4.51226 2.26994 5.06146 2.60809L22.7803 13.5303C23.3129 13.8582 23.6176 14.4049 23.6163 15.0303C23.615 15.6557 23.3081 16.2012 22.7726 16.528L9.96178 24.3718C9.41076 24.7092 9.23756 25.4294 9.57494 25.9804C9.91227 26.5314 10.6324 26.7046 11.1835 26.3672L23.9927 18.5243C25.2192 17.7761 25.9531 16.4718 25.956 15.035C25.959 13.5984 25.2303 12.2911 24.0075 11.5383Z"
                        fill="#090761"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div>
              <div className="course-price">
                <p>Free</p>
              </div>
              <div className="courses-widgets-btn">
                <a href="/courses" className="btn btn-block">
                  Enrol
                </a>
                <a href="/courses" className="btn btn-secondary-2 btn-block">
                  Ask a Question
                </a>
              </div>
              <div className="courses-widgets-list">
                <table className="listBox-infoCourse">
                  <tbody>
                    <tr>
                      <td>
                        <span>
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-time-courses.svg"
                            alt=""
                          />
                        </span>{" "}
                        Duration
                      </td>
                      <td>41 weeks</td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-open-book.svg"
                            alt=""
                          />
                        </span>{" "}
                        Lectures
                      </td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-icon-student.svg"
                            alt=""
                          />
                        </span>{" "}
                        Enrolled
                      </td>
                      <td>2 students</td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-translate.svg"
                            alt=""
                          />
                        </span>{" "}
                        Language
                      </td>
                      <td>English</td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-equalizer.svg"
                            alt=""
                          />
                        </span>{" "}
                        Skill level
                      </td>
                      <td>Beginner</td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-calendar.svg"
                            alt=""
                          />
                        </span>{" "}
                        Deadline
                      </td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-certificate.svg"
                            alt=""
                          />
                        </span>{" "}
                        Certificate
                      </td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
                <div className="courses-widgets-list-btn">
                  <a href="/">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.0283 6.25C15.0912 6.25 14.2487 5.83507 13.6753 5.17916L6.9169 9.03209C7.01646 9.33696 7.07031 9.6623 7.07031 10C7.07031 10.3375 7.01652 10.6627 6.91707 10.9674L13.6756 14.8205C14.249 14.1648 15.0914 13.75 16.0283 13.75C17.7509 13.75 19.1533 15.1517 19.1533 16.875C19.1533 18.5983 17.7509 20 16.0283 20C14.3059 20 12.9033 18.5983 12.9033 16.875C12.9033 16.537 12.9573 16.2114 13.057 15.9063L6.29898 12.0534C5.7256 12.7098 4.88288 13.125 3.94531 13.125C2.22275 13.125 0.820312 11.7233 0.820312 10C0.820312 8.27667 2.22275 6.875 3.94531 6.875C4.88271 6.875 5.72531 7.29009 6.29868 7.94623L13.0569 4.0933C12.9572 3.78832 12.9033 3.46284 12.9033 3.125C12.9033 1.40167 14.3059 0 16.0283 0C17.7509 0 19.1533 1.40167 19.1533 3.125C19.1533 4.84833 17.7509 6.25 16.0283 6.25ZM16.0283 1.25C14.995 1.25 14.1533 2.09076 14.1533 3.125C14.1533 4.15924 14.995 5 16.0283 5C17.0616 5 17.9033 4.15924 17.9033 3.125C17.9033 2.09076 17.0616 1.25 16.0283 1.25ZM16.0283 15C14.995 15 14.1533 15.8408 14.1533 16.875C14.1533 17.9092 14.995 18.75 16.0283 18.75C17.0616 18.75 17.9033 17.9092 17.9033 16.875C17.9033 15.8408 17.0616 15 16.0283 15ZM2.07031 10C2.07031 8.96576 2.91199 8.125 3.94531 8.125C4.97864 8.125 5.82031 8.96576 5.82031 10C5.82031 11.0342 4.97864 11.875 3.94531 11.875C2.91199 11.875 2.07031 11.0342 2.07031 10Z"
                        fill="#4A8F9F"
                      ></path>
                    </svg>
                    Share this course
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="latest-courses-widgets">
            <h3 className="latest-courses-widgets-title">Latest Courses</h3>
            <ul>
              <li className="item">
                <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=4">
                  <img
                    src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/146/course/overviewfiles/img-7.jpg"
                    alt=""
                    className="item__img"
                  />
                  <h3 className="item__title">
                    Introduction to the Web Design &amp; HTML
                  </h3>
                  <div className="item__price">
                    <p>Free</p>
                  </div>
                </a>
              </li>

              <li className="item">
                <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=5">
                  <img
                    src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/148/course/overviewfiles/img-6.png"
                    alt=""
                    className="item__img"
                  />
                  <h3 className="item__title">
                    Cubase Pro 10 Essential Training: Intermediate
                  </h3>
                  <div className="item__price">
                    <p>$89.99</p>
                  </div>
                </a>
              </li>

              <li className="item">
                <a href="https://demo.createdbycocoon.com/moodle/skola/1/course/view.php?id=6">
                  <img
                    src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/150/course/overviewfiles/img-8.jpg"
                    alt=""
                    className="item__img"
                  />
                  <h3 className="item__title">
                    Adobe XD: Prototyping Tips and Tricks
                  </h3>
                  <div className="item__price">
                    <p>$89.99</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <RelatedCourses />
    </div>
  );
};

export default Courses;

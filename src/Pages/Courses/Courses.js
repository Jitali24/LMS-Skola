import React from "react";
import RelatedCourses from "./RelatedCourses";
import "./Courses.css";

function Courses() {
  return (
    <div className="courses-container">
      <div>
        <div className="courses-description">
          <div className="courses-title">
            <h1>Introduction to the Web Design &amp; HTML </h1>
            {/* <i class="fa-solid fa-circle-heart"></i> */}
            <p>
              Master Figma app to get a job in UI Design, User Interface, User
              Experience design, Web Design & UX design.
            </p>
          </div>
          <div className="courses-author">
            <div className="courses-author-avatar">
              <span>
                <img src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/860/user/icon/skola/f3?rev=9253"></img>
              </span>
            </div>
            <div className="courses-author-info">
              <ul>
                <li>
                  <b>Created by</b>
                  <p>Johnson Earl</p>
                </li>
                <li>
                  <b>Categories</b>
                  <p>Design</p>
                </li>
                <li>
                  <b>Review</b>
                  <div class="f-star">
                    <span>
                      <i class="fas fa-star"></i> <i class="fas fa-star"></i>{" "}
                      <i class="fas fa-star"></i> <i class="fas fa-star"></i>{" "}
                      <i class="fas fa-star"></i>
                    </span>
                    <p>5 (2+ reviews)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="courses-widgets"></div>
      </div>
      <RelatedCourses />
    </div>
  );
}

export default Courses;

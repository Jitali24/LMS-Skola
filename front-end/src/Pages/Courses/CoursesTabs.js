import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";
import "./CoursesTabs.css";
import { useParams } from "react-router-dom";
import CoursesData from "./CoursesData.json";

const CoursesTabs = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1");

  const { id } = useParams();

  const cData = CoursesData.filter(
    (courses) => courses.id.toString() === id.toString()
  );

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => {
    setClick1(!click1);
  };

  const [click2, setClick2] = useState(false);
  const handleClick2 = () => {
    setClick2(!click2);
  };

  const [click3, setClick3] = useState(false);
  const handleClick3 = () => {
    setClick3(!click3);
  };

  return (
    <div className="courses-tabs-container">
      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
        <TabList className="courses-tab-title">
          <Tab item="tab-1">Overview</Tab> <Tab item="tab-2">Curriculum</Tab>
          <Tab item="tab-3">Instructor</Tab> <Tab item="tab-4">Reviews</Tab>
        </TabList>
        <TabPanel item="tab-1">
          <div className="overview-tab">
            <h3>Course Description</h3>
            <p>
              Do you want to become a UI/UX designer but you don't know where to
              start? This course will allow you to develop your user interface
              design skills and you can add UI designer to your CV and start
              getting clients for your skills.
            </p>
            <p>
              Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I
              will help you learn and master Figma app comprehensively from
              scratch. Figma is an innovative and brilliant tool for User
              Interface design. It's used by everyone from entrepreneurs and
              start-ups to Apple, Airbnb, Facebook, etc.
            </p>
            <br />
            <h3>What you'll learn</h3>
            <ul className="list-check">
              <li>
                <i className="fa-solid fa-check"></i>Become a UI/UX designer.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Learn to design mobile apps
                &amp; websites.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Design 3 different logos.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Create low-fidelity
                wireframe.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Downloadable exercise
                files.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Build &amp; test a complete
                mobile app.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>You will be able to start
                earning money Figma skills.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Build a UI project from
                beginning to end.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Work with colors &amp;
                fonts.
              </li>
              <li>
                <i className="fa-solid fa-check"></i>You will create your own UI
                Kit.
              </li>
            </ul>
            <br />
            <h3>Requirements</h3>
            <ul className="list-dot">
              <li>
                We do not require any previous experience or pre-defined skills
                to take this course. A great orientation would be enough to
                master UI/UX design.
              </li>
              <li>A computer with a good internet connection.</li>
              <li>Adobe Photoshop (OPTIONAL)</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel item="tab-2">
          <div className="curriculum-collapse">
            <div className="curriculum-collapse__header">
              <div className="curriculum-menu-btn" onClick={handleClick1}>
                {click1 ? (
                  <i className="fa-solid fa-minus"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
                <a href="/?">General</a>
              </div>
              <div
                className="collapse show"
                id="collapse-14"
                style={{ display: click1 ? "flex" : "none" }}
              >
                <ul className="curriculum-collapse__list">
                  <li className="activity forum modtype_forum " id="module-23">
                    <h4 className="c-title">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/image.php/skola/forum/1639885827/icon"
                        alt="Introduction"
                      />
                      Introduction
                    </h4>
                    <div className="c-fix"></div>
                    <div className="icon-lock">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-lock-courses.svg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="activity page modtype_page " id="module-146">
                    <h4 className="c-title">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/image.php/skola/page/1639885827/icon"
                        alt="Introduction to the course"
                      />
                      Introduction to the course
                    </h4>
                    <div className="c-fix"></div>
                    <div className="icon-lock">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-lock-courses.svg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="activity page modtype_page " id="module-147">
                    <h4 className="c-title">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/image.php/skola/page/1639885827/icon"
                        alt="Get Your Free E-book"
                      />
                      Get Your Free E-book
                    </h4>
                    <div className="c-fix"></div>
                    <div className="icon-lock">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-lock-courses.svg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="activity url modtype_url " id="module-148">
                    <h4 className="c-title">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/image.php/skola/url/1639885827/icon"
                        alt="Structure of the course"
                      />
                      Structure of the course
                    </h4>
                    <div className="c-fix"></div>
                    <div className="icon-lock">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-lock-courses.svg"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="curriculum-collapse">
            <div className="curriculum-collapse__header">
              <div className="curriculum-menu-btn" onClick={handleClick2}>
                {click2 ? (
                  <i className="fa-solid fa-minus"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
                <a href="/?">Topic 1</a>
              </div>
            </div>
            <div
              className="collapse show"
              id="collapse-15"
              style={{ display: click2 ? "flex" : "none" }}
            >
              <ul className="curriculum-collapse__list">
                <li className="activity quiz modtype_quiz " id="module-142">
                  <h4 className="c-title">
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/image.php/skola/quiz/1639885827/icon"
                      alt="Structure of the course"
                    />
                    Structure of the course
                  </h4>
                  <div className="c-fix"></div>
                  <div className="icon-lock">
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-lock-courses.svg"
                      alt=""
                    />
                  </div>
                </li>
                <li className="activity page modtype_page " id="module-149">
                  <h4 className="c-title">
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/image.php/skola/page/1639885827/icon"
                      alt="Get Your Free E-book"
                    />
                    Get Your Free E-book
                  </h4>
                  <div className="c-fix"></div>
                  <div className="icon-lock">
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-lock-courses.svg"
                      alt=""
                    />
                  </div>
                </li>
                <li
                  className="activity glossary modtype_glossary "
                  id="module-150"
                >
                  <h4 className="c-title">
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/image.php/skola/glossary/1639885827/icon"
                      alt="Structure of the course"
                    />
                    Structure of the course
                  </h4>
                  <div className="c-fix"></div>
                  <div className="icon-lock">
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-lock-courses.svg"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="curriculum-collapse">
            <div className="curriculum-collapse__header">
              <div className="curriculum-menu-btn" onClick={handleClick3}>
                {click3 ? (
                  <i className="fa-solid fa-minus"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
                <a href="/?">Topic 2</a>
              </div>
            </div>
            <div
              className="collapse show"
              id="collapse-16"
              style={{ display: click3 ? "flex" : "none" }}
            >
              <ul className="curriculum-collapse__list">
                <li className="activity forum modtype_forum " id="module-143">
                  <h4 className="c-title">
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/image.php/skola/forum/1639885827/icon"
                      alt="Required Tools"
                    />
                    Required Tools
                  </h4>
                  <div className="c-fix"></div>
                  <div className="icon-lock">
                    <img
                      src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-lock-courses.svg"
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel item="tab-3">
          <div className="instructor-tab">
            <h3>About the instructor</h3>
            <div className="instructor-tab-author">
              <div className="courses-author-avatar">
                <span>
                  <img src={cData[0].authorAvatar} alt=""></img>
                </span>
              </div>
              <div className="instructor-tab-author-info">
                <h4>{cData[0].authorName}</h4>
                <p>{cData[0].authorPosition}</p>
              </div>
            </div>
            <ul className="courses-instructor__lever">
              <li>
                <img
                  src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-icon-star.png"
                  alt=""
                />
                Instructor rating
              </li>
              <li>
                <img
                  src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-icon-review.svg"
                  alt=""
                />
                105 reviews
              </li>
              <li>
                <img
                  src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-icon-student.svg"
                  alt=""
                />
                5 students
              </li>
              <li>
                <img
                  src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-icon-play.svg"
                  alt=""
                />
                4 courses
              </li>
            </ul>
            <br />
            <p>
              Do you want to become a UI/UX designer but you don't know where to
              start? This course will allow you to develop your user interface
              design skills and you can add UI designer to your CV and start
              getting clients for your skills.
            </p>
            <p>
              Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I
              will help you learn and master Figma app comprehensively from
              scratch. Figma is an innovative and brilliant tool for User
              Interface design. It's used by everyone from entrepreneurs.
            </p>
          </div>
        </TabPanel>
        <TabPanel item="tab-4">
          <div className="courses-review-tab">
            <h3>Student feedback</h3>
            <div className="r-header">
              <div className="r-point">
                <div className="r-point__inner">
                  <h3 className="r-1">5</h3>
                  <h4 className="r-2">Course rating</h4>
                  <p className="r-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                </div>
              </div>
              <div className="r-progress">
                <ul className="r-progress__ul">
                  <li className="r-progress__li">
                    <div className="r-progress__step">
                      <span style={{ width: "100%" }}></span>
                    </div>
                    <p className="r-progress__star">
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                      100%
                    </p>
                  </li>
                  <li className="r-progress__li">
                    <div className="r-progress__step">
                      <span></span>
                    </div>
                    <p className="r-progress__star">
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                      0%
                    </p>
                  </li>
                  <li className="r-progress__li">
                    <div className="r-progress__step">
                      <span></span>
                    </div>
                    <p className="r-progress__star">
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                      0%
                    </p>
                  </li>
                  <li className="r-progress__li">
                    <div className="r-progress__step">
                      <span></span>
                    </div>
                    <p className="r-progress__star">
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                      0%
                    </p>
                  </li>
                  <li className="r-progress__li">
                    <div className="r-progress__step">
                      <span></span>
                    </div>
                    <p className="r-progress__star">
                      <span>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                      0%
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="commentbox">
              <div className="commentbox__comment">
                <ul className="commentbox__list">
                  <li className="item" data-ccn-user-id="2">
                    <div className="item__inner">
                      <div className="item__avatar avatar1"></div>
                      <div className="item__body">
                        <div className="item__header"></div>
                        <h4 className="item__name">Bert Lauchlan</h4>
                        <p className="item__position">
                          Wed, 15 Dec 2021, 4:48 AM
                        </p>
                        <div className="item__star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="item-text">
                          <p>
                            This course was well organized and covered a lot
                            more details than any other Figma courses. I really
                            enjoy it. One suggestion is that it can be much
                            better if we could complete the prototype together.
                            Since we created 24 frames, I really want to test it
                            on Figma mirror to see all the connections. Could
                            you please let me take a look at the complete
                            prototype?
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="item" data-ccn-user-id="17">
                    <div className="item__inner">
                      <div className="item__avatar avatar2"></div>
                      <div className="item__body">
                        <div className="item__header"></div>
                        <h4 className="item__name">Alan Locke</h4>
                        <p className="item__position">
                          {" "}
                          Wed, 15 Dec 2021, 4:49 AM
                        </p>
                        <div className="item__star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <div className="item-text">
                          <p>
                            This course was well organized and covered a lot
                            more details than any other Figma courses. I really
                            enjoy it. One suggestion is that it can be much
                            better if we could complete the prototype together.
                            Since we created 24 frames, I really want to test it
                            on Figma mirror to see all the connections. Could
                            you please let me take a look at the complete
                            prototype?
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="addReviewBox">
              <div className="f-header">
                <h3 className="title-fz-22">Add Reviews &amp; Rate</h3>
                <p className="f-header__text">What is it like to Course?</p>
                <div className="br-wrapper br-theme-fontawesome-stars">
                  <select id="comment_rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" selected="">
                      5
                    </option>
                  </select>
                  <div className="br-widget">
                    <a
                      href="/?"
                      data-rating-value="1"
                      data-rating-text="1"
                      className="br-selected"
                    >
                      {""}
                    </a>
                    <a
                      href="/?"
                      data-rating-value="2"
                      data-rating-text="2"
                      className="br-selected"
                    >
                      {""}
                    </a>
                    <a
                      href="/?"
                      data-rating-value="3"
                      data-rating-text="3"
                      className="br-selected"
                    >
                      {""}
                    </a>
                    <a
                      href="/?"
                      data-rating-value="4"
                      data-rating-text="4"
                      className="br-selected"
                    >
                      {""}
                    </a>
                    <a
                      href="/?"
                      data-rating-value="5"
                      data-rating-text="5"
                      className="br-selected br-current"
                    >
                      {""}
                    </a>
                    <div className="br-current-rating">5</div>
                  </div>
                </div>
              </div>
              <form className="form-wrap">
                <div className="form-item">
                  <label for="">Review Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Courses"
                    id="comment_title"
                  />
                </div>
                <div className="form-item">
                  <label for="">Review Content</label>
                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Content"
                    id="comment_content"
                  ></textarea>
                </div>
                <div className="form-actions">
                  <a href="/?" className="btn" data-submit-comment="">
                    SUBMIT REVIEW
                  </a>
                </div>
              </form>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default CoursesTabs;

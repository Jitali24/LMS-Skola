import React, { useState } from "react";
import "./BlogPage2.css";

import Blog2Data from "../../Pages/BlogsPage2/Blog2Data.json";
import { useParams } from "react-router-dom";

function BlogPage2() {
  const [show, setShow] = useState(false);

  const { id } = useParams();
  const data2 = Blog2Data.filter(
    (blog2) => blog2.id.toString() === id.toString()
  );

  return (
    <div className="blogPage2-container">
      <div className="detail-bigImg">
        <img
          src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/2/local_cocoon_events/image/10/cover-10.jpg"
          alt=""
        />
      </div>
      <div class="detail-info">
        <div class="container">
          <div class="row">
            <div class="detail-info__inner">
              <div class="detail-info__meta">
                <span class="meta-date upcomingBox__date">
                  28th November 2021
                </span>
                <div className="meta">
                  <span>
                    <i class="far fa-clock"></i>
                    01:00 am
                  </span>
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                    {data2[0]["location-city"]}, {data2[0]["location-country"]}
                  </span>
                </div>
              </div>
              <h1 class="detail-info__title titlebox__title">
                {data2[0].title}
              </h1>
              <div class="detail-info__coundown coundownJs">
                <div>
                  <span id="days">00</span>DAY
                </div>
                <div>
                  <span id="hours">23</span>HOURS
                </div>
                <div>
                  <span id="minutes">48</span>MINUTES
                </div>
                <div>
                  <span id="seconds">03</span>SECONDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-entry">
        <div className="detail-entry-container">
          <div className="left">
            <div className="detail-entry-top">
              <h3>Course Description</h3>
              <p>
                Do you want to become a UI/UX designer but you don't know where
                to start? This course will allow you to develop your user
                interface design skills and you can add UI designer to your CV
                and start getting clients for your skills.
              </p>
              <p>
                Hi everyone. I'm Arash and I'm a UI/UX designer. In this course,
                I will help you learn and master Figma app comprehensively from
                scratch. Figma is an innovative and brilliant tool for User
                Interface design. It's used by everyone from entrepreneurs and
                start-ups to Apple, Airbnb, Facebook, etc.
              </p>
              {!show && (
                <span
                  onClick={() => {
                    setShow(true);
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Read More{" "}
                  <span className="span-inner">
                    <i class="fa-solid fa-plus" />
                  </span>
                </span>
              )}
              {show && (
                <div>
                  <p>
                    Do you want to become a UI/UX designer but you don't know
                    where to start? This course will allow you to develop your
                    user interface design skills and you can add UI designer to
                    your CV and start getting clients for your skills.
                  </p>
                  <p>
                    Hi everyone. I'm Arash and I'm a UI/UX designer. In this
                    course, I will help you learn and master Figma app
                    comprehensively from scratch. Figma is an innovative and
                    brilliant tool for User Interface design. It's used by
                    everyone from entrepreneurs and start-ups to Apple, Airbnb,
                    Facebook, etc.
                  </p>
                  <span
                    onClick={() => {
                      setShow(false);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Less more{" "}
                    <span className="span-inner">
                      <i class="fa-solid fa-minus" />
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div class="spacing-50">
              <h3 class="title-list">What you'll learn</h3>
              <ul class="list-check">
                <li>Become a UI/UX designer.</li>
                <li>Build &amp; test a complete mobile app.</li>
                <li>Learn to design mobile apps &amp; websites.</li>
                <li>You will be able to start earning money Figma skills.</li>
                <li>Design 3 different logos.</li>
                <li>Build a UI project from beginning to end.</li>
                <li>Create low-fidelity wireframe.</li>
                <li>Work with colors &amp; fonts.</li>
                <li>Downloadable exercise files.</li>
                <li>You will create your own UI Kit.</li>
              </ul>
            </div>
            <div class="spacing-50">
              <h3 class="title-list">Event Content</h3>
              <ul class="list-dot">
                <li>
                  We do not require any previous experience or pre-defined
                  skills to take this course. A great orientation would be
                  enough to master UI/UX design.
                </li>
                <li>A computer with a good internet connection.</li>
                <li>Adobe Photoshop (OPTIONAL)</li>
              </ul>
            </div>
            <div className="spacing-20">
              <h3 class="title-list">Our Speakers</h3>
              <div className="speakers">
                <div className="speaker1">
                  <div className="instructor">
                    <div className="instructor-avatar">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/220/user/icon/skola/f3?rev=9067"
                        alt=""
                      />
                      <div className="social">
                        <ul>
                          <li>
                            <a href="/">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="instructor-text">
                      <h3 className="instructor-name">Andrew Williams</h3>
                      <p className="instructor-position">
                        Web Design, Photoshop
                      </p>
                    </div>
                  </div>
                </div>
                <div className="speaker2">
                  <div className="instructor">
                    <div className="instructor-avatar">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/221/user/icon/skola/f3?rev=9078"
                        alt=""
                      />
                      <div className="social">
                        <ul>
                          <li>
                            <a href="/">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="instructor-text">
                      <h3 className="instructor-name">Anna Richard</h3>
                      <p className="instructor-position">CSS, HTML</p>
                    </div>
                  </div>
                </div>
                <div className="speaker3">
                  <div className="instructor">
                    <div className="instructor-avatar">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/224/user/icon/skola/f3?rev=9172"
                        alt=""
                      />
                      <div className="social">
                        <ul>
                          <li>
                            <a href="/">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="instructor-text">
                      <h3 className="instructor-name">Jill Poye</h3>
                      <p className="instructor-position">
                        User Experience Design
                      </p>
                    </div>
                  </div>
                </div>
                <div className="speaker4">
                  <div className="instructor">
                    <div className="instructor-avatar">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/854/user/icon/skola/f3?rev=9244"
                        alt=""
                      />
                      <div className="social">
                        <ul>
                          <li>
                            <a href="/">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="instructor-text">
                      <h3 className="instructor-name">Mike Lowe</h3>
                      <p className="instructor-position">Compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-meta-social">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?entryid=20"
                class="btn-share"
              >
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
              <div class="meta-tag">
                <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?tagid=9">
                  Photoshop
                </a>
                <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?tagid=10">
                  Marketing
                </a>
                <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?tagid=11">
                  Beginner
                </a>
              </div>
            </div>
            <div className="courses-review">
              <h3 class="title-list">Comment</h3>
              <div className="commentbox">
                <ul className="commentbox__list">
                  <li className="item">
                    <div className="item__inner">
                      <div className="item__avatar"></div>
                      <div class="item__body">
                        <div class="item__header"></div>
                        <h4 class="item__name">Alan Locke</h4>
                        <p class="item__position">
                          Beautiful courses Fri, 10 Dec 2021, 3:00 AM
                        </p>
                        <div class="item__star">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="item-text">
                          <p>
                            {" "}
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
                  <li className="item">
                    <div className="item__inner">
                      <div className="item__avatar item__avatar2"></div>
                      <div class="item__body">
                        <div class="item__header"></div>
                        <h4 class="item__name">Paddy Smith</h4>
                        <p class="item__position">
                          Beautiful courses Fri, 10 Dec 2021, 3:01 AM
                        </p>
                        <div class="item__star">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="item-text">
                          <p>
                            {" "}
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
                  <li className="item">
                    <div className="item__inner">
                      <div className="item__avatar item__avatar3"></div>
                      <div class="item__body">
                        <div class="item__header"></div>
                        <h4 class="item__name">Darcy Baule</h4>
                        <p class="item__position">
                          Beautiful courses Fri, 10 Dec 2021, 3:01 AM
                        </p>
                        <div class="item__star">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="item-text">
                          <p>
                            {" "}
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
            <div className="comment-area">
              <h4>Add a Comment &amp; Review</h4>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control h50 hidden"
                  id=""
                  name="event_id"
                  value="9"
                />
              </div>
              <div class="form-group">
                <div class="db">
                  <input
                    type="text"
                    class="form-control h50"
                    id="comment_title"
                    name="comment_title"
                    placeholder="Comment title..."
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="db">
                  <textarea
                    name="comment_content"
                    rows="2"
                    id="comment_content"
                    class="fullwidth"
                    placeholder="Comment body..."
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="db">
                  <div class="br-wrapper br-theme-fontawesome-stars">
                    <select id="comment_rating">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5" selected="">
                        5
                      </option>
                    </select>
                    <div class="br-widget">
                      <a
                        href="/blog2/1"
                        data-rating-value="1"
                        data-rating-text="1"
                        class="br-selected"
                      >
                        {" "}
                      </a>
                      <a
                        href="/blog2/1"
                        data-rating-value="2"
                        data-rating-text="2"
                        class="br-selected"
                      >
                        {" "}
                      </a>
                      <a
                        href="/blog2/1"
                        data-rating-value="3"
                        data-rating-text="3"
                        class="br-selected"
                      >
                        {" "}
                      </a>
                      <a
                        href="/blog2/1"
                        data-rating-value="4"
                        data-rating-text="4"
                        class="br-selected"
                      >
                        {" "}
                      </a>
                      <a
                        href="/blog2/1"
                        data-rating-value="5"
                        data-rating-text="5"
                        class="br-selected br-current"
                      >
                        {" "}
                      </a>
                      <div class="br-current-rating">5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group fd">
                <a href="/">SAVE COMMENT</a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="layout-sidebar">
              <div className="widget-course">
                <div className="item-inner">
                  <div class="priceCourse-min">
                    <p class="priceCourse-min__price">
                      <ins>Booking Open</ins>
                    </p>
                    <p class="priceCourse-min__static">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-alarm-clock.svg"
                        alt=""
                      />{" "}
                      136 days left to book your slot
                    </p>
                  </div>
                </div>
                <div class="item-list">
                  <table class="listBox-infoCourse">
                    <tbody>
                      <tr>
                        <td>
                          <span>
                            <img src="assets/img/icon/icon-user.svg" alt="" />
                          </span>
                          Total Slots
                        </td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>
                          <span>
                            <img src="assets/img/icon/icon-unlock.svg" alt="" />
                          </span>
                          Booked Slots
                        </td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="button" className="btn">
                    BOOK NOW
                  </button>
                  <div class="item-list__btn">
                    <a href="/blog2">
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
              <div className="widget-latestCourse">
                <h3 class="title-list">Related Courses</h3>
                <ul>
                  <li class="item">
                    <a href="/courses/5">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/154/course/overviewfiles/img-3.jpg"
                        alt=""
                        class="item__img"
                      />
                      <h3 class="item__title">
                        Learn Figma: User Interface Design Essentials - UI/UX
                        Design
                      </h3>
                      <div class="item__price">
                        <ins>$89.99</ins>
                      </div>
                    </a>
                  </li>
                  <li class="item">
                    <a href="/courses/7">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/156/course/overviewfiles/img-1.jpg"
                        alt=""
                        class="item__img"
                      />
                      <h3 class="item__title">
                        Fashion Photography From Professional
                      </h3>
                      <div class="item__price">
                        <ins>$89.99</ins>
                      </div>
                    </a>
                  </li>
                  <li class="item">
                    <a href="/courses/8">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/170/course/overviewfiles/img-7.jpg"
                        alt=""
                        class="item__img"
                      />
                      <h3 class="item__title">
                        Introduction Web Design with HTML Best Seller
                      </h3>
                      <div class="item__price">
                        <ins>$89.99</ins>
                      </div>
                    </a>
                  </li>
                  <li class="item">
                    <a href="/courses/8">
                      <img
                        src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/185/course/overviewfiles/img-7.jpg"
                        alt=""
                        class="item__img"
                      />
                      <h3 class="item__title">
                        Introduction Web Design with a HTML Best Seller
                      </h3>
                      <div class="item__price">
                        <ins>Free</ins>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage2;

import React from "react";
import EventsCarousel from "./EventsCarousel";
import "./BlogPage.css";
import event1 from "../../assets/events/1.jpeg";
import event2 from "../../assets/events/2.jpeg";
import event3 from "../../assets/events/3.jpeg";
import event4 from "../../assets/events/4.jpeg";
import event5 from "../../assets/events/5.jpeg";
import event6 from "../../assets/events/6.jpeg";
import event7 from "../../assets/events/7.jpeg";
import event8 from "../../assets/events/8.jpeg";
import event9 from "../../assets/events/9.jpeg";
import event10 from "../../assets/events/10.jpeg";

import BlogData from "./BlogData.json";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();

  const data = BlogData.filter((blog) => blog.id.toString() === id.toString());

  return (
    <div className="blogPage-container">
      <div className="blogPage-head blogPage-head-new">
        <div className="blogPage-head-top">
          <h1>{data[0].title}</h1>
          <p>
            Course Description Aliquam hendrerit sollicitudin purus, quis rutrum
            mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at
            malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et
            adipiscing erat. Curabi...
          </p>
          <div className="meta-author">
            <div className="meta-author-avatar">
              <span></span>
            </div>
            <h5 class="meta-author-name">Bert Lauchlan</h5>
            <p class="meta-author-position">26/11/21</p>
          </div>
        </div>
        <div class="detail-big-img">
          <img
            src={data[0].img}
            alt="Discover Law - Get into the best UK law schools"
          />
        </div>
        <div className="details-container">
          <div className="spacing-50">
            <h3>Course Description</h3>
            <p>
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
              Nullam tempus sollicitudin cursus. Ut et adipiscing erat.
              Curabitur this is a text link libero tempus congue.
            </p>
          </div>
          <div className="spacing-50">
            <p>
              Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
              sagittis dolor sed mi elementum pretium. Donec et justo ante.
              Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Integer tristique elit lobortis purus bibendum,
              quis dictum metus mattis. Phasellus posuere felis sed eros
              porttitor mattis. Curabitur massa magna, tempor in blandit id,
              porta in ligula. Aliquam laoreet nisl massa, at interdum mauris
              sollicitudin et.
            </p>
          </div>
          <blockquote>
            <p>
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.{" "}
            </p>
            <cite>Luis Pickford</cite>
          </blockquote>
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
            <h3 class="title-list">Requirements</h3>
            <ul class="list-dot">
              <li>
                We do not require any previous experience or pre-defined skills
                to take this course. A great orientation would be enough to
                master UI/UX design.
              </li>
              <li>A computer with a good internet connection.</li>
              <li>Adobe Photoshop (OPTIONAL)</li>
            </ul>
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
                Course
              </a>
              <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?tagid=10">
                Timeline
              </a>
              <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?tagid=11">
                Moodle
              </a>
              <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?tagid=12">
                Best
              </a>
              <a href="https://demo.createdbycocoon.com/moodle/skola/1/blog/index.php?tagid=13">
                Info
              </a>
            </div>
          </div>
          <div class="courses-review">
            <h3 class="title-list">Reviews</h3>
          </div>
        </div>
      </div>
      <div className="blogPage-body">
        <div className="titlebox-group">
          <div className="titlebox">
            <h2>Latest News</h2>
            <p>Discover your perfect program in our courses.</p>
          </div>
          <div className="link">
            <a href="/" class="btn-link">
              Browse All
            </a>
          </div>
        </div>
        <div
          class="carousel"
          data-flickity='{ "wrapAround": true, "autoPlay": true, "cellAlign": "left"  }'
        >
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event1}
              title="Discover Law - Get into the best UK law schools"
              link="/blog/1"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event2}
              title="Lambeth Safeguarding: Understanding Contextual Harm"
              link="/blog/2"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event3}
              title="Undergraduate Open Day – Holloway Campus - 3 July 2022"
              link="/blog/3"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event4}
              title="'Introduction to Law' Open Day with Bristows"
              link="/blog/4"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event5}
              title="Kingston College undergraduate Open Events 2022-23"
              link="/blog/5"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event6}
              title="Unity Medical Visualization: 03 Deployment and Usability"
              link="/blog/6"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event7}
              title="Cubase Pro 10 Essential Training: Advanced"
              link="/blog/7"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event8}
              title="Learn Figma: User Interface Design Essentials - UI/UX Design"
              link="/blog/8"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event9}
              title="Discover Law - Get into the best UK law schools"
              link="/blog/9"
            />
          </div>
          <div className="carousel-cell">
            <EventsCarousel
              imgSrc={event10}
              title="Elegant Light Box Paper Cut Dioramas New Design Conference"
              link="/blog/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

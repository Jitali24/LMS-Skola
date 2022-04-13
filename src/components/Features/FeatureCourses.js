import React from 'react'
import FeatureCard from './FeatureCard'
import './FeatureCourses.css'

function FeatureCourses() {
    return (
      <div className="carousels">
        <div className="carousels-container">
          <div className="carousels-title">
            <div className="carousel-title">
              <h2>Featured Courses</h2>
              <p>Discover your perfect program in our courses.</p>
            </div>
            <div className="right">
              <select>
                <option value="all categories">All categories</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>
          <div
            class="carousel"
            data-flickity='{ "wrapAround": true, "autoPlay": true, "cellAlign": "left" }'
          >
            <div className="carousel-cell">
              <FeatureCard
                imgSrc="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/153/course/overviewfiles/img-4.jpg"
                categories="Design"
                categoriesTitle="Introduction To The Web Design &amp; HTML"
                avatarImg="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/860/user/icon/skola/f3?rev=9253"
                link="/courses/1"
              />
            </div>
            <div className="carousel-cell">
              <FeatureCard
                imgSrc="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/152/course/overviewfiles/img-5.jpg"
                categories="Design"
                categoriesTitle="Cubase Pro 10 Essential Training: Intermediate"
                avatarImg="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/855/user/icon/skola/f3?rev=9089"
                link="/courses/2"
              />
            </div>
            <div className="carousel-cell">
              <FeatureCard
                imgSrc="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/156/course/overviewfiles/img-1.jpg"
                categories="Design"
                categoriesTitle="Unity Medical Visualisation: 03 Deployment and Usability"
                avatarImg="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/271/user/icon/skola/f3?rev=9206"
                link="/courses/3"
              />
            </div>
            <div className="carousel-cell">
              <FeatureCard
                imgSrc="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/146/course/overviewfiles/img-7.jpg"
                categories="Design"
                categoriesTitle="The Complete Big Data Analyst Course 2022"
                avatarImg="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/271/user/icon/skola/f3?rev=9206"
                link="/courses/4"
              />
            </div>
            <div className="carousel-cell">
              <FeatureCard
                imgSrc="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/154/course/overviewfiles/img-3.jpg"
                categories="Design"
                categoriesTitle="Learn Figma: User Interface Design Essentials - UI/UX Design"
                avatarImg="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/857/user/icon/skola/f3?rev=9127"
                link="/courses/5"
              />
            </div>
            <div className="carousel-cell">
              <FeatureCard
                imgSrc="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/153/course/overviewfiles/img-4.jpg"
                categories="Design"
                categoriesTitle="The Complete JavaScript Course 2022: Build Real Projects!"
                avatarImg="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/862/user/icon/skola/f3?rev=9271"
                link="/courses/6"
              />
            </div>
            <div className="carousel-cell">
              <FeatureCard
                imgSrc="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/156/course/overviewfiles/img-1.jpg"
                categories="Design"
                categoriesTitle="Fashion Photography From Professional"
                avatarImg="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/271/user/icon/skola/f3?rev=9206"
                link="/courses/7"
              />
            </div>
            <div className="carousel-cell">
              <FeatureCard
                imgSrc="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/148/course/overviewfiles/img-6.png"
                categories="Design"
                categoriesTitle="Introduction Web Design with HTML Best Seller"
                avatarImg="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/223/user/icon/skola/f3?rev=9215"
                link="/courses/8"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default FeatureCourses

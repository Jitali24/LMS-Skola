import React, { useState } from 'react'
import InstructorProfileCarousel from './InstructorProfileCarousel'
import './InstructorProfile.css'

import { useParams } from 'react-router-dom'
import InstructorData from '../Courses/CoursesData.json'

function InstructorProfile() {
  const [show, setShow] = useState(false)

  const { id } = useParams()

  const iData = InstructorData.filter(
    (courses) => courses.id.toString() === id.toString()
  )

  return (
    <div className='instructor-profile-container'>
      <div className='container-inner'>
        <div className='instructor-head'>
          <div class='info-avatar'>
            <div class='info-avatar__avatar'>
              <span>
                <img src={iData[0].authorAvatar} alt='' />
              </span>
            </div>
            <ul class='info-avatar__social'>
              <li>
                <a href='/'>
                  <i class='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i class='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i class='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                  <i class='fab fa-linkedin-in'></i>
                </a>
              </li>
            </ul>
            <div class='info-avatar__share'>
              <a href='/'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M16.0283 6.25C15.0912 6.25 14.2487 5.83507 13.6753 5.17916L6.9169 9.03209C7.01646 9.33696 7.07031 9.6623 7.07031 10C7.07031 10.3375 7.01652 10.6627 6.91707 10.9674L13.6756 14.8205C14.249 14.1648 15.0914 13.75 16.0283 13.75C17.7509 13.75 19.1533 15.1517 19.1533 16.875C19.1533 18.5983 17.7509 20 16.0283 20C14.3059 20 12.9033 18.5983 12.9033 16.875C12.9033 16.537 12.9573 16.2114 13.057 15.9063L6.29898 12.0534C5.7256 12.7098 4.88288 13.125 3.94531 13.125C2.22275 13.125 0.820312 11.7233 0.820312 10C0.820312 8.27667 2.22275 6.875 3.94531 6.875C4.88271 6.875 5.72531 7.29009 6.29868 7.94623L13.0569 4.0933C12.9572 3.78832 12.9033 3.46284 12.9033 3.125C12.9033 1.40167 14.3059 0 16.0283 0C17.7509 0 19.1533 1.40167 19.1533 3.125C19.1533 4.84833 17.7509 6.25 16.0283 6.25ZM16.0283 1.25C14.995 1.25 14.1533 2.09076 14.1533 3.125C14.1533 4.15924 14.995 5 16.0283 5C17.0616 5 17.9033 4.15924 17.9033 3.125C17.9033 2.09076 17.0616 1.25 16.0283 1.25ZM16.0283 15C14.995 15 14.1533 15.8408 14.1533 16.875C14.1533 17.9092 14.995 18.75 16.0283 18.75C17.0616 18.75 17.9033 17.9092 17.9033 16.875C17.9033 15.8408 17.0616 15 16.0283 15ZM2.07031 10C2.07031 8.96576 2.91199 8.125 3.94531 8.125C4.97864 8.125 5.82031 8.96576 5.82031 10C5.82031 11.0342 4.97864 11.875 3.94531 11.875C2.91199 11.875 2.07031 11.0342 2.07031 10Z'
                    fill='#4A8F9F'
                  ></path>
                </svg>
                Report this user
              </a>
            </div>
          </div>
          <div class='info-name'>
            <h1 class='info-name__title'>{iData[0].authorName}</h1>
            <p class='info-name__position'>{iData[0].authorSp}</p>
          </div>
          <div class='info-level'>
            <ul>
              <li>
                <img
                  src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-satisfaction.svg'
                  alt=''
                />
                110 Profile views
              </li>
              <li>
                <img
                  src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-star.svg'
                  alt=''
                />
                Rating
              </li>
              <li>
                <img
                  src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-badge.svg'
                  alt=''
                />
                Top teacher
              </li>
              <li>
                <img
                  src='https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/instructor-feedback.svg'
                  alt=''
                />
                4 courses
              </li>
            </ul>
          </div>
        </div>
        <div className='instructor-course'>
          <div className='overview'>
            Overview
            <h3>Bio</h3>
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
            {!show && (
              <span
                onClick={() => {
                  setShow(true)
                }}
                style={{
                  cursor: 'pointer',
                }}
              >
                Read More{' '}
                <span className='span-inner'>
                  <i class='fa-solid fa-plus' />
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
                    setShow(false)
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Less more{' '}
                  <span className='span-inner'>
                    <i class='fa-solid fa-minus' />
                  </span>
                </span>
              </div>
            )}
          </div>
          <div className='courses'>
            Courses
            <div
              class='carousel'
              data-flickity='{ "wrapAround": true, "autoPlay": false, "cellAlign": "left", "groupCells": "true" }'
            >
              <div className='carousel-cell'>
                <InstructorProfileCarousel
                  imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/146/course/overviewfiles/img-7.jpg'
                  price='Free'
                  category='Design'
                  title='Introduction to the Web Design & HTML'
                  lessons='8'
                />
              </div>
              <div className='carousel-cell'>
                <InstructorProfileCarousel
                  imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/179/course/overviewfiles/img-6.png'
                  price='$89.99'
                  category='Software Development'
                  title='Designing Responsive Mobile Websites with Muse'
                  lessons='1'
                />
              </div>
              <div className='carousel-cell'>
                <InstructorProfileCarousel
                  imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/202/course/overviewfiles/img-4.jpg'
                  price='$89.99'
                  category='Audio + Music'
                  title='Design Instruments for Work Communication'
                  lessons='1'
                />
              </div>
              <div className='carousel-cell'>
                <InstructorProfileCarousel
                  imgSrc='https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/214/course/overviewfiles/img-5.jpg'
                  price='$89.99'
                  category='Finance + Accounting'
                  title='Cubase Pro 10 Essential Training: Advanced'
                  lessons='1'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorProfile

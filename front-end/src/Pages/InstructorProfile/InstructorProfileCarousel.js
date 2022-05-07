import React from "react";
import "./InstructorProfileCarousel.css";

function InstructorProfileCarousel({
  imgSrc,
  price,
  category,
  title,
  lessons,
  courseLink,
}) {
  return (
    <div className="profile-container">
      <div className="lessosBox">
        <div className="lessonsBox__inner">
          <a href="/" class="lessonsBox__img">
            <img src={imgSrc} alt="" />
            <span class="lessonsBox__price">{price}</span>
          </a>
          <div className="lessonsBox__body">
            <div className="lessonsBox__cat">{category}</div>
            <h3 className="lessonsBox__title">
              <a href={courseLink}>{title}</a>
            </h3>
            <div className="lessonsBox__footer">
              <div className="lessonsBox__info">
                <i className="fas fa-book-reader"></i>
                {lessons} lessons
              </div>
              <div className="lessonsBox__rating">
                <div className="f-star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorProfileCarousel;

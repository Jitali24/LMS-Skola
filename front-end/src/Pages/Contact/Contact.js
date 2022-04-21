import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <div className="contact-inner">
          <h1>Get In Touch</h1>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
          </ol>
        </div>
        <div className="contact-body">
          <div className="contact-us">
            <div className="contact-flex">
              <div className="contact-flex-1">
                <div className="contact-us-first">
                  <div className="title">
                    <h2>Contact Details</h2>
                  </div>
                  <div className="contactUs-icons">
                    <div className="row">
                      <div class="contactUs-icon">
                        <span class="f-icon">
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/local_cocoon_essentials/cocoon/icon-contact-findsvg61b6d5309074c.png"
                            alt=""
                          />
                        </span>
                        <h4 class="f-title">Find Us</h4>
                        <p class="f-text">
                          2301 Ravenswood Rd Madison, WI 53711
                        </p>
                      </div>
                      <div class="contactUs-icon">
                        <span class="f-icon">
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-contact-phone.svg"
                            alt=""
                          />
                        </span>
                        <h4 class="f-title">Phone</h4>
                        <p class="f-text">
                          + (315) 905-2321
                          <br />+ (315) 905-2322
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div class="contactUs-icon">
                        <span class="f-icon">
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/local_cocoon_essentials/cocoon/icon-contact-working61b6d5629bdfc.png"
                            alt=""
                          />
                        </span>
                        <h4 class="f-title">Working Hours</h4>
                        <p class="f-text">
                          We're open from 10 'till 5 every day of the week.
                        </p>
                      </div>
                      <div class="contactUs-icon">
                        <span class="f-icon">
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/pluginfile.php/1/local_cocoon_essentials/cocoon/icon-contact-write61b6d57f88f75.png"
                            alt=""
                          />
                        </span>
                        <h4 class="f-title">Write to Us</h4>
                        <p class="f-text">
                          Contact us with your queries or questions.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div class="contactUs-icon">
                        <span class="f-icon">
                          <img
                            src="https://demo.createdbycocoon.com/moodle/skola/1/theme/skola/images/skola/icon/icon-contact-follow.svg"
                            alt=""
                          />
                        </span>
                        <h4 class="f-title">Follow Us</h4>
                        <div class="f-social">
                          <a href="/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a href="/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-flex-2">
                <div className="contact-us-second">
                  <div className="title">
                    <h2>Have A Question?</h2>
                  </div>
                  <form class="form-contact">
                    <div className="form-flex">
                      <div class="form-group form-input">
                        <label>Name</label>
                        <div class="form-item">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="form-group form-input">
                        <label>Email</label>
                        <div class="form-item">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group form-textarea">
                      <label>Message</label>
                      <div class="form-item">
                        <textarea
                          class="form-control"
                          placeholder="Content"
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-group form-submit">
                      <input type="submit" class="btn" value="SEND" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="contact-us-third">
              <h2>Suscribe our newsletter</h2>
              <p>
                Your download should start automatically, if not Click here.
                Should I give up, huh?.
              </p>
              <form
                class="subscribeForm wow fadeInUp  effect"
                data-wow-delay=".6s"
                //  style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
              >
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="form-control"
                />
                <button type="submit" class="btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

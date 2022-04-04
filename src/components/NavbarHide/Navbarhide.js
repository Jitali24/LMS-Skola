import React from "react";
import './Navbarhide.css'

export default class Navbarhide extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };
  render() {
    console.log(this.state);
    return <nav className={this.state.show ? "active" : "hidden"}>
      <div className="f-content">
          <ul className="f-contact">
            <li>(56) 123 456 789</li>
            <li>hello@skola.com</li>
          </ul>
        <div className="f-group">
          <div className="f-social">
            <a href="/">
              <i class='fa-brands fa-facebook-f'/>
            </a>
            <a href="/">
              <i class='fa-brands fa-twitter'/>
            </a>
            <a href="/">
              <i class='fa-brands fa-instagram'/>
            </a>
            <a href="/">
              <i class='fa-brands fa-linkedin-in'/>
            </a>
          </div>
        </div>
      </div>
    </nav>;
  }
}
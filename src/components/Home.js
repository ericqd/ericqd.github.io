import React from "react";
import "./Home.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
export default function About() {
  return (
    <>
      <section id="home-section">
        <div className="home-container">
          <div className="title">
            <h1>ERIC DAO</h1>
            <p>
              <span class="text_1">
                Student at Calfornia State University of Long Beach
              </span>
              <span class="text_2">Aspiring Full Stack Developer</span>
            </p>
          </div>
          <div className="links-container">
            <div className="links">
              <a className="link-1" href="mailto:eric_dao@hotmail.com">
                <AiOutlineMail
                  size={50}
                  className="link-icon"
                  target="_blank"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ericqd/"
                className="link-2"
                target="_blank"
              >
                <FaLinkedinIn size={50} className="link-icon" />
              </a>
              <a
                href="https://github.com/ericqd"
                className="link-3 "
                target="_blank"
              >
                <FaGithub size={50} className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

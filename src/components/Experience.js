import React from "react";
import "./Experience.css";
export default function Experience() {
  return (
    <div className="experience-container">
      <div className="work-section">
        <div className="education-header">
          <h2>Education</h2>
        </div>
        <div className="education">
          <p>
            <a>
              <img src="./images/csulbyellow.png" className="csulb-logo"></img>
            </a>
            <b>California State University of Long Beach</b>{" "}
            <span className="right">2018-Present</span>
            <br></br>
            <b className="subheading">Computer Science, B.S.</b>{" "}
            <span className="right">Long Beach, CA</span>
            <br></br>
            <br></br>
            <b>Relevant Coursework:</b>
            <br></br>
            <br></br>
            <span>Computer Science</span>
            <ul>
              <ul>
                <li>Introduction to Programming</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Object Oriented Programming</li>
                <li>Discrete Structures</li>
                <li>Operating Systems</li>
                <li>Principles of Software Engineering</li>
                <li>Database Fundamentals</li>
                <li>Networks and Distributed Computing</li>
                <li>Computer Architecture</li>
                <li>Introduction to Computer Security</li>
              </ul>
            </ul>
            <br></br>
            <span>Other</span>
            <ul>
              <ul>
                <li>Calculus I/II</li>
                <li>Mechanics &amp; Heat</li>
                <li>Electricity &amp; Magnetism</li>
              </ul>
            </ul>
            <br></br>
            <span class="skill">Python</span> <span class="skill">Java</span>{" "}
            <span class="skill">C/C++</span> <span class="skill">SQL</span>{" "}
            <span class="skill">Git</span>
            <br></br>
            <br></br>
            <br></br>
          </p>
        </div>
        <div className="experience-header">
          <h2>Work Experience</h2>
        </div>
        <div className="work-experience">
          <p>
            <a>
              <img
                src="./images/chipotlelogo.png"
                className="chipotle-logo"
              ></img>
            </a>
            <b>Chipotle Mexican Grill</b>{" "}
            <span className="right">Summer 2021</span>
            <br></br>
            <b className="subheading">Software Development Intern</b>{" "}
            <span className="right">Newport Beach, CA</span>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Joined a team of product owners and software engineers at Chipotle
              where I worked in an agile environment and adhered to the Scrum
              methodology. I worked with the engineers on the team on a new
              feature for an internal web application. I also fixed numerous
              defects on the Chipotle catering website and wrote detailed unit
              tests to ensure code quality.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span class="skill">JavaScript</span>{" "}
            <span class="skill">TypeScript</span>{" "}
            <span class="skill">HTML</span> <span class="skill">CSS</span>{" "}
            <span class="skill">VueJS</span> <span class="skill">MochaJS</span>{" "}
            <span class="skill">ChaiJS</span> <span class="skill">Git</span>
          </p>
        </div>
      </div>
    </div>
  );
}

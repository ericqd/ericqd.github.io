import React from "react";
import "./Etc.css";

export default function Etc() {
  return (
    <>
      <div className="etc-container">
        <div className="skills-header">
          <h1>Skills</h1>
        </div>
        <div className="skills-section">
          <ul className="skills-icons">
            <li>
              <img src="./images/htmlicon.png" className="html-icon"></img>
              <span>HTML</span>
            </li>
            <li>
              <img src="./images/cssicon.png" className="html-icon"></img>
              <span>CSS</span>
            </li>
            <li>
              <img
                src="./images/javascripticon.png"
                className="javascript-icon"
              ></img>
              <span>JavaScript</span>
            </li>
            <li>
              <img src="./images/reacticon.png" className="react-icon"></img>
              <span>React</span>
            </li>
            <li>
              <img src="./images/vueicon.png" className="vue-icon"></img>
              <span>Vue</span>
            </li>
            <li>
              <img src="./images/pythonicon.png" className="python-icon"></img>
              <span>Python</span>
            </li>
            <li>
              <img src="./images/javaicon.png" className="java-icon"></img>
              <span>Java</span>
            </li>
            <li>
              <img src="./images/cicon.png" className="c-icon"></img>
              <span>C++</span>
            </li>
            <li>
              <img src="./images/sqlicon.png" className="sql-icon"></img>
              <span>MySQL</span>
            </li>
            <li>
              <img src="./images/giticon.png" className="git-icon"></img>
              <span>Git</span>
            </li>
          </ul>
        </div>
        <div className="listen-header">
          <h1>Currently Listening</h1>
        </div>
        <div className="row">
          <div className="listen-item">
            <a
              href="https://open.spotify.com/album/2nLOHgzXzwFEpl62zAgCEC"
              target="_blank"
            >
              <img src="./images/dawnfm.jpg" className="listen-img"></img>
            </a>
          </div>
          <div className="listen-item">
            <a
              href="https://open.spotify.com/album/4oxmme6i4mypSt2DDzPTsW"
              target="_blank"
            >
              <img src="./images/ds4.jpg" className="listen-img"></img>
            </a>
          </div>
          <div className="listen-item">
            <a
              href="https://open.spotify.com/album/3N3alcn9EvmanafUt70Vxh"
              target="_blank"
            >
              <img src="./images/fmbev.jpg" className="listen-img"></img>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="listen-item">
            <a
              href="https://open.spotify.com/album/3r46DPIQeBQbjvjjV5mXGg"
              target="_blank"
            >
              <img src="./images/melodicblue.jpeg" className="listen-img"></img>
            </a>
          </div>
          <div className="listen-item">
            <a
              href="https://open.spotify.com/album/2WmJ5wp5wKBlIJE6FDAIBJ"
              target="_blank"
            >
              <img src="./images/lifeofdon.jpeg" className="listen-img"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

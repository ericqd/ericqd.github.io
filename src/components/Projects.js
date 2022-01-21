import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        <div className="row">
          <div className="project-item">
            <img src="./images/card-game.png"></img>
            <div className="project-description">
              <div className="img-description">
                <p>
                  <b>Matching Pairs</b>
                  <p>
                    A Java based memory game where the user must match all pairs
                    of cards in order to win.{" "}
                  </p>
                  <br></br>
                  <i>Java</i>
                </p>
              </div>
            </div>
          </div>
          <div className="project-item">
            <img src="./images/basketball-player.png"></img>
            <div className="project-description">
              <div className="img-description">
                <p>
                  <b>StatFinder</b>
                  <p>
                    A React based web application that retrieves data from an
                    API and displays the 2020 NBA Orlando bubble player data.{" "}
                  </p>
                  <br></br>
                  <i>JavaScript / React / HTML/ CSS</i>
                </p>
              </div>
            </div>
          </div>
          <div className="project-item">
            <img src="./images/wordsearch.png"></img>
            <div className="project-description">
              <div className="img-description">
                <p>
                  <b>WordMe</b>
                  <p>
                    A JavaScript based Discord chatbot with real-time response
                    and command for users.{" "}
                  </p>
                  <br></br>
                  <i>JavaScript</i>
                </p>
              </div>
            </div>
          </div>
          <div className="project-item">
            <img src="./images/html.png"></img>
            <div className="project-description">
              <div className="img-description">
                <p>
                  <b>Personal Website</b>
                  <p>A personal website created using React.</p>
                  <br></br>
                  <i>JavaScript / React / HTML / CSS</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

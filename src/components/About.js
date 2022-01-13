import react from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="about-container">
        <h1>Hello World</h1>
        <div className="console">
          <span className="firstColor">package</span>{" "}
          <span class="secondColor">aboutMe</span>
          <span className="fifthColor">;</span>
          <br></br>
          <br></br>
          <span className="firstColor">public</span>{" "}
          <span className="thirdColor">class</span>{" "}
          <span className="secondColor">Eric</span>{" "}
          <span className="firstColor">extends</span>{" "}
          <span className="secondColor">human</span>{" "}
          <span className="fifthColor">&#123;</span>
          <ul>
            <span className="firstColor">public</span>{" "}
            <span className="secondColor">Eric</span>{" "}
            <span className="fifthColor">()</span>{" "}
            <span className="fifthColor">&#123;</span>
            <ul>
              <span className="thirdColor">String</span>{" "}
              <span className="fifthColor">fullName</span>{" "}
              <span className="fifthColor">=</span>{" "}
              <span className="fourthColor">"Eric Dao"</span>
              <span className="fifthColor">;</span>
              <br></br>
              <span className="thirdColor">String</span>{" "}
              <span className="fifthColor">home</span>{" "}
              <span className="fifthColor">=</span>{" "}
              <span className="fourthColor">"Huntington Beach, CA"</span>
              <span className="fifthColor">;</span>
              <br></br>
              <span className="thirdColor">String</span>{" "}
              <span className="fifthColor">college</span>{" "}
              <span className="fifthColor">=</span>{" "}
              <span className="fourthColor">
                "Calfornia State University, Long Beach"
              </span>
              <span className="fifthColor">;</span>
              <br></br>
              <span className="thirdColor">int</span>{" "}
              <span className="fifthColor">expectedGraduation</span>{" "}
              <span className="fifthColor">=</span>{" "}
              <span className="fourthColor">2022</span>
              <span className="fifthColor">;</span>
              <br></br>
              <span className="thirdColor">String[]</span>{" "}
              <span className="fifthColor">interests</span> <span>=</span>{" "}
              <span className="firstColor">new</span>{" "}
              <span className="thirdColor">String[]</span>{" "}
              <span className="fifthColor">&#123;</span>
              <br></br>
              <ul>
                <span className="fourthColor">"basketball"</span>{" "}
                <span className="fifthColor">,</span>
                <br></br>
                <span className="fourthColor">"hiking"</span>{" "}
                <span className="fifthColor">,</span>
                <br></br>
                <span className="fourthColor">"fitness"</span>{" "}
                <span className="fifthColor">,</span>
                <br></br>
                <span className="fourthColor">"technology"</span>{" "}
                <span className="fifthColor">,</span>
                <br></br>
                <span className="fourthColor">"music"</span>
                <br></br>
              </ul>
              <span className="fifthColor">&#125;</span>
            </ul>
            <span className="fifthColor">&#125;</span>
          </ul>
          <span className="fifthColor">&#125;</span>
        </div>
      </div>
    </>
  );
}

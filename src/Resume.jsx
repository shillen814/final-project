import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div class="container">
      <header>
        <h1>Resume</h1>
      </header>
      <div class="content-wrapper">
        <main>
          <div>
            <strong>EDUCATION</strong>
          </div>
          <ul>
            <li>The University of Toledo, August 2015 - December 2019</li>
            <ul>
              <li>Bachelor of Science in Chemical Engineering</li>
            </ul>

            <li>Boston University</li>
            <ul>
              <li>Courses completed as of October 2024</li>
              <ul>
                <li>Information Structures with Python (MET CS 521)</li>
                <li>Data Structures and Algorithms (MET CS 526)</li>
                <li>Advanced Programming Techniques (MET CS 622)</li>
                <li>Software Design and Patterns (MET CS 665)</li>
                <li>
                  Database Design and Implementation for Business (MET CS 669)
                </li>
                <li>Information Systems Analysis and Design (MET CS 682)</li>
              </ul>
            </ul>
          </ul>

          <div>
            {" "}
            <strong>EXPERIENCE</strong>
          </div>
          <ul>
            <li>The Lincoln Electric Company</li>
            <ul>
              <li>Software Developer</li>
              <ul>
                <li>April 2024 – Present </li>
              </ul>

              <li>Consumable R&D Engineer</li>
              <ul>
                <li>February 2021 – April 2024</li>
              </ul>

              <li>Engineering Trainee</li>
              <ul>
                <li>February 2020 – February 2021</li>
              </ul>

              <li>Consumable R&D Intern</li>
              <ul>
                <li>May 2019 – August 2019</li>
              </ul>

              <li>Consumable Methods Intern</li>
              <ul>
                <li>May 2018 – August 2018</li>
              </ul>

              <li>Environmental, Health and Safety Engineering Intern</li>
              <ul>
                <li>May 2017 – August 2017</li>
              </ul>
            </ul>
          </ul>
        </main>
        <aside class="sidebar">
          <nav>
            <div>
              <div>
                {" "}
                <Link to={"/"}>Home Page</Link>
              </div>{" "}
              <Link to={"/resume"}>Resume</Link>
            </div>
            <div>
              {" "}
              <Link to={"/coffee"}>Coffee in Ohio</Link>
            </div>
            <div>
              {" "}
              <a href="/skills">Skills</a>{" "}
            </div>
            <div>
              {" "}
              <a href="/places">Places I want to Travel</a>{" "}
            </div>
          </nav>
        </aside>
      </div>
      <footer>Thanks for stopping by.</footer>
    </div>
  );
}

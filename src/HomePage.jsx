import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div class="container">
      <header>
        <h1>Sarah</h1>
      </header>
      <div class="content-wrapper">
        <main>
          Hello, welcome to my website! My name is Sarah, and I grew up in Ohio.
          Living in Ohio is great for some of my favorite hobbies including
          snowboarding and kayaking. In addition to my interest in snowboarding
          and kayaking, I am also interested in Cleveland sports and exploring
          new coffee shops. My website has a section with pictures of different
          coffee drinks I have purchased from different Ohio coffee shops. There
          is a link in the sidebar to pictures of different coffee drinks I have
          purchased. Some of my academic interests include math and science.
          These interests led me to get my bachelor's degree in chemical
          engineering. I’ve developed an interest in software development
          throughout my career and started taking courses within Boston
          University’s Master of Science in Software Development program in May
          of 2023. For a detailed resume displaying my academic and professional
          experience, a link to my resume is included in the sidebar. I have
          also included a link to a list of my skills and a link to a list of
          some places I want to travel in the sidebar.
        </main>
        <aside class="sidebar">
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
        </aside>
      </div>
      <footer>Thanks for stopping by.</footer>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div class="container">
      <header>
        <h1>Skills</h1>
      </header>
      <div class="content-wrapper">
        <main>
          <div>• ABB FlexPendant</div>
          <div>• Java</div>
          <div>• SQL Server</div>
          <div>• FANUC Robot Teach Pendant</div>
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

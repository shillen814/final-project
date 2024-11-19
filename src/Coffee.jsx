import { Link } from "react-router-dom";

export default function Coffee() {
  return (
    <div class="container">
      <header>
        <h1>Coffee in Ohio</h1>
      </header>
      <div class="content-wrapper">
        <main>
          <h3>Hello.</h3>
        </main>
        <aside class="sidebar">
          <div>
            {" "}
            <Link to={"/resume"}>Resume</Link>
          </div>
          <div>
            {" "}
            <Link to={"/coffee"}>Coffee in Ohio</Link>
          </div>
          <div>
            {" "}
            <a href="https://example.com">Skill List</a>{" "}
          </div>
          <div>
            {" "}
            <a href="https://example.com">Places I want to Travel</a>{" "}
          </div>
        </aside>
      </div>
      <footer>Thanks for stopping by.</footer>
    </div>
  );
}

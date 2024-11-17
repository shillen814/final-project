import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div class="container">
      <header>
        <h1>Resume</h1>
      </header>
      <div class="content-wrapper">
        <main>
          <h3>Hello.</h3>
        </main>
        <aside class="sidebar">
          <div>
            {" "}
            {/* <a href="https://example.com">Resume</a>{" "} */}
            <Link to={"/resume"}>Resume</Link>
          </div>
          <div>
            {" "}
            <a href="https://example.com">Coffee from Ohio</a>{" "}
          </div>
          <div>
            {" "}
            <a href="https://example.com">Drag and Drop Application</a>{" "}
          </div>
          <div>
            {" "}
            <a href="https://example.com">React Application</a>{" "}
          </div>
        </aside>
      </div>
      <footer>Thanks for stopping by.</footer>
    </div>
  );
}

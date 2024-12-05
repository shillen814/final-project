import { Link } from "react-router-dom";

export default function Places() {
  return (
    <div class="container">
      <header>
        <h1>Places I want to Travel</h1>
      </header>
      <div class="content-wrapper">
        <main>
          <div>• England</div>
          <div>• Ireland</div>
          <div>• Iceland</div>
          <div>• Denmark</div>
          <div>• Germany</div>
          <div>• Thailand</div>
          <div>• Japan</div>
          <div>• France</div>
          <div>• Italy</div>
          <div>• Scotland</div>
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

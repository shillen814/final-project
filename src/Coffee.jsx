import { Link } from "react-router-dom";

export default function Coffee() {
  return (
    <div class="container">
      <header>
        <h1>Coffee in Ohio</h1>
      </header>
      <div class="content-wrapper">
        <main>
          <h3>
            Candy Cloud drink picture on left and CouchLand Coffee House drink
            picture on right
          </h3>
          <img
            src="/candy-cloud-drink-picture.jpg"
            class="image"
            alt="Candy Cloud drink picture"
          />
          <img
            src="/couchland-coffee-house-drink-picture.jpg"
            class="image"
            alt="CouchLand Coffee House drink picture"
          />
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

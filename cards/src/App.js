import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus obcaecati maiores dolores. Magni veritatis quisquam consectetur
            minima, voluptatum, velit quae earum placeat cupiditate libero dignissimos soluta. Ut aperiam ab eveniet."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus obcaecati maiores dolores. Magni veritatis quisquam consectetur
            minima, voluptatum, velit quae earum placeat cupiditate libero dignissimos soluta. Ut aperiam ab eveniet."
              />
            </div>
            <div className="column">
              <Course
                image={Ccsharp}
                title="Csharp"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus obcaecati maiores dolores. Magni veritatis quisquam consectetur
            minima, voluptatum, velit quae earum placeat cupiditate libero dignissimos soluta. Ut aperiam ab eveniet."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="KompleWeb"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus obcaecati maiores dolores. Magni veritatis quisquam consectetur
            minima, voluptatum, velit quae earum placeat cupiditate libero dignissimos soluta. Ut aperiam ab eveniet."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

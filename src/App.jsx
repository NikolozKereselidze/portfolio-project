import "./App.css";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navigation />
      <div className="sections-wrapper">
        <Home />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;

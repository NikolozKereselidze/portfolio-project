import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navigation />
      <div className="sections-wrapper">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;

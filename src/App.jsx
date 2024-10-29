import "./App.css";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="sections-wrapper">
        <Home />
      </div>
    </>
  );
}

export default App;

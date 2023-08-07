import "./App.css";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useEffect, useState } from "react";

function App() {
  let [loading, setLoading] = useState(false)


  useEffect(() => {

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <>
      {
        loading ?
          <div className="loader-app">
            <span className="loader"></span>
          </div>
          :
          <div className="home">
            < Navigation />
            <Home />
            <About />
            <Skill />
            <Projects />
            <Contact />
          </div>
      }

    </>
  );
}

export default App;

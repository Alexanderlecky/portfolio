import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";




function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
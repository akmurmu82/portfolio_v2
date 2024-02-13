import "./App.css";
import Nav from "./Components/Navbar/Navbar";
import Home from "./Components/Sections/Home";
import Skill from "./Components/Sections/Skills";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import { Box } from "@chakra-ui/react";
import About from "./Components/Sections/About";
import Footer from "./Components/Sections/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Box>
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </div>
  );
}

export default App;

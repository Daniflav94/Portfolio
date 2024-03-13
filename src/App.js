import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { Skills } from "./pages/skills";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext"; 

function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <div className={`${darkMode && "dark"}`}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { Skills } from "./pages/skills";

function App() {
  return (
    <div className="w-screen h-screen">
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

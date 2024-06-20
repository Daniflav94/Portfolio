import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { Skills } from "./pages/skills";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import loadingAnimation from "./assets/midia/loading-animation.gif";
import imageProfile from "./assets/image/picture-lilac.png";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imageProfile;
    image.onload = () => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, [2000]);

      return () => clearTimeout(timeout);
    };

    image.onerror = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className={`${darkMode && "dark"} relative`}>
    {isLoading ? (
      <img
        src={loadingAnimation}
        alt="loading"
        className="fixed w-52 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-500 ease-in-out"
      />
    ) : (
      <div className="opacity-0 transition-opacity duration-500 ease-in-out">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    )}
  </div>
  );
}

export default App;

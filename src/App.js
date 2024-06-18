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
    setTimeout(() => {
      setIsLoading(false)
    }, [2000])
  }, [])

  return (
    <>
      {isLoading ? (
          <img
            src={loadingAnimation}
            alt="loading"
            className="fixed w-52 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
         
      ) : (
        <div className={`${darkMode && "dark"} relative`}>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <img
            src={imageProfile}
            className="hidden"
            alt="Profile"
            loading="eager"
          />
        </div>
      )}
    </>
  );
}

export default App;

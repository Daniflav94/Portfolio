import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

export function ButtonDarkMode() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`${
        darkMode ? "hover:bg-zinc-600 transition ease-linear" : "hover:bg-purple-100 transition ease-linear"
      } w-fit h-fit p-2 rounded-xl`}
    >
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#facc15"
          stroke="#facc15"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun-medium"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v1" />
          <path d="M12 20v1" />
          <path d="M3 12h1" />
          <path d="M20 12h1" />
          <path d="m18.364 5.636-.707.707" />
          <path d="m6.343 17.657-.707.707" />
          <path d="m5.636 5.636.707.707" />
          <path d="m17.657 17.657.707.707" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#C778DD"
          stroke="#C778DD"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}

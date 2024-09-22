import { Link, useResolvedPath } from "react-router-dom";
import { ArrowLeft, Film } from "lucide-react";

const Navbar = () => {
  const path = useResolvedPath();
  console.log(path);
  return (
    <header className="px-4 lg:px-40 h-20 flex items-center border-b border-red-800">
      <Link className="flex items-center justify-center" to="/">
        <Film className="h-8 w-8 text-red-600" />
        <span className="ml-2 text-4xl font-bold text-red-600">Moodflix</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {path.pathname === "/" ? (
          <>
            <a
              className="text-md font-medium hover:text-red-600 transition-colors"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-md font-medium hover:text-red-600 transition-colors"
              href="#about"
            >
              How It Works
            </a>
            <a
              className="text-md font-medium hover:text-red-600 transition-colors"
              href="#newsletter"
            >
              Newsletter
            </a>
          </>
        ) : (
          <button className="text-white hover:text-red-600 transition-colors">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Change Mood
            </Link>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

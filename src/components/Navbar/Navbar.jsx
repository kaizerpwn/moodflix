import { Link } from "react-router-dom";
import { Film } from "lucide-react";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-red-800">
      <Link className="flex items-center justify-center" to="#">
        <Film className="h-6 w-6 text-red-600" />
        <span className="ml-2 text-2xl font-bold text-red-600">Moodflix</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:text-red-600 transition-colors"
          href="#features"
        >
          Features
        </a>
        <a
          className="text-sm font-medium hover:text-red-600 transition-colors"
          href="#about"
        >
          How It Works
        </a>
        <a
          className="text-sm font-medium hover:text-red-600 transition-colors"
          href="#newsletter"
        >
          Newsletter
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

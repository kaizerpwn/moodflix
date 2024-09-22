import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-red-800">
      <p className="text-xs text-gray-400">
        © 2023 Moodflix. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-400"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-400"
          href="#"
        >
          Privacy policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;

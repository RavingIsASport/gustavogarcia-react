import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-2">
        <p className="text-red-500 font-NovaSquare text-xl tracking-tight">
          {"<>"}Gustavo Garcia{"</>"}
        </p>
        <p className="font-Jost text-sm text-gray-400">
          Full Stack Web Developer
        </p>
        <p className="text-red-400 text-xs">Se habla español.</p>

        <Link to="/contact">
          <button className="mt-4 inline-block border border-red-500 text-red-400 hover:text-white hover:bg-red-500 transition px-4 py-2 text-sm rounded-md font-mono">
            Contact Me
          </button>
        </Link>

        <div className="pt-4 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Gustavo Garcia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

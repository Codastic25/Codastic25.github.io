import { Link } from "react-router-dom"
import bague from "../assets/images/logo_design/maBague.png"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <ul className="flex justify-center gap-15 px-6 py-3 text-gray-600 text-sm">
        <li>
          <Link to="/" className="hover:text-black transition">
            <img src={bague} alt="ma bague" className="w-6 rounded-full" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-black transition">
            À propos
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-black transition">
            Projets
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
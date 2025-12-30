import { Link } from "react-router-dom";
import bague from "../assets/images/logo_design/maBague.png";

function Navbar({ isDark = true }) {
  // isDark détermine uniquement la couleur du texte, le blur et le bg restent les mêmes

  const textColor = isDark ? 'text-white' : 'text-black';
  const hoverColor = isDark ? 'hover:text-gray-300' : 'hover:text-gray-700';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/50`}>  
      <ul className={`flex justify-center gap-15 px-6 py-3 text-sm ${textColor}`}>
        <li>
          <Link to="/" className={`transition ${hoverColor}`}>
            <img src={bague} alt="ma bague" className="w-6 rounded-full" />
          </Link>
        </li>
        <li>
          <Link to="/about" className={`transition ${hoverColor}`}>À propos</Link>
        </li>
        <li>
          <Link to="/projects" className={`transition ${hoverColor}`}>Projets</Link>
        </li>
        <li>
          <Link to="/contact" className={`transition ${hoverColor}`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

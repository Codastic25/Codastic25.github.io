import github from "../assets/images/reseaux/github.png"
import linkedin from "../assets/images/reseaux/linkedin.png"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className=" text-black py-4 mt-20">
    <div className="mx-auto h-px w-full bg-black mb-6" />
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          {/* Texte et liens alignés droite */}
          <p>&copy; 2025 Aurian Marvilliers. Tous droits réservés.</p>
          <div className="flex items-center gap-4 ml-auto">
            <Link to="/" className="hover:font-bold transition">
                <p className="hover cursor-pointer">Accueil</p>
            </Link>
            <Link to="/about" className="hover:font-bold transition">
                <p className="hover:cursor-pointer">À propos</p>
            </Link>
            <Link to="/projects" className="hover:font-bold transition">
                <p className="hover:cursor-pointer">Projets</p>
            </Link>
            <Link to="/contact" className="hover:font-bold transition">
                <p className="hover:cursor-pointer">Contact</p>
            </Link>
          </div>

          {/* Icônes droite alignées verticalement */}
          <div className="flex items-center ml-auto gap-8">
            <a href="https://github.com/Codastic25" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github" className="w-10 h-10 hover:cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/aurian-marvilliers-85a3932b9/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" className="w-10 h-10 hover:cursor-pointer" />
            </a>
          </div>
        </div>
    </footer>
  )
}

export default Footer
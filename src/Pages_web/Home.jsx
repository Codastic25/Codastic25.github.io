import Navbar from "../Components/Navbar"
import Presentation_moi from "../Components/Presentation_moi"
import Cadre_home from "../Components/Cadre_home"
import Bouton from "../Components/Bouton_type1"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <Navbar />
      <Presentation_moi />
      <div className="flex items-center justify-center my-16 gap-4 px-4 md:px-16">
        <div className="flex-1 h-px bg-black" />
        <p className="text-2xl font-medium text-center">Mes derniers travaux</p>
        <div className="flex-1 h-px bg-black" />
      </div>
      <div className="flex justify-center gap-40 mb-10">
        <Cadre_home />
        <Cadre_home />
        <Cadre_home />
      </div>
        <Link to="/projects">
          <Bouton text={"Voir plus"} />
        </Link>
      <Footer />
    </div>
  )
}

export default Home
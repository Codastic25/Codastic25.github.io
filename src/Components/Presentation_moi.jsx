import moi from "../assets/images/images_site_web/moi.jpeg"
import cytech from "../assets/images/logo_ecole/logo_cy_tech_blanc.png"
import cydesign from "../assets/images/logo_ecole/eco1-CY ecole design_Blanc.png"

function Presentation_moi() {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-full bg-black pt-20">
        <img src={moi} alt="une photo de moi" className="w-200 opacity-50"/>
        <div className="absolute top-1/3 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-8xl font-bold text-center">Aurian Marvilliers</h1>
          <h2 className="text-white text-4xl font-medium text-center mt-4">Etudiant ingénieur · informatique · design global</h2>
          <div className="flex items-center justify-center gap-35 mt-8 ml-15 w-full">
            <img src={cytech} alt="logo cytech" className="w-20"/>
            <img src={cydesign} alt="logo cydesign" className="w-40 ml-15"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Presentation_moi
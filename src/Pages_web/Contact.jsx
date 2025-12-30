import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function Contact() {
  return (
    <div>
      <Navbar />

        <div className="flex flex-col items-center justify-center w-full  bg-black pt-20">
          <h2 className="text-white text-5xl font-bold text-center mt-8 mb-18">
            On reste en contact ?
          </h2>
        </div>


      <div className="flex items-center justify-center my-16 gap-4 px-4 md:px-16">
        <p className="text-3xl font-medium text-center">Contactez moi !</p>
        <div className="flex-1 h-px bg-black" />
      </div>

      <div>
        <form className="flex flex-col items-center justify-center gap-6 mb-20">
          <input
            type="text"
            placeholder="Votre prénom"
            className="w-1/2 p-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Votre nom"
            className="w-1/2 p-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-1/2 p-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Entreprise/Organisation (optionnel)"
            className="w-1/2 p-4 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Votre message"
            className="w-1/2 p-4 border border-gray-300 rounded h-40"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
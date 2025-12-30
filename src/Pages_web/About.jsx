import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Bulle_about from "../Components/Bulle_about"

function About() {
  return (
    <div>
      <Navbar />
      <Bulle_about text="Web developer" />
      <Bulle_about text="Web designer" />
      <Footer />
    </div>
  )
}

export default About
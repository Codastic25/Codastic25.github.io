
import {Routes,  Route } from 'react-router-dom'
import About from './Pages_web/About.jsx'
import Home from './Pages_web/Home.jsx'
import Contact from './Pages_web/Contact.jsx'
import Projects from './Pages_web/Projects.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

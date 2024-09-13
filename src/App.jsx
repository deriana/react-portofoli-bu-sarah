import './App.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Resume from './components/Resume'
import Service from './components/service'
import Portofolio from './components/portofolio'
import Testimonial from './components/Testimonial'
import Contact from './components/contact'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

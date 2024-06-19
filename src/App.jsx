import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faBootstrap, faCss3, faFacebook, faGit, faHtml5, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import { Footer } from './components/Footer'
import { Connect } from './components/Connect'
// import {picture} from '/IMG_3477'

function App() {

  return (
    <div className='font-serif overflow-hidden bg-[#E1EBED]'>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Work />
      <Connect />
      <Footer />
    </div>
  )
}

export default App

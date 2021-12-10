import './App.css';
import Navbar from './components/componet/Navbar';
import Home from './components/sections/Home';
import Wave from './components/sections/Wave';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const App = ()=>{


  return(
    <div className="appContainer" >
        <Navbar/>
        <Home/>
        <Wave/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )

}

export default App;

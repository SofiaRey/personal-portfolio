import './App.css';
import Navbar from './Navbar';
import Mouse from './Mouse';
import Header from './Header';
import About from './About';
import Values from './Values';
import Projects from './Projects';
import Footer from './Footer';

import ProcessLine from './assets/processLine.svg'

function App() {
  return (
    <div className="App font-rubik overflow-x-hidden overflow-y-hidden">
      <img className='absolute left-0 mix-blend-exclusion z-30' src={ProcessLine}/>
      <Navbar/>
      <Mouse/>
      <Header/>
      <About/>
      <Values/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

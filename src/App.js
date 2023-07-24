import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './sections/About'
import Experience from './sections/Experience'
import Resume from './sections/Resume';
import Projects from './sections/Projects'
import Footer from './components/Footer'
import './assets/fonts.css'

function App() {
  return (
    <div className='App'>
      < Navbar />
      < Header />
      < About />
      < Experience />
      < Resume />
      < Projects />
      < Footer />
    </div>
  );
}

export default App;

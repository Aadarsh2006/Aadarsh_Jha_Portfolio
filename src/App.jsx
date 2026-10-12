
import About from './sections/About/About';
import './App.css';
import DynamicBackground from './components/Background/DynamicBackground';
import Navbar from './components/Navbar/Navbar';
import MusicWaveform from './components/Music/MusicWaveform';
import Education from './sections/Education/Education';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';


function App() {
  return (
    <main className="app">
      <DynamicBackground />

      <div className="page-content">
        <Navbar />

        <section id="home" className="hero-placeholder">
          <div className="hero-content">

            <MusicWaveform />

            <h1>
              Hey, I'm
              <span>Aadarsh Jha.</span>
            </h1>

            <p className="hero-tagline">
  JUST A HUMAN WITH BIG DREAMS
</p>

            <p className="hero-description">
              A CSE-AI undergraduate exploring artificial intelligence,
              building software, and turning ideas into practical
              digital experiences.
            </p>

            <div className="hero-actions">
              
<a
  href="https://www.linkedin.com/in/aadarshjha09/"
  target="_blank"
  rel="noreferrer"
  className="hero-button"
>
  LinkedIn <span>↗</span>
</a>


              <a
                href="https://github.com/Aadarsh2006"
                className="hero-button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="/resume/Aadarsh_Jha_CV_Updated.pdf"
                className="hero-button"
                download="Aadarsh_Jha_CV.pdf"
              >
                Download CV ↓
              </a>


            </div>

            <div className="hero-meta">
              <span><i /> Open to internship opportunities</span>
            </div>
          </div>

      
        </section>

        <About />

        <Education />

        <Experience />

        <Projects />

        <Contact />
      </div>
    </main>
  );
}

export default App;

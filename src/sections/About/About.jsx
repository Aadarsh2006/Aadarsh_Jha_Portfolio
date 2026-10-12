
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-heading">
          <span className="section-eyebrow">
            # ABOUT ME
          </span>

          <h2>
            A little about
            <span>what drives me.</span>
          </h2>
        </div>

        <div className="about-marker">
          <span className="about-marker-dot" />
          <span>GET TO KNOW ME</span>
        </div>

        <div className="about-copy">
          <p className="about-lead">
            I'm Aadarsh Jha, a Computer Science and Engineering
            undergraduate specializing in Artificial Intelligence
            at Dr. A.P.J. Abdul Kalam Technical University.
          </p>

          <p>
            I'm interested in the intersection of artificial
            intelligence and software development. I enjoy
            turning ideas into working applications, experimenting
            with new technologies, and understanding how things
            work under the hood.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

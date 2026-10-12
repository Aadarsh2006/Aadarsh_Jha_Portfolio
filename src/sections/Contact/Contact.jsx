
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-topline">
          <span>CONTACT INFO</span>
          <span className="contact-status">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <div className="contact-main">
          <div className="contact-intro">
            <p className="contact-eyebrow">HAVE SOMETHING IN MIND?</p>

            <h2>
              Wanna Connect?
              <span>Let's talk.</span>
            </h2>

            <p className="contact-description">
              Open to new opportunities, meaningful challenges, and teams building things that matter.
              Ready to turn what I know into what I can build. Let's create something meaningful together.
            </p>

            <a
              className="contact-email"
              href="mailto:aadarshjha.mail@gmail.com"
            >
              <span>aadarshjha.mail@gmail.com</span>
              <span className="contact-email-arrow">↗</span>
            </a>
          </div>

          <div className="contact-art">
            <div className="contact-orbit orbit-one" />
            <div className="contact-orbit orbit-two" />
            <div className="contact-orbit orbit-three" />

            <div className="contact-orbit-core">
              <span>AJ</span>
              <span className="core-spark">✳</span>
            </div>

            <span className="orbit-label orbit-label-top">
              IDEAS
            </span>
            <span className="orbit-label orbit-label-right">
              CURIOSITY
            </span>
        
            <span className="orbit-label orbit-label-bottom">
                CREATIVITY
            </span>
            
          </div>
        </div>

        <div className="contact-bottom">
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/aadarshjha09/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN <span>↗</span>
            </a>

            <a
              href="https://github.com/Aadarsh2006"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <span>↗</span>
            </a>

            <a href="mailto:aadarshjha.mail@gmail.com">
              EMAIL <span>↗</span>
            </a>
          </div>

          <p className="contact-signoff">
            MADE BY <span>©</span> AADARSH JHA
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

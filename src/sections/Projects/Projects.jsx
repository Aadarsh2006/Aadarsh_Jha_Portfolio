
import './Projects.css';


const projects = [
  {
    number: '01',
    title: 'AI Mental Wellness Voice Assistant',
    category: 'ARTIFICIAL INTELLIGENCE',
    description:
      'A voice-based assistant designed to support mental wellness through conversational AI and speech interaction.',
    technologies: ['Python', 'Flask', 'Gemini API', 'gTTS'],
    github: 'https://github.com/Aadarsh2006/AI-Mental-Wellness-Voice-Assistant',
  },
  {
    number: '02',
    title: 'AI Movie Recommendation System',
    category: 'MACHINE LEARNING',
    description:
      'A movie recommendation application that helps users discover films through an interactive interface.',
    technologies: ['Python', 'Streamlit', 'Pandas'],
    github: 'https://github.com/Aadarsh2006/AI_Movie_Recommendation',
  },
  
{
  number: '03',
  title: 'Themis AI — Legal Assistant',
  category: 'GENERATIVE AI',
  description:
    'An AI-powered legal assistant for India that provides conversational legal guidance, generates preliminary legal documents, drafts formal letters, explains case status, and simplifies fundamental rights through Google Gemini.',
  technologies: [
    'React',
    'Tailwind CSS',
    'Gemini API',
    'jsPDF',
  ],
  github: 'https://github.com/Aadarsh2006/ThemisAI',
},

  {
    number: '04',
    title: 'Invisible Cloak',
    category: 'COMPUTER VISION',
    description:
      'A real-time invisibility effect using webcam input, color detection, and background replacement.',
    technologies: ['Python', 'OpenCV', 'NumPy'],
    github: 'https://github.com/Aadarsh2006/Invisible_Cloak',
  },
];


function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="section-eyebrow">
            # PROJECTS
          </span>

          <h2>
            Things I've
            <span> been building.</span>
          </h2>

          <p>
            A selection of projects where I've explored ideas,
            experimented with tools, and applied what I've learned.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-card-bottom">
                

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub ↗
                  </a>
                ) : (
                  <span className="project-link-pending">
                    LINK COMING SOON
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="project-skills">
  <span className="section-eyebrow">
    MY TOOLKIT.
  </span>

  <h3>Skills.</h3>

  <div className="project-skills-list">
    {[
      'Python',
      'C',
      'Java',
      'JavaScript',
      'HTML',
      'CSS',
      'Flask',
      'React',
      'Tailwind CSS',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'MySQL',
      'Git',
      'GitHub',
      'Prompt Engineering',
      'Data Structures & Algorithms',
    ].map((skill) => (
      <span className="project-skill-tag" key={skill}>
        {skill}
      </span>
    ))}
  </div>
</div>
    </section>
  );
}

export default Projects;


import './Experience.css';

const experiences = [
  {
    period: 'JAN 2026 — MAR 2026',
    role: 'Advanced Robotics using AI and IoT Intern',
    company: 'EduSkills Academy',
    description:
      'Explored robotics concepts involving artificial intelligence and the Internet of Things through a structured internship program.',
    type: 'VIRTUAL INTERNSHIP',
  },
  {
    period: 'SEP 2025 — OCT 2025',
    role: 'AI & Cloud Technology Intern',
    company: 'Edunet Foundation',
    description:
      'Gained exposure to artificial intelligence and cloud technologies through structured learning and practical assignments.',
    type: 'VIRTUAL INTERNSHIP',
  },
  {
    period: 'AUG 2025 — SEP 2025',
    role: 'Artificial Intelligence Intern',
    company: 'CodSoft',
    description:
      'Worked through Python-based tasks and explored foundational concepts in artificial intelligence and machine learning.',
    type: 'VIRTUAL INTERNSHIP',
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-heading">
          <span className="section-eyebrow">
            # EXPERIENCE
          </span>

          <h2>
            Learning beyond
            <span> the classroom.</span>
          </h2>

          <p>
            Experiences that have contributed to my technical
            learning and professional growth.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article
              className="experience-item"
              key={item.company}
            >
              <div className="experience-index">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="experience-content">
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <span className="experience-type">
                    {item.type}
                  </span>
                </div>

                <h3>{item.role}</h3>

                <p className="experience-company">
                  {item.company}
                </p>

                <p className="experience-description">
                  {item.description}
                </p>
              </div>

              <span className="experience-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

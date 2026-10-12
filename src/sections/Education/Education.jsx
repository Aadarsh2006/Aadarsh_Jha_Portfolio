
import './Education.css';

const education = [
  {
    period: '2024 — PRESENT (GRADUATING IN 2028)',
    degree: 'B.Tech — Computer Science & Engineering (AI)',
    institution: 'Dr. A.P.J. Abdul Kalam Technical University',
    location: 'Greater Noida, India',
    status: 'PURSUING',
  },
  {
    period: '2023 — 2024',
    degree: 'Class XII — CBSE (PCM)',
    institution: 'Senior Secondary Education',
    location: 'New Delhi, India',
    status: 'COMPLETED',
  },
  {
    period: '2021 — 2022',
    degree: 'Class X — CBSE',
    institution: 'Secondary Education',
    location: 'New Delhi, India',
    status: 'COMPLETED',
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-heading">
          <span className="section-eyebrow"># EDUCATION</span>
          <h2>
            Where my
            <span> journey began.</span>
          </h2>
          <p>
            The academic milestones that have shaped my journey so far.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <article className="education-item" key={item.period}>
              <div className="education-marker">
                <span className={index === 0 ? 'marker-dot active' : 'marker-dot'} />
                {index !== education.length - 1 && (
                  <span className="timeline-line" />
                )}
              </div>

              <div className="education-content">
                <div className="education-meta">
                  <span>{item.period}</span>
                  <span className="education-status">{item.status}</span>
                </div>

                <h3>{item.degree}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-location">{item.location}</p>

                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

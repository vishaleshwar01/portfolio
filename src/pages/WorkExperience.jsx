import '../styles/Page.css'

function WorkExperience() {
  const experiences = [
    {
      title: 'Intern',
      company: 'E16 AI XR Technology Pvt Ltd',
      location: 'Chennai, India',
      period: 'Nov 2023 - Dec 2023',
      description: 'Contributed to XR application development using Unity and C#, improving UI responsiveness and debugging performance issues. Collaborated on design discussions and learned structured development workflows in agile team settings.'
    }
  ]

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">
          <span className="title-glow">Work Experience</span>
        </h1>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h2 className="experience-title">{exp.title}</h2>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h3 className="experience-company">{exp.company}</h3>
              {exp.location && <p className="experience-location">{exp.location}</p>}
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience


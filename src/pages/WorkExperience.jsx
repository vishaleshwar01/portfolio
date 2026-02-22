import '../styles/Page.css'

function WorkExperience() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built responsive web interfaces and implemented RESTful APIs. Participated in code reviews and agile development processes.'
    },
    {
      title: 'Intern',
      company: 'Dev Studio',
      period: '2019 - 2020',
      description: 'Assisted in frontend development tasks and learned industry best practices. Contributed to team projects and gained hands-on experience.'
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
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience


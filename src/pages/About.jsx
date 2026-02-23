import '../styles/Page.css'

function About() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">
          <span className="title-glow">Vishal Eshwar</span>
        </h1>
        <div className="content-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            Front-End Developer with a solid foundation in React.js and native applications, HTML, CSS, and Bootstrap. Eager to contribute to real-world web projects, enhance user experiences, and grow through hands-on development and collaboration.
          </p>
          <p className="section-text">
            Graduated Bachelor of Engineering in Computer Science and Engineering at Jeppiaar Engineering College, Chennai.
          </p>
          <p className="section-text">
            Interested in building modern front-end experiences and exploring AR and VR technologies to create immersive interfaces.
          </p>
        </div>
        <div className="content-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">React.js</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">C#</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">HTML/CSS</div>
            <div className="skill-card">Bootstrap</div>
            <div className="skill-card">Unity</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">SQL</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


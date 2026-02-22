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
            Welcome to my digital realm. I'm a developer who combines technical expertise with a passion for gaming and innovation.
          </p>
          <p className="section-text">
            My journey in technology has been driven by curiosity and a love for solving complex problems. When I'm not coding, you'll find me exploring the latest games, analyzing game mechanics, and drawing inspiration from the gaming world.
          </p>
        </div>
        <div className="content-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">React</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Python</div>
            <div className="skill-card">HTML/CSS</div>
            <div className="skill-card">Git</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


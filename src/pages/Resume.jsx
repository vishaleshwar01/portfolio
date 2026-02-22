import '../styles/Page.css'

function Resume() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">
          <span className="title-glow">Resume</span>
        </h1>
        <div className="resume-section">
          <h2 className="section-title">Education</h2>
          <div className="resume-item">
            <h3 className="resume-item-title">Bachelor of Science in Computer Science</h3>
            <p className="resume-item-subtitle">University Name | 2016 - 2020</p>
            <p className="resume-item-description">Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems</p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="resume-item">
            <h3 className="resume-item-title">Programming Languages</h3>
            <p className="resume-item-description">JavaScript, Python, Java, C++</p>
          </div>
          <div className="resume-item">
            <h3 className="resume-item-title">Frameworks & Libraries</h3>
            <p className="resume-item-description">React, Node.js, Express, Django</p>
          </div>
          <div className="resume-item">
            <h3 className="resume-item-title">Tools & Technologies</h3>
            <p className="resume-item-description">Git, Docker, AWS, MongoDB, PostgreSQL</p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="section-title">Projects</h2>
          <div className="resume-item">
            <h3 className="resume-item-title">Portfolio Website</h3>
            <p className="resume-item-description">Built a responsive portfolio using React and modern CSS. Implemented routing and dynamic content management.</p>
          </div>
          <div className="resume-item">
            <h3 className="resume-item-title">E-Commerce Platform</h3>
            <p className="resume-item-description">Developed a full-stack e-commerce application with user authentication, payment integration, and admin dashboard.</p>
          </div>
        </div>
        <div className="download-section">
          <a href="#" className="download-button" onClick={(e) => e.preventDefault()}>
            Download PDF Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume


import '../styles/Page.css'

function Resume() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">
          <span className="title-glow">Resume</span>
        </h1>
        <div className="resume-section">
          <h2 className="section-title">Objective</h2>
          <div className="resume-item">
            <p className="resume-item-description">
              Aspiring Front-End Developer with a solid foundation in React.js and native applications, HTML, CSS, and Bootstrap. Eager to contribute to real-world web projects, enhance user experiences, and grow through hands-on development and collaboration.
            </p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="section-title">Education</h2>
          <div className="resume-item">
            <h3 className="resume-item-title">Bachelor of Engineering in Computer Science and Engineering</h3>
            <p className="resume-item-subtitle">Jeppiaar Engineering College, Chennai | 2021 - 2025</p>
            <p className="resume-item-description">CGPA: 7.60/10</p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="resume-item">
            <h3 className="resume-item-title">Programming Languages</h3>
            <p className="resume-item-description">JavaScript, C#, Java, SQL</p>
          </div>
          <div className="resume-item">
            <h3 className="resume-item-title">Front-End Development</h3>
            <p className="resume-item-description">React.js, HTML, CSS, Bootstrap</p>
          </div>
          <div className="resume-item">
            <h3 className="resume-item-title">Tools</h3>
            <p className="resume-item-description">Git, GitHub, VS Code, Android Studio, Unity</p>
          </div>
          <div className="resume-item">
            <h3 className="resume-item-title">Core Competencies</h3>
            <p className="resume-item-description">Responsive UI, Debugging, Version Control, Collaboration</p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="section-title">Experience</h2>
          <div className="resume-item">
            <h3 className="resume-item-title">Intern</h3>
            <p className="resume-item-subtitle">E16 AI XR Technology Pvt Ltd, Chennai, India | Nov 2023 - Dec 2023</p>
            <p className="resume-item-description">
              Contributed to XR application development using Unity and C#, improving UI responsiveness and debugging performance issues. Collaborated on design discussions and learned structured development workflows in agile team settings.
            </p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="section-title">Projects</h2>
          <div className="resume-item">
            <h3 className="resume-item-title">Smart Recruitment System</h3>
            <p className="resume-item-description">Developed responsive interfaces for job postings and recruitment metrics using structured front-end design and interactive layouts.</p>
          </div>
          <div className="resume-item">
            <h3 className="resume-item-title">Mismatch 2D Game</h3>
            <p className="resume-item-description">Built a 2D puzzle game in Unity using C#, featuring card-matching mechanics, scoring, and save/load systems to enhance gameplay.</p>
          </div>
          <div className="resume-item">
            <h3 className="resume-item-title">AR Image Tracking Application</h3>
            <p className="resume-item-description">Developed an AR application in Unity and C# that detects images in real-world environments and overlays 3D models dynamically.</p>
          </div>
        </div>
        <div className="resume-section">
          <h2 className="section-title">Certifications</h2>
          <div className="resume-item">
            <p className="resume-item-description">
              Java and C++ Programming - Udemy<br/>
              Learn C# An Introduction for Beginners - Udemy<br/>
              Python with Django - Udemy<br/>
              MongoDB Node.js Developer Path - SmartBridge<br/>
              Journey to Cloud: Envisioning Your Solution - IBM SkillBuild<br/>
              React development - ACTE Technologies (Under learning)
            </p>
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


function About() {
  return (
    <section className="page">

      <h1 className="page-title">
        About Me
      </h1>

      <div className="about-grid">

        <div className="about-card">
          <h2>Education</h2>

          <div className="education-item">
            <h3>B.Tech - Computer Science Engineering (AI & ML)</h3>
            <p>
              Anil Neerukonda Institute of Technology and Sciences
            </p>
            <span>2023 - 2027 | CGPA: 8.56</span>
          </div>

          <div className="education-item">
            <h3>Intermediate (Class XII)</h3>
            <p>Narayana Junior College</p>
            <span>90.3%</span>
          </div>

          <div className="education-item">
            <h3>Class X</h3>
            <p>St. Francis De Sales School</p>
            <span>CGPA: 10</span>
          </div>

        </div>

        <div className="about-card">
          <h2>Professional Summary</h2>

          <p>
            I am a Computer Science Engineering student
            specializing in Artificial Intelligence and
            Machine Learning. I enjoy building full stack
            applications, exploring modern technologies,
            and improving my problem-solving skills through
            projects and coding challenges.
          </p>
        </div>

      </div>

      <div className="skills-section">

        <h2>Technical Skills</h2>

        <div className="skills-container">

          <span className="skill">Java</span>
          <span className="skill">Python</span>
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">React.js</span>
          <span className="skill">Node.js</span>
          <span className="skill">MySQL</span>
          <span className="skill">DBMS</span>
          <span className="skill">Operating Systems</span>
          <span className="skill">Computer Networks</span>
          <span className="skill">OOPS</span>
          <span className="skill">Data Structures</span>

        </div>

      </div>

      <div className="certification-section">

        <h2>Certifications & Workshops</h2>

        <div className="cert-card">
          AI & IoT Bootcamp – Kaidoko Automation Solutions
        </div>

        <div className="cert-card">
          AI & Machine Learning Workshop – GeeksForGeeks
        </div>

      </div>

    </section>
  );
}

export default About;
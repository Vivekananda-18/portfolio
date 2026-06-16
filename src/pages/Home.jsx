import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          AI & ML Student • Full Stack Developer
        </div>

        <h1 className="hero-title">
          KANKIPATI
          <br />
          VIVEKANANDA JOSHI
        </h1>

        <h2 className="hero-subtitle">
          Building Modern Web Applications &
          Solving Real-World Problems
        </h2>

        <p className="hero-description">
          Computer Science Engineering student specializing
          in Artificial Intelligence and Machine Learning.
          Passionate about Full Stack Development,
          problem-solving, and creating impactful software.
        </p>

        <div className="hero-buttons">

          <Link to="/projects" className="primary-btn">
            View Projects
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>

        </div>

        <div className="stats">

          <div className="stat-card">
            <h3>8.56</h3>
            <p>CGPA</p>
          </div>

          <div className="stat-card">
            <h3>3+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>73+</h3>
            <p>LeetCode</p>
          </div>

          <div className="stat-card">
            <h3>1</h3>
            <p>Internship</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
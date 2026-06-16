function Projects() {
  return (
    <section className="page">

      <h1 className="page-title">
        Projects
      </h1>

      <div className="projects-grid">

        <div className="project-card">

          <div className="project-icon">🎵</div>

          <h2>Music Tracker</h2>

          <p>
            A music recommendation platform built using
            Spotify Web API. Features include user
            authentication, favorites, recent searches,
            personalized recommendations, and mood-based
            song filtering.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Flask</span>
            <span>MySQL</span>
            <span>Spotify API</span>
          </div>

        </div>

        <div className="project-card">

          <div className="project-icon">🌦️</div>

          <h2>Weather Dashboard</h2>

          <p>
            Real-time weather application using the
            OpenWeather API. Displays temperature,
            humidity, pressure, wind speed, and
            a 5-day forecast.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>OpenWeather API</span>
          </div>

        </div>

        <div className="project-card">

          <div className="project-icon">📝</div>

          <h2>Notes App</h2>

          <p>
            Notes management application supporting
            create, update, and delete operations.
            Designed to provide a smooth and responsive
            user experience.
          </p>

          <div className="tech-stack">
            <span>JavaScript</span>
            <span>MongoDB</span>
            <span>Node.js</span>
            <span>CRUD</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
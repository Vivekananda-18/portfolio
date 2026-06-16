function Contact() {
  return (
    <section className="page">

      <h1 className="page-title">
        Contact Me
      </h1>

      <p className="contact-subtitle">
        Feel free to connect with me through any of the platforms below.
      </p>

      <div className="contact-grid">

        <a
          href="mailto:vivekanandajoshi18@gmail.com"
          className="contact-card"
        >
          <h2>Email</h2>
          <p>vivekanandajoshi18@gmail.com</p>
        </a>

        <a
          href="tel:+919293703032"
          className="contact-card"
        >
          <h2>Phone</h2>
          <p>+91 9293703032</p>
        </a>

        <a
          href="https://github.com/Vivekananda-18"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h2>GitHub</h2>
          <p>github.com/Vivekananda-18</p>
        </a>

        <a
          href="https://www.linkedin.com/in/vivekananda999"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h2>LinkedIn</h2>
          <p>linkedin.com/in/vivekananda999</p>
        </a>

        <a
          href="https://leetcode.com/u/vivek_666/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h2>LeetCode</h2>
          <p>leetcode.com/u/vivek_666</p>
        </a>

      </div>

    </section>
  );
}

export default Contact;
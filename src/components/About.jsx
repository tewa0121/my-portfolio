import * as Icons from "lucide-react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">
            <Icons.User size={16} />
            About Me
          </span>
          <h2>
            Building ideas into
            <span> digital solutions.</span>
          </h2>
          <p>A little about who I am and what I do.</p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p className="about-lead">
              Hi, I'm <strong>Tewachew Melaku</strong>, a Full Stack
              Developer passionate about creating modern and
              meaningful web applications.
            </p>
            <p>
              I enjoy designing and developing responsive,
              user-friendly applications that solve real-world
              problems. My development journey has given me
              experience across both frontend and backend
              technologies.
            </p>
            <p>
              On the frontend, I work with{" "}
              <strong>HTML, CSS, JavaScript, and React.js</strong>.
              On the backend, I mainly use{" "}
              <strong>Node.js</strong>, while also having experience
              with <strong>PHP</strong>.
            </p>
            <p>
              I work with databases such as{" "}
              <strong>MongoDB and SQL</strong>, and I use{" "}
              <strong>Git and GitHub</strong> for version control
              and project management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
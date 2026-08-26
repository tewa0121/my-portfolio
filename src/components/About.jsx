import * as Icons from "lucide-react";

function About() {
  const highlights = [
    {
      icon: <Icons.Code2 size={22} />,
      title: "Modern Development",
      text: "Building responsive and user-friendly applications with modern web technologies.",
    },
    {
      icon: <Icons.Layers size={22} />,
      title: "Full Stack Skills",
      text: "Working across frontend, backend, databases, and application architecture.",
    },
    {
      icon: <Icons.Rocket size={22} />,
      title: "Problem Solving",
      text: "Turning ideas and requirements into practical, functional software solutions.",
    },
  ];

  const stats = [
    { number: "6+", label: "Projects Built" },
    { number: "10+", label: "Technologies" },
    { number: "Full Stack", label: "Development" },
  ];

  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">
            <Icons.UserRound size={16} />
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
            <div className="about-checks">
              <div>
                <Icons.CheckCircle2 size={18} />
                <span>Responsive Web Applications</span>
              </div>
              <div>
                <Icons.CheckCircle2 size={18} />
                <span>Frontend & Backend Development</span>
              </div>
              <div>
                <Icons.CheckCircle2 size={18} />
                <span>Database Integration</span>
              </div>
              <div>
                <Icons.CheckCircle2 size={18} />
                <span>Clean & Maintainable Code</span>
              </div>
            </div>
          </div>

          <div className="about-side">
            <div className="stats-card">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="about-mini-card">
              <div className="mini-icon">
                <Icons.Code2 size={24} />
              </div>
              <div>
                <h3>My Development Focus</h3>
                <p>
                  Creating scalable, intuitive, and efficient
                  applications with a strong focus on user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <div className="highlight-card" key={item.title}>
              <div className="highlight-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
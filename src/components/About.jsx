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
      icon: <Icons.Zap size={22} />,
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

            <h3>🌐 Frontend Development</h3>
            <p>
              I build interactive and responsive user interfaces using
              <strong> React.js, HTML, CSS, and JavaScript</strong>.
              I focus on clean, maintainable code and great user experiences.
            </p>

            <h3>⚙️ Backend Development</h3>
            <p>
              On the backend, I work with <strong>Node.js</strong> and
              <strong> PHP</strong> to build robust APIs and server-side
              applications. I also manage databases like
              <strong> MongoDB and SQL</strong>.
            </p>

            <h3>🔄 Version Control & API Testing</h3>
            <p>
              I use <strong>Git and GitHub</strong> for version control
              and collaborative development. I also test APIs using
              <strong> Postman</strong> to ensure they work reliably
              and efficiently.
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
                <span>Version Control (Git/GitHub)</span>
              </div>
              <div>
                <Icons.CheckCircle2 size={18} />
                <span>API Testing (Postman)</span>
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
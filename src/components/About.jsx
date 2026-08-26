import * as Icons from "lucide-react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">
            <Icons.User size={16} />   {/* ✅ Changed to User */}
            About Me
          </span>
          <h2>
            Building ideas into
            <span> digital solutions.</span>
          </h2>
          <p>A little about who I am and what I do.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
// import * as Icons from "lucide-react";

// function Hero() {
//   const technologies = [
//     "React.js",
//     "Node.js",
//     "MongoDB",
//     "SQL",
//     "JavaScript",
//     "PHP",
//   ];

//   return (
//     <section className="hero" id="home">
//       <div className="hero-container">
//         <div className="hero-content">
//           <div className="hero-badge">
//             <span className="status-dot"></span>
//             Available for opportunities
//           </div>

//           <p className="hero-intro">Hello, I'm</p>

//           <h1>
//             Tewachew
//             <span> Melaku</span>
//           </h1>

//           <h2>
//             Full Stack <span>Developer</span>
//           </h2>

//           <p className="hero-description">
//             I build modern, responsive, and user-friendly web applications
//             using React.js, Node.js, databases, and modern web technologies.
//           </p>

//           <div className="hero-buttons">
//             <a href="#projects" className="btn btn-primary">
//               View My Projects
//               <Icons.ArrowRight size={18} />
//             </a>
//             <a href="#contact" className="btn btn-secondary">
//               Contact Me
//             </a>
//           </div>

//           <div className="hero-socials">
//             <a
//               href="https://github.com/tewa0121"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//                 <path d="M9 18c-4.51 2-5-2-7-2" />
//               </svg>
//             </a>
//             <a
//               href="mailto:tewachewmelaku6@gmail.com"
//               aria-label="Email"
//             >
//               @
//             </a>
//           </div>
//         </div>

//         <div className="hero-visual">
//           {/* Profile Photo */}
//           <div className="profile-photo">
//             <img
//               src="/images/profile.jpg"
//               alt="Tewachew Melaku"
//               className="profile-img"
//               onError={(e) => {
//                 e.target.src = "https://ui-avatars.com/api/?name=Tewachew+Melaku&size=300&background=a78bfa&color=fff";
//               }}
//             />
//           </div>

//           <div className="floating-card card-one">
//             <Icons.Code2 size={20} />
//             <span>Clean Code</span>
//           </div>
//           <div className="floating-card card-two">
//             <Icons.Server size={20} />
//             <span>Node.js</span>
//           </div>
//           <div className="floating-card card-three">
//             <Icons.Database size={20} />
//             <span>MongoDB</span>
//           </div>
//         </div>
//       </div>

//       <div className="hero-tech">
//         <p>Technologies I work with</p>
//         <div className="tech-list">
//           {technologies.map((technology) => (
//             <span key={technology}>{technology}</span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
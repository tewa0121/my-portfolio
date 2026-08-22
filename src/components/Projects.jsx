// import { useState } from "react";
// import * as Icons from "lucide-react";
// import projects from "../data/projects";

// function Projects() {
//   const [filter, setFilter] = useState("All");
//   const categories = ["All", "Full Stack", "Frontend"];

//   const filteredProjects =
//     filter === "All"
//       ? projects
//       : projects.filter((project) => project.category === filter);

//   return (
//     <section className="projects section" id="projects">
//       <div className="section-container">
//         <div className="section-heading">
//           <span className="section-label">
//             <Icons.FolderGit2 size={16} />
//             My Projects
//           </span>
//           <h2>
//             Some things I've
//             <span> built recently.</span>
//           </h2>
//           <p>
//             A selection of projects that showcase my skills and
//             development approach.
//           </p>
//         </div>

//         <div className="projects-filter">
//           <div className="filter-wrapper">
//             <Icons.Filter size={18} className="filter-icon" />
//             <span className="filter-label">Filter:</span>
//             <div className="filter-buttons">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   className={`filter-btn ${filter === category ? "active" : ""}`}
//                   onClick={() => setFilter(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <span className="projects-count">
//             {filteredProjects.length} project
//             {filteredProjects.length !== 1 ? "s" : ""}
//           </span>
//         </div>

//         <div className="projects-grid">
//           {filteredProjects.map((project) => (
//             <div className="project-card" key={project.id}>
//               <div className="project-image">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   onError={(e) => {
//                     e.target.src =
//                       "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='240' viewBox='0 0 400 240'%3E%3Crect width='400' height='240' fill='%231a1a2e'/%3E%3Ctext x='200' y='120' font-family='Arial' font-size='20' fill='%236b6b8d' text-anchor='middle'%3E%3C%2Ftext%3E%3C%2Fsvg%3E";
//                   }}
//                 />
//                 <span className="project-category">{project.category}</span>
//               </div>

//               <div className="project-content">
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.description}</p>

//                 <div className="project-features">
//                   {project.features.map((feature, index) => (
//                     <span key={index} className="feature-tag">
//                       {feature}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="project-tech">
//                   {project.technologies.map((tech) => (
//                     <span key={tech} className="tech-badge">
//                       <Icons.Code2 size={12} />
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="project-actions">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-github"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="18"
//                       height="18"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//                       <path d="M9 18c-4.51 2-5-2-7-2" />
//                     </svg>
//                     Code
//                   </a>
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-demo"
//                   >
//                     <Icons.Globe size={18} />
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="projects-bottom">
//           <p>
//             <span className="bottom-icon">
//               <Icons.FolderGit2 size={18} />
//             </span>
//             More projects available on{" "}
//             <a
//               href="https://github.com/tewa0121"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
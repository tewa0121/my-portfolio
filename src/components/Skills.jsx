// import * as Icons from "lucide-react";

// function Skills() {
//   const skillGroups = [
//     {
//       title: "Frontend",
//       description: "Building modern and responsive user interfaces.",
//       icon: <Icons.Code2 size={24} />,
//       skills: [
//         { name: "HTML", level: "Advanced", symbol: "HTML" },
//         { name: "CSS", level: "Advanced", symbol: "CSS" },
//         { name: "JavaScript", level: "Advanced", symbol: "JS" },
//         { name: "React.js", level: "Advanced", symbol: "R" },
//       ],
//     },
//     {
//       title: "Backend",
//       description: "Developing server-side applications and APIs.",
//       icon: <Icons.Server size={24} />,
//       skills: [
//         { name: "Node.js", level: "Advanced", symbol: "N" },
//         { name: "PHP", level: "Intermediate", symbol: "PHP" },
//       ],
//     },
//     {
//       title: "Database",
//       description: "Managing and working with application data.",
//       icon: <Icons.Database size={24} />,
//       skills: [
//         { name: "MongoDB", level: "Advanced", symbol: "MDB" },
//         { name: "SQL", level: "Advanced", symbol: "SQL" },
//       ],
//     },
//     {
//       title: "Tools",
//       description: "Tools I use to build and manage projects.",
//       icon: <Icons.Wrench size={24} />,
//       skills: [
//         { name: "Git", level: "Advanced", symbol: "G" },
//         { name: "GitHub", level: "Advanced", symbol: "GH" },
//       ],
//     },
//   ];

//   return (
//     <section className="skills section" id="skills">
//       <div className="section-container">
//         <div className="section-heading">
//           <span className="section-label">
//             <Icons.Code2 size={16} />
//             My Skills
//           </span>
//           <h2>
//             Technologies I use to
//             <span> build applications.</span>
//           </h2>
//           <p>
//             A collection of technologies and tools I use throughout
//             the development process.
//           </p>
//         </div>

//         <div className="skills-grid">
//           {skillGroups.map((group) => (
//             <div className="skill-group" key={group.title}>
//               <div className="skill-group-header">
//                 <div className="skill-group-icon">{group.icon}</div>
//                 <div>
//                   <h3>{group.title}</h3>
//                   <p>{group.description}</p>
//                 </div>
//               </div>
//               <div className="skill-list">
//                 {group.skills.map((skill) => (
//                   <div className="skill-item" key={skill.name}>
//                     <div className="skill-symbol">{skill.symbol}</div>
//                     <div className="skill-info">
//                       <h4>{skill.name}</h4>
//                       <div className="skill-level">
//                         <span>
//                           <Icons.CheckCircle2 size={13} />
//                           {skill.level}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="skills-bottom">
//           <div className="skills-summary">
//             <span className="summary-number">10+</span>
//             <div>
//               <strong>Technologies & Tools</strong>
//               <p>
//                 Continuously learning and improving my development
//                 skills.
//               </p>
//             </div>
//           </div>
//           <div className="skills-stack">
//             <span>React.js</span>
//             <span>Node.js</span>
//             <span>MongoDB</span>
//             <span>SQL</span>
//             <span>Git</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
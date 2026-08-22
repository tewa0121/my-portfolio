// import { useState } from "react";
// import * as Icons from "lucide-react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const handleScroll = (e, href) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     closeMenu();
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         <a href="#home" className="logo" onClick={(e) => handleScroll(e, "#home")}>
//           <span className="logo-icon">
//             <Icons.Code2 size={22} />
//           </span>
//           <span>
//             Tewachew<span className="logo-dot">.</span>
//           </span>
//         </a>

//         <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="nav-link"
//               onClick={(e) => handleScroll(e, link.href)}
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="nav-button"
//             onClick={(e) => handleScroll(e, "#contact")}
//           >
//             Let's Talk
//           </a>
//         </nav>

//         <button
//           className="menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle navigation menu"
//         >
//           {menuOpen ? <Icons.X size={26} /> : <Icons.Menu size={26} />}
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
// import * as Icons from "lucide-react";

// function Contact() {
//   const contactInfo = [
//     {
//       icon: <Icons.Mail size={20} />,
//       label: "Email",
//       value: "tewachewmelaku6@gmail.com",
//       link: "mailto:tewachewmelaku6@gmail.com",
//     },
//     {
//       icon: <Icons.Phone size={20} />,
//       label: "Phone",
//       value: "+251 920 954 224",
//       link: "tel:+251920954224",
//     },
//     {
//       icon: <Icons.MapPin size={20} />,
//       label: "Location",
//       value: "Addis Ababa, Ethiopia",
//       link: null,
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="22"
//           height="22"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//           <path d="M9 18c-4.51 2-5-2-7-2" />
//         </svg>
//       ),
//       label: "GitHub",
//       url: "https://github.com/tewa0121",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="22"
//           height="22"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//           <rect x="2" y="9" width="4" height="12" />
//           <circle cx="4" cy="4" r="2" />
//         </svg>
//       ),
//       label: "LinkedIn",
//       url: "https://linkedin.com/in/tewachew-melaku",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="22"
//           height="22"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//         </svg>
//       ),
//       label: "Twitter",
//       url: "https://twitter.com/tewa0121",
//     },
//   ];

//   return (
//     <section className="contact section" id="contact">
//       <div className="section-container">
//         <div className="section-heading">
//           <span className="section-label">
//             <Icons.MessageCircle size={16} />
//             Contact Me
//           </span>
//           <h2>
//             Let's connect and
//             <span> work together.</span>
//           </h2>
//           <p>
//             Have a question or want to discuss a project? I'd love
//             to hear from you.
//           </p>
//         </div>

//         <div className="contact-grid">
//           <div className="contact-info">
//             <div className="contact-card">
//               <h3>Get in touch</h3>
//               <p>
//                 I'm always open to new opportunities, collaborations,
//                 or just a friendly chat about tech and development.
//               </p>

//               <div className="contact-details">
//                 {contactInfo.map((item) => (
//                   <div className="contact-item" key={item.label}>
//                     <div className="contact-icon">{item.icon}</div>
//                     <div>
//                       <span className="contact-label">{item.label}</span>
//                       {item.link ? (
//                         <a href={item.link} className="contact-value">
//                           {item.value}
//                         </a>
//                       ) : (
//                         <span className="contact-value">{item.value}</span>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="contact-social">
//                 <span>Follow me:</span>
//                 <div className="social-links">
//                   {socialLinks.map((social) => (
//                     <a
//                       key={social.label}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="social-link"
//                       aria-label={social.label}
//                     >
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="contact-form-wrapper">
//             <form
//               className="contact-form"
//               action="https://formspree.io/f/your-form-id"
//               method="POST"
//             >
//               <div className="form-group">
//                 <label htmlFor="name">
//                   <Icons.User size={16} />
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">
//                   <Icons.Mail size={16} />
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="john@example.com"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="subject">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="Project inquiry"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message">
//                   <Icons.MessageCircle size={16} />
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   placeholder="Tell me about your project..."
//                   required
//                 ></textarea>
//               </div>

//               <button type="submit" className="btn-submit">
//                 <Icons.Send size={18} />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
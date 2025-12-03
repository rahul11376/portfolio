import React from "react";
import styled from "styled-components";
import Project1 from "/src/assets/photo.jpg";


const projectImages = [
  { img: Project1, title: "Project 2" },
  { img: Project1, title: "Project 3" },
  { img: Project1, title: "Project 4" },
  { img: Project1, title: "Project 5" },
  { img: Project1, title: "Project 6" },
];

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Heading>My Projects</Heading>
        <Description>
          Explore a showcase of my diverse projects, demonstrating my skills in
          web development, design, and beyond. Each project reflects my passion
          for creating impactful and innovative digital experiences.
        </Description>

        <Grid>
          {projectImages.map((project, i) => (
            <Card key={i}>
              <Image src={project.img} alt={project.title} />
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

// Styled Components
const Section = styled.section`
  padding: 80px 24px;
  background: linear-gradient(to bottom, #2d1f2f, #221627);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
`;




























// import { motion } from "framer-motion";
// // import Project1 from "/src/assets/Screenshot 2025-12-01 101938.png"; // replace with your actual images
// import Project1 from "/src/assets/photo.jpg";
// const projectImages = [
//   { img: Project1, title: "Project 2" },
//   { img: Project1, title: "Project 3" },
//   { img: Project1, title: "Project 4" },
//   { img: Project1, title: "Project 5" },
//   { img: Project1, title: "Project 6" },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 bg-gradient-to-b from-[#2d1f2f] to-[#221627]"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-white mb-4"
//         >
//           My Portfolio
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="text-white/80 max-w-3xl mb-10"
//         >
//           Explore a showcase of my diverse projects, demonstrating my skills in web
//           development, design, and beyond. Each project reflects my passion for
//           creating impactful and innovative digital experiences.
//         </motion.p>

//         {/* Project Grid */}
// <div className="grid grid-cols-3 gap-6">
//   {projectImages.map((project, i) => (
//     <motion.div
//       key={i}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: i * 0.1 }}
//       viewport={{ once: true }}
//       className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg p-2 flex items-center justify-center"
//     >
//       <img
//         src={project.img}
//         alt={project.title}
//         className="w-[40px] h-[40px] object-cover rounded-lg"
//       />
//     </motion.div>
//   ))}
// </div>


//       </div>
//     </section>
//   );
// }









// import { motion } from "framer-motion";

// const projectImages = [
//   "src/assets/Screenshot 2025-12-01 101236.png",
//  "src/assets/Screenshot 2025-12-01 101236.png",
// "src/assets/Screenshot 2025-12-01 101236.png",
//  "src/assets/Screenshot 2025-12-01 101236.png",
// "src/assets/Screenshot 2025-12-01 101236.png",
//  "src/assets/Screenshot 2025-12-01 101236.png"
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 bg-gradient-to-b from-[#2d1f2f] to-[#221627]"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-white"
//         >
//           My Portfolio
//         </motion.h2>

//         {/* Description just like screenshot */}
//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="text-white/80 max-w-3xl mt-2 mb-10"
//         >
//           Explore a showcase of my diverse projects, demonstrating my skills in web
//           development, design, and beyond. Each project reflects my passion for
//           creating impactful and innovative digital experiences.
//         </motion.p>

//         {/* Project Image Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {projectImages.map((img, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="
//                 rounded-xl overflow-hidden 
//                 shadow-lg shadow-black/20 
//                 border border-white/10 
//                 hover:scale-[1.02] hover:shadow-xl 
//                 transition-all cursor-pointer
//               "
//             >
//               <img src={img} alt="project" className="w-10 h-10 object-cover" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }































// import { motion } from "framer-motion";

// const projects = [
//   { name: "Portfolio", desc: "Modern animated portfolio website." },
//   { name: "E-commerce App", desc: "Full-stack MERN shopping platform." },
//   { name: "Chat Application", desc: "Real-time chat with WebSockets." },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 max-w-6xl mx-auto 
//       bg-gradient-to-b from-[#0b0f17] to-[#0e121b]"
//     >
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         viewport={{ once: true }}
//         className="text-3xl font-bold text-white mb-12"
//       >
//         Projects
//       </motion.h2>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className="
//               bg-white/5 
//               backdrop-blur-xl 
//               border border-white/10 
//               rounded-2xl 
//               p-6 
//               hover:bg-white/10 
//               transition-all 
//               shadow-lg shadow-black/20
//             "
//           >
//             <h3 className="text-xl font-semibold text-white mb-2">
//               {p.name}
//             </h3>
//             <p className="text-white/70 text-sm">{p.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }






















// import { motion } from "framer-motion";

// const projects = [
//   { name: "Portfolio", desc: "Modern animated portfolio website." },
//   { name: "E-commerce App", desc: "Full-stack MERN shopping platform." },
//   { name: "Chat Application", desc: "Real-time chat with WebSockets." },
// ];

// export default function Projects() {
//   return (
//     <section id="projects">
//       <h2>Projects</h2>

//       {projects.map((p, i) => (
//         <motion.div
//           key={i}
//           className="card"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3>{p.name}</h3>
//           <p>{p.desc}</p>
//         </motion.div>
//       ))}
//     </section>
//   );
// }

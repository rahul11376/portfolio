import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import styled from "styled-components";

const skills = [
  { icon: <FaReact size={30} />, title: "React", desc: "Building modern UI and frontend systems." },
  { icon: <FaCode size={30} />, title: "JavaScript", desc: "Writing efficient and scalable JS code." },
  { icon: <FaNodeJs size={30} />, title: "Node.js", desc: "Backend development with Node.js runtime." },
  { icon: <FaDatabase size={30} />, title: "MongoDB", desc: "Working with NoSQL databases." },
  { icon: <FaCss3Alt size={30} />, title: "Tailwind CSS", desc: "Fast UI styling with utility classes." },
  { icon: <FaGitAlt size={30} />, title: "Git", desc: "Version control and code management." },
  
];

export default function Skills() {
  return (
    <Section id="skills">
      <h2>My Skills</h2>

      <Grid>
        {skills.map((skill, i) => (
          <Card
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Icon>{skill.icon}</Icon>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

/* ---------- Styled Components ---------- */

const Section = styled.section`
  padding: 80px 5%;
  text-align: center;
  color: white;

  background: linear-gradient(
    180deg,
    #2d1f2f 0%,
    #221627 100%
  ); /* EXACT screenshot dark-purple bg */

  h2 {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const Card = styled(motion.div)`
  background: linear-gradient(135deg, #fd746c, #ff9068); /* EXACT screenshot gradient */
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  text-align: left;
  color: white;

  h3 {
    margin: 8px 0;
    font-size: 20px;
  }

  p {
    opacity: 0.9;
    font-size: 15px;
    line-height: 1.4;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
`;


















// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaDatabase, FaCode, FaCss3Alt, FaGitAlt } from "react-icons/fa";
// import styled from "styled-components";
// const skills = [
//   { icon: <FaReact size={30} />, title: "React", desc: "Building modern UI and frontend systems." },
//   { icon: <FaCode size={30} />, title: "JavaScript", desc: "Writing efficient and scalable JS code." },
//   { icon: <FaNodeJs size={30} />, title: "Node.js", desc: "Backend development with Node.js runtime." },
//   { icon: <FaDatabase size={30} />, title: "MongoDB", desc: "Working with NoSQL databases." },
//   { icon: <FaCss3Alt size={30} />, title: "Tailwind CSS", desc: "Fast UI styling with utility classes." },
//   { icon: <FaGitAlt size={30} />, title: "Git", desc: "Version control and code management." },
// ];

// export default function Skills() {
//   return (
//     <Section
//       id="skills"
//       style={{
//         padding: "80px 5%",
//         background: "#1a1a1a",
//         color: "white",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "32px" }}>
//         My Skills
//       </h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//           gap: "25px",
//           maxWidth: "1100px",
//           margin: "0 auto",
//         }}
//       >
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             style={{
//               background: "linear-gradient(135deg, #fd746c, #ff9068)",
//               padding: "25px",
//               borderRadius: "12px",
//               boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
//               color: "#fff",
//             }}
//           >
//             <div style={{ fontSize: "40px", marginBottom: "15px" }}>
//               {skill.icon}
//             </div>

//             <h3 style={{ marginBottom: "8px", fontSize: "20px" }}>{skill.title}</h3>

//             <p style={{ opacity: 0.9 }}>{skill.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </Section>
//   );
// }


//  const Section = styled.div`
//   background: #2d1f2f; /* same dark purple tone from screenshot */

//  `;
















// import { motion } from "framer-motion";

// const skills = ["React", "JavaScript", "Node.js", "MongoDB", "Tailwind", "Git"];

// export default function Skills() {
//   return (
//     <section id="skills">
//       <h2>Skills</h2>

//       <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.4 }}
//             style={{
//               background: "#161b22",
//               padding: "10px 16px",
//               borderRadius: "8px",
//             }}
//           >
//             {skill}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

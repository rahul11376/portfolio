import { motion } from "framer-motion";
import styled from "styled-components";

/* ---- Layout Wrappers ---- */
const HeroWrapper = styled.section`
  min-height: 100vh;
  padding: 120px 5%;
  background: linear-gradient(135deg, #2d1f2f, #3a2c3d, #2d1f2f);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

/* ---- Left Text Section ---- */
const Left = styled.div`
  flex: 1;

  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.1;
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    max-width: 500px;
    opacity: 0.9;
  }

  .btn {
    margin-top: 40px;
    display: inline-block;
    padding: 14px 36px;
    background: #ff8b5c;
    color: #fff;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
  }
`;

/* ---- Right Image Section ---- */
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  .profile {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <Container>
        <Left>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}}>
           Rahul Raghuvanshi<br />Software & web <br />Developer
          </motion.h1>

          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3, duration:0.7}}>
           Passionate MERN stack developer specializing in crafting modern, user-centric web applications with seamless UI/UX design.
          </motion.p>

          <motion.a
            href="#contact"
            className="btn"
            whileHover={{scale:1.05}}
          >
            Hire Me Now
          </motion.a>
        </Left>

        <Right>
          <motion.img
            src="/src/assets/photo.jpg"  /* Replace with your real image */
            alt="profile"
            className="profile"
            initial={{opacity:0, scale:0.9}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.7}}
          />
        </Right>
      </Container>
    </HeroWrapper>
  );
}




























// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import styled, { keyframes } from "styled-components";

// /* Neon gradient pulse */
// const neonPulse = keyframes`
//   0%, 100% { text-shadow: 0 0 5px #58a6ff, 0 0 10px #58a6ff, 0 0 20px #58a6ff; }
//   50% { text-shadow: 0 0 20px #58a6ff, 0 0 40px #58a6ff, 0 0 60px #58a6ff; }
// `;

// /* Background matrix-like animation */
// const MatrixRain = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   pointer-events: none;

//   & span {
//     position: absolute;
//     color: #00ff99;
//     font-family: monospace;
//     font-size: 16px;
//     opacity: 0.2;
//     animation: fall linear infinite;
//   }

//   @keyframes fall {
//     0% { transform: translateY(-100%); opacity: 0; }
//     50% { opacity: 0.6; }
//     100% { transform: translateY(100vh); opacity: 0; }
//   }
// `;

// const HeroWrapper = styled.section`
//   position: relative;
//   min-height: 100vh;
//   padding: 100px 5%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   overflow: hidden;
//   background: #010101;

//   h1 {
//     font-size: 60px;
//     font-weight: 700;
//     color: #58a6ff;
//     animation: ${neonPulse} 2s infinite;
//   }

//   h2 {
//     font-size: 32px;
//     color: #00ff99;
//     font-family: monospace;
//     margin-top: 10px;
//   }

//   p {
//     color: #ccc;
//     max-width: 550px;
//     margin-top: 20px;
//   }

//   a.btn {
//     margin-top: 40px;
//     display: inline-block;
//     padding: 12px 24px;
//     color: #010101;
//     background: #58a6ff;
//     border-radius: 6px;
//     font-weight: bold;
//     text-decoration: none;
//   }
// `;

// export default function Hero() {
//   const text = "Software Developer";
//   const [display, setDisplay] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplay(text.slice(0, i));
//       i++;
//       if (i > text.length) clearInterval(interval);
//     }, 70);
//     return () => clearInterval(interval);
//   }, []);

//   /* Generate matrix-like rain symbols */
//   const matrixSymbols = Array.from({ length: 80 }, (_, i) => {
//     const style = {
//       left: `${Math.random() * 100}%`,
//       animationDuration: `${3 + Math.random() * 5}s`,
//       fontSize: `${12 + Math.random() * 24}px`,
//       top: `${-Math.random() * 100}%`,
//     };
//     const chars = "01<>/{}[]()#@";
//     const char = chars[Math.floor(Math.random() * chars.length)];
//     return <span key={i} style={style}>{char}</span>;
//   });

//   return (
//     <HeroWrapper>
//       <MatrixRain>{matrixSymbols}</MatrixRain>

//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Hi, I'm <span style={{ color: "#58a6ff" }}>Rahul</span>
//       </motion.h1>

//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//       >
//         {display}|
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//       >
//         I create high-performance, modern web experiences that feel like magic.
//       </motion.p>

//       <motion.a
//         href="#projects"
//         whileHover={{ scale: 1.1 }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="btn"
//       >
//         View Projects
//       </motion.a>
//     </HeroWrapper>
//   );
// }


























// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import styled from "styled-components";


// const HeroWrapper = styled.section`
//   min-height: 100vh;
//   padding: 100px 5%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   /* 🔥 Beautiful animated gradient background */
//   background: linear-gradient(120deg, #0d1117, #1a1f2b, #0d1117);
//   background-size: 300% 300%;
//   animation: gradientMove 12s ease infinite;

//   @keyframes gradientMove {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
//   }

//   /* Glow overlay */
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: radial-gradient(circle, rgba(88,166,255,0.25), transparent);
//     animation: rotateGlow 15s linear infinite;
//   }

//   @keyframes rotateGlow {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

// export default function Hero() {

//   const text = "Software Developer";
//   const [display, setDisplay] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplay(text.slice(0, i));
//       i++;
//       if (i > text.length) clearInterval(interval);
//     }, 70);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <HeroWrapper>
      
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{ fontSize: "52px", fontWeight: "700" }}
//       >
//         Hi, I'm <span style={{ color: "#58a6ff" }}>Rahul</span>
//       </motion.h1>

//       <motion.h2
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//         style={{ fontSize: "32px", color: "#58a6ff" }}
//       >
//         {display}|
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//         style={{ maxWidth: "550px", marginTop: "10px" }}
//       >
//         I create modern, animated, and fast user experiences.
//       </motion.p>

//       <motion.a
//         href="#projects"
//         whileHover={{ scale: 1.08 }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="btn"
//         style={{ width: "fit-content", marginTop: "30px" }}
//       >
//         View Projects
//       </motion.a>
//     </HeroWrapper>
//   );
// }



























// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Hero() {
//   const text = "Software Developer";
//   const [display, setDisplay] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplay(text.slice(0, i));
//       i++;
//       if (i > text.length) clearInterval(interval);
//     }, 80);

//     return () => clearInterval(interval);
//   }, []);

//   const fadeUp = {
//     hidden: { opacity: 0, y: 25 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <section id="hero">
//       <motion.h1
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         transition={{ duration: 0.6 }}
//       >
//         Hi, I'm <span style={{ color: "#58a6ff" }}>Rahul</span>
//       </motion.h1>

//       <motion.h2
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="type"
//       >
//         {display}|
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         transition={{ delay: 0.6, duration: 0.6 }}
//       >
//         I build modern, fast and beautiful web applications.
//       </motion.p>

//       <motion.a
//         href="#projects"
//         className="btn"
//         whileHover={{ scale: 1.05 }}
//       >
//         View Projects
//       </motion.a>
//     </section>
//   );
// }

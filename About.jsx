import { motion } from "framer-motion";
import styled from "styled-components";

/* ---- Wrapper ---- */
const AboutWrapper = styled.section`
  padding: 120px 5%;
  background: #2d1f2f; /* same dark purple tone from screenshot */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

/* ---- Left Image + Decoration ---- */
const Left = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;

  .profile {
    width: 330px;
    height: 330px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 2;
  }

  /* dotted decoration behind image */
  .dots {
    position: absolute;
    width: 160px;
    height: 160px;
    background-image: radial-gradient(#ffffff50 2px, transparent 2.5px);
    background-size: 14px 14px;
    top: 10%;
    right: 5%;
    z-index: 1;
  }
`;

/* ---- Right Text Area ---- */
const Right = styled.div`
  flex: 1;

  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #eee;
    max-width: 500px;
    margin-bottom: 30px;
  }

  .btn {
    display: inline-block;
    padding: 14px 36px;
    background: #ff8b5c;
    border-radius: 6px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
`;

export default function About() {
  return (
    <AboutWrapper id="about">
      <Container>

        {/* LEFT (Profile Image) */}
        <Left>
          <motion.img
            src="/your-image-here.jpg" /* replace with real image */
            alt="profile"
            className="profile"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          <div className="dots"></div>
        </Left>

        {/* RIGHT (Text Content) */}
        <Right>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Bit About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A passionate web developer with a creative flair and a knack for
            turning visions into reality. I blend aesthetics with functionality
            to craft smooth and meaningful digital experiences.
          </motion.p>

          <motion.a
            href="#contact"
            className="btn"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </Right>

      </Container>
    </AboutWrapper>
  );
}



















// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about">
//       <motion.h2
//         initial={{ opacity: 0, x: -30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         About Me
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         I am a passionate software developer who loves creating smooth,
//         interactive and modern digital experiences.
//       </motion.p>
//     </section>
//   );
// }

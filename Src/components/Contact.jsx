import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  background: linear-gradient(135deg, #2d1f2f, #3a2c3d, #2d1f2f);
  padding: 4rem 1rem;
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  opacity: 0;
  &.visible {
    animation: ${fadeInUp} 0.7s forwards;
  }
`;

const Subheading = styled.p`
  max-width: 400px;
  margin: 0 auto 1.5rem;
  font-size: 0.875rem;
  opacity: 0;
  &.visible {
    animation: ${fadeInUp} 0.7s forwards;
    animation-delay: 0.3s;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  &.visible {
    animation: ${fadeInUp} 0.7s forwards;
    animation-delay: 0.6s;
  }

  a {
    color: white;
    transition: color 0.3s ease;
    svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }
    &:hover {
      color: #1da1f2; /* default hover color (Twitter blue) */
    }
    &:nth-child(2):hover {
      color: #0077b5; /* LinkedIn blue */
    }
    &:nth-child(3):hover {
      color: #1769ff; /* Behance blue */
    }
    &:nth-child(4):hover {
      color: #e1306c; /* Instagram pink */
    }
    &:nth-child(5):hover {
      color: #6e5494; /* GitHub purple-ish */
    }
  }
`;

const FooterText = styled.p`
  font-size: 0.75rem;
  color: #999;
  opacity: 0;
  &.visible {
    animation: ${fadeInUp} 0.7s forwards;
    animation-delay: 0.9s;
  }
`;

export default function Contact() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const iconsRef = useRef(null);
  const footerRef = useRef(null);

  const [visible, setVisible] = useState({
    heading: false,
    subheading: false,
    icons: false,
    footer: false,
  });

  useEffect(() => {
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            setVisible((v) => ({ ...v, heading: true }));
          } else if (entry.target === subheadingRef.current) {
            setVisible((v) => ({ ...v, subheading: true }));
          } else if (entry.target === iconsRef.current) {
            setVisible((v) => ({ ...v, icons: true }));
          } else if (entry.target === footerRef.current) {
            setVisible((v) => ({ ...v, footer: true }));
          }
        }
      });
    }, options);

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (iconsRef.current) observer.observe(iconsRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (iconsRef.current) observer.unobserve(iconsRef.current);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <Section id="contact">
      <Heading ref={headingRef} className={visible.heading ? "visible" : ""}>
        Let's Talk With Me!
      </Heading>

      <Subheading ref={subheadingRef} className={visible.subheading ? "visible" : ""}>
        An open invitation to connect, and exploring collaborative opportunities on my personal portfolio website.
      </Subheading>

      <IconsContainer ref={iconsRef} className={visible.icons ? "visible" : ""}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.89-2.37 8.55 8.55 0 0 1-2.7 1.03 4.28 4.28 0 0 0-7.3 3.9 12.14 12.14 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.33 5.71 4.23 4.23 0 0 1-1.94-.53v.05a4.28 4.28 0 0 0 3.44 4.2 4.29 4.29 0 0 1-1.93.07 4.29 4.29 0 0 0 4 3 8.6 8.6 0 0 1-5.33 1.84A8.67 8.67 0 0 1 2 18.57a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.19 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 22.46 6z"/>
          </svg>
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24">
            <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8a2.5 2.5 0 0 1-.02-4.5zM2 21.5h6v-11H2v11zM8.5 21.5h6v-5.5a2.5 2.5 0 0 1 5 0v5.5h6v-6a8 8 0 0 0-8-8 7.9 7.9 0 0 0-6 2.75V10h-6v11.5z"/>
          </svg>
        </a>

        <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
          <svg viewBox="0 0 24 24">
            <path d="M5 3h14v18H5zM11 9h3a2 2 0 1 1 0 4h-3v-4zm-4 1v2h3a1 1 0 0 0 0-2H7z"/>
          </svg>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm8 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4 1a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
          </svg>
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34a2.64 2.64 0 0 0-1.11-1.46c-.9-.61.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.13 2.13 0 0 1 .63-1.34c-2.22-.25-4.56-1.11-4.56-4.95a3.88 3.88 0 0 1 1.03-2.7 3.6 3.6 0 0 1 .09-2.66s.84-.27 2.75 1.02a9.45 9.45 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .09 2.66 3.88 3.88 0 0 1 1.03 2.7c0 3.86-2.34 4.7-4.57 4.95a2.38 2.38 0 0 1 .68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/>
          </svg>
        </a>
      </IconsContainer>

      <FooterText ref={footerRef} className={visible.footer ? "visible" : ""}>
        Copyright © 2025 Web Design Mastery. All rights reserved.
      </FooterText>
    </Section>
  );
}






































// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <section id="contact" className="bg-gradient-to-t from-[#1a1a2e] to-[#0f1624] py-16 text-center text-white">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="text-xl font-semibold mb-2"
//       >
//         Let's Talk With Me!
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.3 }}
//         viewport={{ once: true }}
//         className="text-sm max-w-md mx-auto mb-6"
//       >
//         An open invitation to connect, and exploring collaborative opportunities on my personal portfolio website.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7, delay: 0.6 }}
//         viewport={{ once: true }}
//         className="flex justify-center space-x-6 mb-8"
//       >
//         {/* Social Icons */}
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
//           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.89-2.37 8.55 8.55 0 0 1-2.7 1.03 4.28 4.28 0 0 0-7.3 3.9 12.14 12.14 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.33 5.71 4.23 4.23 0 0 1-1.94-.53v.05a4.28 4.28 0 0 0 3.44 4.2 4.29 4.29 0 0 1-1.93.07 4.29 4.29 0 0 0 4 3 8.6 8.6 0 0 1-5.33 1.84A8.67 8.67 0 0 1 2 18.57a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.19 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 22.46 6z"/></svg>
//         </a>

//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600">
//           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8a2.5 2.5 0 0 1-.02-4.5zM2 21.5h6v-11H2v11zM8.5 21.5h6v-5.5a2.5 2.5 0 0 1 5 0v5.5h6v-6a8 8 0 0 0-8-8 7.9 7.9 0 0 0-6 2.75V10h-6v11.5z"/></svg>
//         </a>

//         <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="hover:text-blue-500">
//           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3h14v18H5zM11 9h3a2 2 0 1 1 0 4h-3v-4zm-4 1v2h3a1 1 0 0 0 0-2H7z"/></svg>
//         </a>

//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
//           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm8 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4 1a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
//         </a>

//         <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-400">
//           <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34a2.64 2.64 0 0 0-1.11-1.46c-.9-.61.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.13 2.13 0 0 1 .63-1.34c-2.22-.25-4.56-1.11-4.56-4.95a3.88 3.88 0 0 1 1.03-2.7 3.6 3.6 0 0 1 .09-2.66s.84-.27 2.75 1.02a9.45 9.45 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .09 2.66 3.88 3.88 0 0 1 1.03 2.7c0 3.86-2.34 4.7-4.57 4.95a2.38 2.38 0 0 1 .68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
//         </a>
//       </motion.div>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.9 }}
//         viewport={{ once: true }}
//         className="text-xs text-gray-400"
//       >
//         Copyright © 2025 Web Design Mastery. All rights reserved.
//       </motion.p>
//     </section>
//   );
// }























// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <section id="contact">
//       <h2>Contact</h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         Email: yourname@gmail.com
//       </motion.p>
//     </section>
//   );
// }

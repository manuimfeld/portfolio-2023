import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const Skills = () => {
  const logos = [
    { id: 1, logoSvg: FaHtml5, name: "HTML", color: "#E35526" },
    { id: 2, logoSvg: FaCss3Alt, name: "CSS", color: "#2862E9" },
    { id: 3, logoSvg: FaJs, name: "JavaScript", color: "#EFD81D" },
    { id: 4, logoSvg: FaBootstrap, name: "Bootstrap", color: "#8311F6" },
    { id: 5, logoSvg: FaGithub, name: "Github", color: "#FFFFFF" },
    { id: 6, logoSvg: FaGitAlt, name: "Git", color: "#E84E31" },
    { id: 7, logoSvg: FaReact, name: "React", color: "#1399C4" },
    { id: 8, logoSvg: FaNodeJs, name: "NodeJS", color: "#669E61" },
  ];

  return (
    <section
      id="skills"
      className="font-[Roboto] bg-[#202833] mx-auto min-h-[calc(100vh_-_60px)] px-[20px] md:px-[40px]"
    >
      <h2 className="text-color-primary mx-auto w-fit text-2xl pt-10">
        Habilidades
      </h2>
      <ul className="overflow-x-hidden flex justify-around nowrap w-full mx-auto text-text-secondary font-[Roboto] uppercase pt-10">
        <Marquee speed="100" gradient="true" gradientColor={[32, 40, 51]}>
          {logos.map((logo) => (
            <li
              key={logo.id}
              className={`flex flex-col w-fit h-fit items-center mx-14 z-0 pb-3`}
              style={{ borderBottom: `3px solid ${logo.color}` }}
            >
              <p>{logo.name}</p>
              <logo.logoSvg
                className="text-color-primary h-8 w-8 mx-3"
                style={{ color: `${logo.color}` }}
              />
            </li>
          ))}
        </Marquee>
      </ul>
      <div className="font-[Roboto] w-full h-full flex flex-wrap justify-center sm:justify-between items-center sm:items-start sm:mt-10">
        <motion.article
          whileHover={{ scale: 1.1 }}
          className="text-text-primary border-2 border-color-primary flex flex-col h-[300px] justify-between items-center w-[80%] sm:w-[40%] my-10 bg-color-bg-third rounded-[15px] py-10"
        >
          <h2 className="font-bold border-b-2">Habilidades principales</h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>ReactJS</p>
        </motion.article>
        <motion.article
          whileHover={{ scale: 1.1 }}
          className="text-text-primary border-2 border-color-primary flex flex-col h-[300px] justify-between items-center w-[80%] sm:w-[40%] mb-10 sm:my-10 bg-color-bg-third rounded-[15px] py-10"
        >
          <h2 className="font-bold border-b-2">Otras habilidades</h2>
          <p>Tailwind</p>
          <p>NodeJS</p>
          <p>MongoDB</p>
          <p>Strapi</p>
        </motion.article>
      </div>
    </section>
  );
};

export default Skills;

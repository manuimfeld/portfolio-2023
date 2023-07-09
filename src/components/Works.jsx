import { motion } from "framer-motion";
import { useState } from "react";

const Works = () => {
  const [showDescription, setShowDescription] = useState("");

  const handleTap = (work) => {
    if (showDescription !== work) {
      setShowDescription(work);
    } else {
      setShowDescription("");
    }
  };

  return (
    <section
      id="works"
      className="text-center bg-[#202833] flex flex-col sm:content-start sm:flex-row sm:flex-wrap lg:justify-around justify-start items-start mx-auto min-h-[calc(100vh_-_60px)] px-[20px] lg:px-[40px]"
    >
      <h2 className="text-color-primary mx-auto w-fit sm:w-full h-fit mb-5 text-2xl pt-10">
        Proyectos
      </h2>
      <motion.article
        className="cursor-pointer relative h-[200px] lg:h-[300px] w-[90%] sm:w-[40%] lg:w-[30%] mx-auto lg:mx-0 my-5 rounded-[15px]"
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src="https://manuimfeld.com.ar/img/trivia.png"
          alt=""
          className="w-[100%] h-full object-cover rounded-[10px] border-2 border-color-primary"
        />
        <motion.div
          className="text-center py-2 px-4 absolute top-0 opacity-0 flex flex-col justify-between items-center bg-color-bg-third h-[200px] lg:h-[300px] w-[100%]  rounded-[10px] border-2 border-color-primary"
          animate={{ opacity: showDescription === "trivia" ? 1 : 0 }}
          onTap={() => handleTap("trivia")}
        >
          <h2 className="text-text-primary mt-[10px] lg:text-xl">
            Trivia YSY-A
          </h2>
          <p className="text-xs text-text-secondary lg:text-lg">
            Un quizz donde tenés que responder qué canción se está reproduciendo
          </p>
          <p className="text-text-primary mt-auto lg:text-xl">Tecnologias</p>
          <p className="text-sm font-bold text-color-secondary lg:mb-auto lg:text-lg">
            React React-router-dom HTML, CSS
          </p>
          <a
            href="https://trivia-ysya.manuimfeld.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="text-color-primary mt-auto lg:mt-0 mb-2 font-bold uppercase py-1 px-4 border-2 border-color-primary rounded-[20px]"
          >
            Ver proyecto
          </a>
        </motion.div>
      </motion.article>
      <motion.article
        className="cursor-pointer relative h-[200px] lg:h-[300px] w-[90%] sm:w-[40%] lg:w-[30%] mx-auto lg:mx-0 my-5 rounded-[15px]"
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src="https://manuimfeld.com.ar/img/trivia.png"
          alt=""
          className="w-[100%] h-full object-cover rounded-[10px] border-2 border-color-primary"
        />
        <motion.div
          className="text-center py-2 px-4 absolute top-0 opacity-0 flex flex-col justify-between items-center bg-color-bg-third h-[200px] lg:h-[300px] w-[100%]  rounded-[10px] border-2 border-color-primary"
          animate={{ opacity: showDescription === "trivia" ? 1 : 0 }}
          onTap={() => handleTap("trivia")}
        >
          <h2 className="text-text-primary mt-[10px] lg:text-xl">
            Trivia YSY-A
          </h2>
          <p className="text-xs text-text-secondary lg:text-lg">
            Un quizz donde tenés que responder qué canción se está reproduciendo
          </p>
          <p className="text-text-primary mt-auto lg:text-xl">Tecnologias</p>
          <p className="text-sm font-bold text-color-secondary lg:mb-auto lg:text-lg">
            React React-router-dom HTML, CSS
          </p>
          <a
            href="https://trivia-ysya.manuimfeld.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="text-color-primary mt-auto lg:mt-0 mb-2 font-bold uppercase py-1 px-4 border-2 border-color-primary rounded-[20px]"
          >
            Ver proyecto
          </a>
        </motion.div>
      </motion.article>
      <motion.article
        className="cursor-pointer relative h-[200px] lg:h-[300px] w-[90%] sm:w-[40%] lg:w-[30%] mx-auto lg:mx-0 my-5 rounded-[15px]"
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src="https://manuimfeld.com.ar/img/trivia.png"
          alt=""
          className="w-[100%] h-full object-cover rounded-[10px] border-2 border-color-primary"
        />
        <motion.div
          className="text-center py-2 px-4 absolute top-0 opacity-0 flex flex-col justify-between items-center bg-color-bg-third h-[200px] lg:h-[300px] w-[100%]  rounded-[10px] border-2 border-color-primary"
          animate={{ opacity: showDescription === "trivia" ? 1 : 0 }}
          onTap={() => handleTap("trivia")}
        >
          <h2 className="text-text-primary mt-[10px] lg:text-xl">
            Trivia YSY-A
          </h2>
          <p className="text-xs text-text-secondary lg:text-lg">
            Un quizz donde tenés que responder qué canción se está reproduciendo
          </p>
          <p className="text-text-primary mt-auto lg:text-xl">Tecnologias</p>
          <p className="text-sm font-bold text-color-secondary lg:mb-auto lg:text-lg">
            React React-router-dom HTML, CSS
          </p>
          <a
            href="https://trivia-ysya.manuimfeld.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="text-color-primary mt-auto lg:mt-0 mb-2 font-bold uppercase py-1 px-4 border-2 border-color-primary rounded-[20px]"
          >
            Ver proyecto
          </a>
        </motion.div>
      </motion.article>
      <motion.article
        className="cursor-pointer relative h-[200px] lg:h-[300px] w-[90%] sm:w-[40%] lg:w-[30%] mx-auto lg:mx-0 my-5 rounded-[15px]"
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src="https://manuimfeld.com.ar/img/trivia.png"
          alt=""
          className="w-[100%] h-full object-cover rounded-[10px] border-2 border-color-primary"
        />
        <motion.div
          className="text-center py-2 px-4 absolute top-0 opacity-0 flex flex-col justify-between items-center bg-color-bg-third h-[200px] lg:h-[300px] w-[100%]  rounded-[10px] border-2 border-color-primary"
          animate={{ opacity: showDescription === "trivia" ? 1 : 0 }}
          onTap={() => handleTap("trivia")}
        >
          <h2 className="text-text-primary mt-[10px] lg:text-xl">
            Trivia YSY-A
          </h2>
          <p className="text-xs text-text-secondary lg:text-lg">
            Un quizz donde tenés que responder qué canción se está reproduciendo
          </p>
          <p className="text-text-primary mt-auto lg:text-xl">Tecnologias</p>
          <p className="text-sm font-bold text-color-secondary lg:mb-auto lg:text-lg">
            React React-router-dom HTML, CSS
          </p>
          <a
            href="https://trivia-ysya.manuimfeld.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="text-color-primary mt-auto lg:mt-0 mb-2 font-bold uppercase py-1 px-4 border-2 border-color-primary rounded-[20px]"
          >
            Ver proyecto
          </a>
        </motion.div>
      </motion.article>
    </section>
  );
};
export default Works;

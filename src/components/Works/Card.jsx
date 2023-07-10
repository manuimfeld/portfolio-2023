import { motion } from "framer-motion";

const Card = ({ showDescription, handleTap, data }) => {
  return (
    <motion.article
      className="cursor-pointer relative h-[200px] lg:h-[300px] w-[90%] sm:w-[40%] lg:w-[30%] mx-auto lg:mx-0 my-5 rounded-[15px]"
      whileHover={{ scale: 1.1 }}
    >
      <motion.img
        src={data.imgURL}
        alt={data.text}
        className="w-[100%] h-full object-cover rounded-[10px] border-2 border-color-primary"
      />
      <motion.div
        className="text-center py-2 px-4 absolute top-0 opacity-0 flex flex-col justify-between items-center bg-color-bg-third h-[200px] lg:h-[300px] w-[100%]  rounded-[10px] border-2 border-color-primary"
        animate={{ opacity: showDescription === data.title ? 1 : 0 }}
        onTap={() => handleTap(data.title)}
      >
        <h2 className="text-text-primary mt-[10px] lg:text-xl">{data.title}</h2>
        <p className="text-xs text-text-secondary lg:text-lg">{data.text}</p>
        <p className="text-text-primary mt-auto lg:text-xl">Tecnologias</p>
        <p className="text-sm font-bold text-color-secondary lg:mb-auto lg:text-lg">
          {data.technologies}
        </p>
        <a
          href={data.workURL}
          target="_blank"
          rel="noreferrer"
          className="text-color-primary mt-auto lg:mt-0 mb-2 font-bold uppercase py-1 px-4 border-2 border-color-primary rounded-[20px]"
        >
          Ver proyecto
        </a>
      </motion.div>
    </motion.article>
  );
};
export default Card;

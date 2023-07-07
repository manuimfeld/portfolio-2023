import homeImg from "../img/webp_vector.webp";
import arrowImg from "../img/svg_arrow.svg";
import { motion } from "framer-motion";

const Home = ({ setActiveNavItem }) => {
  return (
    <motion.main
      id="home"
      className="flex flex-col justify-center items-center text-center flex-wrap h-[calc(100vh_-_60px)] bg-[radial-gradient(circle,_rgba(47,62,81,1)_0%,_rgba(32,40,51,1)_89%)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 1] }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.img
        src={homeImg}
        alt="Ilustracion SVG de una persona programando"
        className=" h-[40%] w-fit  md:h-[50vh] mt-[-40px] "
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="font-['Roboto']  flex flex-col justify-center align-center w-[65%] sm:w-[40%] md:w-[30%]"
        initial={{ x: "-50%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="text-sm font-bold uppercase text-color-secondary">
          Desarrollador web
        </p>
        <h1 className="text-4xl w-fit mb-5 font-bold text-text-primary  mx-auto ">
          Manuel Imfeld
        </h1>
        <button className="uppercase text-color-primary px-8 h-[40px] w-auto  rounded border-2 border-color-primary">
          Ver curriculum
        </button>
      </motion.div>
      <a
        href="#aboutme"
        className="flex justify-center mt-5  px-auto"
        onClick={() => setActiveNavItem("aboutme")}
      >
        <motion.img
          src={arrowImg}
          alt=""
          className="h-10 w-fit  text-color-primary filterArrow"
          initial={{ rotateX: 180 }}
          animate={{ y: [0, 10, 0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </a>
    </motion.main>
  );
};
export default Home;

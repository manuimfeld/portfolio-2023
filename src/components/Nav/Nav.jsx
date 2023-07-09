import { motion, AnimatePresence } from "framer-motion";
import { FaList, FaWindowClose } from "react-icons/fa";
import ItemNav from "./ItemNav";
import { useState } from "react";

const Nav = ({ activeNavItem, setActiveNavItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navOptions = [
    { section: "aboutme", text: "Sobre mi" },
    { section: "skills", text: "Habilidades" },
    { section: "works", text: "Proyectos" },
    { section: "contact", text: "Contacto" },
  ];

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <motion.nav
      className="w-auto sticky top-0 h-[60px]  bg-[#202833] z-10 border-b-[3px] border-color-bg-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 1] }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <ul
        className={`${
          isOpen === true
            ? "h-[100vh] flex flex-col md:flex-row justify-start md:px-[40px] md:justify-center lg:justify-end items-center md:h-full text-[#838991]  bg-[#202833]"
            : "flex items-center h-full px-[20px] md:px-[40px]"
        } justify-center md:justify-end items-center md:h-full text-[#838991]  bg-[#202833]`}
      >
        {/* nav Custom item  */}
        <motion.li
          className={`my-5 h-fit w-fit text-color-primary md:font-bold md:mr-auto`}
          onClick={() => handleNavItemClick("home")}
          whileHover={{ scale: 1.1 }}
        >
          <a href="#home" onClick={() => setIsOpen(false)}>
            {`<`}
            <span className="text-text-primary font-bold">Manuel Imfeld </span>
            {` />`}
          </a>
          <AnimatePresence>
            {activeNavItem === "home" && (
              <motion.div
                className="border-b-2 border-[#66FAEF]"
                layoutId="underline"
                key="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </motion.li>
        {/* nav Items */}
        {navOptions.map((options) => {
          return (
            <ItemNav
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              activeNavItem={activeNavItem}
              handleNavItemClick={handleNavItemClick}
              dataItem={options}
              key={options.section}
            />
          );
        })}
        {/* nav button Menú mobile */}
        <li
          className={`${
            isOpen === false ? "ml-auto md:ml-0" : ""
          } flex items-center my-5 text-white`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaWindowClose
            className={`${isOpen === true ? " md:hidden" : "hidden"}`}
          />
          <FaList
            className={`${isOpen === true ? "hidden" : "md:hidden"} mr-[5px]`}
          />
          <button className={`h-fit md:hidden`}>
            {isOpen === false ? "Menu" : "Cerrar menú"}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};
export default Nav;

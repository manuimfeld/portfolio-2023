import { motion, AnimatePresence } from "framer-motion";

const ItemNav = ({
  isOpen,
  setIsOpen,
  activeNavItem,
  handleNavItemClick,
  dataItem,
}) => {
  return (
    <motion.li
      className={`${
        isOpen === false ? "hidden md:inline-block" : ""
      } h-fit md:px-10 my-2 ${
        dataItem.text === "Contacto" ? "md:pl-10 md:pr-0" : ""
      }`}
      onClick={() => {
        handleNavItemClick(dataItem.section), setIsOpen(!isOpen);
      }}
      whileHover={{ scale: 1.1 }}
    >
      <a href={`#${dataItem.section}`}>{dataItem.text}</a>
      <AnimatePresence>
        {activeNavItem === dataItem.section && (
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
  );
};
export default ItemNav;

import { motion } from "framer-motion";

const NavMenuButton = ({ text, onClick }) => {
  
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.05 }}

      className="navmenu-btn"
      onClick={onClick}
    >
      {text}
    </motion.button>
  )
}
export default NavMenuButton;
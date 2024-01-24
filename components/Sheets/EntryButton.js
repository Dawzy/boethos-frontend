import { motion } from "framer-motion"

const EntryButton = ({ text, clickHandler, isDelete }) => {
  return (
    <motion.button
      className={`${isDelete && "del"} h-fit w-full text-[14px] rounded-full border-2 px-3 py-1 m-1`}
      onClick={clickHandler}
      whileHover={{ y: -3 }}
    >
      
      {text}
    </motion.button>
  )
}
export default EntryButton
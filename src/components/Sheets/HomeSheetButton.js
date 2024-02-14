import { motion } from "framer-motion";
import { LuFileSpreadsheet } from "react-icons/lu";

const HomeSheetButton = ({ sheetName, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.05 }}
      className="m-4"
    >
      <div className="w-28 h-28 bordered rounded-xl flex flex-col justify-center items-center">
        <LuFileSpreadsheet className="text-[50px]" /> 
      </div>
      <p className="text-center text-[16px] font-[500]">{sheetName}</p>
    </motion.button>
  )
}
export default HomeSheetButton
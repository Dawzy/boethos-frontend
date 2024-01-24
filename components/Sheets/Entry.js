import { BiSolidDownArrow, BiSolidRightArrow  } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import Constants from "@/constants/Constants";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import EntryButton from "./EntryButton";

const Entry = ({ entry, sheetid }) => {
  const [collapsed, setCollapse] = useState(true);
  const router = useRouter();

  const onDeleteClick = () => {}
  const onHistoryClick = () => {
    router.push(`/sheets/${sheetid}/history/${entry.id}`)
  }

  return (
    <div className="w-full flex flex-col items-center border-b-2 pt-3 pb-1 last:border-0">
      <div className="w-full flex justify-start items-center">
        <div className="ml-1.5 cursor-pointer" onClick={() => setCollapse(prev => !prev)}>
          {collapsed ?
            <BiSolidRightArrow />
          :
            <BiSolidDownArrow />
          }
        </div>

        <label className="mx-1">{entry.name}</label>

        <motion.div 
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.05 }}
          className="ml-auto mr-2 scale-105 cursor-pointer"
        >
          <FaCheck />
        </motion.div>
      </div>

      {!collapsed &&
      <>
        {/* Information Group */}
        <div className="w-full my-2 text-gray-400 text-right flex flex-col items-start">
          <div className="flex justify-start">
            <label className="px-2 w-28">Last seen: </label>
            <label className="text-black">{entry.history.at(-1).toISOString().slice(0,10).replace(/-/g,"")}</label>
          </div>
          <div className="flex justify-start">
            <label className="px-2 w-28">Times seen: </label>
            <label className="text-black">{entry.history.length}</label>
          </div>
          <div className="flex justify-start">
            <label className="px-2 w-28">Added on: </label>
            <label className="text-black">{entry.addedOn.toISOString().slice(0,10).replace(/-/g,"")}</label>
          </div>
        </div>

        {/* Buttons Group */}
        <div className="flex justify-evenly items-center w-full">
          <EntryButton
            isDelete
            text={Constants.delete}
            clickHandler={onDeleteClick}
          />
          <EntryButton
            text={Constants.history}
            clickHandler={onHistoryClick}
          />
        </div>
      </>
      }
    </div>
  )
}
export default Entry;
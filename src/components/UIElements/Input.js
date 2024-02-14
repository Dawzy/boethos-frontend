"use client"

import { useState, useRef } from "react";
import { BsEyeFill, BsEyeSlashFill, BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const Input = ({ placeholder, type, setValue }) => {
  const [showPassword, setShowPassword] = useState(false);
  const input = useRef();

  const focusInput = () => {
    input.current.focus();
  }

  return (
    <div className="flex items-center h-10 w-full rounded-xl bordered p-2 m-1">
      <input
        className="h-full w-full outline-none bg-inherit"
        placeholder={placeholder}
        type={ (!showPassword && type) || "text"}
        onChange={(e) => setValue(e.target.value)}
        ref={input}
      />

      {type === "password" &&
        <div
          className="cursor-pointer h-full flex items-center"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
        </div>
      }

      {type === "search" &&
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.05 }}
          className="h-full flex items-center cursor-pointer"
          onClick={focusInput}
        >
          
          <BsSearch />
        </motion.div>
      }
    </div>
  )
}
export default Input;
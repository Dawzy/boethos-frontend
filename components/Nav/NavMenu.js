"use client"

import { motion } from "framer-motion";
import NavMenuButton from "./NavMenuButton.js";
import { useRouter } from "next/navigation";
import Constants from "@/constants/Constants";

const NavMenu = ({ isVisible }) => {
  const router = useRouter();

  return (
    <div className="z-10">
      <motion.div
        animate={{ x: (isVisible ? "-100%" : "100%") }}
        transition={{ duration: 0.15 }}
        className="fixed bg-white left-full w-full h-[95vh] p-2 flex flex-col"
      >
        <NavMenuButton text={Constants.mySheets} onClick={() => router.push("/sheets")} />
        <NavMenuButton text={Constants.settings} onClick={() => router.push("/settings")} />
        <NavMenuButton text={Constants.logOut} onClick={() => {}} />
      </motion.div>
    </div>
  )
}

export default NavMenu;
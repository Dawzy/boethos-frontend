"use client"

import { motion } from "framer-motion";
import NavMenuButton from "./NavMenuButton.js";
import { useRouter } from "next/router";
import Constants from "@/constants/Constants";

const NavMenu = ({ isVisible }) => {
  const router = useRouter();

  return (
    <motion.div
      animate={{ x: (isVisible ? "-100%" : "100%") }}
      transition={{ duration: 0.15 }}
      className="fixed bg-light-main dark:bg-dark-main left-full w-full h-[95vh] p-2 flex flex-col z-50"
    >
      <NavMenuButton text={Constants.mySheets} onClick={() => router.push("/sheets")} />
      <NavMenuButton text={Constants.settings} onClick={() => router.push("/settings")} />
      <NavMenuButton text={Constants.logOut} onClick={() => {}} />
    </motion.div>
  )
}

export default NavMenu;
"use client"

import NavBar from "@/components/Nav/NavBar.js";
import NavMenu from "@/components/Nav/NavMenu.js";
import { useState } from "react";

const Nav = () => {
  const [navMenuVisible, setNavMenu] = useState(false);
  
  return (
    <>
      <NavBar navMenuVisible={navMenuVisible} setNavMenu={setNavMenu} />
      <NavMenu isVisible={navMenuVisible} />
    </>
  )
}
export default Nav;
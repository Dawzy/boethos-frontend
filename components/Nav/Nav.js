"use client"

import NavBar from "@/Components/Nav/NavBar.js";
import NavMenu from "@/Components/Nav/NavMenu.js";
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
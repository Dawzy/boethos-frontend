import Constants from "@/constants/Constants";
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/contexts/AppContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { MdKeyboardBackspace } from "react-icons/md";

const NavBar = ({ navMenuVisible, setNavMenu }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [title, setTitle] = useState(Constants.boethos);
  const { sheets, darkMode, setDarkMode } = useContext(AppContext);

  useEffect(() => {
    setNavMenu(false);

    // Navbar Title Logic
    const pathTokens = pathname.split("/").filter(item => item);
    if (pathTokens.length > 0) {
      switch (pathTokens[0]) {
        case "sheets":
          // if (pathTokens.length > 1) {
          //   const sheetName = sheets.find(item => item.id == pathTokens.at(-1)).name;
          //   setTitle(`${sheetName} - Sheet`);
          // } else {
            setTitle("Sheets");
          // }

          break;
        case "settings":
          setTitle(Constants.settings);
          break;
      }

    } else {
      setTitle(Constants.boethos);
    }

  }, [pathname]);

  return (
    <div className="bg-white border-b-2 w-full p-2 flex justify-between">
      {/* Nav Title */}
      <div className="text-[20px] font-[500] flex items-center">
        {pathname !== "/" &&
          <div className="scale-125 mr-2 cursor-pointer" onClick={() => router.back()}>
            <MdKeyboardBackspace />
          </div>
        }
        {title || Constants.boethos}
      </div>

      <div className="flex flex-row-reverse items-center">
        <button className="scale-150 ml-1" onClick={() => {console.log("CLICKED"); setNavMenu(prev => !prev)}}>
          {navMenuVisible ? 
            <GrClose />
          :
            <TiThMenu />
          }
        </button>
        <button className="scale-125 mx-2" onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ?
            <BsFillSunFill  className="fill-white"/>
          :
            <BsMoonFill/>
          }
        </button>
        <Link className="scale-150 mx-2" href="/">
          <BiSolidHomeAlt2 />
        </Link>
      </div>
    </div>
  )
}

export default NavBar;
"use client"

import Constants from "@/constants/Constants"
import AppContext from "@/contexts/AppContext"
import { useContext } from "react"
import { useRouter } from "next/navigation"

const Settings = () => {
  const { setDarkMode } = useContext(AppContext);
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="border-2 rounded-lg flex flex-col items-center justify-center text-center w-full mb-2">
        <p>David Fawzy</p>
        <p>d***02@gmail.com</p>
        <p>3 Sheets</p>
      </div>
      
      <div className="border-2 rounded-lg flex flex-col justify-center items-center text-center w-full p-3">
        <button onClick={() => setDarkMode(prev => !prev)} className="settings-btn">
          {Constants.toggleDarkMode}
        </button>
        
        <button onClick={() => router.push("/change-password")} className="settings-btn">
          {Constants.changePassword}
        </button>

        <button onClick={() => {}} className="settings-btn">
          {Constants.logOut}
        </button>

        <button onClick={() => {}} className="del settings-btn">
          {Constants.deleteAccount}
        </button>
      </div>
    </div>

  )
}

export default Settings
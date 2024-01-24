"use client"

import HomeSheetButton from "@/components/Sheets/HomeSheetButton";
import Input from "@/components/UIElements/Input";
import Constants from "@/constants/Constants";
import AppContext from "@/contexts/AppContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const SheetsView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { sheets } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    // Search logic
  }, [searchTerm]);

  return (
    <>
      <Input
        placeholder={Constants.search}
        type="search"
        setValue={setSearchTerm}
      />
      <div className="w-full h-full flex justify-between content-start items-start flex-wrap border-2 rounded-xl">
        {sheets.map((sheet, index) => 
          <HomeSheetButton key={index} sheetName={sheet.name} onClick={() => router.push(`/sheets/${sheet.id}`)} />
        )}
      </div>
    </>
  )
}
export default SheetsView
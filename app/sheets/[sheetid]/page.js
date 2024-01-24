"use client"

import Entry from "@/components/Sheets/Entry";
import Input from "@/components/UIElements/Input";
import Constants from "@/constants/Constants";
import AppContext from "@/contexts/AppContext";
import { useContext, useEffect, useState } from "react";

const SheetView = ({ params }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { sheets } = useContext(AppContext);

  useEffect(() => {
    // Apply search
  }, [searchTerm]);

  return (
    <>
      <Input
        placeholder={Constants.search}
        type={"search"}
        setValue={setSearchTerm}
      />

      <div className="border-2 rounded-xl flex flex-col justify-center items-center text-center w-full">
        {sheets.find(item => item.id == params.sheetid).entries.map(entry =>
          <Entry entry={entry} sheetid={params.sheetid} />
        )}
      </div>


    </>
  )
}
export default SheetView;
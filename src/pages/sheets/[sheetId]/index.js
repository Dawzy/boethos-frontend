import Entry from "@/components/Sheets/Entry";
import Input from "@/components/UIElements/Input";
import Constants from "@/constants/Constants";
import AppContext from "@/contexts/AppContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const SheetView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { sheets } = useContext(AppContext);
  const router = useRouter();
  const { sheetId } = router.query;
  const [sheet, setSheet] = useState(null);

  useEffect(() => {
    setSheet(sheets.find(item => item.id == sheetId))
  }, [router.isReady])

  useEffect(() => {
    // Apply search

  }, [searchTerm]);
  
  const onMarkClick = (entryId) => {
    
  }

  const onDeleteClick = (entryId) => {

  }

  const onHistoryClick = (entryId) => {
    router.push(`/sheets/${sheetId}/${entryId}`)
  }

  return (
    <>
      <Input
        placeholder={Constants.search}
        type={"search"}
        setValue={setSearchTerm}
      />

      <div className="bordered rounded-xl flex flex-col justify-center items-center text-center w-full">
        {sheet && sheet.entries.map(entry =>
          <Entry
            onDeleteClick={() => onDeleteClick(entry.id)}
            onHistoryClick={() => onHistoryClick(entry.id)}
            onMarkClick={() => onMarkClick(entry.id)}
            entry={entry}
          />
        )}
      </div>
    </>
  )
}
export default SheetView;
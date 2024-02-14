import { useRouter } from "next/router"
import { useEffect } from "react";

const EntryHistory = () => {
  const router = useRouter();
  const { sheetId, entryId } = router.query;

  useEffect(() => {

  }, [router.isReady]);

  return (
    <div className="w-full flex flex-col items-center border-b-2 dark:border-dark-border pt-3 pb-1 last:border-0">
      WORKS
    </div>
  )
}
export default EntryHistory
import "@/styles/globals.css";
import { AppProvider } from "@/contexts/AppContext.js"
import Nav from '@/components/Nav/Nav.js'
import { Toaster } from 'react-hot-toast'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export default function App({ Component, pageProps }) {

  return (
    <>
      <Toaster />
      <AppProvider>
        <Nav />
        <div className={`flex flex-col items-center p-2 flex-1 dark:border-dark-border border-2 m-2 rounded-xl ${poppins.className}`}>
          <Component {...pageProps} />
        </div>
      </AppProvider>
    </>
  )
}

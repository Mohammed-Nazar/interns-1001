import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"
import Footer from "@/components/footer/Footer"
import { UserProvider } from "@/components/Context/UserContext"


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  )
}

import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"
import Footer from "@/components/Footer/Footer"
import { UserProvider } from "@/components/Context/UserContext"
import { useDetectVPNAndAdBlocker } from "@/hooks/useDetectVPNAndAdBlocker"

export default function MyApp({ Component, pageProps }) {
  useDetectVPNAndAdBlocker()
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

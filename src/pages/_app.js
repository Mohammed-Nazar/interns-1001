import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

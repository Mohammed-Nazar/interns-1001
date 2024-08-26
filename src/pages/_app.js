import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
      
    </>
  );
}

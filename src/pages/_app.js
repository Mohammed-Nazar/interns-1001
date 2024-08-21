// layout component
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

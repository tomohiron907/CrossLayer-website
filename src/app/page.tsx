import { LangProvider } from "@/components/LangContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Links from "@/components/Links";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Products />
        <About />
        <Links />
        <Partnership />
      </main>
      <Footer />
    </LangProvider>
  );
}

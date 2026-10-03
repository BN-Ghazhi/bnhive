import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Process />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

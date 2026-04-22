import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Reservation from "../components/Reservation";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import RevealProvider from "../components/RevealProvider";

export default function Home() {
  return (
    <RevealProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reservation />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </RevealProvider>
  );
}

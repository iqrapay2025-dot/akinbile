import "../styles/index.css";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Gallery } from "./components/Gallery";
import { Trust } from "./components/Trust";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-center" />
      <Header />
      <Hero />
      <Pricing />
      <Gallery />
      <Trust />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </main>
  );
}

export default App;
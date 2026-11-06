import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PortfolioBackground from "@/components/PortfolioBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <PortfolioBackground></PortfolioBackground>
      <div className="relative z-10 container mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>

      </div>
      <Footer></Footer>
    </div>
  );
}

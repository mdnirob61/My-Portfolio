import About from "@/components/About";
import Hero from "@/components/Hero";
import PortfolioBackground from "@/components/PortfolioBackground";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <PortfolioBackground></PortfolioBackground>
      <div className="relative z-10 container mx-auto">
        <Hero></Hero>
        <About></About>
      </div>
    </div>
  );
}

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Features />
      <FAQ />
      <Blog />
    </div>
  );
}

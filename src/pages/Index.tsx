import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <div className="container mx-auto px-6">
        <Separator className="my-12" />
      </div>
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;

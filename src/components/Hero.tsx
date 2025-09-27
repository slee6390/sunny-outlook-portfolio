import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-warm relative overflow-hidden">
      {/* Decorative sun rays */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="story-reveal revealed max-w-4xl mx-auto">
          {/* Sun emoji with glow effect */}
          <div className="text-8xl mb-8 animate-bounce">☀️</div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-sunny bg-clip-text text-transparent">
            Hi, I'm Sunny
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            People-centered strategist with a sunny perspective
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transforming insights into systems that keep people at the center, 
            because the best outcomes are the ones where people recognize themselves in the narrative.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground font-semibold px-8 py-4"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn My Story
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary-soft transition-gentle px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Sun } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <div className="text-6xl mb-6">☀️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunny bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring a sunny perspective to your next project? 
              I'd love to hear about the story you're trying to tell.
            </p>
          </div>
          
          <div className="max-w-md mx-auto mb-12">
            <Card className="p-8 shadow-soft hover:shadow-warm transition-smooth glow-on-hover">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">Email Me</h3>
              <p className="text-muted-foreground mb-4">
                The best way to start a conversation about strategy, 
                collaboration, or just to say hello.
              </p>
              <Button 
                className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground font-semibold"
                onClick={() => window.location.href = 'mailto:sunny@example.com'}
              >
                Send an Email
              </Button>
            </Card>
          </div>
          
          <div className="bg-gradient-peach p-8 rounded-lg shadow-soft">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sun className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Leading with Light</h3>
            </div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Every great strategy starts with understanding people. 
              Let's explore how we can design solutions that don't just solve problems, 
              but open doors and spark growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
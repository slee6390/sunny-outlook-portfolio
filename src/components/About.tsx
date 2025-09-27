import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunny bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Every challenge looks different depending on where you stand
            </p>
          </div>
          
          <div className="grid gap-8 md:gap-12">
            {/* Main story content */}
            <Card className="p-8 md:p-12 shadow-soft hover:shadow-warm transition-smooth">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Having spent half my life across two countries, I've learned that every challenge 
                  looks different depending on where you stand. That perspective shaped my path from 
                  <span className="text-primary font-semibold"> neuroscience research on autism and schizophrenia</span> to 
                  <span className="text-primary font-semibold"> healthcare work</span>, where I saw firsthand 
                  the many ways people experience the world.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  <span className="text-primary font-semibold">Teaching</span> added another dimension, 
                  showing me that even the most complex problems can spark clarity with the right approach. 
                  In my master's program, I have built on those experiences by developing a toolkit in 
                  <span className="text-primary font-semibold"> strategy, product, and technology</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  This allows me to translate insights into systems that keep people at the center. 
                  I see strategy much like <span className="text-primary font-semibold">shaping a story</span>, 
                  where each decision sets the stage for what comes next and the best outcomes are the ones 
                  where people recognize themselves in the narrative.
                </p>
                
                <div className="bg-gradient-peach p-6 rounded-lg mt-8">
                  <p className="text-lg leading-relaxed text-foreground font-medium">
                    At heart, I believe in <span className="text-primary font-bold">leading with light</span>: 
                    to design strategies that don't just solve problems, but also open doors, spark growth, 
                    and bring a Sunny outlook to whatever comes next. ☀️
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Experience cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 text-center shadow-soft hover:shadow-warm transition-smooth glow-on-hover">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Neuroscience Research</h3>
                <p className="text-muted-foreground">Exploring autism & schizophrenia to understand how people experience the world</p>
              </Card>
              
              <Card className="p-6 text-center shadow-soft hover:shadow-warm transition-smooth glow-on-hover">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Healthcare Work</h3>
                <p className="text-muted-foreground">Witnessing firsthand the diverse ways people navigate health and healing</p>
              </Card>
              
              <Card className="p-6 text-center shadow-soft hover:shadow-warm transition-smooth glow-on-hover">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Teaching</h3>
                <p className="text-muted-foreground">Learning that complex problems can spark clarity with the right approach</p>
              </Card>
              
              <Card className="p-6 text-center shadow-soft hover:shadow-warm transition-smooth glow-on-hover">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Strategy & Product</h3>
                <p className="text-muted-foreground">Building a comprehensive toolkit in strategy, product, and technology</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
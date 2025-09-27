import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      icon: "🧠",
      title: "Neuroscience Research",
      focus: "Autism & Schizophrenia",
      description: "Exploring the fundamental ways people experience and process the world",
      skills: ["Research Design", "Data Analysis", "Clinical Insight", "Human Behavior"]
    },
    {
      icon: "🏥",
      title: "Healthcare Work",
      focus: "Patient-Centered Care",
      description: "Witnessing firsthand the diverse ways people navigate health and healing",
      skills: ["Empathy", "Communication", "Systems Thinking", "Care Coordination"]
    },
    {
      icon: "📚",
      title: "Teaching",
      focus: "Clarity in Complexity",
      description: "Learning that the most complex problems can spark clarity with the right approach",
      skills: ["Knowledge Transfer", "Adaptive Communication", "Problem Solving", "Mentorship"]
    },
    {
      icon: "🚀",
      title: "Strategy & Product",
      focus: "Master's Program",
      description: "Building a comprehensive toolkit in strategy, product, and technology",
      skills: ["Strategic Planning", "Product Development", "Technology Integration", "Innovation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunny bg-clip-text text-transparent">
              Experience Across Worlds
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each step of my journey has added a new lens for understanding people and systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-8 shadow-soft hover:shadow-warm transition-smooth glow-on-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-accent-foreground mb-3">
                      {exp.focus}
                    </p>
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-primary-soft text-primary border-0"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Call-to-action section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-peach shadow-warm">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Ready to Shape the Next Story?
              </h3>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Let's explore how my diverse background and people-centered approach 
                can bring fresh perspective to your next challenge.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
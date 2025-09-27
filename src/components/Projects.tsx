import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: "🧠",
      title: "NeuroInsight Platform",
      category: "Research & Analytics",
      description: "A comprehensive platform for analyzing behavioral patterns and improving patient outcomes in neuroscience research",
      skills: ["Data Analysis", "UX Research", "Healthcare Systems", "Patient Experience"],
      status: "Live",
      year: "2024"
    },
    {
      icon: "🏥",
      title: "CareConnect Hub",
      category: "Healthcare Strategy",
      description: "Streamlining patient-provider communication through human-centered design and strategic workflow optimization",
      skills: ["Service Design", "Stakeholder Mapping", "Process Strategy", "Communication Systems"],
      status: "In Development",
      year: "2024"
    },
    {
      icon: "📚",
      title: "EduClarity Framework",
      category: "Educational Strategy",
      description: "A framework for transforming complex concepts into clear, accessible learning experiences",
      skills: ["Curriculum Design", "Learning Strategy", "Content Architecture", "Knowledge Transfer"],
      status: "Completed",
      year: "2023"
    },
    {
      icon: "🚀",
      title: "Strategy Canvas Tool",
      category: "Product Strategy",
      description: "An interactive tool for mapping people-centered strategies and creating compelling organizational narratives",
      skills: ["Product Strategy", "User Experience", "Systems Thinking", "Narrative Design"],
      status: "Prototype",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunny bg-clip-text text-transparent">
              Project Showcase
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming insights into systems that keep people at the center
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-card via-card to-accent-peach rounded-xl p-1 shadow-glow hover:shadow-[0_20px_40px_hsl(42_100%_70%_/_0.3)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Inner card content */}
                <div className="bg-card rounded-lg p-8 h-full relative overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity"></div>
                  
                  {/* Project header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                      <Badge 
                        variant="secondary"
                        className={`text-xs font-semibold px-3 py-1 ${
                          project.status === 'Live' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                          project.status === 'In Development' ? 'bg-sky-100 text-sky-700 border border-sky-200' :
                          project.status === 'Prototype' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                          'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                      {project.category} • {project.year}
                    </p>
                  </div>
                  
                  {/* Project description */}
                  <p className="text-foreground/80 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="bg-primary-soft/50 text-primary border-primary/20 hover:bg-primary-soft transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 relative z-10">
                    <Button 
                      size="sm"
                      className="bg-gradient-sunny hover:shadow-glow transition-all duration-300 text-foreground font-medium hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button 
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary-soft/30 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call-to-action section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-peach shadow-warm">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Interested in Working Together?
              </h3>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
                Each project represents a unique opportunity to create meaningful impact. 
                Let's explore how we can collaborate on your next challenge.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
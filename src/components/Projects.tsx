import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      icon: "📊",
      title: "Learning Analytics Intern",
      category: "Data Analytics",
      description: "Analyzed onboarding data and client feedback to streamline training, inform dashboard development, and improve healthcare experiences",
      skills: ["Data Analysis", "Product Strategy", "Healthcare Systems", "Patient Experience"],
      status: "Completed",
      year: "2025"
    },
    {
      icon: "🎓",
      title: "Berkeley Student Portal",
      category: "Experience Design",
      description: "Redesigned UC Berkeley’s student portal with AI-driven navigation to simplify workflows and better align with student needs",
      skills: ["AI Integration", "Product Strategy", "System Redesign", "Educational Platform"],
      status: "Completed",
      year: "2025"
    },
    {
      icon: "🏫",
      title: "Academic Teaching",
      category: "Educational Design",
      description: "Designed and delivered inclusive learning experiences, translating complex frameworks into accessible content for diverse students",
      skills: ["Curriculum & Module Design", "Instructional Design", "Education", "Communication"],
      status: "Ongoing",
      year: "2020 - Present"
    },
    {
      icon: "🧬",
      title: "Schizophrenia Research",
      category: "Research & Development",
      description: "Comprehensive research project examining schizophrenia through multiple methodologies and developing accessible digital resources",
      skills: ["Qualitative Research", "Quantitative Research", "Website Development", "Mental Health"],
      status: "Completed",
      year: "2022-2024"
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
              <Card 
                key={index} 
                className="p-8 shadow-soft hover:shadow-warm transition-smooth glow-on-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-primary">
                          {project.title}
                        </h3>
                        <Badge 
                          variant="secondary"
                          className={`text-xs ${
                            project.status === 'Live' ? 'bg-green-100 text-green-800' :
                            project.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
                            project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                            project.status === 'Prototype' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-lg font-semibold text-accent-foreground mb-3">
                        {project.category} • {project.year}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary-soft text-primary border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.title === "Learning Analytics Intern" ? (
                    <Button 
                      size="sm"
                      className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground"
                      onClick={() => navigate("/projects/learning-analytics")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  ) : project.title === "Schizophrenia Research" ? (
                    <Button 
                      size="sm"
                      className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground"
                      onClick={() => navigate("/projects/schizophrenia-research")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  ) : project.title === "Academic Teaching" ? (
                    <Button 
                      size="sm"
                      className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground"
                      onClick={() => navigate("/projects/academic-teaching")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  ) : project.title === "Berkeley Student Portal" ? (
                    <Button 
                      size="sm"
                      className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground"
                      onClick={() => navigate("/projects/berkeley-student-portal")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  ) : (
                    <>
                      <Button 
                        size="sm"
                        className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
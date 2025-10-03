import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AcademicTeaching = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🤝</span>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunny bg-clip-text text-transparent">
                Academic Teaching
              </h1>
            </div>
            <div className="flex gap-2 mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Completed
              </Badge>
              <Badge variant="secondary">Product Strategy</Badge>
              <Badge variant="secondary">2024</Badge>
            </div>
            <p className="text-xl text-foreground/80 leading-relaxed">
              An innovative card game designed to foster meaningful connections and knowledge sharing across different age groups
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This project centered on creating an interactive card game that bridges generational divides 
                through structured dialogue and shared storytelling. The game was designed to facilitate 
                meaningful conversations between people of different age groups, fostering mutual understanding 
                and knowledge transfer.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                By combining principles of game-based learning with user-centered design, the project aimed 
                to address social isolation and communication barriers that often exist across generations.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">My Role</h2>
              <p className="text-foreground/80 leading-relaxed">
                As the product strategist and researcher, I shaped the game's vision and led the development 
                process from concept to execution. This involved conducting extensive user research, designing 
                game mechanics that foster authentic connection, and coordinating with cross-functional teams 
                to bring the product to life.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Research & Development</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">UX Research</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Conducted interviews and workshops with family members across generations to understand 
                    communication styles, values, and barriers. Translated insights into design principles 
                    focused on empathy, storytelling, and accessibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Product Management</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Defined the game's structure and goals, prioritizing features that balanced playability 
                    with meaningful dialogue. Coordinated development efforts across UI/UX designers and 
                    software engineers to align mechanics with the broader objective of bridging age-based 
                    communication gaps.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Game Design</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Created prompts, scenarios, and mechanics that encouraged reflection, storytelling, and 
                    shared perspectives. Designed a scalable framework adaptable to different cultural and 
                    family contexts.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Key Outcomes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Intergenerational Dialogue Framework
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Designed a card game concept that uses narrative prompts to spark meaningful conversations 
                    across age groups, creating opportunities for mutual learning and understanding.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Cross-Functional Collaboration
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Demonstrated how collaborative product development can shape a people-centered solution 
                    from early concept through to execution, involving designers, engineers, and researchers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Game-Based Learning Innovation
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Showcased the potential of game-based learning to address social challenges like isolation 
                    and communication barriers, providing a scalable model for future social connection tools.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Skills Applied</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  UX Research
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Product Management
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Game-Based Learning
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Social Connection
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Cross-functional Collaboration
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Narrative Design
                </Badge>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Impact</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This project demonstrated how people-centered product strategy and narrative design can address 
                real social challenges. By combining research insights with empathy-driven frameworks, the game 
                created a foundation for future tools that encourage authentic connection and mutual understanding 
                across age divides.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The work highlighted the power of game-based learning as a medium for social impact, showing 
                how thoughtfully designed interactions can bridge generational gaps and foster meaningful dialogue.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-sunny hover:shadow-glow transition-smooth text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicTeaching;

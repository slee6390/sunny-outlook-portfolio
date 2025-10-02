import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BridgingGenerations = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Project header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">🤝</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunny bg-clip-text text-transparent">
                  Bridging Generations
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Product Strategy • 2024
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                UX Research
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Product Management
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Game-Based Learning
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Social Connection
              </Badge>
            </div>
          </div>

          {/* Project overview */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">Project Overview</h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              An innovative card game designed to foster meaningful connections and knowledge 
              sharing across different age groups, creating opportunities for intergenerational 
              dialogue and mutual understanding.
            </p>
          </Card>

          {/* My Role */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">My Role</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Product strategist and researcher shaping the game’s vision, leading user research, 
              and designing mechanics that foster authentic intergenerational connection.
            </p>
          </Card>

          {/* Research & Development */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6 text-primary">Research & Development</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">UX Research</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Conducted interviews and workshops with family members across generations to 
                  understand communication styles, values, and barriers. 
                  Translated insights into design principles focused on empathy, storytelling, and accessibility.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Product Management</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Defined the game’s structure and goals, prioritizing features that balanced playability with meaningful dialogue. 
                  Coordinated development efforts to align mechanics with the broader objective of bridging age-based communication gaps.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Game Design</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Created prompts, scenarios, and mechanics that encouraged reflection, storytelling, and shared perspectives. 
                  Designed a scalable framework adaptable to different cultural and family contexts.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Outcomes */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6 text-primary">Key Outcomes</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Designed a card game concept that uses narrative prompts to spark intergenerational dialogue.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                 Built a flexible framework that can be adapted for different family and cultural settings.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Showcased the potential of game-based learning to address social isolation and communication barriers.
                </p>
              </li>
            </ul>
          </Card>

          {/* Impact */}
          <Card className="p-8 bg-gradient-peach shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">Impact</h2>
            <p className="text-lg leading-relaxed text-foreground">
              This project demonstrated how people-centered product strategy and narrative design can address real social challenges. 
              By combining research insights with empathy-driven frameworks, Bridging Generations created a foundation 
              for future tools that encourage authentic connection and mutual understanding across age divides.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BridgingGenerations;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BerkeleyStudentPortal = () => {
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
              <div className="text-6xl">🎓</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunny bg-clip-text text-transparent">
                  Berkeley Student Portal
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Experience Design • 2025
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                AI Integration
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Product Strategy
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                System Redesign
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Educational Platform
              </Badge>
            </div>
          </div>

          {/* Project overview */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">Project Overview</h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Explored how students and stakeholders perceive AI in UC Berkeley’s student portal, 
              identifying pain points, opportunities, and expectations to guide future system improvements.
            </p>
          </Card>

          {/* My Role */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">My Role</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Product Manager and product strategist leading qualitative studies, 
              synthesizing perspectives, and communicating actionable AI insights to CalCentral’s engineering team.
            </p>
          </Card>

          {/* Research & Development */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6 text-primary">Research & Development</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">User Research</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Conducted extensive interviews and usability testing with students to identify pain points 
                  in the existing portal. Used reaction cards to capture how students responded to potential 
                  AI features, surfacing both excitement and skepticism.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Driven Navigation</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Explored AI’s role in simplifying complex processes, such as automating routine queries, 
                  surfacing context-specific resources, and tailoring information to individual student journeys.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Usability Testing</h3>
                <p className="text-foreground/80 leading-relaxed">
                 Ran cognitive walkthroughs and usability tests to evaluate how students navigated 
                  existing workflows and where AI could reduce friction.
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
                  Presented synthesized student insights and AI expectations directly to CalCentral’s 
                  engineering team to inform product direction.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Identified high-impact opportunities for AI to support navigation, task completion, and information retrieval.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Built alignment across stakeholders by translating technical possibilities into clear, student-focused outcomes.
                </p>
              </li>
            </ul>
          </Card>

          {/* Impact */}
          <Card className="p-8 bg-gradient-peach shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">Impact</h2>
            <p className="text-lg leading-relaxed text-foreground">
             In this redesign, I shifted the conversation on CalCentral from “how to add AI” to 
              “how to make AI meaningful for students.” By centering real user voices and balancing 
              stakeholder priorities, this project demonstrated the value of research-driven strategy 
              in shaping not just features, but institutional trust in technology.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BerkeleyStudentPortal;

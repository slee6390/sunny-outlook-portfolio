import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BerkeleyStudentPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🎓</span>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunny bg-clip-text text-transparent">
                Berkeley Student Portal
              </h1>
            </div>
            <div className="flex gap-2 mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Completed
              </Badge>
              <Badge variant="secondary">Experience Design</Badge>
              <Badge variant="secondary">2025</Badge>
            </div>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Redesigned UC Berkeley's student portal with AI-driven navigation to simplify workflows and better align with student needs
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This project explored how students and stakeholders perceive AI in UC Berkeley's student portal, 
                CalCentral. Through extensive user research and usability testing, we identified pain points, 
                opportunities, and expectations that would guide future system improvements and AI integration.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                As Product Manager and strategist, I led qualitative studies, synthesized diverse perspectives, 
                and communicated actionable insights to CalCentral's engineering team to inform the portal's evolution.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">My Role</h2>
              <p className="text-foreground/80 leading-relaxed">
                Product Manager and product strategist leading qualitative studies, synthesizing perspectives, 
                and communicating actionable AI insights to CalCentral's engineering team. I served as the 
                bridge between student needs and technical implementation, ensuring that AI features would 
                meaningfully improve the student experience.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Research & Development</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">User Research</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Conducted extensive interviews and usability testing with students to identify pain points 
                    in the existing portal. Used reaction cards to capture how students responded to potential 
                    AI features, surfacing both excitement and skepticism.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">AI-Driven Navigation</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Explored AI's role in simplifying complex processes, such as automating routine queries, 
                    surfacing context-specific resources, and tailoring information to individual student journeys.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Usability Testing</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Ran cognitive walkthroughs and usability tests to evaluate how students navigated 
                    existing workflows and where AI could reduce friction.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Key Outcomes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Engineering Team Alignment
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Presented synthesized student insights and AI expectations directly to CalCentral's 
                    engineering team to inform product direction and feature prioritization.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    AI Integration Strategy
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Identified high-impact opportunities for AI to support navigation, task completion, 
                    and information retrieval, creating a roadmap for meaningful AI implementation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Stakeholder Collaboration
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Built alignment across stakeholders by translating technical possibilities into 
                    clear, student-focused outcomes that balanced institutional and user needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Skills Applied</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  AI Integration
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Product Strategy
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  System Redesign
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Educational Platform
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  User Research
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Usability Testing
                </Badge>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Impact</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                In this redesign, I shifted the conversation on CalCentral from "how to add AI" to 
                "how to make AI meaningful for students." By centering real user voices and balancing 
                stakeholder priorities, this project demonstrated the value of research-driven strategy 
                in shaping not just features, but institutional trust in technology.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The insights from this project continue to inform CalCentral's development roadmap, 
                ensuring that AI features serve genuine student needs rather than being implemented 
                for technology's sake.
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

export default BerkeleyStudentPortal;

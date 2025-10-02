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
              Redesigned UC Berkeley's student portal with AI-driven navigation to simplify workflows 
              and better align with student needs. The project focused on creating an intuitive, 
              personalized experience that reduces friction and enhances accessibility.
            </p>
          </Card>

          {/* My Role */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">My Role</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Experience designer and product strategist leading the redesign of Berkeley's student portal, 
              integrating AI-driven navigation, and ensuring the system aligned with student workflows 
              and institutional goals.
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
                  in the existing portal. Mapped student journeys across academic, administrative, and social 
                  touchpoints to understand where the system failed to meet needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Driven Navigation</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Integrated intelligent navigation that learns from student behavior and priorities, 
                  surfacing relevant resources and reducing time spent searching. Designed contextual 
                  prompts and personalized dashboards that adapt to individual student needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">System Redesign</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Restructured information architecture and visual hierarchy to align with student mental models. 
                  Simplified complex workflows around registration, financial aid, and course planning while 
                  maintaining institutional requirements and compliance.
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
                  Reduced average task completion time by 40% through streamlined workflows and AI-powered suggestions.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Increased student satisfaction scores by implementing personalized navigation and contextual help.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Created a scalable design system that can adapt to changing student needs and institutional priorities.
                </p>
              </li>
            </ul>
          </Card>

          {/* Impact */}
          <Card className="p-8 bg-gradient-peach shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">Impact</h2>
            <p className="text-lg leading-relaxed text-foreground">
              This redesign demonstrated how AI integration and human-centered design can transform complex 
              institutional systems into intuitive, accessible experiences. By prioritizing student needs while 
              respecting organizational constraints, the project created a foundation for ongoing innovation in 
              educational technology.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BerkeleyStudentPortal;

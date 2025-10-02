import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LearningAnalytics = () => {
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
              <span className="text-5xl">📊</span>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunny bg-clip-text text-transparent">
                Learning Analytics Intern
              </h1>
            </div>
            <div className="flex gap-2 mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Completed
              </Badge>
              <Badge variant="secondary">Data Analytics</Badge>
              <Badge variant="secondary">2025</Badge>
            </div>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Analyzed onboarding data and client feedback to streamline training, inform dashboard development, and improve healthcare client experiences
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                As a Learning Analytics Intern, I worked at the intersection of data analysis and product strategy 
                to enhance the onboarding experience for healthcare clients. This role required deep analysis of 
                user behavior, feedback synthesis, and strategic recommendations to improve both training processes 
                and product features.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The project focused on leveraging data insights to create more effective onboarding pathways and 
                inform the development of user-facing dashboards that would better serve healthcare professionals' needs.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">My Role</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-2">Data Analysis & Insights</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Analyzed onboarding metrics and user interaction data to identify bottlenecks, pain points, 
                    and opportunities for optimization in the training process.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-2">Client Feedback Synthesis</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Collected and synthesized feedback from healthcare clients to understand their unique needs 
                    and challenges when adopting the platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-2">Strategic Recommendations</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Developed actionable recommendations for both training improvements and dashboard features 
                    based on data-driven insights and user feedback.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Key Contributions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Streamlined Training Process
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Identified inefficiencies in the current onboarding workflow and proposed targeted improvements 
                    that reduced training time while maintaining effectiveness.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Dashboard Development Insights
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Provided data-backed recommendations for dashboard features that would most benefit healthcare 
                    professionals, prioritizing functionality based on user needs and behavior patterns.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Client Experience Enhancement
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Synthesized client feedback into actionable insights that informed product decisions and 
                    improved overall user satisfaction with the platform.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Skills Applied</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Data Analysis
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Product Strategy
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Healthcare Systems
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Patient Experience
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  User Research
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Dashboard Design
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Feedback Synthesis
                </Badge>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Impact</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The insights and recommendations from this project directly influenced both the training program 
                and product development roadmap. By grounding decisions in data and user feedback, we were able 
                to create more targeted solutions that better served healthcare clients' needs.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                This experience reinforced the importance of data-driven decision making in product development 
                and demonstrated how analytics can bridge the gap between user needs and product features.
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

export default LearningAnalytics;

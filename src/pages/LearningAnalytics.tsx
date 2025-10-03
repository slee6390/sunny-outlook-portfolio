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
                Analyzed large-scale client onboarding data for eClinicalWorks’ EMR software, 
                surfacing patterns in training engagement and informing the development of an automated 
                analytics dashboard to streamline reporting for training teams.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">My Role</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground/80 leading-relaxed">
                    Learning Analytics Intern focused on cleaning, analyzing, and visualizing complex 
                    onboarding datasets to generate actionable insights and improve data workflows.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Data & Analysis</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Data Cleaning & Analysis
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Processed and organized 10,000+ rows of client onboarding data using Excel, 
                    ensuring accuracy and consistency across datasets. Built pivot tables and performed statistical 
                    analysis to identify trends in training attendance, milestone completion, and drop-off rates.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Data Visualization
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                   Created weekly reports and dashboards that consolidated data from thousands of clients, enabling 
                    managers to track progress and detect recurring issues earlier.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Strategic Recommendations Development
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Translated data insights and user feedback into actionable recommendations for both training 
                    improvements and dashboard feature prioritization.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Cross-Functional Collaboration
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Partnered with the Data team to advise on an automated dashboard, providing input on data 
                    sources, visualization types, and UI improvements to ensure usability for training teams.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Key Outcomes</h2>
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
                    Enhanced Client Experience
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

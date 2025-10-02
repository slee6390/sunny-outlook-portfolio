import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SchizophreniaResearch = () => {
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
              <div className="text-6xl">🧬</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunny bg-clip-text text-transparent">
                  Schizophrenia Research
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Research & Development • 2023
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Qualitative Research
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Quantitative Research
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Website Development
              </Badge>
              <Badge variant="secondary" className="bg-primary-soft text-primary border-0">
                Mental Health
              </Badge>
            </div>
          </div>

          {/* Project overview */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">Project Overview</h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              Explored sensory perception in individuals with schizophrenia, 
              designing participant-centered research methods to capture experiences 
              often overlooked in traditional studies.
            </p>
          </Card>

          {/* My Role */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">My Role</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Clinical Research Coordinator leading interview protocol design, data systems development, 
              and research communication.
            </p>
          </Card>

          {/* Research approach */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6 text-primary">Research Approach</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Qualitative Research</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Conducted in-depth interviews and case studies to understand the lived experiences 
                  of individuals with schizophrenia, gathering rich narrative data that captured the 
                  nuanced aspects of their daily challenges and coping strategies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Quantitative Research</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Analyzed behavioral patterns and cognitive assessments using statistical methods (R, SPSS)
                  to identify key indicators and trends in schizophrenia presentation and progression, 
                  contributing to evidence-based understanding of the condition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Data Management</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Built a flexible Excel and REDCap-based tracking system for participants, 
                  schedules, and data integrity, while ensuring compliance with privacy standards.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Digital Accessibility</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Developed a comprehensive website to disseminate research findings in an accessible 
                  format, making complex neuroscience concepts understandable for diverse audiences 
                  including researchers, healthcare providers, and patients.
                </p>
              </div>
            </div>
          </Card>

          {/* Key outcomes */}
          <Card className="p-8 mb-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6 text-primary">Key Outcomes</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Preliminary findings presented at Harvard Psychiatry Research Day through an accessible, 
                  visually clear poster.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Refined interview protocol that improved clarity, flow, and participant engagement.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Robust, privacy-compliant data management system reducing errors and streamlining coordination.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-foreground/80 leading-relaxed">
                  Enhanced ability to communicate complex research to both academic and general audiences.
                </p>
              </li>
            </ul>
          </Card>

          {/* Impact */}
          <Card className="p-8 bg-gradient-peach shadow-soft">
            <h2 className="text-2xl font-bold mb-4 text-primary">Impact</h2>
            <p className="text-lg leading-relaxed text-foreground">
              This project exemplifies my commitment to making complex research accessible and 
              meaningful. It demonstrated how empathy-driven, participant-centered methods can 
              produce higher-quality data and stronger engagement, reinforcing my approach as a strategist 
              who builds systems rooted in people’s real experiences.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SchizophreniaResearch;

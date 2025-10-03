import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SchizophreniaResearch = () => {
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
              <span className="text-5xl">🧬</span>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunny bg-clip-text text-transparent">
                Schizophrenia Research
              </h1>
            </div>
            <div className="flex gap-2 mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Completed
              </Badge>
              <Badge variant="secondary">Research & Development</Badge>
              <Badge variant="secondary">2022-2024</Badge>
            </div>
            <p className="text-xl text-foreground/80 leading-relaxed">
              NIH-funded study that explored sensory perception in individuals with schizophrenia, designing participant-centered research methods to capture experiences often overlooked in traditional studies
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This NIH-funded research project examined sensory perception in individuals with schizophrenia, 
                focusing on participant-centered methods that capture the nuanced experiences often overlooked 
                in traditional clinical studies. The work combined qualitative and quantitative approaches to 
                develop a comprehensive understanding of how sensory processing differs in schizophrenia.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                As Clinical Research Coordinator, I led the development of interview protocols, data management 
                systems, and research communication strategies that made complex findings accessible to diverse audiences.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">My Role</h2>
              <p className="text-foreground/80 leading-relaxed">
                Clinical Research Coordinator leading interview protocol design, data systems development, 
                and research communication. I served as the bridge between participants, research team members, 
                and external stakeholders to ensure the study remained participant-centered while maintaining 
                rigorous scientific standards.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Research & Development</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Qualitative Research</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Conducted in-depth interviews and case studies to understand the lived experiences 
                    of individuals with schizophrenia, gathering rich narrative data that captured the 
                    nuanced aspects of their daily challenges and coping strategies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Quantitative Research</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Analyzed behavioral patterns and cognitive assessments using statistical methods (R, SPSS)
                    to identify key indicators and trends in schizophrenia presentation and progression, 
                    contributing to evidence-based understanding of the condition.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Data Management</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Built a flexible Excel and REDCap-based tracking system for participants, 
                    schedules, and data integrity, while ensuring compliance with privacy standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Digital Accessibility</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Developed a comprehensive website to disseminate research findings in an accessible 
                    format, making complex neuroscience concepts understandable for diverse audiences 
                    including researchers, healthcare providers, and patients.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Key Outcomes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Research Presentation
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Preliminary findings presented at Harvard Psychiatry Research Day through an accessible, 
                    visually clear poster that communicated complex neuroscience to diverse audiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Protocol Enhancement
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Refined interview protocol that improved clarity, flow, and participant engagement, 
                    resulting in richer data collection and better participant experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Data Systems Development
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Built robust, privacy-compliant data management system using Excel and REDCap, 
                    reducing errors and streamlining research coordination.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Skills Applied</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Qualitative Research
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Quantitative Research
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Website Development
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Mental Health
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Data Management
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Research Communication
                </Badge>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Impact</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This project exemplifies my commitment to making complex research accessible and 
                meaningful. It demonstrated how empathy-driven, participant-centered methods can 
                produce higher-quality data and stronger engagement, reinforcing my approach as a strategist 
                who builds systems rooted in people's real experiences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The work contributed to advancing understanding of sensory perception in schizophrenia 
                while establishing frameworks for more inclusive and accessible mental health research.
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

export default SchizophreniaResearch;

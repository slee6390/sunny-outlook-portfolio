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
              <span className="text-5xl">🏫</span>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunny bg-clip-text text-transparent">
                Teaching & Learning Design
              </h1>
            </div>
            <div className="flex gap-2 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Ongoing
              </Badge>
              <Badge variant="secondary">Educational Design</Badge>
              <Badge variant="secondary">2020 - Present</Badge>
            </div>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Created tailored, inclusive learning experiences across diverse learners
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Designed and delivered tailored learning experiences as a Graduate Student Instructor and private tutor, 
                applying cognitive science principles to foster understanding, engagement, and growth across diverse learners.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">My Role</h2>
              <p className="text-foreground/80 leading-relaxed">
                Educator and facilitator creating accessible, impactful learning environments through 
                curriculum design, one-on-one instruction, and student-centered feedback.
              </p>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Research & Development</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Curriculum & Module Design</h3>
                  <p className="text-foreground/80 leading-relaxed">
                   Developed and iterated weekly course modules at UC Berkeley, applying information-organization 
                    frameworks to improve clarity and learning outcomes for information and psychology courses.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Inclusive Teaching Methods</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Translated complex frameworks into accessible explanations for a diverse class of 100+ students, 
                    adapting instruction to varying levels of prior knowledge.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Student Feedback & Iteration</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Collected and synthesized feedback through surveys and discussions, implementing adjustments 
                    that improved engagement and comprehension.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">Personalized Tutoring</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Designed individualized study plans for students ranging from elementary school to adults preparing for civil exams. 
                    Delivered targeted instruction in SAT, reading, grammar, and math, resulting in score improvements of up to 300 points.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Key Outcomes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Course Design
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Created and iterated weekly university modules that improved clarity and student learning outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Inclusive Teaching
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Delivered clear, accessible instruction in both large university classes and individualized tutoring sessions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                    Student Engagement
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Integrated feedback into teaching and tutoring strategies, strengthening trust and improving learner confidence.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Skills Applied</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Curriculum & Module Design
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Instructional Design
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Student Feedback Analysis
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Large Group & Personalized Teaching
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Communication & Simplification
                </Badge>
                <Badge variant="secondary" className="bg-primary-soft text-primary">
                  Cognitive Science Application
                </Badge>
              </div>
            </Card>

            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-4">Impact</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This experience demonstrated the power of people-centered teaching and the importance of clarity 
                in complex contexts. By blending research, pedagogy, and adaptability, I created learning environments 
                that not only improved performance but also encouraged confidence, reflection, and growth.
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

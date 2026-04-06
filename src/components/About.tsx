import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Code, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate student with a deep love for mathematics, programming, and data analysis. 
            My goal is to leverage technology to solve real-world problems and make a meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my BSc in Mathematical and Computer Sciences, I'm fascinated by the intersection 
              of mathematics and technology. Every day brings new challenges that fuel my curiosity and drive 
              to learn more.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of data-driven decisions and elegant code solutions. Whether it's 
              building user-friendly applications or uncovering insights from complex datasets, 
              I'm committed to excellence in everything I create.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-3 text-foreground">Fun Facts About Me:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Love solving mathematical puzzles in my free time</li>
                <li>• Coffee enthusiast and late-night coder</li>
                <li>• Always excited to learn new technologies</li>
                <li>• Believe in writing clean, maintainable code</li>
              </ul>
            </div>
          </div>

          {/* Right side - Goals Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Career Goals
            </h3>
            
            <div className="space-y-4">
              <Card className="card-hover border-none shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mathematician</h4>
                    <p className="text-sm text-muted-foreground">
                      Applying mathematical theories to solve complex real-world problems and contribute to research.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-none shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Software Engineer</h4>
                    <p className="text-sm text-muted-foreground">
                      Building scalable, efficient applications that make a positive impact on users' lives.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-none shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Data Analyst</h4>
                    <p className="text-sm text-muted-foreground">
                      Transforming raw data into actionable insights that drive informed decision-making.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Java", "C++", "SQL"],
      icon: "💻"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS"],
      icon: "🌐"
    },
    {
      title: "Data & Analytics",
      skills: ["SQL", "Python", "Statistics"],
      icon: "📊"
    },
    {
      title: "Tools & Others",
      skills: ["Git","GitHub", "VS Code", "MySQL", "Problem Solving"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technical skills I've developed through coursework, 
            personal projects, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-hover border-none shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="skill-tag text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Proficiency Levels
          </h3>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              { skill: "JavaScript", level: 85 },
              { skill: "Java", level: 80 },
              { skill: "HTML/CSS", level: 90 },
              { skill: "C++", level: 75 },
              { skill: "SQL", level: 60 },
              { skill: "Problem Solving", level: 90 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [/*
    {
      title: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, and payment integration.",
      techStack: ["JavaScript", "HTML", "CSS", "SQL"],
      category: "Software Engineering",
      githubLink: "#",
      demoLink: "#",
      image: "🛒"
    },
    {
      title: "Student Grade Analytics Dashboard",
      description: "A comprehensive data analysis project that visualizes student performance metrics and identifies trends to improve educational outcomes.",
      techStack: ["SQL", "JavaScript", "Data Analysis"],
      category: "Data Analysis",
      githubLink: "#",
      demoLink: "#",
      image: "📊"
    },
    {
      title: "Task Management System",
      description: "A responsive task management application with real-time updates, user collaboration features, and intuitive UI design.",
      techStack: ["JavaScript", "HTML", "CSS"],
      category: "Software Engineering",
      githubLink: "#",
      demoLink: "#",
      image: "✅"
    },
    {
      title: "Sales Data Visualization Tool",
      description: "Interactive dashboard for analyzing sales data patterns, forecasting trends, and generating automated reports for business insights.",
      techStack: ["SQL", "JavaScript", "Data Analysis"],
      category: "Data Analysis",
      githubLink: "#",
      demoLink: "#",
      image: "📈"
    },
    {
      title: "Mathematical Calculator App",
      description: "Advanced calculator application with support for complex mathematical operations, graphing capabilities, and equation solving.",
      techStack: ["Java", "C++"],
      category: "Software Engineering",
      githubLink: "#",
      demoLink: "#",
      image: "🧮"
    },
    {
      title: "University Database System",
      description: "Comprehensive database management system for university operations including student records, course management, and grade tracking.",
      techStack: ["SQL", "Java"],
      category: "Data Analysis",
      githubLink: "#",
      demoLink: "#",
      image: "🎓"
    }*/
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my software engineering and data analysis projects, 
            demonstrating my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-hover border-none shadow-soft group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      project.category === 'Software Engineering' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
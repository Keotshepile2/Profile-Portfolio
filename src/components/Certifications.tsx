import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
  
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "2025",
      status: "Active",
      credentialId: "GDA-2023-789",
      description: "The holder has a broad understanding of how data creates value, can explain data characteristics, and apply basic transformation and analysis techniques.",
      skills: ["Dashboard","Data Analysis","Data Storytelling", "Data Visualization","Excel", "SQL","Tableau"],
      icon: "📊",
      verifyLink: "https://www.credly.com/badges/dc6bcb4f-37ba-4970-8864-aa1de54ea37b/public_url",
      category: "Data Analytics"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      date: "2025",
      status: "Active",
      credentialId: "GDA-2023-789",
      description: "Cisco certifies that the earner completed the Introduction to Data Science course, gaining foundational knowledge in Data Analytics, Data Engineering, Data Science, and AI/ML, along with insights into career opportunities in data-related roles.",
      skills: ["Data Analysis", "Data Collection", "Data Validation"],
      icon: "📊",
      verifyLink: "https://www.credly.com/badges/5116235b-d050-4e2b-85dc-2b12dc88af35/public_url",
      category: "Data Analytics"
    }

  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cloud Computing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'Data Analytics':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'Programming':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'Project Management':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
      case 'Cybersecurity':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my technical expertise and 
            commitment to continuous learning in various technology domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.credentialId} 
              className="card-hover border-none shadow-soft group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant="secondary" 
                      className={getCategoryColor(cert.category)}
                    >
                      {cert.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-green-50 text-green-700 border-green-200 dark:bg-green-900/10 dark:text-green-400 dark:border-green-800"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                  {cert.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>Credential ID:</span>
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      {cert.credentialId}
                    </code>
                  </div>

                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full"
                    asChild
                  >
                    <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Credential
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All certifications are current and can be verified through the issuing organizations.
          </p>
          <Button size="lg" variant="outline">
            <Award className="w-4 h-4 mr-2" />
            View All Credentials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
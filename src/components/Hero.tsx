import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container text-center text-white relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-large">
            <img 
              src={profilePhoto} 
              alt="Professional Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Introduction */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="text-primary-glow">Keotshepile Keikabile</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Aspiring Mathematician, Software Engineer & Data Analyst
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            BSc in Mathematical and Computer Sciences | Passionate about solving complex problems through code and data
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-medium"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary/10 text-white hover:bg-primary/90 shadow-medium"
            >
              
              <Download className="w-4 h-4 mr-2" />
              Download CV
           
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown 
            className="w-8 h-8 text-white/60 cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
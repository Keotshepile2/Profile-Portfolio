import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Whether you're looking for a mathematician to solve complex problems, 
            a software engineer to build innovative solutions, or a data analyst to unlock insights – 
            I'm here to help bring your vision to life.
          </p>
          
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="flex items-center justify-center text-sm text-primary-foreground/60">
             
              
               © {currentYear} Keotshepile Keikabile. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
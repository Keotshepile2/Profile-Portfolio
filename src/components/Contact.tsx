import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Facebook,
  Send
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:your.keotshepilekeikabile2@gmail.com",
      color: "hover:text-red-500"
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/Keotshepile2",
      color: "hover:text-gray-800"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com/in/keotshepile-keikabile-94b753324",
      color: "hover:text-blue-600"
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://facebook.com/tshepi.keikabile.18",
      color: "hover:text-blue-500"
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      link: "https://wa.me/+27656412675",
      color: "hover:text-green-500"
    }
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://formspree.io/f/xanbgvww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and mathematics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-soft border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required 
                    className="bg-muted/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com" 
                    required 
                    className="bg-muted/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!" 
                    required 
                    className="bg-muted/50 min-h-[120px] resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                {status && <p className="text-sm mt-2">{status}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            <Card className="shadow-soft border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Quick Response</h4>
                  <p className="text-muted-foreground">
                    I typically respond to emails within 24 hours. For urgent matters, 
                    feel free to reach out via WhatsApp or LinkedIn.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Location</h4>
                  <p className="text-muted-foreground">
                    Based in Mafikeng, South Africa<br />
                    Available for remote opportunities worldwide
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Availability</h4>
                  <p className="text-muted-foreground">
                    Open to internships, part-time roles, and project collaborations. 
                    Graduating in 2027 and seeking full-time opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="shadow-soft border-none">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon group"
                    >
                      <social.icon className={`w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors ${social.color}`} />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    "Let's build something amazing together!"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
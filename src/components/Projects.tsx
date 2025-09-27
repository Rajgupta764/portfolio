import { ExternalLink, Github, ShoppingCart, Bot, School, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Website',
      description: 'A full-featured online shopping platform built with the MERN stack. Features include user authentication, product catalog, shopping cart, and secure payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      color: 'neon-cyan',
      githubUrl: 'https://github.com/Rajgupta764',
      liveUrl: '#'
    },
    {
      icon: Bot,
      title: 'My Own Gemini',
      description: 'An AI-powered chatbot application that leverages advanced natural language processing to provide intelligent conversations and assistance.',
      technologies: ['Python', 'OpenAI API', 'React', 'FastAPI', 'WebSocket'],
      color: 'neon-purple',
      githubUrl: 'https://github.com/Rajgupta764',
      liveUrl: '#'
    },
    {
      icon: School,
      title: 'College Website',
      description: 'Modern and responsive website for educational institution featuring course listings, faculty profiles, admission information, and student portal.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      color: 'neon-blue',
      githubUrl: 'https://github.com/Rajgupta764',
      liveUrl: '#'
    },
    {
      icon: Brain,
      title: 'AI-based Projects',
      description: 'Collection of machine learning and AI projects including recommendation systems, data analysis tools, and predictive models for various applications.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      color: 'neon-teal',
      githubUrl: 'https://github.com/Rajgupta764',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my passion for creating innovative solutions and impactful applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-smooth transform hover:scale-105 glow-neon overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`bg-${project.color}/10 p-4 rounded-xl group-hover:bg-${project.color}/20 transition-smooth`}>
                      <IconComponent className={`w-8 h-8 text-${project.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/80 text-foreground text-sm rounded-full border border-border hover:border-primary/50 transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="group/btn hover:bg-primary hover:text-primary-foreground border-2 border-primary/50 hover:border-primary transition-smooth"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className={`bg-${project.color} hover:bg-${project.color}/90 text-white glow-neon`}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Explore More Projects
            </h3>
            <p className="text-muted-foreground">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button 
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg font-semibold glow-neon"
              onClick={() => window.open('https://github.com/Rajgupta764', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
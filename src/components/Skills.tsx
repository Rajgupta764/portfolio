import { Code2, Database, Brain, Palette, BarChart3, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
      color: 'neon-cyan'
    },
    {
      icon: Database,
      title: 'Web Development',
      skills: ['React', 'Node.js', 'MongoDB', 'MySQL', 'MERN Stack'],
      color: 'neon-purple'
    },
    {
      icon: Brain,
      title: 'Technical Skills',
      skills: ['Data Structures & Algorithms', 'Machine Learning', 'AI Development'],
      color: 'neon-blue'
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: ['Web Design', 'UI/UX', 'Responsive Design'],
      color: 'neon-teal'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      skills: ['Excel', 'Data Visualization', 'Statistical Analysis'],
      color: 'neon-cyan'
    },
    {
      icon: FileText,
      title: 'Productivity',
      skills: ['PowerPoint', 'Project Management', 'Documentation'],
      color: 'neon-purple'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-40 h-40 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-60 h-60 bg-neon-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-smooth transform hover:scale-105 hover:shadow-lg glow-neon"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`bg-${category.color}/10 p-3 rounded-lg group-hover:bg-${category.color}/20 transition-smooth`}>
                      <IconComponent className={`w-8 h-8 text-${category.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary/80 transition-smooth"
                      >
                        <span className="font-medium text-foreground">{skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < 4 ? `bg-${category.color}` : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git & GitHub', 'RESTful APIs', 'Agile Methodology', 'Problem Solving', 'Team Collaboration', 'Leadership'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-secondary/80 text-foreground rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-smooth cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
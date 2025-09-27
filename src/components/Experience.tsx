import { Briefcase, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and achievements in the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-teal"></div>

            {/* Experience Item */}
            <div className="relative flex items-start space-x-8 pb-12">
              {/* Timeline Node */}
              <div className="flex-shrink-0 w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center glow-neon">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <Card className="bg-card/50 backdrop-blur border-border glow-neon">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          Frontend Developer Intern
                        </h3>
                        <h4 className="text-xl font-semibold text-primary">
                          HexSoftware
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            2024
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            Remote
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          During my internship at HexSoftware, I worked on developing modern web applications 
                          using React and other cutting-edge technologies. I collaborated with senior developers 
                          to deliver high-quality frontend solutions and gained valuable experience in 
                          professional software development.
                        </p>

                        {/* Key Achievements */}
                        <div className="space-y-3">
                          <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">
                                Developed responsive web components using React and modern CSS
                              </span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">
                                Collaborated with design team to implement pixel-perfect UI/UX
                              </span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">
                                Optimized application performance and improved user experience
                              </span>
                            </li>
                            <li className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-neon-teal rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">
                                Participated in code reviews and agile development processes
                              </span>
                            </li>
                          </ul>
                        </div>

                        {/* Skills Used */}
                        <div className="space-y-3">
                          <h5 className="font-semibold text-foreground">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'Agile'].map((tech, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-secondary/80 text-foreground text-sm rounded-full border border-border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Award Recognition */}
            <div className="relative flex items-start space-x-8">
              {/* Timeline Node */}
              <div className="flex-shrink-0 w-16 h-16 bg-card border-4 border-accent rounded-full flex items-center justify-center glow-purple">
                <Award className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <Card className="bg-card/50 backdrop-blur border-border glow-purple">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          Best Intern Performance Award
                        </h3>
                        <h4 className="text-xl font-semibold text-accent">
                          HexSoftware Recognition
                        </h4>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        Awarded for outstanding performance, innovative problem-solving, and exceptional 
                        contribution to the development team. This recognition highlights my dedication 
                        to delivering high-quality work and my ability to quickly adapt to professional 
                        development environments.
                      </p>

                      <div className="flex items-center space-x-4 pt-4">
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-accent mr-2" />
                          <span className="text-sm font-medium text-foreground">
                            Performance Excellence
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">
                            2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
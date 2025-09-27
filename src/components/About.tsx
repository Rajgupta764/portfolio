import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate Computer Science student with a drive for innovation and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Hello! I'm Raj Kumar
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate and curious Computer Science undergraduate with a strong foundation 
                in full-stack web development, data structures, and machine learning. Currently pursuing 
                my B.Tech in Computer Science Engineering, I'm dedicated to creating innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in technology has been driven by curiosity and a desire to solve complex problems. 
                I specialize in the MERN stack and have a keen interest in artificial intelligence, 
                constantly exploring new technologies to enhance my skill set.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold gradient-text">9.4</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold gradient-text">2027</div>
                <div className="text-sm text-muted-foreground">Graduation Year</div>
              </div>
            </div>
          </div>

          {/* Education & Achievement Cards */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-border glow-neon">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      B.Tech Computer Science Engineering
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      Jodhpur Institute of Engineering and Technology
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2024 - 2027
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        CGPA: 9.4
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border glow-purple">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Best Intern Performance Award
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      HexSoftware - Frontend Developer Intern
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Recognized for outstanding contribution and innovative solutions 
                      during my internship period.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
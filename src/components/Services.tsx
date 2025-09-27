import { Palette, Code, Smartphone, Globe, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Creating modern, responsive, and user-friendly websites with smooth UI/UX that engage users and deliver exceptional experiences.',
      features: [
        'Modern UI/UX Design',
        'Responsive Layouts',
        'Interactive Elements',
        'Brand Integration'
      ],
      color: 'neon-cyan'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building complete web applications using the MERN stack with scalable architecture and clean, maintainable code.',
      features: [
        'MERN Stack Development',
        'Database Design',
        'API Development',
        'Performance Optimization'
      ],
      color: 'neon-purple'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Ensuring your website looks and functions perfectly on all devices with responsive design principles.',
      features: [
        'Mobile Optimization',
        'Cross-browser Compatibility',
        'Touch-friendly Interface',
        'Fast Loading Times'
      ],
      color: 'neon-blue'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Developing online shopping platforms with secure payment integration and inventory management systems.',
      features: [
        'Shopping Cart Functionality',
        'Payment Integration',
        'User Authentication',
        'Admin Dashboard'
      ],
      color: 'neon-teal'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Implementing artificial intelligence and machine learning solutions to enhance user experience and automate processes.',
      features: [
        'Chatbot Development',
        'ML Model Integration',
        'Data Analysis',
        'Automation Solutions'
      ],
      color: 'neon-cyan'
    },
    {
      icon: Users,
      title: 'Consultation & Support',
      description: 'Providing technical consultation and ongoing support to help you make informed decisions about your project.',
      features: [
        'Technical Consultation',
        'Code Review',
        'Performance Analysis',
        'Ongoing Support'
      ],
      color: 'neon-purple'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-neon-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-smooth transform hover:scale-105 glow-neon"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`bg-${service.color}/10 p-4 rounded-xl group-hover:bg-${service.color}/20 transition-smooth`}>
                      <IconComponent className={`w-8 h-8 text-${service.color} group-hover:scale-110 transition-transform`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-card/30 backdrop-blur border-border glow-neon inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Let's discuss how I can help bring your ideas to life with cutting-edge web solutions.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-neon"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
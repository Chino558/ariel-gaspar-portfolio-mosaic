
import { Github, Mail, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Project 1",
    description: "A beautiful web application",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Mobile responsive design",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Project 3",
    description: "Interactive dashboard",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Project 4",
    description: "E-commerce platform",
    image: "/placeholder.svg",
    link: "#",
  },
];

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProjectsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex flex-col justify-center items-center text-center">
        <div className="animate-fade-up space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Ariel Gaspar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Full Stack Developer & Designer
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section-padding bg-gray-50 wave-section">
        <div className={`wave-reveal ${isProjectsVisible ? 'visible' : ''}`}>
          {isProjectsVisible && <div className="wave-effect" />}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className="block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="glass-card hover-project-card rounded-lg overflow-hidden">
                    <div className="relative aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-fade-in">
                          <span className="text-white text-lg font-medium">
                            View Project
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate developer focused on creating beautiful and functional web applications. 
            With expertise in modern technologies and design principles, I bring ideas to life through clean code and intuitive user experiences.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have a project in mind? Let's work together to create something amazing.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { Github, ExternalLink, FolderLock } from 'lucide-react';

const Projects = () => {
    // Placeholder projects - user didn't provide specific ones, so using generic Cyber Security examples
    const projects = [
        {
            title: "Python Port Scanner",
            category: "Tool Development",
            description: "A multi-threaded network port scanner built with Python. Features include banner grabbing, service detection, and customizable scan ranges.",
            tags: ["Python", "Networking", "Socket Programming"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Vulnerable Web App Lab",
            category: "Educational",
            description: "A Dockerized web application intentionally built with OWASP Top 10 vulnerabilities for educational purposes and testing security tools.",
            tags: ["Docker", "PHP", "MySQL", "Security"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Automated Recon Script",
            category: "Automation",
            description: "Bash script automating the reconnaissance phase of penetration testing. Integrates subfinder, httpx, and nucleus for streamlined asset discovery.",
            tags: ["Bash", "Reconnaissance", "Automation"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Wi-Fi Deauth Tool",
            category: "Network Security",
            description: "A Python-based utility to monitor local networks and perform deauthentication attacks for security auditing purposes (Educational).",
            tags: ["Python", "Scapy", "Wireless Security"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Steganography Toolkit",
            category: "Cryptography",
            description: "Command-line tool to hide encrypted text within image files using Least Significant Bit (LSB) manipulation techniques.",
            tags: ["C++", "Cryptography", "Steganography"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Password Strength Analyzer",
            category: "Web Security",
            description: "A client-side tool that evaluates password complexity in real-time against common dictionary attacks and rainbow table patterns.",
            tags: ["JavaScript", "Security", "Algorithms"],
            links: { github: "#", demo: "#" }
        },
        {
            title: "Malware Analysis Sandbox",
            category: "Malware Analysis",
            description: "Configuration scripts for setting up an isolated, secure environment for analyzing suspicious executables and reverse engineering.",
            tags: ["VirtualBox", "Powershell", "Forensics"],
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                <p className="section-subtitle">
                    Tools and applications built to solve security challenges and demonstrate technical expertise.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card stagger-item">
                            <div className="project-content">
                                <div className="project-header">
                                    <FolderLock size={40} className="text-emerald-500 mb-4" />
                                    <div className="project-links">
                                        <a href={project.links.github} className="project-link" aria-label="GitHub"><Github size={20} /></a>
                                        <a href={project.links.demo} className="project-link" aria-label="Demo"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag stagger-item">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

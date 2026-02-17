import { Code, Server, Shield, Globe, Database, Terminal } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Vulnerability Assessment",
            icon: <Shield size={32} className="text-emerald-500" />,
            skills: ["Network Scanning", "Web App Security", "API Security", "Risk Analysis"]
        },

        {
            title: "Programming & Scripting",
            icon: <Code size={32} className="text-emerald-500" />,
            skills: ["Python", "Bash", "JavaScript", "C/C++", "PowerShell"]
        },
        {
            title: "Infrastructure & Cloud",
            icon: <Server size={32} className="text-emerald-500" />,
            skills: ["Linux/Unix", "AWS Security", "Docker", "Active Directory"]
        }
    ];

    return (
        <section id="skills" className="section section-alt">
            <div className="container">
                <h2 className="section-title">Technical <span className="highlight">Arsenal</span></h2>
                <p className="section-subtitle">
                    A comprehensive toolkit tailored for offensive and defensive security operations.
                </p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                {category.icon}
                                <h3>{category.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="skill-item stagger-item">
                                        <span className="skill-bullet"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

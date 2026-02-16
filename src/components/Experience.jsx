import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    // Placeholder data - would ideally come from LinkedIn or user input
    // The user provided the role "Ethical Hacker" and "Cyber Security Analyst"
    const experiences = [
        {
            role: "Cyber Security Analyst",
            company: "Freelance / Self-Employed",
            period: "2023 - Present",
            description: "Conducting vulnerability assessments and penetration testing for web applications and networks. Reporting critical vulnerabilities and recommending remediation strategies."
        },
        {
            role: "Ethical Hacker (Bug Bounty)",
            company: "Bugcrowd / HackerOne",
            period: "2022 - Present",
            description: "Identifying and reporting security flaws in responsible disclosure programs. Specializing in IDOR, XSS, and Broken Access Control vulnerabilities."
        }
    ];

    const education = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Indira Gandhi National Open University (IGNOU)",
            period: "Pursuing",
            description: "Focusing on software development, data structures, and computer networks."
        },
        {
            degree: "Advanced Diploma in Cyber Defense",
            institution: "RedTeam Hacker Academy",
            period: "Completed",
            description: "Specialized training in red teaming, offensive security, and infrastructure defense."
        }
    ];
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience & <span className="highlight">Education</span></h2>

                <div className="timeline-container">
                    <div className="timeline-column">
                        <h3 className="timeline-heading"><Briefcase size={24} /> Professional Experience</h3>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-header">
                                        <h4>{exp.role}</h4>
                                        <span className="timeline-date"><Calendar size={14} /> {exp.period}</span>
                                    </div>
                                    <h5 className="timeline-company">{exp.company}</h5>
                                    <p className="timeline-desc">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="timeline-column">
                        <h3 className="timeline-heading"><GraduationCap size={24} /> Education</h3>
                        <div className="timeline">
                            {education.map((edu, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-header">
                                        <h4>{edu.degree}</h4>
                                        <span className="timeline-date"><Calendar size={14} /> {edu.period}</span>
                                    </div>
                                    <h5 className="timeline-company">{edu.institution}</h5>
                                    <p className="timeline-desc">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

import { ShieldCheck, Search, FileText, Lock } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Vulnerability Assessment",
            icon: <Search size={40} className="text-emerald-500" />,
            description: "Systematic review of security weaknesses in an information system. Identifies potential vulnerabilities before attackers can exploit them."
        },
        {
            title: "Penetration Testing",
            icon: <ShieldCheck size={40} className="text-emerald-500" />,
            description: "Simulated cyberattacks on your computer system to check for exploitable vulnerabilities. Includes Network, Web App, and API testing."
        },
        {
            title: "Security Auditing",
            icon: <FileText size={40} className="text-emerald-500" />,
            description: "Comprehensive analysis of an organization's security posture. verifying compliance with standards and best practices."
        },
        {
            title: "Secure Code Review",
            icon: <Lock size={40} className="text-emerald-500" />,
            description: "Examining source code to identify security flaws and ensure secure coding practices are followed during development."
        }
    ];

    return (
        <section id="services" className="section section-alt">
            <div className="container">
                <h2 className="section-title">My <span className="highlight">Services</span></h2>
                <p className="section-subtitle">
                    Professional security services to protect your digital infrastructure and data.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card card-3d stagger-item">
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

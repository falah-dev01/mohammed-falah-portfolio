import { Award, CheckCircle } from 'lucide-react';

const Certificates = () => {
    const certifications = [
        {
            title: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            date: "2024", // Placeholder date, user didn't specify
            icon: <Award size={40} className="text-[#8DC63F]" /> // EC-Council Green-ish
        },
        {
            title: "Advanced Diploma in Cyber Defense (ADCD)",
            issuer: "RedTeam Hacker Academy",
            date: "2023", // Placeholder date
            icon: <CheckCircle size={40} className="text-[#FF0000]" /> // Red for RedTeam
        }
    ];

    return (
        <section id="certificates" className="section section-alt">
            <div className="container">
                <h2 className="section-title">Professional <span className="highlight">Certifications</span></h2>
                <p className="section-subtitle">
                    Credentials validating expertise in ethical hacking and cyber defense.
                </p>

                <div className="certificates-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certificate-card">
                            <div className="cert-icon-wrapper">
                                {cert.icon}
                            </div>
                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                {/* <span className="cert-date">{cert.date}</span>  -- Optional if user wants dates */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

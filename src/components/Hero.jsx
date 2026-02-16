import { Terminal, Shield, Lock } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge">
                        <Terminal size={16} />
                        <span>Ethical Hacker | Cyber Security Analyst</span>
                    </div>
                    <h1 className="hero-title">
                        Muhammed <span className="highlight">Falah</span>
                    </h1>
                    <p className="hero-subtitle">
                        Ethical Hacker protecting digital assets. I specialize in vulnerability assessment,
                        penetration testing, and securing infrastructure against modern threats.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="button button-primary">View Work</a>
                        <a href="#contact" className="button button-outline">Contact Me</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="shield-container">
                        <Shield size={120} className="shield-icon" />
                        <div className="floating-icon lock-icon"><Lock size={24} /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

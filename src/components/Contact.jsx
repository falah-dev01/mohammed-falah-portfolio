import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section section-alt">
            <div className="container contact-container">
                <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
                <p className="section-subtitle">
                    Interested in securing your assets or have a project in mind? Let's connect.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out for collaborations or security consultations.</p>

                        <div className="contact-links">
                            <a href="mailto:falah.uxui@gmail.com" className="contact-link">
                                <Mail className="contact-icon" />
                                <span>falah.uxui@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/falahmuhammed/" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <Linkedin className="contact-icon" />
                                <span>linkedin.com/in/falahmuhammed</span>
                            </a>
                            <a href="https://github.com/falahmuhammed" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <Github className="contact-icon" />
                                <span>github.com/falahmuhammed</span>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form card-3d" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" className="button button-primary" style={{ width: '100%' }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

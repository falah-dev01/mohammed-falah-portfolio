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
                            <a href="https://github.com/falah-dev01" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <Github className="contact-icon" />
                                <span>github.com/falah-dev01</span>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <p className="form-note" style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontStyle: 'italic' }}>
                            * To make this form work, verify your email at <a href="https://formspree.io/" target="_blank" className="highlight">formspree.io</a> and replace <strong>YOUR_FORM_ID</strong> in the code.
                        </p>
                        <form
                            className="contact-form card-3d"
                            action="https://formspree.io/f/maqdjenw"
                            method="POST"
                        >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="5" placeholder="Your message..." required></textarea>
                            </div>
                            <button type="submit" className="button button-primary" style={{ width: '100%' }}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

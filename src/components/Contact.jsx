import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        setStatus('submitting');
        setShowPopup(true);

        try {
            const response = await fetch("https://formspree.io/f/maqdjenw", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }

        // Hide popup after 3 seconds if success
        if (status === 'success') {
            setTimeout(() => setShowPopup(false), 3000);
        }
    };

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

                    <div className="contact-form-wrapper" style={{ position: 'relative' }}>

                        {/* Status Popup */}
                        {showPopup && (
                            <div className={`status-popup ${status === 'success' ? 'success' : status === 'error' ? 'error' : 'submitting'}`}
                                style={{
                                    position: 'absolute',
                                    top: '-60px',
                                    left: '0',
                                    right: '0',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    backgroundColor: status === 'success' ? '#065f46' : status === 'error' ? '#991b1b' : '#1e293b',
                                    color: '#fff',
                                    border: '1px solid',
                                    borderColor: status === 'success' ? '#34d399' : status === 'error' ? '#f87171' : '#cbd5e1',
                                    opacity: 1,
                                    transition: 'opacity 0.3s ease',
                                    zIndex: 10
                                }}>
                                {status === 'submitting' && 'Sending message...'}
                                {status === 'success' && 'Statement executed. Message transmitted successfully.'}
                                {status === 'error' && 'Transmission failed. Please try again.'}
                            </div>
                        )}

                        <form
                            className="contact-form card-3d"
                            onSubmit={handleSubmit}
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
                            <button type="submit" className="button button-primary" style={{ width: '100%' }} disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Transmitting...' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

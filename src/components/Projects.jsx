import { useState, useEffect } from 'react';
import { Github, ExternalLink, FolderLock, Loader } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/falah-dev01/repos?sort=updated&direction=desc');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                // Filter out forks if desired, or just take the top ones
                setProjects(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError("Failed to load projects from GitHub.");
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="section">
                <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <Loader className="animate-spin text-accent" size={48} style={{ margin: '0 auto' }} />
                    <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Loading projects from GitHub...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                <p className="section-subtitle">
                    Latest repositories automatically fetched from GitHub.
                </p>

                {error ? (
                    <div className="text-center text-red-500">
                        <p>{error}</p>
                        <p className="text-sm mt-2">Please check <a href="https://github.com/falah-dev01" target="_blank" rel="noopener noreferrer" className="highlight">github.com/falah-dev01</a> directly.</p>
                    </div>
                ) : (
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-content">
                                    <div className="project-header">
                                        <FolderLock size={40} className="text-emerald-500 mb-4" />
                                        <div className="project-links">
                                            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub"><Github size={20} /></a>
                                            {project.homepage && (
                                                <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Demo"><ExternalLink size={20} /></a>
                                            )}
                                        </div>
                                    </div>
                                    <span className="project-category">{project.language || "Verifying..."}</span>
                                    <h3 className="project-title">{project.name.replace(/-/g, ' ')}</h3>
                                    <p className="project-desc">{project.description || "No description provided."}</p>
                                    <div className="project-tags">
                                        {project.topics && project.topics.length > 0 ? (
                                            project.topics.slice(0, 3).map((topic, idx) => (
                                                <span key={idx} className="project-tag">{topic}</span>
                                            ))
                                        ) : (
                                            <span className="project-tag">GitHub Repo</span>
                                        )}
                                    </div>
                                    <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                        Updated: {new Date(project.updated_at).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;

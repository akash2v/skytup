import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Projects.css";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Anymo Space",
      summary:
        "An Anonymous Chat application with features like creating temporary chat rooms.",
      thumbnail: "https://i.postimg.cc/G2T6CbGj/image.png",
      tags: ["node.js", "html", "css", "js"],
      category: "development",
      actionType: "demo",
      actionUrl: "https://anymo.skytup.com",
      stars: 2,
      downloads: 0,
    },
    {
      id: 2,
      title: "gTool - GitHub Search Tool",
      summary:
        "A Github Search Tool including features of filteration with GitHub API integration.",
      thumbnail: "https://i.postimg.cc/QMrxyNPc/image.png",
      tags: ["React", "Tailwind", "API"],
      category: "web",
      actionType: "github",
      actionUrl: "https://github.com/akash2v/gtool/",
      stars: 1,
      downloads: 0,
    }
  ];

//    {
//     id: 3,
//     title: "DevOps Dashboard",
//     summary:
//       "All-in-one dashboard for monitoring and managing your development pipeline",
//     thumbnail: "https://via.placeholder.com/300x200?text=DevOps",
//     tags: ["Vue.js", "Node.js", "Docker"],
//     category: "devops",
//     actionType: "view",
//     actionUrl: "#",
//     stars: 167,
//     downloads: 5600,
//   },
//   {
//     id: 4,
//     title: "Web Security Scanner",
//     summary:
//       "Advanced tool for detecting vulnerabilities in web applications",
//     thumbnail: "https://via.placeholder.com/300x200?text=Security",
//     tags: ["Go", "Security", "REST API"],
//     category: "security",
//     actionType: "download",
//     actionUrl: "#",
//     stars: 312,
//     downloads: 15700,
//   },

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "development", name: "Development Tools" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "devops", name: "DevOps Tools" },
    { id: "security", name: "Security Tools" },
  ];

  useEffect(() => {
    setIsVisible(true);

    let filtered = [...projects];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory, projects]);

  const getActionButton = (type, url) => {
    switch (type) {
      case "download":
        return (
          <a href={url} className="btn btn-primary">
            <i className="fas fa-download"></i> Download
          </a>
        );
      case "view":
        return (
          <a
            href={url}
            className="btn btn-success"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-eye"></i> View Demo
          </a>
        );
      case "github":
        return (
          <a
            href={url}
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> View on GitHub
          </a>
        );
      case "demo":
        return (
          <a href={url} className="btn btn-info">
            <i className="fas fa-play"></i> Try Demo
          </a>
        );
      default:
        return (
          <a href={url} className="btn btn-primary">
            Learn More
          </a>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects - Skytup</title>
        <meta
          name="description"
          content="Explore our innovative software projects and tools designed to enhance the developer experience."
        />
      </Helmet>

      <div className="projects-container">
        <div className={`projects-header ${isVisible ? "fade-in" : ""}`}>
          <h1>Our Projects</h1>
          <p className="lead">
            Discover our collection of tools and applications built to empower
            developers
          </p>
        </div>

        <div className={`projects-filter ${isVisible ? "fade-in" : ""}`}>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? "fade-in" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-stats">
                    <span>
                      <i className="fas fa-star"></i> {project.stars}
                    </span>
                    <span>
                      <i className="fas fa-download"></i> {project.downloads}
                    </span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-${tag}`} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-action">
                  {getActionButton(project.actionType, project.actionUrl)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;

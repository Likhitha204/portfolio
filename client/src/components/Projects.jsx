import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    axios.get("http://localhost:3001/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  };

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map(proj => (
          <li key={proj.id} style={{ marginBottom: "1rem" }}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {proj.url && (
              <a href={proj.url} 
                target="_blank" 
                rel="noopener noreferrer" 
              > View Project
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import projects from "../data/projects.json"

export default function ProjectDetail() {

  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  return (
    <>
    <div>
      <Link to="/">Back to projects</Link>
    </div>
    <div>
      <h1>{project.title}</h1>
      <h2>{project.tagline}</h2>
      <div className="">
        {project.tags.map((tag) => (
          <span key={tag} className="">
            {tag}
          </span>
        ))}
      </div>
      <div>
        <img src={project.heroImage} alt={project.title} />
      </div> 
    </div>
    </>
  );
}
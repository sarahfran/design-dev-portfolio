import { Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Home() {
  return (
    <div>
      <h1>Hi there</h1>
      <p>Welcome to my portfolio</p>
      <section>
        {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id}>{project.title}</Link>
        ))}
      </section>
    </div>
  );
}
import { Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Home() {
  return (
    <section className="grid grid-cols-1 ">
      <div>
        <h1 className="font-display text-7xl">Sarah Thompson</h1>
        <h2>UX Designer</h2>
        <h2 className="font-body font-normal text-2xl">Projects</h2>
        <div className="grid grid-cols-2">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="">
            <article>
              <h2>{project.title}</h2>
              <img src={project.heroImage} alt={project.title}/>
            </article>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}